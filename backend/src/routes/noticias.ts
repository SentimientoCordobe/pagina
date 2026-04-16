import { Router } from "express"
import { prisma } from "../lib/prisma"

const router = Router()

router.get("/", async (_, res) => {
  const data = await prisma.noticia.findMany({
    orderBy: { fecha: "desc" }
  })
  res.json(data)
})

router.get("/:slug", async (req, res) => {
  const data = await prisma.noticia.findUnique({
    where: { slug: req.params.slug }
  })
  res.json(data)
})

export default router