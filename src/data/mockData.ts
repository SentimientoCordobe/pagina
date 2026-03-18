export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  contenido: string;
  destacada?: boolean;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    slug: "El-Córdoba-encadena-5-derrotas-consecutivas",
    titulo: "El-Córdoba-encadena-5-derrotas-consecutivas",
    resumen: "El-Córdoba-encadena-5-derrotas-consecutivas",
    imagen: "https://statics-maker.llt-services.com/cor/images/2026/03/08/xlarge/75cd27cb-74ae-40d3-8e4f-1248a0b2c1e9-539.jpg",
    fecha: "9 Mar 2026",
    contenido: "El Córdoba Club de Fútbol atraviesa su momento más delicado de la temporada tras encadenar cinco derrotas consecutivas, una racha negativa que ha encendido las alarmas en el entorno blanquiverde. La última caída llegó este domingo en El Arcángel, donde el conjunto cordobesista cayó por 0-2 ante la Real Sociedad B.
Más allá del resultado, el partido dejó un dato que refleja a la perfección la falta de acierto del equipo: el Córdoba fue el conjunto con más disparos de toda la jornada 30 en Segunda División, con un total de 27 intentos, de los cuales 6 fueron a portería. Sin embargo, esa insistencia ofensiva no se tradujo en goles ni en puntos, evidenciando uno de los grandes problemas actuales del equipo: la falta de efectividad.
Una vez más, penalizó la falta de puntería y la fragilidad en momentos clave. Por su parte, el filial txuri-urdin supo aprovechar sus oportunidades para llevarse los tres puntos.
Con esta nueva derrota, el Córdoba firma la peor racha de resultados desde la llegada de Iván Ania, tanto en su etapa en el club como en su trayectoria como entrenador. Una dinámica preocupante que obliga al equipo a reaccionar cuanto antes y que generá inquietud entre la afición.
",
    destacada: true,
  },
  {
    id: 2,
    slug: "Orgullo-sin-premio-en-casa-del-líder",
    titulo: "Orgullo sin premio en casa del líder",
    resumen: "El Córdoba planta cara al líder, pero vuelve a caer",
    imagen: "https://statics-maker.llt-services.com/cor/images/2026/03/08/xlarge/333161dd-1faa-4320-8985-5be1b4121d71-403.jpg",
    fecha: "8 Mar 2026",
    contenido: "Desarrollo noticia",
    destacada: true,
  },
  {
    id: 3,
    slug: "El Córdoba-planta-cara-al-Racing",
    titulo: "El Córdoba planta cara al Racing, pero vuelve a caer (4-3) ",
    resumen: "El Córdoba planta cara al Racing, pero vuelve a caer",
    imagen: "https://statics-maker.llt-services.com/cor/images/2026/03/08/xlarge/52a08d76-280f-4238-bead-07b4b1905e22-299.jpg",
    fecha: "8 Mar 2026",
    contenido: "Desarrollo noticia",
    destacada: true,
  },
  {
    id: 4,
    slug: "4-derrotas-consecutivas",
    titulo: "4 derrotas consecutivas que pesan",
    resumen: "El Córdoba encadena su peor racha con Iván Ania al mando",
    imagen: "https://statics-maker.llt-services.com/cor/images/2026/03/08/xlarge/c0d1be71-9acd-4ea3-bb33-7c44cfc75b30-452.jpg",
    fecha: "9 Mar 2026",
    contenido: "Desarrollo noticia",
  },
  {
    id: 5,
    slug: "5",
    titulo: "El Arcángel será clave",
    resumen: "El Arcángel será clave para romper la mala racha ante la Real Sociedad B",
    imagen: "https://statics-maker.llt-services.com/cor/images/2026/03/03/xlarge/e6720434-2fd9-4fbc-aaff-429cf724813d-140.JPG",
    fecha: "9 Mar 2026",
    contenido: "Desarrollo noticia",
  },
];

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


// ── Clasificación LaLiga Hypermotion 2025-26 (datos Marca) ──
export interface EquipoClasificacion {
  posicion: number;
  equipo: string;
  puntos: number;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;

  esCordoba?: boolean;
}

export const clasificacion: EquipoClasificacion[] = export const clasificacion: EquipoClasificacion[] = [
  { posicion: 1, equipo: "Racing Santander", puntos: 59, pj: 30, pg: 18, pe: 5, pp: 7, gf: 62, gc: 40, dg: 22 },
  { posicion: 2, equipo: "Deportivo", puntos: 52, pj: 30, pg: 15, pe: 7, pp: 8, gf: 46, gc: 34, dg: 12 },
  { posicion: 3, equipo: "Almería", puntos: 52, pj: 30, pg: 15, pe: 7, pp: 8, gf: 56, gc: 42, dg: 14 },
  { posicion: 4, equipo: "Málaga", puntos: 51, pj: 30, pg: 15, pe: 6, pp: 9, gf: 49, gc: 37, dg: 12 },
  { posicion: 5, equipo: "CD Castellón", puntos: 49, pj: 30, pg: 14, pe: 7, pp: 9, gf: 49, gc: 37, dg: 12 },
  { posicion: 6, equipo: "Las Palmas", puntos: 48, pj: 30, pg: 12, pe: 12, pp: 6, gf: 39, gc: 24, dg: 15 },
  { posicion: 7, equipo: "Burgos CF", puntos: 47, pj: 30, pg: 13, pe: 8, pp: 9, gf: 32, gc: 26, dg: 6 },
  { posicion: 8, equipo: "Sporting", puntos: 45, pj: 30, pg: 13, pe: 6, pp: 11, gf: 42, gc: 38, dg: 4 },
  { posicion: 9, equipo: "Ceuta", puntos: 44, pj: 30, pg: 13, pe: 5, pp: 12, gf: 37, gc: 45, dg: -8 },
  { posicion: 10, equipo: "Eibar", puntos: 42, pj: 30, pg: 11, pe: 9, pp: 10, gf: 32, gc: 30, dg: 2 },
  { posicion: 11, equipo: "Córdoba CF", puntos: 41, pj: 30, pg: 11, pe: 8, pp: 11, gf: 41, gc: 43, dg: -2, esCordoba: true },
  { posicion: 12, equipo: "Real Sociedad B", puntos: 40, pj: 30, pg: 11, pe: 7, pp: 12, gf: 44, gc: 41, dg: 3 },
  { posicion: 13, equipo: "FC Andorra", puntos: 39, pj: 30, pg: 10, pe: 9, pp: 11, gf: 37, gc: 41, dg: -4 },
  { posicion: 14, equipo: "Albacete", puntos: 39, pj: 30, pg: 10, pe: 9, pp: 11, gf: 35, gc: 40, dg: -5 },
  { posicion: 15, equipo: "Cádiz", puntos: 38, pj: 30, pg: 10, pe: 8, pp: 12, gf: 31, gc: 36, dg: -5 },
  { posicion: 16, equipo: "Granada", puntos: 36, pj: 30, pg: 8, pe: 12, pp: 10, gf: 35, gc: 34, dg: 1 },
  { posicion: 17, equipo: "Valladolid", puntos: 36, pj: 30, pg: 9, pe: 9, pp: 12, gf: 35, gc: 43, dg: -8 },
  { posicion: 18, equipo: "Leganés", puntos: 34, pj: 30, pg: 8, pe: 10, pp: 12, gf: 31, gc: 32, dg: -1 },
  { posicion: 19, equipo: "Huesca", puntos: 31, pj: 30, pg: 8, pe: 7, pp: 15, gf: 29, gc: 42, dg: -13 },
  { posicion: 20, equipo: "Zaragoza", puntos: 30, pj: 30, pg: 7, pe: 9, pp: 14, gf: 26, gc: 41, dg: -15 },
  { posicion: 21, equipo: "Cultural Leonesa", puntos: 27, pj: 30, pg: 7, pe: 6, pp: 17, gf: 28, gc: 49, dg: -21 },
  { posicion: 22, equipo: "Mirandés", puntos: 24, pj: 30, pg: 6, pe: 6, pp: 18, gf: 28, gc: 49, dg: -21 },
];

// ── Calendario del Córdoba CF (temporada 2025/26) ──
export interface Jornada {
  jornada: number;
  rival: string;
  fecha: string;
  hora?: string;
  resultado?: string;
  local: boolean;
  estado: "victoria" | "empate" | "derrota" | "pendiente";
}

export const calendario: Jornada[] = [
  { jornada: 1, rival: "Sporting", fecha: "Ago 2025", resultado: "2-1", local: false, estado: "derrota" },
  { jornada: 2, rival: "Las Palmas", fecha: "Ago 2025", resultado: "1-3", local: true, estado: "derrota" },
  { jornada: 3, rival: "Valladolid", fecha: "Sep 2025", resultado: "0-0", local: false, estado: "empate" },
  { jornada: 4, rival: "Castellón", fecha: "Sep 2025", resultado: "2-1", local: true, estado: "victoria" },
  { jornada: 5, rival: "FC Andorra", fecha: "Sep 2025", resultado: "3-1", local: false, estado: "derrota" },
  { jornada: 6, rival: "Racing Santander", fecha: "Oct 2025", resultado: "2-2", local: true, estado: "empate" },
  { jornada: 7, rival: "Real Sociedad B", fecha: "Oct 2025", resultado: "1-1", local: false, estado: "empate" },
  { jornada: 8, rival: "Zaragoza", fecha: "Oct 2025", resultado: "0-1", local: false, estado: "victoria" },
  { jornada: 9, rival: "Cultural Leonesa", fecha: "Nov 2025", resultado: "1-0", local: true, estado: "victoria" },
  { jornada: 10, rival: "Almería", fecha: "Nov 2025", resultado: "1-1", local: true, estado: "empate" },
  { jornada: 11, rival: "Albacete", fecha: "Nov 2025", resultado: "1-3", local: false, estado: "victoria" },
  { jornada: 12, rival: "Ceuta", fecha: "Nov 2025", resultado: "2-0", local: true, estado: "victoria" },
  { jornada: 13, rival: "Málaga", fecha: "Dic 2025", resultado: "2-2", local: false, estado: "empate" },
  { jornada: 14, rival: "Deportivo", fecha: "Dic 2025", resultado: "1-3", local: true, estado: "derrota" },
  { jornada: 15, rival: "Granada", fecha: "Dic 2025", resultado: "1-1", local: false, estado: "empate" },
  { jornada: 16, rival: "Cádiz", fecha: "Dic 2025", resultado: "1-2", local: true, estado: "derrota" },
  { jornada: 17, rival: "Leganés", fecha: "Dic 2025", resultado: "0-0", local: false, estado: "empate" },
  { jornada: 18, rival: "Eibar", fecha: "Dic 2025", resultado: "0-0", local: true, estado: "empate" },
  { jornada: 19, rival: "Mirandés", fecha: "Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 20, rival: "Burgos CF", fecha: "3 Ene 2026", resultado: "2-0", local: true, estado: "victoria" },
  { jornada: 21, rival: "Huesca", fecha: "12 Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 22, rival: "Málaga", fecha: "18 Ene 2026", resultado: "0-1", local: true, estado: "derrota" },
  { jornada: 23, rival: "Las Palmas", fecha: "24 Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 24, rival: "Valladolid", fecha: "31 Ene 2026", resultado: "3-1", local: true, estado: "victoria" },
  { jornada: 25, rival: "Ceuta", fecha: "25 Feb 2026", resultado: "2-1", local: false, estado: "derrota" },
  { jornada: 26, rival: "Leganés", fecha: "14 Feb 2026", resultado: "2-1", local: true, estado: "victoria" },
  { jornada: 27, rival: "Almería", fecha: "21 Feb 2026", resultado: "2-1", local: false, estado: "derrota" },
  { jornada: 28, rival: "FC Andorra", fecha: "2 Mar 2026", resultado: "1-4", local: true, estado: "derrota" },
  { jornada: 29, rival: "Racing Santander", fecha: "8 Mar 2026", resultado: "4-3", local: false, estado: "derrota" },
  { jornada: 30, rival: "Real Sociedad B", fecha: "15 Mar 2026", resultado: "0-2", local: true, estado: "derrota" },
  { jornada: 31, rival: "Burgos CF", fecha: "22 Mar 2026", hora: "18:00", local: false, estado: "pendiente" },
  { jornada: 32, rival: "Mirandés", fecha: "27 Mar 2026", hora: "19:00", local: true, estado: "pendiente" },
  { jornada: 33, rival: "RC Deportivo", fecha: "31 Mar 2026", hora: "20:00", local: false, estado: "pendiente" },
  { jornada: 34, rival: "Cádiz", fecha: "04 Abr 2026", hora: "14:00", local: false, estado: "pendiente" },
];

// ── Partidos (Resúmenes YouTube) ──
export interface Partido {
  rival: string;
  resultado: string;
  fecha: string;
  youtube: string;
  miniatura: string;
  local: boolean;
}

export const partidos: Partido[] = [
  {
    rival: "Real Sociedad B",
    resultado: "0-2",
    fecha: "15 Mar 2026",
    youtube: "https://youtu.be/Yxoqnr0qjjE?si=PIWKDqouKTuEw118",
    miniatura: "https://cordobadeporte.com/wp-content/uploads/2026/03/fuentes-real-sociedad.jpg",
    local: true,
  },
  {
    rival: "Racing de Santander",
    resultado: "4-3",
    fecha: "8 Mar 2026",
    youtube: "https://youtu.be/hv5epyCnNZA?si=UlkWfjaPpaEc6Hek",
    miniatura: "https://statics-maker.llt-services.com/cor/images/2026/03/08/xlarge/c1b24824-d4c7-49be-87fd-8a87807adbc5-851.jpg",
    local: false,
  },
  {
    rival: "Andorra",
    resultado: "1-4",
    fecha: "2 Mar 2026",
    youtube: "https://youtu.be/akB_rkJnZVs?si=BmQYrwaPHgDM6Dhs",
    miniatura: "https://statics-maker.llt-services.com/cor/images/2026/03/03/xlarge/4b66fd9f-02b2-4ee7-83b5-2e3b811330c7-223.JPG",
    local: true,
  },
  {
    rival: "AD Ceuta",
    resultado: "3-2",
    fecha: "25 Feb 2026",
    youtube: "https://youtu.be/Mk1OOQeq7Rg?si=MaYvtn9InmRUJJGE",
    miniatura: "https://statics-maker.llt-services.com/cor/images/2026/02/25/xlarge/8d67db51-1c28-459f-8641-2eca2a7c7da3-727.JPG",
    local: false,
  },
  {
    rival: "Almería",
    resultado: "2-1",
    fecha: "21 Feb 2026",
    youtube: "https://youtu.be/u9093VFDA5c?si=37-MzzaZMnkIlly5",
    miniatura: "https://statics-maker.llt-services.com/cor/images/2026/02/22/xlarge/58a76d21-096b-431a-abc3-86e65b5e514c-425.JPG",
    local: false,
  },
  {
    rival: "Leganés",
    resultado: "2-1",
    fecha: "14 Feb 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/02/14/cordoba-2-1-leganes-resumen-laliga-hypermotion-video.html",
    miniatura: "https://static.grupojoly.com/clip/3e29017c-dc64-4226-8736-106cca5c573f_source-aspect-ratio_1600w_0.jpg",
    local: true,
  },
  {
    rival: "Valladolid",
    resultado: "3-1",
    fecha: "31 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/31/cordoba-cf-3-1-real-valladolid-resumen-mejores-jugadas-laliga-hypermotion-j24-video.html",
    miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rrWO8T09f9fI2RxvJ1e_MYl8aPrLSd8gXA&s",
    local: true,
  },
  {
    rival: "Las Palmas",
    resultado: "1-2",
    fecha: "24 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/24/palmas-1-2-cordoba-resumen-laliga-hypermotion-video.html",
    miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPl5uHd93ay7GvhaJxbW-5T5y0f3Bsvsi6g&s",
    local: false,
  },
  {
    rival: "Málaga",
    resultado: "0-1",
    fecha: "18 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/18/cordoba-cf-0-1-malaga-resumen-mejores-jugadas-laliga-hypermotion-j22-video.html",
    miniatura: "data:image/jpeg;base64,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",
    local: true,
  },
  {
    rival: "Huesca",
    resultado: "1-2",
    fecha: "12 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/12/huesca-1-2-cordoba-cf-resumen-mejores-jugadas-laliga-hypermotion-j21-video.html",
    miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXE7KJARg7AqjsiOU2J-wzixmRhlfDGhXpg&s",
    local: false,
  },
  {
    rival: "Burgos CF",
    resultado: "2-0",
    fecha: "3 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/03/cordoba-2-0-burgos-resumen-goles-laliga-hypermotion-j20-video.html",
    miniatura: "data:image/jpeg;base64,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",
    local: true,
  },
  {
    rival: "Mirandés",
    resultado: "1-2",
    fecha: "21 Dic 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/12/21/mirandes-1-2-cordoba-resumen-laliga-hypermotion-video.html",
    miniatura: "data:image/jpeg;base64,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",
    local: false,
  },
  {
    rival: "Eibar",
    resultado: "0-0",
    fecha: "13 Dic 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/12/13/cordoba-0-0-eibar-resumen-goles-laliga-hypermotion-j18-video.html",
    miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0w5iThnu9uMb1GWpOOWlMfD3766rKXqfS5w&s",
    local: true,
  },
  {
    rival: "Leganés",
    resultado: "0-0",
    fecha: "7 Dic 2025",
    youtube: "https://www.marca.com/futbol/2025/12/07/leganes-0-0-cordoba-resumen-mejores-jugadas-laliga-hypermotion-j17-video.html",
    miniatura: "data:image/jpeg;base64,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",
    local: false,
  },
  {
    rival: "Cádiz",
    resultado: "1-2",
    fecha: "30 Nov 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/11/30/cordoba-1-2-cadiz-resumen-goles-laliga-hypermotion-j16-video.html",
    miniatura: "https://estaticos-cdn.prensaiberica.es/clip/83f4a0ff-0ea3-43e9-acc9-c198149c5561_source-aspect-ratio_default_0.jpg",
    local: true,
  },
  {
    rival: "Granada",
    resultado: "1-1",
    fecha: "22 Nov 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/11/22/granada-1-1-cordoba-resumen-goles-laliga-hypermotion-j15-video.html",
    miniatura: "https://estaticos-cdn.prensaiberica.es/clip/6a87165a-74ec-45b4-9f35-9e59993c9757_16-9-discover-aspect-ratio_default_0.jpg",
    local: false,
  },
  {
    rival: "Deportivo",
    resultado: "1-3",
    fecha: "17 Nov 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/11/17/cordoba-1-3-deportivo-resumen-goles-laliga-hypermotion-j14-video.html",
    miniatura: "https://pbs.twimg.com/media/G9xB66hWwAEeZlx?format=jpg&name=large",
    local: true,
  },
  {
    rival: "Málaga",
    resultado: "2-2",
    fecha: "9 Nov 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/11/09/malaga-2-2-cordoba-resumen-goles-laliga-hypermotion-j13-video.html",
    miniatura: "https://static.grupojoly.com/clip/2cc1e1c4-2290-4060-8b79-e709ef5bf20a_16-9-aspect-ratio_1600w_0.jpg",
    local: false,
  },
  {
    rival: "Ceuta",
    resultado: "2-0",
    fecha: "2 Nov 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/11/02/cordoba-2-0-ceuta-resumen-goles-laliga-hypermotion-j12-video.html",
    miniatura: "https://static.grupojoly.com/clip/7c4fa14b-20a2-4510-97d0-42900edc333b_source-aspect-ratio_1600w_0.jpg",
    local: true,
  },
  {
    rival: "Albacete",
    resultado: "1-3",
    fecha: "25 Oct 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/10/25/albacete-1-3-cordoba-resumen-goles-laliga-hypermotion-j11-video.html",
    miniatura: "https://static.grupojoly.com/clip/6f10862c-d9da-4407-a20d-a7a3401900e5_source-aspect-ratio_1600w_0.jpg",
    local: false,
  },
  {
    rival: "Almería",
    resultado: "1-1",
    fecha: "19 Oct 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/10/19/cordoba-1-1-almeria-resumen-gol-laliga-hypermotion-j10-video.html",
    miniatura: "https://estaticos-cdn.prensaiberica.es/clip/ee6cee55-0d35-487a-9a0d-cfe15213a51f_alta-libre-aspect-ratio_default_0_x937y416.jpg",
    local: true,
  },
  {
    rival: "Cultural Leonesa",
    resultado: "1-0",
    fecha: "13 Oct 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/10/13/cordoba-1-0-cultural-leonesa-resumen-goles-laliga-hypermotion-video.html",
    miniatura: "https://s1.abcstatics.com/abc/www/multimedia/espana/2026/02/14/cordobacf-victoria-leganes-U44440771842WML-562x315@diario_abc.jpg",
    local: true,
  },
  {
    rival: "Zaragoza",
    resultado: "0-1",
    fecha: "5 Oct 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/10/05/zaragoza-0-1-cordoba-resumen-goles-laliga-hypermotion-j8-video.html",
    miniatura: "https://static.grupojoly.com/clip/7cbace51-47b8-4f3a-815e-897d04cff1bf_source-aspect-ratio_1600w_0.jpg",
    local: false,
  },
  {
    rival: "Real Sociedad B",
    resultado: "1-1",
    fecha: "28 Sep 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/09/28/real-sociedad-b-1-1-cordoba-cf-resumen-mejores-jugadas-laliga-hypermotion-j7-video.html",
    miniatura: "https://static.grupojoly.com/clip/5b467dc8-7d2e-444d-8a38-3cb29181ca22_source-aspect-ratio_1600w_0.jpg",
    local: false,
  },
  {
    rival: "Racing Santander",
    resultado: "2-2",
    fecha: "22 Sep 2025",
    youtube: "https://www.marca.com/futbol/2025/09/22/cordoba-2-2-racing-santander-resumen-goles-laliga-hypermotion-j6-video.html",
    miniatura: "https://www.andaluciainformacion.es/asset/thumbnail,1280,720,center,center/media/andaluciainformacion/images/2025/11/04/2025110410583353062.jpg",
    local: true,
  },
  {
    rival: "FC Andorra",
    resultado: "3-1",
    fecha: "14 Sep 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/09/14/fc-andorra-3-1-cordoba-cf-resumen-mejores-jugadas-laliga-hypermotion-j5-video.html",
    miniatura: "https://s1.abcstatics.com/abc/www/multimedia/espana/2026/01/03/cordobacf-burgos-duelo-RveWrSzOwAyVDRNJxv8Eh2M-1200x840@diario_abc.jpeg",
    local: false,
  },
  {
    rival: "Castellón",
    resultado: "2-1",
    fecha: "6 Sep 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/09/06/cordoba-2-1-castellon-resumen-goles-i-laliga-hypermotion-j4-video.html",
    miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yOe_L-X2lckkRKLPU1bIaVn_yVj5YyCopw&s",
    local: true,
  },
  {
    rival: "Valladolid",
    resultado: "0-0",
    fecha: "30 Ago 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/08/30/valladolid-0-0-cordoba-resumen-mejores-jugadas-laliga-hypermotion-j3-video.html",
    miniatura: "https://static.grupojoly.com/clip/daad7992-6cc5-4c19-b5cc-1871d2f54e69_source-aspect-ratio_1600w_0.jpg",
    local: false,
  },
  {
    rival: "Las Palmas",
    resultado: "1-3",
    fecha: "26 Ago 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/08/26/cordoba-1-3-palmas-resumen-goles-laliga-hypermotion-j2-video.html",
    miniatura: "https://static.grupojoly.com/clip/8f7f6032-848e-448a-b6d2-faf435703568_source-aspect-ratio_1600w_0.jpg",
    local: true,
  },
  {
    rival: "Sporting",
    resultado: "2-1",
    fecha: "19 Ago 2025",
    youtube: "https://www.marca.com/futbol/segunda-division/2025/08/19/sporting-2-1-cordoba-remontada-gijon-empezar-video.html",
    miniatura: "https://static.grupojoly.com/clip/2cc1e1c4-2290-4060-8b79-e709ef5bf20a_16-9-aspect-ratio_1600w_0.jpg",
    local: false,
  },
];
