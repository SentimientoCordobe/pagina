/// <reference types="node" />

import fs from "fs"
import https from "https"
import Parser from "rss-parser"

const parser = new Parser()

const RSS_URL =
  "https://rsshub.app/instagram/user/sentimiento_cordobe"

type Item = any

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function detectarTipo(url: string): Noticia["tipo"] {
  if (url.includes("/reel/")) return "reel"
  if (url.includes("/p/")) return "post"
  return "carousel"
}

function fetchRSS(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = ""

        resp.on("data", (chunk: any) => (data += chunk))

        resp.on("end", () => {
          resolve(data)
        })
      })
      .on("error", reject)
  })
}

function extraerImagen(item: Item): string {
  const content = item.content || ""

  const posibles = [
    item.enclosure?.url,
    item["media:content"]?.$?.url,
    item["media:thumbnail"]?.$?.url,
    content.match(/src="([^"]+)"/)?.[1],
    content.match(/https?:\/\/[^\s"]+\.(jpg|jpeg|png|webp)/)?.[0]
  ]

  return (
    posibles.find((u) => u && !u.includes("rsshub") && !u.includes("facebook")) ||
    "/placeholder.jpg"
  )
}

async function generarNoticias(): Promise<void> {
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

  const nuevas: Noticia[] = (feed.items || [])
    .filter((item: any) => item.link && !urls.has(item.link))
    .map((item: any, i: number) => {
      const titulo = item.title || "Publicación"

      return {
        id: existentes.length + i + 1,
        slug: `${slugify(titulo)}-${i}`,
        titulo,
        resumen: titulo.slice(0, 140),
        imagen: extraerImagen(item),
        fecha: item.pubDate || "",
        contenido: titulo,
        instagram: item.link,
        tipo: detectarTipo(item.link || ""),
        destacada: false
      }
    })

  const final = [...nuevas, ...existentes]

  if (final.length) final[0].destacada = true

  fs.writeFileSync(filePath, JSON.stringify(final, null, 2))

  console.log(`✔ Noticias sincronizadas: ${nuevas.length}`)
}

generarNoticias().catch(console.error)