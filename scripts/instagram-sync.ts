import fs from "fs"
import cheerio from "cheerio"

const parser = new Parser()
const RSS_URL = "https://rss.app/feeds/xOT5EkfkrOEzQDxg.xml"

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function detectarTipo(url: string): "post"|"reel"|"carousel" {
  if (url.includes("/reel/")) return "reel"
  if (url.includes("/p/"))    return "post"
  return "carousel"
}

function fetchRSS(url: string): Promise<string> {
  return new Promise((res, rej) => {
    https.get(url, resp => {
      let data = ""
      resp.on("data", chunk => data += chunk)
      resp.on("end", () => {
        // Escapar caracteres especiales
        const cleaned = data.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, "&amp;")
        res(cleaned)
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
  // Elegir la primera válida, evitando Instagram directo
  return (posibles.find(url =>
    url && !url.includes("rss.app") && !url.includes("facebook.com")
  ) || "/placeholder.jpg")
}

async function generarNoticias() {

  const posts = await obtenerPostsInstagram()

  let noticiasExistentes: any[] = []
  if (fs.existsSync("src/data/noticias.ts")) {
    const file = fs.readFileSync("src/data/noticias.ts", "utf8")
    const match = file.match(/export const noticias\s*=\s*(\[[\s\S]*\])/)
    if (match) {
      try { noticiasExistentes = JSON.parse(match[1]) }
      catch { noticiasExistentes = [] }
    }
  }

  const urlsExistentes = new Set(noticiasExistentes.map(n => n.instagram))
  const nuevas = feed.items
    .filter(item => !urlsExistentes.has(item.link))
    .map((item, i) => {
      const titulo = item.title || "Publicación Instagram"
      return {
        id: existentes.length + i + 1,
        slug: `${slugify(titulo)}-${timestamp}`,
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

  const final = [...nuevas, ...noticiasExistentes]
  if (final.length) final[0].destacada = true

  const out = `
export interface Noticia { 
  id: number, slug: string, titulo: string, resumen: string,
  imagen: string, fecha: string, contenido: string,
  instagram: string, tipo: "post"|"reel"|"carousel", destacada?: boolean
}
export const noticias = ${JSON.stringify(final, null, 2)}
`
  fs.writeFileSync("src/data/noticias.ts", out)
  console.log("Noticias sincronizadas correctamente 🚀")
}

generarNoticias()
