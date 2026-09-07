export interface EquipoClasificacion {
  posicion: number
  equipo: string
  puntos: number
  pj?: number
  pg?: number
  pe?: number
  pp?: number
  gf?: number
  gc?: number
  dg?: number

  esCordoba?: boolean;
}

export const clasificacion: EquipoClasificacion[] = [
  { posicion: 1, equipo: "CD Castellón", puntos: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 5, gc: 1, dg: 4 },
{ posicion: 2, equipo: "Eibar", puntos: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 6, gc: 3, dg: 3 },
{ posicion: 3, equipo: "CE Sabadell", puntos: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 4, gc: 2, dg: 2 },
{ posicion: 4, equipo: "Leganés", puntos: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 3, gc: 1, dg: 2 },
{ posicion: 5, equipo: "Girona FC", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 9, gc: 5, dg: 4 },
{ posicion: 6, equipo: "Celta Fortuna", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 7, gc: 4, dg: 3 },
{ posicion: 7, equipo: "Mallorca", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 5, gc: 2, dg: 3 },
{ posicion: 8, equipo: "Tenerife", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 5, gc: 3, dg: 2 },
{ posicion: 9, equipo: "Granada", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 5, gc: 4, dg: 1 },
{ posicion: 10, equipo: "UD Las Palmas", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 6, gc: 6, dg: 0 },
{ posicion: 11, equipo: "Real Sporting", puntos: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 2, gc: 2, dg: 0 },
{ posicion: 12, equipo: "Almería", puntos: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 6, gc: 4, dg: 2 },
{ posicion: 13, equipo: "Burgos CF", puntos: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 5, gc: 5, dg: 0 },
{ posicion: 14, equipo: "Real Sociedad B", puntos: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 5, gc: 5, dg: 0 },
{ posicion: 15, equipo: "Real Oviedo", puntos: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 1, gc: 1, dg: 0 },
{ posicion: 16, equipo: "Real Valladolid", puntos: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 2, gc: 4, dg: -2 },
{ posicion: 17, equipo: "FC Andorra", puntos: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 7, gc: 7, dg: 0 },
{ posicion: 18, equipo: "Cádiz", puntos: 3, pj: 4, pg: 0, pe: 3, pp: 1, gf: 5, gc: 6, dg: -1 },
{ posicion: 19, equipo: "Córdoba CF", puntos: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 7, gc: 10, dg: -3, esCordoba: true },
{ posicion: 20, equipo: "Eldense", puntos: 2, pj: 4, pg: 0, pe: 2, pp: 2, gf: 2, gc: 6, dg: -4 },
{ posicion: 21, equipo: "Albacete", puntos: 0, pj: 4, pg: 0, pe: 0, pp: 4, gf: 2, gc: 7, dg: -5 },
{ posicion: 22, equipo: "AD Ceuta FC", puntos: 0, pj: 4, pg: 0, pe: 0, pp: 4, gf: 1, gc: 12, dg: -11 },
];
