import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import noticiasRoutes from "./routes/noticias"
import videosRoutes from "./routes/videos"
import partidosRoutes from "./routes/partidos"
import clasificacionRoutes from "./routes/clasificacion"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
  res.json({ api: "Sentimiento Cordobé API ⚽" })
})

app.use("/api/noticias", noticiasRoutes)
app.use("/api/videos", videosRoutes)
app.use("/api/partidos", partidosRoutes)
app.use("/api/clasificacion", clasificacionRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`)
})