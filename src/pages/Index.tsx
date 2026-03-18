// Hooks de React para estado y efectos
import { useState, useEffect } from "react";

// Iconos
import { ChevronLeft, ChevronRight, Calendar, Trophy } from "lucide-react";
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

// Datos simulados (noticias, clasificación y calendario)
import { noticias, clasificacion, calendario } from "../data/mockData";

// Router para navegar entre páginas
import { Link } from "react-router-dom";

export default function Index() {

  // Filtramos las noticias destacadas (para el slider)
  const destacadas = noticias.filter((n) => n.destacada);

  // Noticias que no son destacadas (las que salen debajo)
  const secundarias = noticias.filter((n) => !n.destacada);

  // Estado para controlar qué noticia del slider se muestra
  const [slide, setSlide] = useState(0);

  // Cambia automáticamente la noticia destacada cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % destacadas.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [destacadas.length]);

  // Buscar el próximo partido pendiente
  const proximoPartido = calendario.find((j) => j.estado === "pendiente");

  // Mostrar solo los 5 primeros equipos de la clasificación
  const top5 = clasificacion.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-6">

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

        {/* ======================= */}
        {/* COLUMNA PRINCIPAL */}
        {/* ======================= */}
        <div className="space-y-8">

          {/* ======================= */}
          {/* SLIDER DE NOTICIAS DESTACADAS */}
          {/* ======================= */}
          <section className="relative overflow-hidden rounded-lg shadow-xl">

            <div className="relative aspect-[16/9]">

              {/* Imagen de la noticia */}
              <Link to={`/noticias/${destacadas[slide].slug}`}>
                <img
                  src={destacadas[slide].imagen}
                  alt={destacadas[slide].titulo}
                  className="h-full w-full object-cover"
                />
              </Link>

              {/* Degradado oscuro para mejorar la legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Información de la noticia */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                {/* Etiqueta */}
                <span className="mb-2 inline-block rounded bg-secondary px-2 py-1 text-xs font-bold uppercase text-secondary-foreground">
                  Destacada
                </span>

                {/* Título */}
                <Link to={`/noticias/${destacadas[slide].slug}`}>
                  <h2 className="text-2xl font-bold text-card md:text-3xl hover:text-secondary">
                    {destacadas[slide].titulo}
                  </h2>
                </Link>

                {/* Fecha */}
                <p className="mt-1 text-sm text-card/80">
                  {destacadas[slide].fecha}
                </p>
              </div>
            </div>

            {/* Botón anterior */}
            <button
              onClick={() =>
                setSlide((s) => (s - 1 + destacadas.length) % destacadas.length)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-foreground/40 p-2 text-card hover:bg-secondary"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={() =>
                setSlide((s) => (s + 1) % destacadas.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-foreground/40 p-2 text-card hover:bg-secondary"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicadores (puntos) */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
              {destacadas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === slide ? "bg-secondary" : "bg-card/50"
                  }`}
                />
              ))}
            </div>
          </section>

          {/* ======================= */}
          {/* ÚLTIMAS NOTICIAS */}
          {/* ======================= */}
          <section>

            <h2 className="mb-4 text-xl font-bold uppercase">
              Últimas Noticias
            </h2>

            {/* Grid de noticias */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {secundarias.map((n) => (

                // Cada noticia es clicable
                <Link key={n.id} to={`/noticias/${n.slug}`}>

                  <article className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md">

                    {/* Imagen */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={n.imagen}
                        alt={n.titulo}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-4">

                      <p className="mb-1 text-xs font-semibold text-secondary">
                        {n.fecha}
                      </p>

                      <h3 className="font-bold">
                        {n.titulo}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {n.resumen}
                      </p>

                    </div>

                  </article>

                </Link>
              ))}

            </div>
          </section>

        </div>


        {/* ======================= */}
        {/* SIDEBAR */}
        {/* ======================= */}
        <aside className="space-y-6">

          {/* PRÓXIMO PARTIDO */}
          {proximoPartido && (

            <div className="rounded-lg bg-primary p-5 text-primary-foreground">

              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase text-secondary">
                <Calendar size={16} /> Próximo Partido
              </h3>

              <p className="text-lg font-bold">
                {proximoPartido.local ? "Córdoba CF" : proximoPartido.rival}
                <span className="mx-2 text-secondary">vs</span>
                {proximoPartido.local ? proximoPartido.rival : "Córdoba CF"}
              </p>

              <p className="mt-1 text-sm">
                {proximoPartido.fecha} · {proximoPartido.hora}
              </p>

            </div>
          )}

          {/* CLASIFICACIÓN */}
          <div className="rounded-lg border bg-card p-5">

            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase text-secondary">
              <Trophy size={16} /> Clasificación
            </h3>

            <table className="w-full text-sm">

              <thead>
                <tr className="border-b text-xs">
                  <th className="text-left">#</th>
                  <th className="text-left">Equipo</th>
                  <th className="text-right">Pts</th>
                </tr>
              </thead>

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

          {/* REDES SOCIALES */}
          <div className="rounded-lg border bg-card p-5">

            <h3 className="mb-3 text-sm font-bold uppercase text-secondary">
              Redes Sociales
            </h3>

            <div className="space-y-2">

              <a
                href="https://x.com/Sent_Cordobe"
                target="_blank"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <FaTwitter /> @Sent_Cordobe
              </a>

              <a
                href="https://www.instagram.com/sentimiento_cordobe/"
                target="_blank"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <FaInstagram /> @sentimiento_cordobe
              </a>

              <a
                href="https://www.youtube.com/@SentimientoCordobe"
                target="_blank"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <FaYoutube /> Sentimiento Cordobé
              </a>
               <a
                href="https://www.tiktok.com/@sentimiento_cordobe"
                target="_blank"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <FaTiktok /> @sentimiento_cordobe
              </a>

            </div>

          </div>

        </aside>

      </div>
    </div>
  );
}
