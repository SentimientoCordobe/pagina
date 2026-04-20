import { JSX } from "react";

interface Noticia {
  imagen: string;
  titulo: string;
}

export default function NoticiaCard({ noticia }: { noticia: Noticia }): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.jpg"
        }}
      />
    </div>
  );
}