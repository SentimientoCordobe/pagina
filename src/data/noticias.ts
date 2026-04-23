import data from "./noticias.json"

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

export const noticias: Noticia[] = data as Noticia[]
[
  {
    "id": 1,
    "slug": "fin-de-la-jornada-retro-35-el-cordoba-continua-12-tras-encadenar-2-victorias-consecutivas-ascenso-directo-13",
    "titulo": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas ⬆️ Ascenso directo: -13...",
    "resumen": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas ⬆️ Ascenso directo: -13",
    "imagen": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/05/30/16224089350605.jpg",
    "fecha": "Mon, 13 Apr 2026 20:55:52 GMT",
    "contenido": "📊Fin de la jornada retro (35), el Córdoba continúa 12º, tras encadenar 2 victorias consecutivas ⬆️ Ascenso directo: -13...",
    "instagram": "https://www.instagram.com/p/DXFgFjdirdN",
    "tipo": "post",
    "destacada": true
  },
  {
    "id": 2,
    "slug": "victoria-importantisima-de-canteraccf-oficial-en-ceuta-0-1-que-deja-al-equipo-1-punto-por-encima-del-descenso-en-la-13",
    "titulo": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13...",
    "resumen": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/670423223_18109423156890780_2212246606578421098_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=ho6YfX-csIIQ7kNvwG_gdGs&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af2lQO8as6GUxjaf8D6YDUVx-2XVLXPYCmgrWMvClctF8A&amp;oe=69E3F231&amp;_nc_sid=8b3546",
    "fecha": "Sun, 12 Apr 2026 17:30:32 GMT",
    "contenido": "Victoria importantísima de @canteraccf_oficial en Ceuta 0-1, que deja al equipo 1 punto por encima del descenso en la 13...",
    "instagram": "https://www.instagram.com/p/DXCj9WSCj46",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 3,
    "slug": "dos-goles-anulados-por-fuera-de-juego-del-brazo-cuando-el-reglamento-dice-que-no-cuenta-el-brazo-ya-que-no-puedes-met",
    "titulo": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes met...",
    "resumen": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes met",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/662304722_18109410184890780_8509533250641131423_n.jpg?stp=dst-jpg_e15_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=E38saJyQ4PMQ7kNvwGbRpYA&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af2SXRHwXkGAtiGPPnsAxic_SxpHl2ZSF9LOito1ATC8Ww&amp;oe=69E405CC&amp;_nc_sid=8b3546",
    "fecha": "Sun, 12 Apr 2026 15:10:13 GMT",
    "contenido": "Dos goles anulados por ‘fuera de juego’ del brazo, cuando el reglamento dice que no cuenta el brazo ya que no puedes met...",
    "instagram": "https://www.instagram.com/p/DXCUBnpCqsm",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 4,
    "slug": "final-del-partido-1-0-2-goles-anulados-y-un-arbitro-que-condiciono-totalmente-el-partido-pero-no-pudieron-con-nosotros",
    "titulo": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros...",
    "resumen": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/670727565_18109339804890780_8948290371340895337_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=z6OFVrrwoXYQ7kNvwFRwa2S&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af2VfsZLfnVFB__jtlmS2RMqiRN6mmcOOWg3bDcam0cvPQ&amp;oe=69E40540&amp;_nc_sid=8b3546",
    "fecha": "Sat, 11 Apr 2026 20:56:59 GMT",
    "contenido": "Final del partido 1-0, 2 goles anulados y un árbitro que condicionó totalmente el partido, pero no pudieron con nosotros...",
    "instagram": "https://www.instagram.com/p/DXAW4FlCk-e",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 5,
    "slug": "el-reglamento-es-claro-el-brazo-no-cuenta-para-el-fuera-de-juego-ya-que-no-se-puede-meter-gol-con-el-brazo-aun-asi",
    "titulo": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, ...",
    "resumen": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, ",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/670352506_18109334455890780_3515345168582637977_n.jpg?stp=dst-jpg_e15_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=KRG4eV6nubEQ7kNvwEtl9Cq&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af0pMTBo5qYQrLTOPqz4IyLeC1dlTbyLri5MeVpD3EnlTw&amp;oe=69E3D7C6&amp;_nc_sid=8b3546",
    "fecha": "Sat, 11 Apr 2026 19:54:43 GMT",
    "contenido": "El reglamento es claro: el brazo no cuenta para el fuera de juego (ya que no se puede meter gol con el brazo). Aun así, ...",
    "instagram": "https://www.instagram.com/p/DXAOG35iriW",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 6,
    "slug": "dia-de-partido-retro-zaragoza-19-el-arcangel-21-00-j35",
    "titulo": "¡DÍA DE PARTIDO RETRO!📜🤍💚 🆚 Zaragoza (19º) 🏟️ El Arcángel ⏰ 21:00 📈 J35",
    "resumen": "¡DÍA DE PARTIDO RETRO!📜🤍💚 🆚 Zaragoza (19º) 🏟️ El Arcángel ⏰ 21:00 📈 J35",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/670517014_18109302001890780_7924982832838748913_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=1Z1o2rskN9cQ7kNvwFu8scf&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af2y4iaulmmSmWqkso7tqPD2KhQPKQNImeLOLbfrLfWaJg&amp;oe=69E3D458&amp;_nc_sid=8b3546",
    "fecha": "Sat, 11 Apr 2026 13:28:52 GMT",
    "contenido": "¡DÍA DE PARTIDO RETRO!📜🤍💚 🆚 Zaragoza (19º) 🏟️ El Arcángel ⏰ 21:00 📈 J35",
    "instagram": "https://www.instagram.com/p/DW_jdq5iiaf",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 7,
    "slug": "historico-entre-cordoba-cf-y-zaragoza-el-ultimo-duelo-en-el-arcangel-entre-cordoba-cf-y-zaragoza-termino-en-empate",
    "titulo": "📊 Histórico entre Córdoba CF y Zaragoza ⚽️El último duelo en El Arcángel entre Córdoba CF y Zaragoza terminó en empate ...",
    "resumen": "📊 Histórico entre Córdoba CF y Zaragoza ⚽️El último duelo en El Arcángel entre Córdoba CF y Zaragoza terminó en empate ",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/670649166_18109238425890780_695271410974588035_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=TEfuORrqt-AQ7kNvwGg_Vpf&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af1ZlcZcp6hbmIztFoPxUoD5k0TO2VB5Cg77sgSDgEqc3g&amp;oe=69E3DB73&amp;_nc_sid=8b3546",
    "fecha": "Fri, 10 Apr 2026 19:45:24 GMT",
    "contenido": "📊 Histórico entre Córdoba CF y Zaragoza ⚽️El último duelo en El Arcángel entre Córdoba CF y Zaragoza terminó en empate ...",
    "instagram": "https://www.instagram.com/p/DW9p7WLCk00",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 8,
    "slug": "el-cordoba-cf-deja-atado-el-futuro-de-diego-bri-2028-tras-llegar-cedido-el-pasado-verano-desde-el-atletico-de-madr",
    "titulo": "🚨✅El Córdoba CF deja atado el futuro de Diego Bri 2028 🤝 Tras llegar cedido el pasado verano desde el Atlético de Madr...",
    "resumen": "🚨✅El Córdoba CF deja atado el futuro de Diego Bri 2028 🤝 Tras llegar cedido el pasado verano desde el Atlético de Madr",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/657857302_18109103212890780_5296491641381872105_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=CguXt9hDo34Q7kNvwFoP5oh&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af3UNOm_owHWecFonfNvWtRXDbvZliRxbahIQHHqBahNcw&amp;oe=69E3FA97&amp;_nc_sid=8b3546",
    "fecha": "Thu, 09 Apr 2026 10:32:13 GMT",
    "contenido": "🚨✅El Córdoba CF deja atado el futuro de Diego Bri 2028 🤝 Tras llegar cedido el pasado verano desde el Atlético de Madr...",
    "instagram": "https://www.instagram.com/p/DW6E4GyCj0b",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 9,
    "slug": "fin-de-la-jornada-34-el-cordoba-se-posiciona-12-tras-la-victoria-en-cadiz-ascenso-directo-16-play-off-de-as",
    "titulo": "📊Fin de la jornada 34, el Córdoba se posiciona 12º tras la victoria en Cádiz. ⬆️ Ascenso directo: -16 🔼 Play off de as...",
    "resumen": "📊Fin de la jornada 34, el Córdoba se posiciona 12º tras la victoria en Cádiz. ⬆️ Ascenso directo: -16 🔼 Play off de as",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/660333893_18108850516890780_1074960783178965244_n.jpg?stp=dst-jpg_e15_fr_s1080x1080_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=qGGCM1dOpvwQ7kNvwF0FwI1&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af16mCfxGsFytzaih_-Kwsqj30BS5XNYCgih4VuxqskSew&amp;oe=69E405C9&amp;_nc_sid=8b3546",
    "fecha": "Mon, 06 Apr 2026 20:35:49 GMT",
    "contenido": "📊Fin de la jornada 34, el Córdoba se posiciona 12º tras la victoria en Cádiz. ⬆️ Ascenso directo: -16 🔼 Play off de as...",
    "instagram": "https://www.instagram.com/p/DWzcNY_ikrE",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 10,
    "slug": "el-cordoba-no-ganaba-desde-el-14-de-febrero-frente-al-leganes-2-1-ayer-por-fin-volvimos-a-la-victoria-algo-importa",
    "titulo": "👀El Córdoba no ganaba desde el 14 de Febrero frente al Leganés (2-1), ayer por fin volvimos a la victoria, algo importa...",
    "resumen": "👀El Córdoba no ganaba desde el 14 de Febrero frente al Leganés (2-1), ayer por fin volvimos a la victoria, algo importa",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/662270968_18108723019890780_3371124785955858978_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=z7Pz5fS7bLwQ7kNvwHdN-y8&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af1Ezu7z2zQpePTgdt0HtC62rxukoKyPQJzXzJ47F9Tu7Q&amp;oe=69E3E8EE&amp;_nc_sid=8b3546",
    "fecha": "Sun, 05 Apr 2026 18:39:59 GMT",
    "contenido": "👀El Córdoba no ganaba desde el 14 de Febrero frente al Leganés (2-1), ayer por fin volvimos a la victoria, algo importa...",
    "instagram": "https://www.instagram.com/p/DWwqbyNCsKQ",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 11,
    "slug": "todos-los-goles-del-cadiz-1-3-cordoba",
    "titulo": "⚽️Todos los goles del Cádiz 1-3 Córdoba",
    "resumen": "⚽️Todos los goles del Cádiz 1-3 Córdoba",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.71878-15/658864844_2802613843426540_2514834745584928137_n.jpg?stp=dst-jpg_e15_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=DWF1f54RIdwQ7kNvwFCIDbp&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af0VlEbrF-kjpge4-1hBazanEzFPdlDM172I3S5UViOE6g&amp;oe=69E3D4CD&amp;_nc_sid=8b3546",
    "fecha": "Sun, 05 Apr 2026 14:50:32 GMT",
    "contenido": "⚽️Todos los goles del Cádiz 1-3 Córdoba",
    "instagram": "https://www.instagram.com/p/DWwQBuhK9wX",
    "tipo": "post",
    "destacada": false
  },
  {
    "id": 12,
    "slug": "finaaal-victoria-por-1-3-en-cadiz",
    "titulo": "FINAAAL, VICTORIA POR 1-3 en Cádiz!💪🏽🤍💚",
    "resumen": "FINAAAL, VICTORIA POR 1-3 en Cádiz!💪🏽🤍💚",
    "imagen": "https://instagram.fcue9-1.fna.fbcdn.net/v/t51.82787-15/657789792_18108604513890780_4352745051965391602_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&amp;_nc_ht=instagram.fcue9-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_oc=Q6cZ2gG2W1ZDe_hTHOJOcfrlxsgFW0nDNWa4SAtnBH43sU4M7p_3PnaPP-6LIM3He-WfLZI&amp;_nc_ohc=cENgElhH-dUQ7kNvwEs_AdQ&amp;_nc_gid=9XYitpo9KUGynL7nTfQvuA&amp;edm=AOQ1c0wBAAAA&amp;ccb=7-5&amp;oh=00_Af2dH39iIiSIuaduxMcJjhzDrEl_qoYtMiJX0LLQhKn16g&amp;oe=69E3E6E5&amp;_nc_sid=8b3546",
    "fecha": "Sat, 04 Apr 2026 14:13:32 GMT",
    "contenido": "FINAAAL, VICTORIA POR 1-3 en Cádiz!💪🏽🤍💚",
    "instagram": "https://www.instagram.com/p/DWtnDLWithH",
    "tipo": "post",
    "destacada": false
  }
]