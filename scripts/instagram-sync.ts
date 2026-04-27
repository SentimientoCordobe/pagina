import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const OUTPUT_PATH = path.join(process.cwd(), "src/data/noticias.json");
const INSTAGRAM_URL = "https://www.instagram.com/sentimiento_cordobe/";

async function main() {
  console.log("🚀 Lanzando Puppeteer...");

  const browser = await puppeteer.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
  );

  console.log("🔄 Cargando Instagram...");
  await page.goto(INSTAGRAM_URL, { waitUntil: "networkidle2" });

  // Esperar a que carguen los posts
  await page.waitForSelector("a[href*='/p/']", { timeout: 10000 });

await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);
});
await new Promise((r) => setTimeout(r, 2000));
  const posts = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll("a[href*='/p/']"));

    return links.slice(0, 6).map((link, i) => {
      const url = (link as HTMLAnchorElement).href;

      return {
        id: `instagram-${i}`,
        titulo: "Post de Instagram",
        resumen: "Contenido desde Instagram",
        url,
        fecha: new Date().toISOString(),
        fuente: "Instagram",
      };
    });
  });

  await browser.close();

  if (!posts.length) {
    console.log("⚠️ No se encontraron posts, usando fallback");

    const fallback = [
      {
        id: "fallback",
        titulo: "Síguenos en Instagram",
        resumen: "Visita nuestro perfil",
        url: INSTAGRAM_URL,
        fecha: new Date().toISOString(),
        fuente: "Instagram",
      },
    ];

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fallback, null, 2));
    return;
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));

  console.log(`✅ ${posts.length} posts guardados correctamente`);
}

main().catch((err) => {
  console.error("❌ Error en Puppeteer:", err);
});