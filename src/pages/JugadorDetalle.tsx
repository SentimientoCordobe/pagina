import { useParams, Link } from "react-router-dom";
import { jugadores } from "../data/mockData";
import { ArrowLeft, User, Shield, Hash } from "lucide-react";

export default function JugadorDetalle() {
  const { dorsal } = useParams<{ dorsal: string }>();
  const jugador = jugadores.find((j) => j.dorsal === Number(dorsal));

  if (!jugador) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Jugador no encontrado</h1>
        <Link to="/plantilla" className="text-secondary underline">
          Volver a la plantilla
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/plantilla"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
      >
        <ArrowLeft size={16} />
        Volver a la plantilla
      </Link>

      <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
        {/* Header con color primario */}
        <div className="relative bg-primary px-6 pb-24 pt-8 sm:pb-28">
          <div className="absolute right-6 top-6 font-display text-7xl font-black text-primary-foreground/20 sm:text-9xl">
            #{jugador.dorsal}
          </div>
        </div>

        {/* Foto + Info */}
        <div className="relative px-6 pb-8">
          <div className="-mt-20 flex flex-col items-center gap-6 sm:-mt-24 sm:flex-row sm:items-end">
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-xl border-4 border-card bg-muted shadow-xl sm:h-44 sm:w-44">
              {jugador.foto ? (
                <img
                  src={jugador.foto}
                  alt={jugador.nombre}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary/10">
                  <User size={64} className="text-muted-foreground" />
                </div>
              )}
            </div>

            <div className="pb-2 text-center sm:text-left">
              <h1 className="font-display text-3xl font-black uppercase tracking-wide text-foreground sm:text-4xl">
                {jugador.nombre}
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">{jugador.posicion}</p>
            </div>
          </div>

          {/* Datos */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-4">
              <Hash size={20} className="text-secondary" />
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Dorsal</p>
                <p className="font-display text-2xl font-bold text-foreground">{jugador.dorsal}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-4">
              <Shield size={20} className="text-secondary" />
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Posición</p>
                <p className="font-display text-lg font-bold text-foreground">{jugador.posicion}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-4">
              <User size={20} className="text-secondary" />
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Demarcación</p>
                <p className="font-display text-lg font-bold text-foreground">{jugador.grupo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
