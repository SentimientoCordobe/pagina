import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, Trophy } from "lucide-react"
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"
import { clasificacion, RESULTADOS} from "../data/mockData"
import { noticia, type Noticia } from "../data/noticias"
import { Link } from "react-router-dom"

export default function Index(): JSX.Element {

  // 🔥 YA TIPADO → se acaba el "never"
  const destacadas: Noticia[] = noticia.filter((n) => n.destacada)
  const secundarias: Noticia[] = noticia.filter((n) => !n.destacada)

  const [slide, setSlide] = useState<number>(0)

  useEffect(() => {
    if (destacadas.length === 0) return

    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % destacadas.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [destacadas.length])

  const proximoPartido = RESULTADOS.find((j) => j.victoria === null)
  const top5 = clasificacion.slice(0, 5)

  if (destacadas.length === 0) {
    return <div className="container mx-auto p-6">Cargando...</div>
  }

  return (
    <div className="container mx-auto px-4 py-6">

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

        {/* SLIDER */}
        <section className="relative overflow-hidden rounded-lg shadow-xl">

          <div className="relative aspect-[16/9]">

            <Link to={`/noticias/${destacadas[slide].slug}`}>
              <img
                src={destacadas[slide].imagen || "/placeholder.jpg"}
                alt={destacadas[slide].titulo || ""}
                className="h-full w-full object-cover"
              />
            </Link>

          </div>
        </section>

        {/* NOTICIAS */}
        <section>

          <h2 className="mb-4 text-xl font-bold uppercase">
            Últimas Noticias
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {secundarias.map((n: Noticia) => (
              <Link key={n.id} to={`/noticias/${n.slug}`}>
                <article className="rounded-lg border bg-card">

                  <img
                    src={n.imagen || "/placeholder.jpg"}
                    alt={n.titulo || ""}
                    className="w-full"
                  />

                  <div className="p-4">
                    <p>{n.fecha}</p>
                    <h3>{n.titulo}</h3>
                    <p>{n.resumen}</p>
                  </div>

                </article>
              </Link>
            ))}

          </div>

        </section>

      </div>
    </div>
  )
}