
export interface Noticia {
  id: number
  slug: string
  titulo: string
  resumen: string
  imagen: string
  fecha: string
  contenido: string
  instagram: string
  tipo: "post" | "reel" | "carousel"
  destacada?: boolean
}

export const noticias = [
  {
    "id": 1,
    "slug": "fin-de-la-jornada-retro-35-el-cordoba-continua-12-tras-encadenar-2-victorias-consecutivas-ascenso-directo-13",
    "titulo": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas ⬆️ Ascenso directo: -13...",
    "resumen": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas \n\n⬆️ Ascenso directo: -13\n🔼 Play off de as",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/669945528_18109532920890780_8327846406870756127_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=G7U-5x-6wzUQ7kNvwHRkafr&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af1yl6AToylx_oAIbSscmK751oLy-tU70qMb_qYgeVhqaw&oe=69E3C18A&_nc_sid=10d13b",
    "fecha": "Mon, 13 Apr 2026 20:55:52 GMT",
    "contenido": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas \n\n⬆️ Ascenso directo: -13\n🔼 Play off de ascenso: -10\n⬇️ Descenso: +14",
    "instagram": "https://www.instagram.com/p/DXFgFjdirdN",
    "tipo": "post",
    "destacada": true
  },
  {
    "id": 2,
    "slug": "victoria-importantisima-de-canteraccf-oficial-en-ceuta-0-1-que-deja-al-equipo-1-punto-por-encima-del-descenso-en-la-13",
    "titulo": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13...",
    "resumen": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13º posición. 💪🏽🤍💚",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/670423223_18109423156890780_2212246606578421098_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=ho6YfX-csIIQ7kNvwFAgi66&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af1cmEgaMQmq-9OtroHJhfB2V5_GwNJpj2Uh-q-6cbj4yw&oe=69E3B9F1&_nc_sid=10d13b",
    "fecha": "Sun, 12 Apr 2026 17:30:32 GMT",
    "contenido": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13º posición. 💪🏽🤍💚",
    "instagram": "https://www.instagram.com/p/DXCj9WSCj46",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 3,
    "slug": "dos-goles-anulados-por-fuera-de-juego-del-brazo-cuando-el-reglamento-dice-que-no-cuenta-el-brazo-ya-que-no-puedes-met",
    "titulo": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes met...",
    "resumen": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes meter gol con el.\nLo de",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/662304722_18109410184890780_8509533250641131423_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=E38saJyQ4PMQ7kNvwFHfjam&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af2xdn3tZyI9bDXX_aCnI9HLoI2A-uwBDtPa8kqKVFwnIQ&oe=69E3CD8C&_nc_sid=10d13b",
    "fecha": "Sun, 12 Apr 2026 15:10:13 GMT",
    "contenido": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes meter gol con el.\nLo de ayer con el arbitraje fue simplemente lamentable, durante todo el encuentro. ¿En qué se está convirtiendo el fútbol?",
    "instagram": "https://www.instagram.com/p/DXCUBnpCqsm",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 4,
    "slug": "final-del-partido-1-0-2-goles-anulados-y-un-arbitro-que-condiciono-totalmente-el-partido-pero-no-pudieron-con-nosotros",
    "titulo": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros...",
    "resumen": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros, CONTRA TODO Y CONT",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/670727565_18109339804890780_8948290371340895337_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=Y1G2xmAOpXsQ7kNvwHCfpDi&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af12mrjdCB41ifVSpu8E1IGxR8hn_8ot7rzTXy40DELtjQ&oe=69E3CD00&_nc_sid=10d13b",
    "fecha": "Sat, 11 Apr 2026 20:56:59 GMT",
    "contenido": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros, CONTRA TODO Y CONTRA TODOS!💪🏽🤍💚",
    "instagram": "https://www.instagram.com/p/DXAW4FlCk-e",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 5,
    "slug": "el-reglamento-es-claro-el-brazo-no-cuenta-para-el-fuera-de-juego-ya-que-no-se-puede-meter-gol-con-el-brazo-aun-asi",
    "titulo": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, ...",
    "resumen": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, el VAR decide anular",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/670352506_18109334455890780_3515345168582637977_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=KRG4eV6nubEQ7kNvwEbSJTb&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af0Cv4cWCkwWW6E0wwzqCNxj4K4LReGzHXv8i2lnPigyiw&oe=69E3D7C6&_nc_sid=10d13b",
    "fecha": "Sat, 11 Apr 2026 19:54:43 GMT",
    "contenido": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, el VAR decide anular un gol válido al Córdoba CF. Exceso de protagonismo por parte del VAR, y arbitraje nefasto, final de la primera parte 0-0.",
    "instagram": "https://www.instagram.com/p/DXAOG35iriW",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 6,
    "slug": "dia-de-partido-retro-zaragoza-19-el-arcangel-21-00-j35",
    "titulo": "¡DÍA DE PARTIDO RETRO!📜🤍💚 🆚 Zaragoza (19º) 🏟️ El Arcángel ⏰ 21:00 📈 J35",
    "resumen": "¡DÍA DE PARTIDO RETRO!📜🤍💚\n\n🆚 Zaragoza (19º) \n🏟️ El Arcángel \n⏰ 21:00\n📈 J35",
    "imagen": "https://scontent.cdninstagram.com/v/t51.82787-15/670517014_18109302001890780_7924982832838748913_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2gHtHYOHfZHOCxeXc_vJEELrUKehy5PyJfn-lAWVSjimPUsKYny2dKstkKA6osNrt04&_nc_ohc=1Z1o2rskN9cQ7kNvwH7pgmg&_nc_gid=wjtnZAtmfNw1LB0DwUkB0g&edm=APs17CUBAAAA&ccb=7-5&oh=00_Af2ae5mt6cD6XPVbzjYvaVrKr_zPU2J34HuiJ9et5pgCFQ&oe=69E3D458&_nc_sid=10d13b",
    "fecha": "Sat, 11 Apr 2026 13:28:52 GMT",
    "contenido": "¡DÍA DE PARTIDO RETRO!📜🤍💚\n\n🆚 Zaragoza (19º) \n🏟️ El Arcángel \n⏰ 21:00\n📈 J35",
    "instagram": "https://www.instagram.com/p/DW_jdq5iiaf",
    "tipo": "post",
    "destacada": false
  }
]
