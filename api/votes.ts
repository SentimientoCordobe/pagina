import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// ── Encuestas permitidas ──────────────────────────────────────────────────
// Lista blanca de encuestas y sus opciones válidas. El backend rechaza
// cualquier poll/option que no esté aquí, para que nadie pueda escribir
// claves arbitrarias en la base de datos.
//
// ⚠️ IMPORTANTE: cuando cambies la encuesta activa en
// src/data/encuestas.ts, actualiza también este objeto con el mismo id
// y las mismas opciones (mismo orden no es necesario, solo mismos ids).
const ENCUESTAS: Record<string, string[]> = {
  "resultado-j5-Almeria": ["local", "empate", "visitante"],
  "mvp-j4-Sabadell": ["Guilherme", "Budesca", "Isma Ruiz", "Carracedo", "Rubén Alves", "Eder", "Juan Gutiérrez", "Enol", "Percan"],
};

const NINETY_DAYS = 60 * 60 * 24 * 90;

async function leerConteos(poll: string, opciones: string[]) {
  const counts: Record<string, number> = {};
  await Promise.all(
    opciones.map(async (op) => {
      counts[op] = Number((await redis.get<number>(`votes:${poll}:${op}`)) ?? 0);
    })
  );
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return { counts, total };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  const poll = (req.method === "GET" ? req.query.poll : req.body?.poll) as
    | string
    | undefined;
  const opciones = poll ? ENCUESTAS[poll] : undefined;

  if (!poll || !opciones) {
    return res.status(404).json({ error: "Encuesta no encontrada." });
  }

  // ── Consultar resultados ──
  if (req.method === "GET") {
    const { counts, total } = await leerConteos(poll, opciones);
    return res.status(200).json({ poll, counts, total });
  }

  // ── Emitir voto ──
  if (req.method === "POST") {
    const { option, voterId } = (req.body ?? {}) as {
      option?: string;
      voterId?: string;
    };

    if (!option || !opciones.includes(option)) {
      return res.status(400).json({ error: "Opción no válida." });
    }
    if (!voterId || typeof voterId !== "string" || voterId.length < 8) {
      return res.status(400).json({ error: "Falta identificador de votante." });
    }

    // Un voto por votante y encuesta: si la clave ya existe, no se
    // incrementa de nuevo (evita votos duplicados desde el mismo navegador).
    const voterKey = `voted:${poll}:${voterId}`;
    const esNuevo = await redis.set(voterKey, option, {
      nx: true,
      ex: NINETY_DAYS,
    });

    if (!esNuevo) {
      const votoPrevio = await redis.get<string>(voterKey);
      const { counts, total } = await leerConteos(poll, opciones);
      return res
        .status(200)
        .json({ poll, counts, total, tuVoto: votoPrevio ?? option });
    }

    await redis.incr(`votes:${poll}:${option}`);
    const { counts, total } = await leerConteos(poll, opciones);
    return res.status(200).json({ poll, counts, total, tuVoto: option });
  }

  return res.status(405).json({ error: "Método no permitido." });
}
