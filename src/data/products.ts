interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  favorite: boolean;
  category: string;
  url: ProductUrl;
  quantity: number;
}

interface ProductUrl {
  categories: string
}

const arrayProducts: Product[] = [
  {
    id: 1,
    name: "Brocha RubvFace",
    price: 12500,
    images: [
      "/products/imagen1.webp",
      "/products/imagen2.webp",
      "/products/imagen3.webp",
    ],
    description:
        "La Brocha RubvFace es una herramienta esencial para cualquier amante del maquillaje. Fabricada con cerdas sintéticas de alta calidad, esta brocha permite una aplicación uniforme y suave de bases, polvos y otros productos. Su diseño ergonómico asegura comodidad durante el uso, mientras que su forma permite alcanzar áreas difíciles del rostro con facilidad. Ideal para lograr un acabado impecable, sin líneas visibles ni parches.",
    favorite: false,
    category: "Accesorios",
    url: {
      categories: "accessories"
    },
    quantity: 1
  },
  {
    id: 2,
    name: "Paleta de Sombras Glamour",
    price: 29900,
    images: ["/products/imagen2.webp"],
    description:
        "La Paleta de Sombras Glamour ofrece una impresionante colección de colores vibrantes y duraderos, perfectos para crear looks de maquillaje espectaculares. Con una gama que incluye tonos cálidos, fríos y neutros, esta paleta es ideal tanto para el uso diario como para ocasiones especiales. Cada sombra está formulada con pigmentos intensos y una textura suave que se difumina fácilmente, garantizando una aplicación uniforme y de larga duración.",
    favorite: true,
    category: "Ojos",
    url: {
      categories: "eyes"
    },
    quantity: 1
  },
  {
    id: 3,
    name: "Delineador Líquido Precision",
    price: 8500,
    images: ["/products/imagen3.webp"],
    description:
        "El Delineador Líquido Precision está diseñado para ofrecer precisión y control en cada trazo. Con su fórmula de secado rápido y resistente al agua, este delineador garantiza una aplicación duradera y sin manchas. Su punta ultra fina permite crear líneas finas y definidas, perfectas para delinear tanto la línea de las pestañas como para crear detalles intrincados en el maquillaje. Ideal para looks sutiles o dramáticos, este delineador es un must-have en cualquier colección de maquillaje.",
    favorite: false,
    category: "Ojos",
    url: {
      categories: "eyes"
    },
    quantity: 1
  },
  {
    id: 4,
    name: "Base de Maquillaje Perfect Skin",
    price: 22000,
    images: ["/products/imagen4.webp"],
    description:
        "La Base de Maquillaje Perfect Skin proporciona una cobertura completa mientras mantiene un acabado natural y radiante. Su fórmula ligera se adapta a diferentes tipos de piel, proporcionando una textura uniforme y sin imperfecciones. Enriquecida con ingredientes hidratantes, esta base ayuda a mantener la piel fresca y cómoda durante todo el día. Perfecta para todos los tonos de piel, se puede aplicar con brocha, esponja o dedos para un acabado personalizado.",
    favorite: false,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 5,
    name: "Labial Mate Luxury",
    price: 16000,
    images: ["/products/imagen5.webp"],
    description:
        "El Labial Mate Luxury ofrece un acabado mate elegante con una fórmula hidratante que evita la sequedad. Disponible en una variedad de tonos sofisticados, este labial proporciona una cobertura completa y duradera sin necesidad de reaplicaciones frecuentes. Su textura cremosa se desliza suavemente sobre los labios, dejándolos con un color intenso y un acabado aterciopelado. Ideal para cualquier ocasión, desde un día en la oficina hasta una salida nocturna.",
    favorite: false,
    category: "Labios",
    url: {
      categories: "lips"
    },
    quantity: 1
  },
  {
    id: 6,
    name: "Pincel para Contorno Elite",
    price: 9500,
    images: ["/products/imagen6.webp"],
    description:
        "El Pincel para Contorno Elite es una herramienta especializada diseñada para esculpir y definir el rostro con precisión. Fabricado con cerdas suaves pero firmes, este pincel permite una aplicación uniforme de polvos y cremas para contornear. Su forma angular se adapta perfectamente a los contornos del rostro, facilitando la creación de sombras y resaltados que realzan la estructura facial. Ideal para maquillaje de día o noche, este pincel es esencial para lograr un acabado profesional.",
    favorite: false,
    category: "Accesorios",
    url: {
      categories: "accessories"
    },
    quantity: 1
  },
  {
    id: 7,
    name: "Corrector de Ojeras Pro",
    price: 10500,
    images: ["/products/imagen7.webp"],
    description:
        "El Corrector de Ojeras Pro está formulado para proporcionar una cobertura completa de ojeras y manchas con una textura ligera. Su fórmula enriquecida con ingredientes que iluminan y rejuvenecen el área de los ojos ayuda a reducir la apariencia de fatiga. Su aplicador preciso facilita la aplicación y la mezcla, logrando un acabado natural que se mantiene fresco durante todo el día. Ideal para todos los tipos de piel, este corrector es perfecto para un look radiante y descansado.",
    favorite: false,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 8,
    name: "Polvo Translúcido HD",
    price: 13000,
    images: ["/products/imagen8.webp"],
    description:
        "El Polvo Translúcido HD es ideal para fijar el maquillaje y controlar el brillo durante todo el día. Su fórmula ultrafina se difumina perfectamente en la piel, proporcionando un acabado mate y suave. Diseñado para ser invisible en las fotos y en persona, este polvo ayuda a difuminar los poros y proporciona una textura lisa. Perfecto para sellar bases, correctores y para retoques durante el día, es una excelente adición a cualquier rutina de maquillaje.",
    favorite: false,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 9,
    name: "Máscara de Pestañas Extremo Volumen",
    price: 14000,
    images: ["/products/imagen9.webp"],
    description:
        "La Máscara de Pestañas Extremo Volumen está formulada para ofrecer un volumen y definición excepcionales. Su cepillo innovador separa y recubre cada pestaña desde la raíz hasta las puntas, creando un look de pestañas largas y voluminosas. La fórmula resistente al agua garantiza que el maquillaje se mantenga intacto durante todo el día, sin desmoronarse ni manchar. Ideal para un look dramático o para un uso diario, esta máscara es un básico en cualquier colección de maquillaje.",
    favorite: false,
    category: "Ojos",
    url: {
      categories: "eyes"
    },
    quantity: 1
  },
  {
    id: 10,
    name: "Crema Hidratante Facial Glow",
    price: 19000,
    images: ["/products/imagen10.webp"],
    description:
        "La Crema Hidratante Facial Glow proporciona una hidratación profunda mientras aporta un efecto luminoso a la piel. Su fórmula ligera y no grasa se absorbe rápidamente, dejando la piel suave y radiante. Enriquecida con ingredientes que mejoran la textura de la piel y proporcionan una hidratación duradera, esta crema es perfecta para el uso diario. Ideal para todo tipo de piel, especialmente para aquellas que buscan un resplandor saludable y una hidratación intensiva.",
    favorite: true,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 11,
    name: "Cepillo para Cejas BrowMaster",
    price: 7800,
    images: ["/products/imagen11.webp"],
    description:
        "El Cepillo para Cejas BrowMaster está diseñado para peinar y definir las cejas con precisión. Su diseño de doble función incluye un cepillo para alinear y un peine para difuminar y fijar el producto. Ideal para mantener las cejas en su lugar durante todo el día, este cepillo es perfecto para lograr un look natural y bien cuidado. Fabricado con materiales duraderos y de alta calidad, es una herramienta esencial en cualquier rutina de belleza.",
    favorite: false,
    category: "Accesorios",
    url: {
      categories: "accessories"
    },
    quantity: 1
  },
  {
    id: 12,
    name: "Lápiz Labial Hidratante",
    price: 15500,
    images: ["/products/imagen12.webp"],
    description:
        "El Lápiz Labial Hidratante combina un color vibrante con una fórmula enriquecida que hidrata los labios. Disponible en varios tonos, este labial ofrece un acabado brillante y una sensación cómoda durante todo el día. Su textura suave se desliza fácilmente y proporciona una cobertura uniforme. Ideal para aquellos que buscan un labial que no solo ofrezca color, sino también beneficios hidratantes para mantener los labios suaves y bien cuidados.",
    favorite: true,
    category: "Labios",
    url: {
      categories: "lips"
    },
    quantity: 1
  },
  {
    id: 13,
    name: "Gel Fijador de Cejas",
    price: 8900,
    images: ["/products/imagen13.webp"],
    description:
        "El Gel Fijador de Cejas asegura que tus cejas se mantengan en su lugar durante todo el día. Su fórmula transparente se adapta a cualquier color de cejas y proporciona una fijación duradera sin dejar residuos. Ideal para lograr un look pulido y natural, este gel es fácil de aplicar y se seca rápidamente. Perfecto para mantener las cejas en su lugar y darles un acabado definido y ordenado.",
    favorite: true,
    category: "Ojos",
    url: {
      categories: "eyes"
    },
    quantity: 1
  },
  {
    id: 14,
    name: "Exfoliante Facial Suave",
    price: 11000,
    images: ["/products/imagen14.webp"],
    description:
        "El Exfoliante Facial Suave está formulado para eliminar suavemente las células muertas y las impurezas de la piel, revelando un cutis más luminoso y suave. Enriquecido con ingredientes hidratantes, este exfoliante no reseca la piel y es adecuado para el uso regular. Su textura granulada ayuda a mejorar la circulación sanguínea y a preparar la piel para absorber mejor los tratamientos posteriores. Ideal para todo tipo de piel, este exfoliante es un paso esencial en cualquier rutina de cuidado facial.",
    favorite: true,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 15,
    name: "Set de Brochas Profesionales",
    price: 35000,
    images: ["/products/imagen15.webp"],
    description:
        "El Set de Brochas Profesionales incluye una selección completa de brochas de alta calidad, diseñadas para cubrir todas las necesidades de maquillaje. Desde brochas para base hasta pinceles para ojos, este set es ideal tanto para principiantes como para profesionales. Cada brocha está fabricada con cerdas sintéticas suaves y resistentes, que garantizan una aplicación uniforme y precisa de cualquier tipo de producto. Presentado en un estuche elegante, es el regalo perfecto para cualquier amante del maquillaje.",
    favorite: true,
    category: "Accesorios",
    url: {
      categories: "accessories"
    },
    quantity: 1
  },
  {
    id: 16,
    name: "Serum Antienvejecimiento",
    price: 22000,
    images: ["/products/imagen16.webp"],
    description:
        "El Serum Antienvejecimiento está formulado para combatir los signos del envejecimiento, como líneas finas, arrugas y pérdida de firmeza. Enriquecido con ingredientes activos que regeneran y revitalizan la piel, este sérum ayuda a mejorar la elasticidad y la textura del rostro. Su fórmula ligera se absorbe rápidamente sin dejar sensación grasosa, haciendo que la piel luzca más joven y saludable con el uso continuo. Ideal para todo tipo de pieles maduras.",
    favorite: false,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 17,
    name: "Mascarilla Facial Revitalizante",
    price: 17000,
    images: ["/products/imagen17.webp"],
    description:
        "La Mascarilla Facial Revitalizante proporciona un tratamiento intensivo para revitalizar y energizar la piel. Enriquecida con ingredientes naturales y vitaminas, esta mascarilla ayuda a hidratar profundamente y a mejorar la textura de la piel. Su fórmula de acción rápida deja el rostro fresco y rejuvenecido, ideal para usar antes de eventos importantes o cuando la piel necesita un impulso adicional. Apta para todo tipo de piel, especialmente aquellas que buscan luminosidad y suavidad.",
    favorite: false,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
  {
    id: 18,
    name: "Lápiz de Ojos Waterproof",
    price: 9500,
    images: ["/products/imagen18.webp"],
    description:
        "El Lápiz de Ojos Waterproof está diseñado para proporcionar un color intenso y duradero, incluso en las condiciones más exigentes. Su fórmula resistente al agua asegura que el delineado se mantenga intacto durante todo el día, sin manchar ni desvanecerse. Ideal para crear delineados precisos o looks ahumados, este lápiz es versátil y fácil de difuminar. Perfecto para quienes buscan un maquillaje que dure desde la mañana hasta la noche.",
    favorite: false,
    category: "Ojos",
    url: {
      categories: "eyes"
    },
    quantity: 1
  },
  {
    id: 19,
    name: "Brillo Labial Glossy Shine",
    price: 12000,
    images: ["/products/imagen19.webp"],
    description:
        "El Brillo Labial Glossy Shine ofrece un acabado brillante y sedoso con una fórmula hidratante que nutre los labios. Disponible en varios tonos, este brillo proporciona un color suave y un resplandor luminoso, ideal para un look fresco y juvenil. Su textura ligera no es pegajosa y se puede usar solo o sobre el labial para un extra de brillo. Perfecto para llevar en el bolso y retocar en cualquier momento del día.",
    favorite: true,
    category: "Labios",
    url: {
      categories: "lips"
    },
    quantity: 1
  },
  {
    id: 20,
    name: "Crema de Noche Reparadora",
    price: 20000,
    images: ["/products/imagen20.webp"],
    description:
        "La Crema de Noche Reparadora trabaja durante la noche para reparar y rejuvenecer la piel, proporcionando un tratamiento intensivo mientras duermes. Formulada con ingredientes regenerativos, esta crema ayuda a reducir los signos de fatiga y estrés, dejando la piel más firme y suave al despertar. Ideal para todo tipo de pieles, especialmente aquellas que buscan un tratamiento nocturno efectivo para combatir los signos del envejecimiento.",
    favorite: true,
    category: "Rostro",
    url: {
      categories: "facial"
    },
    quantity: 1
  },
];

export default arrayProducts;
