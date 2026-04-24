import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ig = require("instagram-scraping");

const USERNAME = "sentimiento_cordobe";
const CACHE_FILE = "src/data/noticias.json";

type Post = {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  contenido: string;
  instagram: string;
  tipo: "post" | "reel" | "carousel";
  destacada?: boolean;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function truncate(text: string, max = 170): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 3)}...` : clean;
}

function loadCache(): Post[] {
  if (!fs.existsSync(CACHE_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveCache(data: Post[]) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf8");
}

async function generarNoticias() {
  try {
    console.log("🔄 Scrapeando Instagram...");

    const result = await ig.scrapeUserPage(USERNAME);
    const medias = Array.isArray(result?.medias) ? result.medias : [];

    if (!medias.length) {
      console.log("⚠️ No se encontraron posts, usando cache");
      return;
    }

    const posts: Post[] = medias.slice(0, 12).map((m: any, i: number) => {
      const texto = String(m.text || "Instagram post");
      const url = m.shortcode
        ? `https://www.instagram.com/p/${m.shortcode}/`
        : "";

      return {
        id: i + 1,
        slug: `${slugify(texto)}-${m.shortcode || i}`,
        titulo: truncate(texto, 120),
        resumen: truncate(texto, 160),
        imagen: m.display_url || m.thumbnail || "",
        fecha: m.date ? new Date(m.date * 1000).toISOString() : new Date().toISOString(),
        contenido: texto,
        instagram: url,
        tipo: "post",
        destacada: i === 0
      };
    });

    const cache = loadCache();
    const seen = new Set(cache.map((p) => p.instagram));
    const nuevos = posts.filter((p) => !seen.has(p.instagram));

    const final = [...nuevos, ...cache].slice(0, 30);
    saveCache(final);

    console.log(`✔ Posts nuevos: ${nuevos.length}`);
    console.log(`✔ Total posts: ${final.length}`);
  } catch (err) {
    console.error("❌ Error scraping:", err);
    console.log("↩️ Usando cache");

    const cache = loadCache();
    saveCache(cache);
  }
}

generarNoticias();