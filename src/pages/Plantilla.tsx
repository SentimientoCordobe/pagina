import { jugadores } from "../data/mockData";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const grupos = ["Porteros", "Defensas", "Mediocentros", "Delanteros"] as const;

export default function Plantilla() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold uppercase tracking-wide text-foreground">
        Plantilla
      </h1>

      {grupos.map((grupo) => {
        const jugadoresGrupo = jugadores.filter((j) => j.grupo === grupo);
        return (
          <section key={grupo} className="mb-10">
            <h2 className="mb-4 border-b-2 border-secondary pb-2 font-display text-xl font-bold uppercase text-secondary">
              {grupo}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {jugadoresGrupo.map((j) => (
                <Link
                  to={`/plantilla/${j.dorsal}`}
                  key={j.dorsal}
                  className="group flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary">
                    {j.foto ? (
                      <img
                        src={j.foto}
                        alt={j.nombre}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <User size={24} className="text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-card-foreground">
                      <span className="mr-2 text-secondary">#{j.dorsal}</span>
                      {j.nombre}
                    </p>
                    <p className="text-sm text-muted-foreground">{j.posicion}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
