import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Trophy } from "lucide-react";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { noticias, clasificacion, calendario } from "../data/mockData";
import { Link } from "react-router-dom";

export default function Index() {
  const destacadas = noticias.filter((n) => n.destacada);
  const secundarias = noticias.filter((n) => !n.destacada);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % destacadas.length), 5000);
    return () => clearInterval(timer);
  }, [destacadas.length]);

  const proximoPartido = calendario.find((j) => j.estado === "pendiente");
  const top5 = clasificacion.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-8">
          {/* Slider */}
          <section className="relative overflow-hidden rounded-lg shadow-xl">
            <div className="relative aspect-[16/9]">
              <img
                src={destacadas[slide].imagen}
                alt={destacadas[slide].titulo}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="mb-2 inline-block rounded bg-secondary px-2 py-1 font-display text-xs font-bold uppercase text-secondary-foreground">
                  Destacada
                </span>
                <Link to={`/noticias/${destacadas[slide].slug}`}>
  <h2 className="font-display text-2xl font-bold leading-tight text-card md:text-3xl hover:text-secondary">
    {destacadas[slide].titulo}
  </h2>
</Link>
                <p className="mt-1 text-sm text-card/80">{destacadas[slide].fecha}</p>
              </div>
            </div>

            <button
              onClick={() => setSlide((s) => (s - 1 + destacadas.length) % destacadas.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-foreground/40 p-2 text-card backdrop-blur-sm transition-colors hover:bg-secondary"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setSlide((s) => (s + 1) % destacadas.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-foreground/40 p-2 text-card backdrop-blur-sm transition-colors hover:bg-secondary"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
              {destacadas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${i === slide ? "bg-secondary" : "bg-card/50"
                    }`}
                  aria-label={`Ir a noticia ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Secondary news */}
          <section>
            <h2 className="mb-4 font-display text-xl font-bold uppercase tracking-wide text-foreground">
              Últimas Noticias
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {secundarias.map((n) => (
                <Link key={n.id} to={`/noticias/${n.slug}`}>
                  <article className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">

                    key={n.id}
                    className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
                
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={n.imagen}
                        alt={n.titulo}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <p className="mb-1 text-xs font-semibold text-secondary">{n.fecha}</p>
                      <h3 className="font-display text-base font-bold leading-snug text-card-foreground">
                        {n.titulo}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {n.resumen}
                      </p>
                    </div>
                  </article>
                </Link>))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Próximo partido */}
          {proximoPartido && (
            <div className="rounded-lg bg-primary p-5 text-primary-foreground shadow-lg">
              <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-secondary">
                <Calendar size={16} /> Próximo Partido
              </h3>

              <p className="font-display text-lg font-bold">
                {proximoPartido.local ? "Córdoba CF" : proximoPartido.rival}
                <span className="mx-2 text-secondary">vs</span>
                {proximoPartido.local ? proximoPartido.rival : "Córdoba CF"}
              </p>

              <p className="mt-1 text-sm text-primary-foreground/70">
                {proximoPartido.fecha} · {proximoPartido.hora} ·{" "}
                {proximoPartido.local ? "Casa" : "Fuera"}
              </p>
            </div>
          )}

          {/* Clasificación */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-secondary">
              <Trophy size={16} /> Clasificación
            </h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-xs text-muted-foreground">
                  <th className="py-1 text-left">#</th>
                  <th className="py-1 text-left">Equipo</th>
                  <th className="py-1 text-right">Pts</th>
                </tr>
              </thead>

              <tbody>
                {top5.map((e) => (
                  <tr
                    key={e.posicion}
                    className={`border-b last:border-0 ${e.esCordoba ? "bg-primary/10 font-bold" : ""
                      }`}
                  >
                    <td className="py-1.5">{e.posicion}</td>
                    <td className="py-1.5">{e.equipo}</td>
                    <td className="py-1.5 text-right font-bold">{e.puntos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Redes Sociales */}
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Redes Sociales
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a
                  href="https://x.com/Sent_Cordobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-secondary"
                >
                  <FaTwitter size={18} />
                  <span className="underline">@Sent_Cordobe</span>
                </a>
              </p>

              <p>
                <a
                  href="https://www.instagram.com/sentimiento_cordobe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-secondary"
                >
                  <FaInstagram size={18} />
                  <span className="underline">@sentimiento_cordobe</span>
                </a>
              </p>

              <p>
                <a
                  href="https://www.youtube.com/@SentimientoCordobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-secondary"
                >
                  <FaYoutube size={18} />
                  <span className="underline">Sentimiento Cordobé</span>
                </a>
              </p>

              <p>
                <a
                  href="https://www.tiktok.com/@sentimiento_cordobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 3v12.5a3.5 3.5 0 1 1-3.5-3.5h1V9h-1A6.5 6.5 0 1 0 12 15.5V8.8c1.1.9 2.5 1.4 4 1.4V7.2c-1.2 0-2.3-.5-3.1-1.3A4.5 4.5 0 0 1 11.5 3H9z" />
                  </svg>
                  <span className="underline">@sentimiento_cordobe</span>
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}