import { videos } from "../data/videos"
import { Play } from "lucide-react"

export default function Videos(): JSX.Element {

  return (

    <div className="container mx-auto px-4 py-10">

      <h1 className="mb-10 text-4xl font-bold uppercase">
        Videos
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {videos.map((v) => (

          <div
            key={v.id}
            className="group overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition"
          >

            {/* VIDEO */}

            <div className="aspect-video">

              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.titulo}
                allowFullScreen
                className="w-full h-full"
              />

            </div>

            {/* INFO */}

            <div className="p-4">

              <h3 className="font-semibold leading-snug line-clamp-2">
                {v.titulo}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {v.fecha}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}