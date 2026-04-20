import { useParams } from "react-router-dom"
import { noticias, type Noticia } from "../data/noticias"
import InstagramEmbed from "../components/InstagramEmbed"

export default function Noticia(): JSX.Element {

  const { slug } = useParams<{ slug: string }>()

  const noticiaEncontrada: Noticia | undefined = noticias.find(
    (n) => n.slug === slug
  )

  if (!noticiaEncontrada) {
    return <div className="container mx-auto p-6">Noticia no encontrada</div>
  }

  return (

    <div className="container mx-auto px-4 py-10 max-w-3xl">

      <img
        src={noticiaEncontrada.imagen || "/placeholder.jpg"}
        alt={noticiaEncontrada.titulo}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-sm text-muted-foreground mb-2">
        {noticiaEncontrada.fecha}
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        {noticiaEncontrada.titulo}
      </h1>

      <div className="text-lg whitespace-pre-line leading-relaxed mb-10">
        {noticiaEncontrada.contenido}
      </div>

      {noticiaEncontrada.instagram && (
        <InstagramEmbed url={noticiaEncontrada.instagram} />
      )}

    </div>

  )
}