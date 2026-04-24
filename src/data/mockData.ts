import type { Noticia } from "./noticias"
export type { Noticia }

// ── Jugadores (Plantilla Córdoba CF 2025/26) ──
export interface Jugador {
  nombre: string;
  posicion: string;
  dorsal: number;
  grupo: "Porteros" | "Defensas" | "Mediocentros" | "Delanteros";
  foto: string;
}

export const jugadores: Jugador[] = [{ nombre: "Iker Álvarez", posicion: "Portero", dorsal: 1, grupo: "Porteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/bb797dcb-51f7-4e9b-b6e5-62de7044f309-985.webp" },
{ nombre: "Carlos Marín", posicion: "Portero", dorsal: 13, grupo: "Porteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/a72b88ab-9ac8-4343-b818-01037ac7b2fc-48.webp" },
{ nombre: "Álex Martín", posicion: "Defensa central", dorsal: 4, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/630cf25f-6ddd-47f0-96e9-df4fd0fa6bc8-963.webp" },
{ nombre: "Fomeyem", posicion: "Defensa central", dorsal: 12, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/d7827454-ca9a-41ac-a770-8bb60dde340c-238.webp" },
{ nombre: "Xavi Sintes", posicion: "Defensa central", dorsal: 15, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/b7953763-9997-4839-b81b-f7123f76ea8e-751.webp" },
{ nombre: "Rubén Alves", posicion: "Defensa central", dorsal: 16, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/7455c14a-40f4-4f21-aadd-c2b58a4dd601-703.webp" },
{ nombre: "Albarrán", posicion: "Lateral derecho", dorsal: 21, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/b7e4455a-f6e4-46c6-bfc1-46b769e9ff2b-968.webp" },
{ nombre: "Trilli", posicion: "Lateral derecho", dorsal: 22, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2026/01/26/small-wp/263ed18c-ada7-461f-8c84-f026e5812306-236.webp" },
{ nombre: "I. Vilarrasa", posicion: "Lateral izquierdo", dorsal: 2, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/27a914f1-b359-446f-a736-7391f97f5592-752.webp" },
{ nombre: "Juan María", posicion: "Lateral izquierdo", dorsal: 3, grupo: "Defensas", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/7096ca48-cb9f-4047-a698-722a7a5d9ef6-657.webp" },
{ nombre: "Isma Ruiz", posicion: "Mediocentro defensivo", dorsal: 8, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/ced58699-ab7d-462d-9f4c-cc156d8d83eb-206.webp" },
{ nombre: "Alberto del Moral", posicion: "Mediocentro defensivo", dorsal: 20, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/872dfeaf-ce89-4b43-931e-3d247a4e7e83-514.webp" },
{ nombre: "Théo", posicion: "Mediocentro organizador", dorsal: 7, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/944c1859-a80e-41a5-852b-83ba2db7f264-332.webp" },
{ nombre: "Pedro Ortiz", posicion: "Mediocentro organizador", dorsal: 24, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/75e7a3bb-70bd-4a71-944b-9c080fb2e135-322.webp" },
{ nombre: "Jacobo", posicion: "Mediocentro ofensivo", dorsal: 10, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/2fadb9f5-eaa2-448f-82c2-65fc66ab0a0a-101.webp" },
{ nombre: "Goti", posicion: "Mediocentro ofensivo", dorsal: 25, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2026/01/29/small-wp/bab04aa5-1712-4b9a-a21a-19b6b9868859-151.webp" },
{ nombre: "Requena", posicion: "Mediocentro ofensivo", dorsal: 30, grupo: "Mediocentros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/ab912eee-2267-4d23-85b2-bdf37b769b04-587.webp" },
{ nombre: "Diego Bri", posicion: "Extremo", dorsal: 5, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/c120818f-7cf3-45f4-8db5-700c81d2f368-46.webp" },
{ nombre: "Percan", posicion: "Extremo", dorsal: 6, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2026/01/19/small-wp/97a080da-b90b-4e95-a39d-60c5f1e43485-685.webp" },
{ nombre: "Kevin Medina", posicion: "Extremo", dorsal: 11, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/ece7222a-71c7-464c-948b-61891fb4de2d-428.webp" },
{ nombre: "Adilson", posicion: "Extremo", dorsal: 17, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/ce56cfb2-8a89-414f-af61-869df71bd665-252.webp" },
{ nombre: "Dalisson", posicion: "Extremo", dorsal: 19, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/217b1eb2-4d2d-4f6e-8277-ffeddefb71d3-103.webp" },
{ nombre: "Carracedo", posicion: "Extremo", dorsal: 23, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/4d42637f-5f3b-4233-9428-869fd6cc1001-778.webp" },
{ nombre: "Obolskii", posicion: "Delantero centro", dorsal: 9, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/ced2b3b0-8b02-4e04-ab14-a238a5f97b14-952.webp" },
{ nombre: "Sergi Guardiola", posicion: "Delantero centro", dorsal: 14, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/56b6396a-c831-4f1c-b0b4-0ee59e85c0df-556.webp" },
{ nombre: "Fuentes", posicion: "Delantero centro", dorsal: 18, grupo: "Delanteros", foto: "https://statics-maker.llt-services.com/cor/images/2025/08/14/small-wp/a0983b31-6bf3-41d8-8187-27a786b8749d-166.webp" },
];

// ── Calendario del Córdoba CF (temporada 2025/26) ──
export interface Jornada {
  jornada: number;
  fecha: string;
  rival: string;
  estadio: string;
  resultado?: string;
  local: boolean;
  victoria: boolean | null;
  empate: boolean; // true para victoria, false para derrota, null para empates y no disputa
}
export const RESULTADOS: Jornada[] = [
  { jornada: 1, fecha: "18/08/2025", rival: "Sporting de Gijón", estadio: "El Molinón", resultado: "2 - 1", local: false, victoria: false, empate: false },
  { jornada: 2, fecha: "25/08/2025", rival: "UD Las Palmas", estadio: "Nuevo Arcángel", resultado: "1 - 3", local: true, victoria: false, empate: false },
  { jornada: 3, fecha: "30/08/2025", rival: "Real Valladolid", estadio: "José Zorrilla", resultado: "0 - 0", local: false, victoria: false, empate: true  },
  { jornada: 4, fecha: "05/09/2025", rival: "CD Castellón", estadio: "Nuevo Arcángel", resultado: "2 - 1", local: true, victoria: true, empate: false  },
  { jornada: 5, fecha: "14/09/2025", rival: "FC Andorra", estadio: "Estadi Nacional", resultado: "3 - 1", local: false, victoria: false, empate: false  },
  { jornada: 6, fecha: "21/09/2025", rival: "Racing de Santander", estadio: "Nuevo Arcángel", resultado: "2 - 2", local: true, victoria: false, empate: true },
  { jornada: 7, fecha: "28/09/2025", rival: "Real Sociedad B", estadio: "Anoeta", resultado: "1 - 1", local: false, victoria: false,empate: false  },
  { jornada: 8, fecha: "05/10/2025", rival: "Real Zaragoza", estadio: "La Romareda", resultado: "0 - 1", local: false, victoria: true,empate: false  },
  { jornada: 9, fecha: "13/10/2025", rival: "Cultural Leonesa", estadio: "Nuevo Arcángel", resultado: "1 - 0", local: true, victoria: true,empate: false  },
  { jornada: 10, fecha: "19/10/2025", rival: "UD Almería", estadio: "Nuevo Arcángel", resultado: "1 - 1", local: true, victoria: false,empate: true  },
  { jornada: 11, fecha: "25/10/2025", rival: "Albacete Balompié", estadio: "Carlos Belmonte", resultado: "1 - 3", local: false, victoria: true,empate: false  },
  { jornada: 12, fecha: "02/11/2025", rival: "AD Ceuta FC", estadio: "Nuevo Arcángel", resultado: "2 - 0", local: true, victoria: true, empate: false  },
  { jornada: 13, fecha: "08/11/2025", rival: "Málaga CF", estadio: "La Rosaleda", resultado: "2 - 2", local: false, victoria: false, empate: true },
  { jornada: 14, fecha: "16/11/2025", rival: "RC Deportivo", estadio: "Nuevo Arcángel", resultado: "1 - 3", local: true, victoria: false, empate: false  },
  { jornada: 15, fecha: "22/11/2025", rival: "Granada CF", estadio: "Nuevo Los Cármenes", resultado: "1 - 1", local: false, victoria: false, empate: true },
  { jornada: 16, fecha: "30/11/2025", rival: "Cádiz CF", estadio: "Nuevo Arcángel", resultado: "1 - 2", local: true, victoria: false, empate: false  },
  { jornada: 17, fecha: "07/12/2025", rival: "CD Leganés", estadio: "Butarque", resultado: "0 - 0", local: false, victoria: false, empate: true },
  { jornada: 18, fecha: "13/12/2025", rival: "SD Eibar", estadio: "Nuevo Arcángel", resultado: "0 - 0", local: true, victoria: false, empate: true },
  { jornada: 19, fecha: "21/12/2025", rival: "CD Mirandés", estadio: "Anduva", resultado: "1 - 2", local: false, victoria: true,empate: false  },
  { jornada: 20, fecha: "03/01/2026", rival: "Burgos CF", estadio: "Nuevo Arcángel", resultado: "2 - 0", local: true, victoria: true,empate: false  },
  { jornada: 21, fecha: "12/01/2026", rival: "SD Huesca", estadio: "El Alcoraz", resultado: "1 - 2", local: false, victoria: true,empate: false  },
  { jornada: 22, fecha: "18/01/2026", rival: "Málaga CF", estadio: "Nuevo Arcángel", resultado: "0 - 1", local: true, victoria: false,empate: false  },
  { jornada: 23, fecha: "24/01/2026", rival: "UD Las Palmas", estadio: "Gran Canaria", resultado: "1 - 2", local: false, victoria: true, empate: false },
  { jornada: 24, fecha: "31/01/2026", rival: "Real Valladolid", estadio: "Nuevo Arcángel", resultado: "3 - 1", local: true, victoria: true,empate: false  },
  { jornada: 25, fecha: "25/02/2026", rival: "AD Ceuta FC", estadio: "Alfonso Murube", resultado: "3 - 2", local: false, victoria: false,empate: false  },
  { jornada: 26, fecha: "14/02/2026", rival: "CD Leganés", estadio: "Nuevo Arcángel", resultado: "2 - 1", local: true, victoria: true,empate: false  },
  { jornada: 27, fecha: "21/02/2026", rival: "UD Almería", estadio: "Power Horse Stadium", resultado: "2 - 1", local: false, victoria: false,empate: false  },
  { jornada: 28, fecha: "02/03/2026", rival: "FC Andorra", estadio: "Nuevo Arcángel", resultado: "1 - 4", local: true, victoria: false,empate: false  },
  { jornada: 29, fecha: "08/03/2026", rival: "Racing de Santander", estadio: "El Sardinero", resultado: "4 - 3", local: false, victoria: false,empate: false  },
  { jornada: 30, fecha: "15/03/2026", rival: "Real Sociedad B", estadio: "Nuevo Arcángel", resultado: "0 - 2", local: true, victoria: false,empate: false  },
  { jornada: 31, fecha: "22/03/2026", rival: "Burgos CF", estadio: "El Plantío", resultado: "4 - 0", local: false, victoria: false,empate: false  },
  { jornada: 32, fecha: "27/03/2026", rival: "CD Mirandés", estadio: "Nuevo Arcángel", resultado: "2 - 2", local: true, victoria: false, empate: true },
  { jornada: 33, fecha: "31/03/2026", rival: "RC Deportivo", estadio: "Riazor", resultado: "2 - 0", local: false, victoria: false,empate: false  },
  { jornada: 34, fecha: "04/04/2026", rival: "Cádiz CF", estadio: "Nuevo Mirandilla", resultado: "1 - 3", local: false, victoria: true,empate: false  },
  { jornada: 35, fecha: "11/04/2026", rival: "Real Zaragoza", estadio: "Nuevo Arcángel", resultado: "1 - 0", local: true, victoria: true,empate: false  },
  { jornada: 36, fecha: "18/04/2026", rival: "Cultural Leonesa", estadio: "Reino de León", resultado: "1-2", local: false, victoria: true ,empate: false  },
  { jornada: 37, fecha: "26/04/2026", rival: "Sporting de Gijón", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null,empate: false  },
  { jornada: 38, fecha: "03/05/2026", rival: "CD Castellón", estadio: "SkyFi Castalia", resultado: "", local: false, victoria: null,empate: false  },
  { jornada: 39, fecha: "10/05/2026", rival: "Granada CF", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null,empate: false  },
  { jornada: 40, fecha: "17/05/2026", rival: "Albacete Balompié", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null,empate: false  },
  { jornada: 41, fecha: "24/05/2026", rival: "SD Eibar", estadio: "Ipurua", resultado: "", local: false, victoria: null,empate: false  },
  { jornada: 42, fecha: "31/05/2026", rival: "SD Huesca", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null,empate: false  }
];
