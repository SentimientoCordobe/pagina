import { ShoppingBag } from "lucide-react";

export default function Tienda() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-full bg-secondary/20 p-6">
        <ShoppingBag size={64} className="text-secondary" />
      </div>
      <h1 className="mt-6 font-display text-4xl font-bold uppercase tracking-wide text-foreground">
        Tienda
      </h1>
      <p className="mt-3 text-xl text-muted-foreground">🚧 En construcción 🚧</p>
      <p className="mt-2 max-w-md text-muted-foreground">
        Estamos trabajando para traerte la mejor equipación y merchandising del Córdoba CF. ¡Vuelve pronto!
      </p>
    </div>
  );
}
