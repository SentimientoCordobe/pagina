import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"

dotenv.config()

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
  res.json({ api: "Sentimiento Cordobé API ⚽" })
})

/* NOTICIAS */

app.get("/api/noticias", async (_, res) => {
  const noticias = await prisma.noticia.findMany({
    orderBy: { fecha: "desc" }
  })

  res.json(noticias)
})

app.get("/api/noticias/:slug", async (req, res) => {
  const noticia = await prisma.noticia.findUnique({
    where: { slug: req.params.slug }
  })

  res.json(noticia)
})

/* VIDEOS */

app.get("/api/videos", async (_, res) => {
  const videos = await prisma.video.findMany()

  res.json(videos)
})

/* PARTIDOS */

app.get("/api/partidos", async (_, res) => {
  const partidos = await prisma.partido.findMany()

  res.json(partidos)
})

/* CLASIFICACION */

app.get("/api/clasificacion", async (_, res) => {
  const clasificacion = await prisma.clasificacionEquipo.findMany({
    orderBy: { posicion: "asc" }
  })

  res.json(clasificacion)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`)
})