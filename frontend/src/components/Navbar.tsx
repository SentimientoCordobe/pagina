import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/plantilla", label: "Plantilla" },
  { to: "/clasificacion", label: "Clasificación" },
  { to: "/calendario", label: "Calendario" },
  { to: "/partidos", label: "Partidos" },
  { to: "/videos", label: "Videos" },
  { to: "/tienda", label: "Tienda" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Sentimiento Cordobé" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-display text-xl font-bold uppercase tracking-wide text-primary-foreground md:text-2xl">
            Sentimiento Cordobé
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-secondary hover:text-secondary-foreground ${
                location.pathname === l.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-primary-foreground md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-secondary/30 bg-primary md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-secondary hover:text-secondary-foreground ${
                location.pathname === l.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
