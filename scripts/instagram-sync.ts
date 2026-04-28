import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const OUTPUT_PATH = path.join(process.cwd(), "src/data/noticias.json");
const INSTAGRAM_URL = "https://www.instagram.com/sentimiento_cordobe/";
const FORCE = process.argv.includes("--force");

function saveNoticias(data: any[]) {
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
  console.log(`✅ Guardados ${data.length} posts`);
}

function fallback() {
  console.log("⚠️ Usando fallback");
  return [
    {
      id: "fallback",
      titulo: "Síguenos en Instagram",
      resumen: "Visita nuestro perfil para ver el contenido",
      url: INSTAGRAM_URL,
      imagen: "",
      fecha: new Date().toISOString(),
      fuente: "Instagram",
      likes: 0,
      comentarios: 0,
    },
  ];
}

async function scrape() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
  );

  console.log("🔄 Cargando perfil...");
  await page.goto(INSTAGRAM_URL, { waitUntil: "networkidle2" });

  await page.waitForSelector("a[href*='/p/'], a[href*='/reel/']", {
    timeout: 10000,
  });

  // scroll
  for (let i = 0; i < 2; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 2000));
  }

  const links: string[] = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll("a[href*='/p/'], a[href*='/reel/']")
    )
      .map((a) => (a as HTMLAnchorElement).href)
      .slice(0, 6)
  );

  const results = [];

  for (let i = 0; i < links.length; i++) {
    const url = links[i];
    console.log(`🔎 Post ${i + 1}`);

    await page.goto(url, { waitUntil: "networkidle2" });

    await new Promise((r) => setTimeout(r, 1500));

    const data = await page.evaluate(() => {
      const caption =
        document.querySelector("h1")?.textContent || "";

      const img =
        (document.querySelector("article img") as HTMLImageElement)?.src || "";

      const fecha =
        document.querySelector("time")?.getAttribute("datetime") ||
        new Date().toISOString();

      // likes
      const likesText =
        document.querySelector("section span")?.textContent || "0";

      const likes = parseInt(likesText.replace(/\D/g, "")) || 0;

      // comentarios (aprox)
      const commentsText =
        document.querySelectorAll("ul ul").length || 0;

      return {
        caption,
        img,
        fecha,
        likes,
        commentsText,
      };
    });

    results.push({
      id: `instagram-${i}`,
      titulo: data.caption.slice(0, 80) || "Post de Instagram",
      resumen: data.caption,
      url,
      imagen: data.img,
      fecha: data.fecha,
      fuente: "Instagram",
      likes: data.likes,
      comentarios: data.commentsText,
    });
  }

  await browser.close();

  return results;
}

async function main() {
  try {
    if (fs.existsSync(OUTPUT_PATH) && !FORCE) {
      const stats = fs.statSync(OUTPUT_PATH);
      const age =
        (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);

      if (age < 6) {
        console.log("📦 Usando cache");
        return;
      }
    }

    const data = await scrape();

    if (!data.length) {
      saveNoticias(fallback());
      return;
    }

    saveNoticias(data);
  } catch (err) {
    console.error("❌ Error:", err);
    saveNoticias(fallback());
  }
}

main();