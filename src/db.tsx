import tendencia1 from "./Assets/img/card_01.png"
import tendencia2 from "./Assets/img/card_02.png"
import tendencia3 from "./Assets/img/card_03.png"

import blog1 from "./Assets/img/articulo_big_01.png"
import blog2 from "./Assets/img/articulo_big_02.png"
import blog3 from "./Assets/img/articulo_small_01.png"
import blog4 from "./Assets/img/articulo_small_02.png"
import blog5 from "./Assets/img/articulo_small_03.png"

const tendencias = [
  {
    id: 1,
    titulo: "Montañas y magia",
    texto: "Aqui la description para Montañas y magia",
    showNuevo: true,
    imagen: tendencia1,
  },
  {
    id: 2,
    titulo: "Playas y sol",
    texto: "La descripcion de Playas y sol debe ser esta",
    showNuevo: false,
    imagen: tendencia2,
  },
  {
    id: 3,
    titulo: "Nieve y aventura",
    texto: "Contiene la informacion de Nieve y aventura",
    showNuevo: false,
    imagen: tendencia3,
  },
];

const blog = [
  {
    id: 1,
    tag: "Ciudad",
    titulo: "Artículo de puente",
    texto:
      "Un puente es una construcción que permite salvar un accidente geográfico como un río.",
    tiempo: "2m",
    imagen: blog1,
  },
  {
    id: 2,
    tag: "Aventura",
    titulo: "Artículo de bosque",
    texto:
      "Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.",
    tiempo: "15m",
    imagen: blog2,
  },
  {
    id: 3,
    titulo: "Artículo de elefante",
    tiempo: "3h",
    imagen: blog3,
  },
  {
    id: 4,
    titulo: "Artículo de loro",
    tiempo: "4h",
    imagen: blog4,
  },
  {
    id: 5,
    titulo: "Artículo de camino",
    tiempo: "8h",
    imagen: blog5,
  },
];

export { tendencias, blog };
