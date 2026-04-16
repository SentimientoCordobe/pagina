import { prisma } from "../lib/prisma";
import fetch from "node-fetch";

const CHANNEL_RSS =
  "https://www.youtube.com/feeds/videos.xml?channel_id=TU_CHANNEL_ID";

export async function syncYouTube() {
  const res = await fetch(CHANNEL_RSS);
  const xml = await res.text();

  console.log("Sincronizando YouTube...");

  // aquí luego lo parseamos con rss-parser
}