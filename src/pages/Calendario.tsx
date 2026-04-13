import { RESULTADOS } from "../data/mockData";
import { MapPin } from "lucide-react";

const estadoColors = {
  victoria: "bg-green-600 text-white",
  empate: "bg-yellow-500 text-foreground",
  derrota: "bg-destructive text-destructive-foreground",
  pendiente: "bg-muted text-muted-foreground",
};

const estadoLabels = {
  victoria: "V",
  empate: "E",
  derrota: "D",
  pendiente: "–",
};

export default function Calendario() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold uppercase tracking-wide text-foreground">
        Calendario
      </h1>

      <div className="space-y-3">
        {RESULTADOS.map((j) => (
          <div
            key={j.jornada}
            className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Estado badge */}
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${estadoColors[j.estado]}`}>
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="font-display text-base font-bold text-card-foreground">
                Jornada {j.jornada}: <span className="text-secondary">{j.local ? "Córdoba CF" : j.rival}</span>
                {" vs "}
                <span className="text-secondary">{j.local ? j.rival : "Córdoba CF"}</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                {j.local ? "Casa" : "Fuera"} · {j.fecha}
              </p>
            </div>

            {/* Resultado */}
            {j.resultado && (
              <div className="font-display text-xl font-bold text-primary">
                {j.resultado}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
