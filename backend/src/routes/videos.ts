import { Router } from "express"
import { prisma } from "../lib/prisma"

const router = Router()

router.get("/", async (_, res) => {
  const data = await prisma.video.findMany()
  res.json(data)
})

export default router