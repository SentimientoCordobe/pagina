import { useParams } from "react-router-dom";
import { noticias } from "../data/mockData";

export default function Noticia() {
  const { slug } = useParams();

  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    return <div className="container mx-auto p-6">Noticia no encontrada</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-sm text-secondary mb-2">{noticia.fecha}</p>

      <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
        {noticia.titulo}
      </h1>

      <div className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
        {noticia.contenido}
      </div>
    </div>
  );
}
