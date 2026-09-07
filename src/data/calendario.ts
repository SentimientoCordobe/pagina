// ── Calendario del Córdoba CF (temporada 2026/27, LALIGA Hypermotion) ──
export interface Jornada {
  jornada: number;
  fecha: string;
  rival: string;
  estadio: string;
  resultado?: string;
  local: boolean;
  victoria: boolean | null;
  empate: boolean; // true para empate; para derrota/pendiente usar victoria en false/null
}

// Calendario completo de las 42 jornadas de LALIGA Hypermotion 2026/27
// (22 equipos, liga a doble vuelta → 42 jornadas, no 41). Fuente: LALIGA
// oficial (laliga.com/clubes/cordoba-cf/proximos-partidos) y RFEF.
// Resultados confirmados a 27/08/2026: J1 y J2. El resto son fechas y
// rivales ya oficiales; actualiza el campo "resultado" jornada a jornada
// según se disputen.
export const RESULTADOS: Jornada[] = [
  { jornada: 1, fecha: "16/08/2026", rival: "Burgos CF", estadio: "El Plantío", resultado: "3 - 2", local: false, victoria: false, empate: false },
  { jornada: 2, fecha: "21/08/2026", rival: "Girona FC", estadio: "Nuevo Arcángel", resultado: "2 - 1", local: true, victoria: true, empate: false },
  { jornada: 3, fecha: "30/08/2026", rival: "Granada CF", estadio: "Nuevo Arcángel", resultado: "1 - 3", local: true, victoria: false, empate: false },
  { jornada: 4, fecha: "07/09/2026", rival: "CE Sabadell", estadio: "Nova Creu Alta", resultado: "3 - 2", local: false, victoria: false, empate: false },
  { jornada: 5, fecha: "13/09/2026", rival: "UD Almería", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 6, fecha: "20/09/2026", rival: "Albacete Balompié", estadio: "Carlos Belmonte", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 7, fecha: "27/09/2026", rival: "Real Valladolid", estadio: "José Zorrilla", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 8, fecha: "04/10/2026", rival: "CD Tenerife", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 9, fecha: "11/10/2026", rival: "CD Eldense", estadio: "Nuevo Pepico Amat", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 10, fecha: "18/10/2026", rival: "CD Leganés", estadio: "Butarque", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 11, fecha: "25/10/2026", rival: "SD Eibar", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 12, fecha: "01/11/2026", rival: "RC Celta Fortuna", estadio: "Abanca-Balaídos", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 13, fecha: "08/11/2026", rival: "AD Ceuta FC", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 14, fecha: "15/11/2026", rival: "RCD Mallorca", estadio: "Son Moix", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 15, fecha: "22/11/2026", rival: "Real Oviedo", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 16, fecha: "29/11/2026", rival: "Cádiz CF", estadio: "Nuevo Mirandilla", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 17, fecha: "06/12/2026", rival: "UD Las Palmas", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 18, fecha: "13/12/2026", rival: "CD Castellón", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 19, fecha: "20/12/2026", rival: "Real Sociedad B", estadio: "Zubieta", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 20, fecha: "03/01/2027", rival: "FC Andorra", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 21, fecha: "10/01/2027", rival: "Real Sporting", estadio: "El Molinón", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 22, fecha: "17/01/2027", rival: "CE Sabadell", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 23, fecha: "24/01/2027", rival: "UD Almería", estadio: "Power Horse Stadium", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 24, fecha: "31/01/2027", rival: "RCD Mallorca", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 25, fecha: "07/02/2027", rival: "Cádiz CF", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 26, fecha: "14/02/2027", rival: "Girona FC", estadio: "Montilivi", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 27, fecha: "21/02/2027", rival: "Burgos CF", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 28, fecha: "28/02/2027", rival: "Granada CF", estadio: "Nuevo Los Cármenes", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 29, fecha: "07/03/2027", rival: "Real Valladolid", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 30, fecha: "14/03/2027", rival: "Real Oviedo", estadio: "Carlos Tartiere", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 31, fecha: "21/03/2027", rival: "CD Eldense", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 32, fecha: "28/03/2027", rival: "CD Castellón", estadio: "Nou Castalia", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 33, fecha: "04/04/2027", rival: "RC Celta Fortuna", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 34, fecha: "11/04/2027", rival: "SD Eibar", estadio: "Ipurúa", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 35, fecha: "18/04/2027", rival: "Albacete Balompié", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 36, fecha: "25/04/2027", rival: "FC Andorra", estadio: "Estadi Nacional", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 37, fecha: "02/05/2027", rival: "Real Sociedad B", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 38, fecha: "09/05/2027", rival: "CD Tenerife", estadio: "Heliodoro Rodríguez López", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 39, fecha: "16/05/2027", rival: "CD Leganés", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
  { jornada: 40, fecha: "23/05/2027", rival: "AD Ceuta FC", estadio: "Alfonso Murube", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 41, fecha: "30/05/2027", rival: "UD Las Palmas", estadio: "Estadio de Gran Canaria", resultado: "", local: false, victoria: null, empate: false },
  { jornada: 42, fecha: "06/06/2027", rival: "Real Sporting", estadio: "Nuevo Arcángel", resultado: "", local: true, victoria: null, empate: false },
];
