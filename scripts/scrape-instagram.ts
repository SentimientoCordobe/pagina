import fs from "node:fs"
import Parser from "rss-parser"

const parser = new Parser()

const FEED_URL = "https://rsshub.app/instagram/user/sentimiento_cordobe"
const CACHE_FILE = "src/data/noticias.json"

type Post = {
  id: number
  slug: string
  titulo: string
  imagen: string
  fecha: string
  url: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function loadCache(): Post[] {
  if (!fs.existsSync(CACHE_FILE)) return []
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))
  } catch {
    return []
  }
}

function saveCache(data: Post[]) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf8")
}

async function generarNoticias() {
  try {
    console.log("🔄 Cargando RSS de Instagram...")

    const feed = await parser.parseURL(FEED_URL)

    if (!feed.items.length) {
      console.log("⚠️ RSS vacío, usando cache")
      return
    }

    const posts: Post[] = feed.items.map((item, i) => ({
      id: i + 1,
      slug: slugify(item.title || `post-${i}`),
      titulo: item.title || "Instagram post",
      imagen:
        item.enclosure?.url ||
        item.content?.match(/<img.*?src="(.*?)"/)?.[1] ||
        "",
      fecha: item.pubDate || new Date().toISOString(),
      url: item.link || ""
    }))

    const cache = loadCache()
    const seen = new Set(cache.map((p) => p.url))

    const nuevos = posts.filter((p) => !seen.has(p.url))
    const final = [...nuevos, ...cache]

    saveCache(final)

    console.log(`✔ Nuevos: ${nuevos.length}`)
    console.log(`✔ Total: ${final.length}`)
  } catch (err) {
    console.error("❌ Error:", err)
    console.log("↩️ Usando cache")

    const cache = loadCache()
    saveCache(cache)
  }
}

generarNoticias()