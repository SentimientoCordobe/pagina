import fs from "fs"
import Parser from "rss-parser"

const parser = new Parser()

const INSTAGRAM_USER = "sentimiento_cordobe"

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function detectarTipo(url: string) {
  if (url.includes("/reel/")) return "reel"
  if (url.includes("/p/")) return "post"
  return "carousel"
}

async function generarNoticias() {

  const feed = await parser.parseURL(
"https://rss.app/feeds/xOT5EkfkrOEzQDxg.xml"  )

  let noticiasExistentes: any[] = []

  if (fs.existsSync("src/data/noticias.ts")) {
    const file = fs.readFileSync("src/data/noticias.ts", "utf8")

    const match = file.match(/export const noticias = (\[[\s\S]*\])/)

if (match) {
  try {
    noticiasExistentes = JSON.parse(match[1])
  } catch {
    noticiasExistentes = []
  }
}
  }

  const urlsExistentes = noticiasExistentes.map(n => n.instagram)

  const nuevasNoticias = feed.items
    .filter(item => !urlsExistentes.includes(item.link))
    .map((item, index) => {

      const titulo = item.title || "Publicación de Instagram"

      const slug = slugify(titulo)

      const resumen = item.contentSnippet
        ? item.contentSnippet.slice(0, 140)
        : titulo

      const imagen =
        item.enclosure?.url ||
        item.content?.match(/src="([^"]+)"/)?.[1] ||
        ""

      const tipo = detectarTipo(item.link || "")

      return {
        id: noticiasExistentes.length + index + 1,
        slug,
        titulo,
        resumen,
        imagen,
        fecha: item.pubDate || "",
        contenido: item.contentSnippet || titulo,
        instagram: item.link,
        tipo,
        destacada: false
      }
    })

  const noticiasFinal = [...nuevasNoticias, ...noticiasExistentes]

  if (noticiasFinal.length > 0) {
    noticiasFinal[0].destacada = true
  }

  const file = `
export interface Noticia {
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

export const noticias = ${JSON.stringify(noticiasFinal, null, 2)}
`

  fs.writeFileSync("src/data/noticias.ts", file)

  console.log("Noticias sincronizadas correctamente")
}

generarNoticias()