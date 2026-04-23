/// <reference types="node" />

import fs from "fs"

const USER = "sentimiento_cordobe"
const PROFILE_URL = `https://www.instagram.com/${USER}/`

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

async function fetchHTML(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
  })

  if (!res.ok) {
    throw new Error(`Error HTTP ${res.status}`)
  }

  return await res.text()
}

function extractPostUrls(html: string): string[] {
  const matches = [...html.matchAll(/\/p\/[a-zA-Z0-9_-]+/g)]

  const urls = matches.map(
    (m) => `https://www.instagram.com${m[0]}`
  )

  return [...new Set(urls)]
}

async function fetchOEmbed(url: string) {
  const api = `https://www.instagram.com/oembed/?url=${encodeURIComponent(url)}`

  const res = await fetch(api)

  if (!res.ok) return null

  return await res.json()
}

async function buildPosts(urls: string[]): Promise<Post[]> {
  const posts: Post[] = []

  let id = 1

  for (const url of urls.slice(0, 12)) {
    try {
      const data = await fetchOEmbed(url)

      if (!data) continue

      posts.push({
        id: id++,
        slug: slugify(data.title || "instagram-post"),
        titulo: data.title || "Instagram post",
        imagen: data.thumbnail_url || "/placeholder.jpg",
        fecha: new Date().toISOString(),
        url
      })
    } catch (err) {
      console.log("⚠️ Error en post:", url)
    }
  }

  return posts
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
  console.log("🔄 Scrapeando Instagram (modo estable)...")

  try {
    const html = await fetchHTML(PROFILE_URL)

    const urls = extractPostUrls(html)

    if (!urls.length) {
      console.log("⚠️ No se encontraron posts en el HTML")
      return
    }

    const posts = await buildPosts(urls)

    const cache = loadCache()

    const seen = new Set(cache.map((p) => p.url))

    const nuevos = posts.filter((p) => !seen.has(p.url))

    const final = [...nuevos, ...cache]

    saveCache(final)

    console.log(`✔ Nuevos posts: ${nuevos.length}`)
    console.log(`✔ Total posts: ${final.length}`)
  } catch (err) {
    console.error("❌ Error scraping Instagram:", err)

    console.log("↩️ Usando cache como fallback")

    const cache = loadCache()
    saveCache(cache)
  }
}

generarNoticias()