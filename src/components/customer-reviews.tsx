import { CardReview } from "./card-review";

interface Review {
    id: number;
    name: string;
    position: string;
    avatar: string;
    message: string;
    rating: number;
}

export default function CustomerReviews() {
    const REVIEWS: Review[] = [
        {
            id: 1,
            name: "Juan Pérez",
            position: "Maquillador Profesional",
            avatar: "/avatar/avatar1.webp",
            message: "El proceso de compra fue muy sencillo y rápido. Desde que entré al sitio, la navegación fue fluida y encontré todo lo que necesitaba sin complicaciones. Los productos llegaron a tiempo y en perfectas condiciones. ¡Definitivamente compraré de nuevo! Estoy muy satisfecho con la calidad y el servicio que ofrecen.",
            rating: 5,
        },
        {
            id: 2,
            name: "María López",
            position: "Bloguera de Belleza",
            avatar: "/avatar/avatar2.webp",
            message: "La selección de maquillaje es increíble, realmente hay algo para cada tipo de piel y estilo. Me encantó que el sitio te ofrezca recomendaciones personalizadas basadas en tus preferencias. Sin embargo, el envío tardó un poco más de lo esperado, lo que fue un pequeño inconveniente. A pesar de eso, la calidad de los productos vale la pena la espera.",
            rating: 4,
        },
        {
            id: 3,
            name: "Carlos García",
            position: "Estilista",
            avatar: "/avatar/avatar3.webp",
            message: "Compré varios productos y la calidad superó mis expectativas. Cada artículo llegó bien empaquetado y listo para usar. El proceso de pago fue seguro y fácil, lo cual es muy importante para mí. Sin embargo, me gustaría ver más opciones de pago, ya que eso haría la experiencia aún más conveniente para clientes como yo que prefieren diferentes métodos.",
            rating: 4,
        },
        {
            id: 4,
            name: "Laura Martínez",
            position: "Influencer de Maquillaje",
            avatar: "/avatar/avatar4.webp",
            message: "Si bien el maquillaje es excelente y de alta calidad, tuve problemas con el seguimiento del envío. No recibí actualizaciones frecuentes y eso me generó cierta ansiedad. La atención al cliente fue buena, aunque tardaron en responder a mis consultas. Sería genial si mejoraran este aspecto, ya que me gustaría que el servicio fuera tan impecable como los productos que ofrecen.",
            rating: 3,
        },
    ];

    return (
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            {REVIEWS.map(review => (<CardReview key={review.id} {...review} />))}
        </div>
    );
}


