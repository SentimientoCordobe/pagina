// src/data/clasificacion.ts
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
  { posicion: 1, equipo: "Racing Santander", puntos: 68, pj: 35, pg: 20, pe: 8, pp: 7, gf: 69, gc: 49, dg: 20 },
  { posicion: 2, equipo: "Almería", puntos: 63, pj: 35, pg: 18, pe: 9, pp: 8, gf: 65, gc: 48, dg: 17 },
  { posicion: 3, equipo: "Deportivo", puntos: 61, pj: 35, pg: 17, pe: 10, pp: 8, gf: 54, gc: 41, dg: 13 },
  { posicion: 4, equipo: "Las Palmas", puntos: 59, pj: 35, pg: 15, pe: 14, pp: 6, gf: 46, gc: 29, dg: 17 },
  { posicion: 5, equipo: "Málaga", puntos: 58, pj: 35, pg: 17, pe: 7, pp: 11, gf: 56, gc: 42, dg: 14 },
  { posicion: 6, equipo: "CD Castellón", puntos: 57, pj: 35, pg: 16, pe: 9, pp: 10, gf: 55, gc: 43, dg: 12 },
  { posicion: 7, equipo: "Burgos CF", puntos: 56, pj: 35, pg: 16, pe: 8, pp: 11, gf: 42, gc: 34, dg: 8 },
  { posicion: 8, equipo: "Sporting", puntos: 52, pj: 35, pg: 15, pe: 7, pp: 13, gf: 48, gc: 45, dg: 3 },
  { posicion: 9, equipo: "Eibar", puntos: 51, pj: 35, pg: 14, pe: 9, pp: 12, gf: 38, gc: 35, dg: 3 },
  { posicion: 10, equipo: "Ceuta", puntos: 50, pj: 35, pg: 14, pe: 8, pp: 13, gf: 45, gc: 55, dg: -10 },
  { posicion: 11, equipo: "Córdoba CF", puntos: 48, pj: 35, pg: 13, pe: 9, pp: 13, gf: 47, gc: 52, dg: -5, esCordoba: true },
  { posicion: 12, equipo: "Albacete", puntos: 47, pj: 35, pg: 12, pe: 11, pp: 12, gf: 44, gc: 46, dg: -2 },
  { posicion: 13, equipo: "Real Sociedad B", puntos: 45, pj: 35, pg: 12, pe: 9, pp: 14, gf: 48, gc: 49, dg: -1 },
  { posicion: 14, equipo: "Granada", puntos: 43, pj: 35, pg: 10, pe: 13, pp: 12, gf: 41, gc: 39, dg: 2 },
  { posicion: 15, equipo: "Cádiz", puntos: 42, pj: 35, pg: 11, pe: 9, pp: 15, gf: 36, gc: 45, dg: -9 },
  { posicion: 16, equipo: "FC Andorra", puntos: 41, pj: 35, pg: 10, pe: 11, pp: 14, gf: 40, gc: 48, dg: -8 },
  { posicion: 17, equipo: "Leganés", puntos: 40, pj: 35, pg: 10, pe: 10, pp: 15, gf: 40, gc: 39, dg: 1 },
  { posicion: 18, equipo: "Valladolid", puntos: 40, pj: 35, pg: 10, pe: 10, pp: 15, gf: 41, gc: 51, dg: -10 },
  { posicion: 19, equipo: "Huesca", puntos: 35, pj: 35, pg: 9, pe: 8, pp: 18, gf: 34, gc: 50, dg: -16 },
  { posicion: 20, equipo: "Zaragoza", puntos: 32, pj: 35, pg: 7, pe: 11, pp: 17, gf: 29, gc: 48, dg: -19 },
  { posicion: 21, equipo: "Cultural Leonesa", puntos: 31, pj: 35, pg: 8, pe: 7, pp: 20, gf: 32, gc: 56, dg: -24 },
  { posicion: 22, equipo: "Mirandés", puntos: 30, pj: 35, pg: 7, pe: 9, pp: 19, gf: 34, gc: 55, dg: -21 },
];
