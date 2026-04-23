/// <reference types="node" />

import fs from "fs"

const BASE_URL = "https://www.instagram.com/sentimiento_cordobe/"

type Post = {
  id: number
  slug: string
  titulo: string
  imagen: string
  fecha: string
  url: string
}

const CACHE_FILE = "src/data/noticias.json"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
  })

  return await res.text()
}

/**
 * Extrae posts del HTML de Instagram
 * (usa JSON embebido en el HTML)
 */
function extractPosts(html: string): Post[] {
  try {
    const sharedDataMatch = html.match(
      /window\._sharedData\s*=\s*(\{.*?\});/
    )

    if (!sharedDataMatch) return []

    const data = JSON.parse(sharedDataMatch[1])

    const edges =
      data?.entry_data?.ProfilePage?.[0]?.graphql?.user
        ?.edge_owner_to_timeline_media?.edges || []

    return edges.map((edge: any, i: number) => {
      const node = edge.node

      const caption =
        node.edge_media_to_caption?.edges?.[0]?.node?.text || "Instagram post"

      return {
        id: i + 1,
        slug: `${slugify(caption)}-${i}`,
        titulo: caption,
        imagen: node.display_url,
        fecha: new Date(node.taken_at_timestamp * 1000).toISOString(),
        url: `https://www.instagram.com/p/${node.shortcode}/`
      }
    })
  } catch (err) {
    console.error("Error parsing Instagram HTML:", err)
    return []
  }
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
    console.log("🔄 Scrapeando Instagram...")

    const html = await fetchPage(BASE_URL)

    const posts = extractPosts(html)

    if (!posts.length) {
      console.log("⚠️ No se encontraron posts, usando cache")
      return
    }

    const cache = loadCache()

    const seen = new Set(cache.map((p) => p.url))

    const nuevos = posts.filter((p) => !seen.has(p.url))

    const final = [...nuevos, ...cache]

    saveCache(final)

    console.log(`✔ Posts nuevos: ${nuevos.length}`)
    console.log(`✔ Total posts: ${final.length}`)
  } catch (err) {
    console.error("❌ Error scraping:", err)

    console.log("↩️ Fallback a cache")

    const cache = loadCache()
    saveCache(cache)
  }
}

generarNoticias()