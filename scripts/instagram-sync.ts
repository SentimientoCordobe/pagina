import fs from "fs";
import path from "path";

const RSS_URL = "https://rsshub.app/instagram/user/sentimiento_cordobe";
const OUTPUT_PATH = path.join(process.cwd(), "src/data/noticias.json");

async function main() {
  console.log("🔄 Obteniendo RSS de Instagram...");

  const res = await fetch(RSS_URL);

  if (!res.ok) {
    console.error("❌ Error al obtener RSS");
    return;
  }

  const xml = await res.text();

  // Extraer links de posts
  const matches = [...xml.matchAll(/<link>(.*?)<\/link>/g)];

  const urls = matches
    .map((m) => m[1])
    .filter((url) => url.includes("/p/"));

  if (!urls.length) {
    console.error("❌ No se encontraron posts en RSS");
    return;
  }

  const noticias = urls.slice(0, 6).map((url, i) => ({
    id: `instagram-${i}`,
    titulo: "Post de Instagram",
    resumen: "Contenido desde RSS",
    url,
    fecha: new Date().toISOString(),
    fuente: "Instagram",
  }));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(noticias, null, 2));

  console.log(`✅ ${noticias.length} posts guardados desde RSS`);
}

main();