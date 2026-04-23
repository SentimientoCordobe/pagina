import { clasificacion } from "../data/clasificacion";

export default function Clasificacion() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold uppercase tracking-wide text-foreground">
        Clasificación
      </h1>

      <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-primary text-primary-foreground">
              {["Pos", "Equipo", "Pts", "PJ", "PG", "PE", "PP", "GF", "GC"].map((h) => (
                <th key={h} className="whitespace-nowrap px-3 py-3 font-display text-xs font-bold uppercase tracking-wider first:text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clasificacion.map((e) => (
              <tr
                key={e.posicion}
                className={`border-b transition-colors last:border-0 ${
                  e.esCordoba
                    ? "bg-secondary/20 font-bold"
                    : "hover:bg-muted/50"
                }`}
              >
                <td className="px-3 py-2.5 text-left font-display font-bold">{e.posicion}</td>
                <td className="px-3 py-2.5 text-left">
                  <span className={e.esCordoba ? "text-primary font-bold" : ""}>
                    {e.equipo}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-center font-bold">{e.puntos}</td>
                <td className="px-3 py-2.5 text-center">{e.pj}</td>
                <td className="px-3 py-2.5 text-center">{e.pg}</td>
                <td className="px-3 py-2.5 text-center">{e.pe}</td>
                <td className="px-3 py-2.5 text-center">{e.pp}</td>
                <td className="px-3 py-2.5 text-center">{e.gf}</td>
                <td className="px-3 py-2.5 text-center">{e.gc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
