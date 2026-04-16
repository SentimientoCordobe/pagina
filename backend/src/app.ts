import express from "express";
import cors from "cors";

import noticias from "./routes/noticias";
import videos from "./routes/videos";
import partidos from "./routes/partidos";
import clasificacion from "./routes/clasificacion";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ api: "Sentimiento Cordobé PRO ⚽" });
});

app.use("/api/noticias", noticias);
app.use("/api/videos", videos);
app.use("/api/partidos", partidos);
app.use("/api/clasificacion", clasificacion);

export default app;