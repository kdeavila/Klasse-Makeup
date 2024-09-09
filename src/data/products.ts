const arrayProducts = [
  {
    id: 1,
    name: "Brocha RubvFace",
    price: 12500,
    image: "/imagen1.jpg",
    description:
      "La Brocha RubvFace es una herramienta esencial para cualquier amante del maquillaje. Fabricada con cerdas sintéticas de alta calidad, esta brocha permite una aplicación uniforme y suave de bases, polvos y otros productos. Su diseño ergonómico asegura comodidad durante el uso, mientras que su forma permite alcanzar áreas difíciles del rostro con facilidad. Ideal para lograr un acabado impecable, sin líneas visibles ni parches.",
    favorite: false,
  },
  {
    id: 2,
    name: "Paleta de Sombras Glamour",
    price: 29900,
    image: "/imagen2.jpg",
    description:
      "La Paleta de Sombras Glamour ofrece una impresionante colección de colores vibrantes y duraderos, perfectos para crear looks de maquillaje espectaculares. Con una gama que incluye tonos cálidos, fríos y neutros, esta paleta es ideal tanto para el uso diario como para ocasiones especiales. Cada sombra está formulada con pigmentos intensos y una textura suave que se difumina fácilmente, garantizando una aplicación uniforme y de larga duración.",
    favorite: false,
  },
  {
    id: 3,
    name: "Delineador Líquido Precision",
    price: 8500,
    image: "/imagen3.jpg",
    description:
      "El Delineador Líquido Precision está diseñado para ofrecer precisión y control en cada trazo. Con su fórmula de secado rápido y resistente al agua, este delineador garantiza una aplicación duradera y sin manchas. Su punta ultra fina permite crear líneas finas y definidas, perfectas para delinear tanto la línea de las pestañas como para crear detalles intrincados en el maquillaje. Ideal para looks sutiles o dramáticos, este delineador es un must-have en cualquier colección de maquillaje.",
    favorite: false,
  },
  {
    id: 4,
    name: "Base de Maquillaje Perfect Skin",
    price: 22000,
    image: "/imagen4.jpg",
    description:
      "La Base de Maquillaje Perfect Skin proporciona una cobertura completa mientras mantiene un acabado natural y radiante. Su fórmula ligera se adapta a diferentes tipos de piel, proporcionando una textura uniforme y sin imperfecciones. Enriquecida con ingredientes hidratantes, esta base ayuda a mantener la piel fresca y cómoda durante todo el día. Perfecta para todos los tonos de piel, se puede aplicar con brocha, esponja o dedos para un acabado personalizado.",
    favorite: false,
  },
  {
    id: 5,
    name: "Labial Mate Luxury",
    price: 16000,
    image: "/imagen5.jpg",
    description:
      "El Labial Mate Luxury ofrece un acabado mate elegante con una fórmula hidratante que evita la sequedad. Disponible en una variedad de tonos sofisticados, este labial proporciona una cobertura completa y duradera sin necesidad de reaplicaciones frecuentes. Su textura cremosa se desliza suavemente sobre los labios, dejándolos con un color intenso y un acabado aterciopelado. Ideal para cualquier ocasión, desde un día en la oficina hasta una salida nocturna.",
    favorite: true,
  },
  {
    id: 6,
    name: "Pincel para Contorno Elite",
    price: 9500,
    image: "/imagen6.jpg",
    description:
      "El Pincel para Contorno Elite es una herramienta especializada diseñada para esculpir y definir el rostro con precisión. Fabricado con cerdas suaves pero firmes, este pincel permite una aplicación uniforme de polvos y cremas para contornear. Su forma angular se adapta perfectamente a los contornos del rostro, facilitando la creación de sombras y resaltados que realzan la estructura facial. Ideal para maquillaje de día o noche, este pincel es esencial para lograr un acabado profesional.",
    favorite: false,
  },
  {
    id: 7,
    name: "Corrector de Ojeras Pro",
    price: 10500,
    image: "/imagen7.jpg",
    description:
      "El Corrector de Ojeras Pro está formulado para proporcionar una cobertura completa de ojeras y manchas con una textura ligera. Su fórmula enriquecida con ingredientes que iluminan y rejuvenecen el área de los ojos ayuda a reducir la apariencia de fatiga. Su aplicador preciso facilita la aplicación y la mezcla, logrando un acabado natural que se mantiene fresco durante todo el día. Ideal para todos los tipos de piel, este corrector es perfecto para un look radiante y descansado.",
    favorite: true,
  },
  {
    id: 8,
    name: "Polvo Translúcido HD",
    price: 13000,
    image: "/imagen8.jpg",
    description:
      "El Polvo Translúcido HD es ideal para fijar el maquillaje y controlar el brillo durante todo el día. Su fórmula ultrafina se difumina perfectamente en la piel, proporcionando un acabado mate y suave. Diseñado para ser invisible en las fotos y en persona, este polvo ayuda a difuminar los poros y proporciona una textura lisa. Perfecto para sellar bases, correctores y para retoques durante el día, es una excelente adición a cualquier rutina de maquillaje.",
    favorite: false,
  },
  {
    id: 9,
    name: "Máscara de Pestañas Extremo Volumen",
    price: 14000,
    image: "/imagen9.jpg",
    description:
      "La Máscara de Pestañas Extremo Volumen está formulada para ofrecer un volumen y definición excepcionales. Su cepillo innovador separa y recubre cada pestaña desde la raíz hasta las puntas, creando un look de pestañas largas y voluminosas. La fórmula resistente al agua garantiza que el maquillaje se mantenga intacto durante todo el día, sin desmoronarse ni manchar. Ideal para un look dramático o para un uso diario, esta máscara es un básico en cualquier colección de maquillaje.",
    favorite: false,
  },
  {
    id: 10,
    name: "Crema Hidratante Facial Glow",
    price: 19000,
    image: "/imagen10.jpg",
    description:
      "La Crema Hidratante Facial Glow proporciona una hidratación profunda mientras aporta un efecto luminoso a la piel. Su fórmula ligera y no grasa se absorbe rápidamente, dejando la piel suave y radiante. Enriquecida con ingredientes que mejoran la textura de la piel y proporcionan una hidratación duradera, esta crema es perfecta para el uso diario. Ideal para todo tipo de piel, especialmente para aquellas que buscan un resplandor saludable y una hidratación intensiva.",
    favorite: true,
  },
  {
    id: 11,
    name: "Cepillo para Cejas BrowMaster",
    price: 7800,
    image: "/imagen11.jpg",
    description:
      "El Cepillo para Cejas BrowMaster está diseñado para peinar y definir las cejas con precisión. Su diseño de doble función incluye un cepillo para alinear y un peine para difuminar y fijar el producto. Ideal para mantener las cejas en su lugar durante todo el día, este cepillo es perfecto para lograr un look natural y bien cuidado. Fabricado con materiales duraderos y de alta calidad, es una herramienta esencial en cualquier rutina de belleza.",
    favorite: false,
  },
  {
    id: 12,
    name: "Lápiz Labial Hidratante",
    price: 15500,
    image: "/imagen12.jpg",
    description:
      "El Lápiz Labial Hidratante combina un color vibrante con una fórmula enriquecida que hidrata los labios. Disponible en varios tonos, este labial ofrece un acabado brillante y una sensación cómoda durante todo el día. Su textura suave se desliza fácilmente y proporciona una cobertura uniforme. Ideal para aquellos que buscan un labial que no solo ofrezca color, sino también beneficios hidratantes para mantener los labios suaves y bien cuidados.",
    favorite: true,
  },
  {
    id: 13,
    name: "Gel Fijador de Cejas",
    price: 8900,
    image: "/imagen13.jpg",
    description:
      "El Gel Fijador de Cejas asegura que tus cejas se mantengan en su lugar durante todo el día. Su fórmula transparente se adapta a cualquier color de cejas y proporciona una fijación duradera sin dejar residuos. Ideal para lograr un look pulido y natural, este gel es fácil de aplicar y se seca rápidamente. Perfecto para mantener las cejas en su lugar y darles un acabado definido y ordenado.",
    favorite: false,
  },
  {
    id: 14,
    name: "Exfoliante Facial Suave",
    price: 11000,
    image: "/imagen14.jpg",
    description:
      "El Exfoliante Facial Suave está formulado para eliminar suavemente las células muertas y las impurezas de la piel. Su fórmula contiene partículas finas que exfolian sin causar irritación, dejando la piel fresca y renovada. Ideal para el uso regular, este exfoliante ayuda a mejorar la textura de la piel y a preparar el rostro para la aplicación de otros productos de cuidado. Perfecto para todo tipo de piel, especialmente para aquellas que buscan una exfoliación suave y eficaz.",
    favorite: true,
  },
  {
    id: 15,
    name: "Set de Brochas Profesionales",
    price: 35000,
    image: "/imagen15.jpg",
    description:
      "El Set de Brochas Profesionales incluye una selección completa de brochas de alta calidad para todas tus necesidades de maquillaje. Cada brocha está diseñada con cerdas suaves y duraderas que permiten una aplicación precisa y uniforme de polvos, líquidos y cremas. Este set incluye brochas para base, contorno, rubor, sombras y más, ofreciendo herramientas esenciales para lograr un acabado profesional. Ideal tanto para principiantes como para maquilladores experimentados.",
    favorite: false,
  },
  {
    id: 16,
    name: "Serum Antienvejecimiento",
    price: 22000,
    image: "/imagen16.jpg",
    description:
      "El Serum Antienvejecimiento está formulado para combatir los signos del envejecimiento con ingredientes activos que rejuvenecen y revitalizan la piel. Su fórmula concentrada penetra profundamente para reducir la apariencia de arrugas, líneas finas y manchas. Ideal para todo tipo de piel, este serum ayuda a mejorar la firmeza y elasticidad, proporcionando una piel más joven y radiante.",
    favorite: false,
  },
  {
    id: 17,
    name: "Mascarilla Facial Revitalizante",
    price: 17000,
    image: "/imagen17.jpg",
    description:
      "La Mascarilla Facial Revitalizante proporciona un tratamiento intensivo para revitalizar y energizar la piel. Su fórmula rica en nutrientes y antioxidantes ayuda a combatir la fatiga y a mejorar la luminosidad. Ideal para usar una o dos veces por semana, esta mascarilla deja la piel suave, hidratada y visiblemente rejuvenecida.",
    favorite: false,
  },
  {
    id: 18,
    name: "Lápiz de Ojos Waterproof",
    price: 9500,
    image: "/imagen18.jpg",
    description:
      "El Lápiz de Ojos Waterproof está diseñado para proporcionar un color intenso y duradero que resiste el agua y el sudor. Su fórmula de larga duración se desliza suavemente sobre los párpados, permitiendo una aplicación precisa y sin manchas. Ideal para un look que se mantiene impecable durante todo el día, desde el gimnasio hasta la noche.",
    favorite: false,
  },
  {
    id: 19,
    name: "Brillo Labial Glossy Shine",
    price: 12000,
    image: "/imagen19.jpg",
    description:
      "El Brillo Labial Glossy Shine ofrece un acabado brillante y sedoso con una fórmula hidratante que suaviza los labios. Disponible en una variedad de tonos luminosos, este brillo labial proporciona una cobertura ligera y un efecto volumizador. Ideal para realzar cualquier look de maquillaje, desde el diario hasta el más glamuroso.",
    favorite: true,
  },
  {
    id: 20,
    name: "Crema de Noche Reparadora",
    price: 20000,
    image: "/imagen20.jpg",
    description:
      "La Crema de Noche Reparadora trabaja durante la noche para reparar y rejuvenecer la piel. Su fórmula rica en activos regeneradores y nutrientes esenciales ayuda a mejorar la textura de la piel y a reducir la aparición de líneas finas. Ideal para usar antes de dormir, esta crema deja la piel más suave y revitalizada al despertar.",
    favorite: false,
  },
];

export default arrayProducts;
