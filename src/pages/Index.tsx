import { videos } from "../data/videos";
import { noticias } from "../data/noticias";
import { clasificacion } from "../data/clasificacion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* GRID PRINCIPAL */}
      <div className="grid gap-8 lg:grid-cols-[320px_1fr_320px]">

        {/* ───── COLUMNA IZQUIERDA (VIDEOS) ───── */}

        <aside className="space-y-6">

          <h2 className="text-xl font-bold uppercase">
            Últimos vídeos
          </h2>

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

        </aside>

      </div>

    </div>
  );
}