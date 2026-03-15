import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Plantilla from "./pages/Plantilla";
import JugadorDetalle from "./pages/JugadorDetalle";
import Clasificacion from "./pages/Clasificacion";
import Calendario from "./pages/Calendario";
import Partidos from "./pages/Partidos";
import Tienda from "./pages/Tienda";
import NotFound from "./pages/NotFound";
import Noticia from "./pages/Noticia";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/plantilla" element={<Plantilla />} />
            <Route path="/plantilla/:dorsal" element={<JugadorDetalle />} />
            <Route path="/clasificacion" element={<Clasificacion />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/partidos" element={<Partidos />} />
            <Route path="/tienda" element={<Tienda />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
