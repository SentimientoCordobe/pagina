import Parser from "rss-parser"
import fs from "node:fs"

const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  }
})

const FEED_URL =
  "https://rsshub.app/instagram/user/sentimiento_cordobe"

const CACHE_FILE = "src/data/noticias.json"

async function generarNoticias() {
  try {
    console.log("🔄 Fetch RSS Instagram...")

    const feed = await parser.parseURL(FEED_URL)

    if (!feed.items?.length) {
      console.log("⚠️ No se encontraron posts → fallback")

      const fallback = [
        {
          id: 1,
          slug: "feed-en-mantenimiento",
          titulo: "⚠️ Feed en mantenimiento",
          resumen: "Estamos actualizando las noticias.",
          imagen: "https://via.placeholder.com/800x400",
          fecha: new Date().toISOString(),
          contenido: "Feed temporal mientras se restablece Instagram.",
          instagram: "",
          tipo: "post",
          destacada: true
        }
      ]

      fs.writeFileSync(CACHE_FILE, JSON.stringify(fallback, null, 2))
      return
    }

    const posts = feed.items.map((item, i) => ({
      id: i + 1,
      slug: (item.title || `post-${i}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-"),
      titulo: item.title || "Instagram post",
      resumen: item.contentSnippet || item.title || "",
      imagen: item.enclosure?.url || "",
      fecha: item.pubDate || new Date().toISOString(),
      contenido: item.contentSnippet || "",
      instagram: item.link || "",
      tipo: "post"
    }))

    fs.writeFileSync(CACHE_FILE, JSON.stringify(posts, null, 2))

    console.log(`✔ Posts: ${posts.length}`)
  } catch (err) {
    console.error("❌ RSS error:", err)

    console.log("↩️ fallback cache")

    const fallback = [
      {
        id: 1,
        slug: "error-feed",
        titulo: "⚠️ Error cargando noticias",
        resumen: "Fallback activo",
        imagen: "https://via.placeholder.com/800x400",
        fecha: new Date().toISOString(),
        contenido: "",
        instagram: "",
        tipo: "post"
      }
    ]

    fs.writeFileSync(CACHE_FILE, JSON.stringify(fallback, null, 2))
  }
}

generarNoticias()