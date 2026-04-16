"use client";

import { useEffect, useState } from "react";
import { videos } from "../data/videos";
import { clasificacion } from "../data/clasificacion";
import { Twitter, Instagram, Youtube } from "lucide-react";
import { IoLogoTiktok } from "react-icons/io5";

export default function Home() {

  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const res = await fetch("http://localhost:3001/noticias");
        const data = await res.json();
        setNoticias(data);
      } catch (error) {
        console.log("Usando noticias locales");

        // fallback si backend no está activo
        const localNoticias = await import("../data/noticias");
        setNoticias(localNoticias.noticias);
      }
    }

    cargarNoticias();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">

      {/* GRID PRINCIPAL */}
      <div className="grid gap-8 lg:grid-cols-[320px_1fr_320px]">

        {/* ───── COLUMNA IZQUIERDA (VIDEOS) ───── */}

        <aside className="space-y-6">

          <h2 className="text-xl font-bold uppercase">
            Últimos vídeos
          </h2>
 <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/watch?v=2mJQnH9vZ0M`}
                  title={`Victoria en el Reino por 2-1 ante el Zaragoza`}
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
          {videos.map((v) => (
            <div key={v.id} className="space-y-2">

              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              <h3 className="text-sm font-semibold leading-tight">
                {v.titulo}
              </h3>

              <p className="text-xs text-muted-foreground">
                {v.fecha}
              </p>

            </div>
          ))}

        </aside>

        {/* ───── CENTRO (NOTICIAS) ───── */}

        <main className="space-y-8">

          {noticias.map((n) => (
            <article
              key={n.id}
              className="overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition"
            >

              <img
                src={n.imagen}
                alt={n.titulo}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold leading-snug">
                  {n.titulo}
                </h2>

                <p className="mt-3 text-muted-foreground">
                  {n.resumen}
                </p>

              </div>

            </article>
          ))}

        </main>

        {/* ───── DERECHA (CLASIFICACIÓN) ───── */}

        <aside>

          <h2 className="mb-4 text-xl font-bold uppercase">
            Clasificación
          </h2>

          <div className="rounded-lg border">

            <table className="w-full text-sm">

              <thead className="bg-muted">
                <tr>
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-left">Equipo</th>
                  <th className="p-2 text-right">Pts</th>
                </tr>
              </thead>

              <tbody>

                {clasificacion.map((e) => (
                  <tr key={e.posicion} className="border-t">

                    <td className="p-2">{e.posicion}</td>

                    <td className="p-2">{e.equipo}</td>

                    <td className="p-2 text-right font-semibold">
                      {e.puntos}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Síguenos en REDES SOCIALES
            </h4>

            <div className="flex gap-5">
              <a
                href="https://x.com/Sent_Cordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-black hover:scale-110"
                aria-label="X Sentimiento Cordobé"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/sentimiento_cordobe/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-pink-500 hover:scale-110"
                aria-label="Instagram Sentimiento Cordobé"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.youtube.com/@SentimientoCordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-red-600 hover:scale-110"
                aria-label="YouTube Sentimiento Cordobé"
              >
                <Youtube size={24} />
              </a>

              <a href="https://www.tiktok.com/@sentimiento_cordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-black hover:scale-110"
                aria-label="TikTok Sentimiento Cordobé">
                                  <IoLogoTiktok size={24} />

                </a>
            </div>
            </div>

        </aside>

      </div>

    </div>
  );
}