/// <reference types="node" />
import fs from "fs"
import Parser from "rss-parser"
import https from "https"

const parser = new Parser()
//const RSS_URL = "https://rss.app/feeds/xOT5EkfkrOEzQDxg.xml"
const RSS_URL = "https://rsshub.app/instagram/user/sentimiento_cordobe"
type Noticia = {
  id: number
  slug: string
  titulo: string
  resumen: string
  imagen: string
  fecha: string
  contenido: string
  instagram: string
  tipo: "post" | "reel" | "carousel"
  destacada?: boolean
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function detectarTipo(url: string): "post" | "reel" | "carousel" {
  if (url.includes("/reel/")) return "reel"
  if (url.includes("/p/")) return "post"
  return "carousel"
}

function fetchRSS(url: string): Promise<string> {
  return new Promise((res, rej) => {
    https.get(url, (resp) => {
      let data = ""

      resp.on("data", (chunk) => (data += chunk))
      resp.on("end", () => {
        if (!data.trim().startsWith("<")) {
          return rej(new Error("RSS inválido (no XML)"))
        }
        res(data)
      })
    }).on("error", rej)
  })
}

function extraerImagen(item: any): string {
  const content = item.content || ""

  const posibles = [
    item.enclosure?.url,
    item["media:content"]?.$?.url,
    item["media:thumbnail"]?.$?.url,
    content.match(/src="([^"]+)"/)?.[1],
    content.match(/https?:\/\/[^\s"]+\.(jpg|jpeg|png|webp)/)?.[0]
  ]

  return (
    posibles.find(
      (u) => u && !u.includes("rss.app") && !u.includes("facebook.com")
    ) || "/placeholder.jpg"
  )
}

async function generarNoticias() {
  const xml = await fetchRSS(RSS_URL)
  const feed = await parser.parseString(xml)

  const filePath = "src/data/noticias.json"

  let existentes: Noticia[] = []

  if (fs.existsSync(filePath)) {
    try {
      existentes = JSON.parse(fs.readFileSync(filePath, "utf8"))
    } catch {
      existentes = []
    }
  }

  const urls = new Set(existentes.map((n) => n.instagram))

  if (!feed.items || !Array.isArray(feed.items)) {
    console.log("⚠ Sin items en el feed RSS")
    return
  }

  const nuevas: Noticia[] = feed.items
    .filter((i) => i.link && !urls.has(i.link))
    .map((item, i) => {
      const titulo = item.title || "Publicación Instagram"
      const timestamp = Date.now()

      return {
        id: existentes.length + i + 1,
        slug: `${slugify(titulo)}-${timestamp}`,
        titulo,
        resumen: titulo.slice(0, 140),
        imagen: extraerImagen(item),
        fecha: item.pubDate || new Date().toISOString(),
        contenido: titulo,
        instagram: item.link || "",
        tipo: detectarTipo(item.link || ""),
        destacada: false
      }
    })

  const final = [...nuevas, ...existentes]

  if (final.length) final[0].destacada = true

  fs.writeFileSync(filePath, JSON.stringify(final, null, 2))

  console.log(`✔ Noticias sincronizadas: ${nuevas.length} nuevas`)
}

generarNoticias().catch((err) => {
  console.error("❌ Error:", err instanceof Error ? err.message : String(err))
  process.exit(1)
})