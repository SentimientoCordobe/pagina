import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { videos } from "../../api/videos"
import { clasificacion } from "../data/clasificacion"
import { Twitter, Instagram, Youtube } from "lucide-react"
import { IoLogoTiktok } from "react-icons/io5"

type NoticiaItem = {
  id: number
  titulo: string
  resumen: string
  imagen: string
  slug: string
}

export default function Index(): JSX.Element {
  const [noticias, setNoticias] = useState<NoticiaItem[]>([])

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const res = await fetch("/api/noticias")
        const data = await res.json()
        setNoticias(data)
      } catch {
        const localNoticias = await import("../../api/noticias")
        setNoticias(localNoticias.noticias)
      }
    }

    cargarNoticias()
  }, [])

  const videoPrincipalId = videos[0]?.id

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr_320px]">
        <aside className="space-y-6">
          <h2 className="text-xl font-bold uppercase">Últimos vídeos</h2>

          {videoPrincipalId && (
            <div className="space-y-2">
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={"https://www.youtube.com/embed/k5WbtUpnNAw?"}
                  title={`Victoria por 1-2 ante La Cultural`}
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${videoPrincipalId}`}
                  title="Vídeo principal"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              <h3 className="text-sm font-semibold leading-tight">
                {videos[0].titulo}
              </h3>

              <p className="text-xs text-muted-foreground">
                {videos[0].fecha}
              </p>
            </div>
          )}

          {videos.slice(1).map((v) => (
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

              <p className="text-xs text-muted-foreground">{v.fecha}</p>
            </div>
          ))}
        </aside>

        <main className="grid gap-8 md:grid-cols-1">
          {noticias.map((n, i) => (
            <Link key={n.id} to={`/noticia/${n.slug}`} className="group">
              <article
                className={`overflow-hidden rounded-xl border bg-card shadow-sm transition hover:shadow-lg ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={n.imagen}
                    alt={n.titulo}
                    loading="lazy"
                    className={`w-full object-cover transition group-hover:scale-105 ${
                      i === 0 ? "h-96" : "h-60"
                    }`}
                  />

                  {i === 0 && (
                    <div className="absolute inset-0 flex items-end bg-black/40 p-8">
                      <h2 className="text-3xl font-bold leading-snug text-white md:text-4xl">
                        {n.titulo}
                      </h2>
                    </div>
                  )}
                </div>

                {i !== 0 && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold leading-snug transition group-hover:text-blue-600">
                      {n.titulo}
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                      {n.resumen}
                    </p>
                  </div>
                )}
              </article>
            </Link>
          ))}
        </main>

        <aside className="space-y-6">
          <div>
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
          </div>

          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Síguenos en redes sociales
            </h4>

            <div className="mt-4 flex gap-5">
              <a
                href="https://x.com/Sent_Cordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-black"
                aria-label="X Sentimiento Cordobé"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/sentimiento_cordobe/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-pink-500"
                aria-label="Instagram Sentimiento Cordobé"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.youtube.com/@SentimientoCordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-red-600"
                aria-label="YouTube Sentimiento Cordobé"
              >
                <Youtube size={24} />
              </a>

              <a
                href="https://www.tiktok.com/@sentimiento_cordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-black"
                aria-label="TikTok Sentimiento Cordobé"
              >
                <IoLogoTiktok size={24} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}