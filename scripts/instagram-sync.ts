import fs from "fs"

const parser = new Parser()
const RSS_URL = "https://rss.app/feeds/xOT5EkfkrOEzQDxg.xml"

type InstagramPost = {
  id: string
  shortcode: string
  caption: string
  image: string
  timestamp: number
  tipo: "post" | "reel" | "carousel"
}

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

<<<<<<< HEAD
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
=======
function detectarTipo(node: any): "post" | "reel" | "carousel" {
  if (node.is_video) return "reel"
  if (node.edge_sidecar_to_children) return "carousel"
  return "post"
}

async function obtenerPostsInstagram(): Promise<InstagramPost[]> {

  const res = await fetch(
    `https://i.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
    {
      headers: {
        "user-agent": "Mozilla/5.0",
        "x-ig-app-id": "936619743392459"
      }
    }
  )

  if (!res.ok) {
    throw new Error("Error al obtener datos de Instagram")
  }

  const json = await res.json()

  const edges =
    json.data.user.edge_owner_to_timeline_media.edges

  return edges.map((edge: any): InstagramPost => {

    const node = edge.node

    return {
      id: node.id,
      shortcode: node.shortcode,
      caption:
        node.edge_media_to_caption.edges[0]?.node.text ||
        "Post de Instagram",
      image: node.display_url,
      timestamp: node.taken_at_timestamp,
      tipo: detectarTipo(node)
    }
  })
>>>>>>> ec62b7c (jueves)
}

function leerNoticiasExistentes(): Noticia[] {

  if (!fs.existsSync("src/data/noticias.ts")) return []

<<<<<<< HEAD
  let noticiasExistentes: any[] = []
  if (fs.existsSync("src/data/noticias.ts")) {
    const file = fs.readFileSync("src/data/noticias.ts", "utf8")
    const match = file.match(/export const noticias\s*=\s*(\[[\s\S]*\])/)
    if (match) {
      try { noticiasExistentes = JSON.parse(match[1]) }
      catch { noticiasExistentes = [] }
    }
=======
  const file = fs.readFileSync("src/data/noticias.ts", "utf8")

  const match = file.match(/export const noticias = (\[[\s\S]*\])/)

  if (!match) return []

  try {
    return JSON.parse(match[1])
  } catch {
    return []
>>>>>>> ec62b7c (jueves)
  }
}

<<<<<<< HEAD
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
=======
function guardarNoticias(noticias: Noticia[]) {

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

export const noticias = ${JSON.stringify(noticias, null, 2)}
`

  fs.writeFileSync("src/data/noticias.ts", file)
}

async function generarNoticias() {

  const posts = await obtenerPostsInstagram()

  const existentes = leerNoticiasExistentes()

  const urlsExistentes = existentes.map(n => n.instagram)

  const nuevas: Noticia[] = posts
    .filter(p => !urlsExistentes.includes(`https://instagram.com/p/${p.shortcode}`))
    .map((p, i) => {

      const titulo = p.caption.split("\n")[0].slice(0, 80)

      return {
        id: existentes.length + i + 1,
        slug: slugify(titulo),
        titulo,
        resumen: p.caption.slice(0, 140),
        imagen: p.image,
        fecha: new Date(p.timestamp * 1000).toLocaleDateString("es-ES"),
        contenido: p.caption,
        instagram: `https://instagram.com/p/${p.shortcode}`,
        tipo: p.tipo,
        destacada: false
      }
    })

  const noticiasFinal = [...nuevas, ...existentes]

  if (noticiasFinal.length > 0) {
    noticiasFinal.forEach(n => (n.destacada = false))
    noticiasFinal[0].destacada = true
  }

  guardarNoticias(noticiasFinal)

>>>>>>> ec62b7c (jueves)
  console.log("Noticias sincronizadas correctamente 🚀")
}

generarNoticias()
