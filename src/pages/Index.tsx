import { useState, useEffect } from "react"
import { Calendar, Trophy } from "lucide-react"
import { clasificacion, RESULTADOS } from "../data/mockData"
import { noticias, type Noticia } from "../data/noticias"
import { Link } from "react-router-dom"

export default function Index(): JSX.Element {

  const destacadas: Noticia[] = noticias.filter((n) => n.destacada)
  const secundarias: Noticia[] = noticias.filter((n) => !n.destacada)

  const [slide, setSlide] = useState(0)

  useEffect(() => {

    if (destacadas.length === 0) return

    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % destacadas.length)
    }, 6000)

    return () => clearInterval(timer)

  }, [destacadas.length])

  const proximoPartido = RESULTADOS.find((j) => j.victoria === null)

  if (destacadas.length === 0) {
    return <div className="container mx-auto p-6">Cargando...</div>
  }

  const noticiaPrincipal = destacadas[slide]

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">

        {/* MAIN */}

        <div className="space-y-10">

          {/* HERO DESTACADA */}

          <Link
            to={`/noticias/${noticiaPrincipal.slug}`}
            className="relative block rounded-xl overflow-hidden group"
          >

            <img
  src={noticiaPrincipal.imagen ? noticiaPrincipal.imagen : "/placeholder.jpg"}
  alt={noticiaPrincipal.titulo}
  className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">

              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                Destacada
              </span>

              <h1 className="text-3xl font-bold mt-2 leading-tight">
                {noticiaPrincipal.titulo}
              </h1>

              <p className="text-sm opacity-80 mt-2">
                {noticiaPrincipal.fecha}
              </p>

            </div>

          </Link>

          {/* LISTA NOTICIAS */}

          <section>

            <h2 className="text-xl font-bold mb-6 uppercase">
              Últimas noticias
            </h2>

            <div className="space-y-4">

              {secundarias.map((n) => (

                <Link
                  key={n.id}
                  to={`/noticias/${n.slug}`}
                  className="block border-b pb-4 hover:text-primary transition"
                >

                  <p className="text-xs text-muted-foreground">
                    {n.fecha}
                  </p>

                  <h3 className="font-semibold text-lg leading-snug">
                    {n.titulo}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {n.resumen}
                  </p>

                </Link>

              ))}

            </div>

          </section>

        </div>

        {/* SIDEBAR */}

        <aside className="space-y-6 sticky top-6 h-fit">

          {/* PROXIMO PARTIDO */}

          {proximoPartido && (

            <div className="bg-primary text-primary-foreground rounded-xl p-5">

              <h3 className="flex items-center gap-2 text-sm font-bold uppercase text-secondary mb-3">
                <Calendar size={16} /> Próximo Partido
              </h3>

              <p className="text-lg font-bold">

                {proximoPartido.local ? "Córdoba CF" : proximoPartido.rival}

                <span className="mx-2 text-secondary">vs</span>

                {proximoPartido.local ? proximoPartido.rival : "Córdoba CF"}

              </p>

              <p className="text-sm mt-1">
                {proximoPartido.fecha}
              </p>

            </div>

          )}

          {/* CLASIFICACION COMPLETA */}

          <div className="rounded-xl border bg-card p-5">

            <h3 className="flex items-center gap-2 text-sm font-bold uppercase text-secondary mb-3">
              <Trophy size={16} /> Clasificación
            </h3>

            <table className="w-full text-sm">

              <thead className="text-xs text-muted-foreground">
                <tr>
                  <th className="text-left">#</th>
                  <th className="text-left">Equipo</th>
                  <th className="text-right">Pts</th>
                </tr>
              </thead>

              <tbody>

                {clasificacion.map((e) => (

                  <tr key={e.posicion} className="border-t">

                    <td className="py-1">
                      {e.posicion}
                    </td>

                    <td>
                      {e.equipo}
                    </td>

                    <td className="text-right font-bold">
                      {e.puntos}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* REDES SOCIALES */}

          <div className="rounded-lg border bg-card p-5 shadow-sm">

            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-secondary">
              Redes Sociales
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">

              <p>
                <a href="https://x.com/Sent_Cordobe" target="_blank">
                  🐦 Twitter: @SentCordoba
                </a>
              </p>

              <p>
                <a href="https://www.instagram.com/sentimiento_cordobe/" target="_blank">
                  📸 Instagram: @sentimientocordobe
                </a>
              </p>

              <p>
                <a href="https://www.youtube.com/@SentimientoCordobe" target="_blank">
                  📺 YouTube: Sentimiento Cordobé
                </a>
              </p>

              <p>
                <a href="https://www.tiktok.com/@sentimiento_cordobe" target="_blank">
                  🎵 TikTok: @sentimiento_cordobe
                </a>
              </p>

            </div>

          </div>

        </aside>

      </div>

    </div>
  )
}