import { useState, useEffect } from "react"
import { Calendar, Trophy } from "lucide-react"
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaXing } from "react-icons/fa"
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
  const top5 = clasificacion.slice(0, 5)

  if (destacadas.length === 0) {
    return <div className="container mx-auto p-6">Cargando...</div>
  }

  const noticiaPrincipal = destacadas[slide]

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">

        {/* MAIN */}

        <div className="space-y-10">

          {/* HERO */}

          <Link
            to={`/noticias/${noticiaPrincipal.slug}`}
            className="relative block rounded-xl overflow-hidden group"
          >

            <img
              src={noticiaPrincipal.imagen || "/placeholder.jpg"}
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

          {/* GRID NOTICIAS */}

          <section>

            <h2 className="text-xl font-bold mb-6 uppercase">
              Últimas noticias
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">

              {secundarias.map((n) => (

                <Link
                  key={n.id}
                  to={`/noticias/${n.slug}`}
                  className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
                >

                  <div className="overflow-hidden">
                    <img
                      src={n.imagen || "/placeholder.jpg"}
                      alt={n.titulo}
                      className="h-44 w-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">

                    <p className="text-xs text-muted-foreground">
                      {n.fecha}
                    </p>

                    <h3 className="font-semibold mt-1 line-clamp-2">
                      {n.titulo}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {n.resumen}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </section>

        </div>


        {/* SIDEBAR */}

        <aside className="space-y-6">

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

          {/* CLASIFICACION */}

          <div className="rounded-xl border bg-card p-5">

            <h3 className="flex items-center gap-2 text-sm font-bold uppercase text-secondary mb-3">
              <Trophy size={16} /> Clasificación
            </h3>

            <table className="w-full text-sm">

              <tbody>

                {top5.map((e) => (

                  <tr key={e.posicion}>

                    <td>{e.posicion}</td>

                    <td>{e.equipo}</td>

                    <td className="text-right font-bold">
                      {e.puntos}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* REDES */}

          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Redes Sociales
            </h3>

            <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Redes Sociales
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><a href="https://x.com/Sent_Cordobe" target="_blank"> 🐦 Twitter: @SentCordoba</a></p>
              <p><a href="https://www.instagram.com/sentimiento_cordobe/" target="_blank">📸 Instagram: @sentimientocordobe</a></p>
              <p>
              <a href="https://www.youtube.com/@SentimientoCordobe" target="_blank">📺 YouTube: Sentimiento Cordobé</a></p>
             <p> <a href="https://www.tiktok.com/@sentimiento_cordobe" target="_blank"> TIKTOK: @sentimiento_cordobe
            </a></p>
            </div>
          </div>
            <div className="space-y-2 text-sm text-muted-foreground">

              

            </div>

          </div>

        </aside>

      
</div></div>
  )
}