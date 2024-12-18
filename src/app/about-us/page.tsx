import { BrandValues } from "./components/brand-values";
import { HeartHandshakeIcon, Settings, ShoppingBag, Users } from "lucide-react";
import { ImagesAboutUs } from "./components/image-about";
import { Section } from "@/components/section";
import Link from "next/link";

export default function AboutUs() {
    const IMAGES_ABOUT_US = [
        {
            id: 1,
            src: "/about-us/image1.webp",
        },
        {
            id: 2,
            src: "/about-us/image2.webp",
        },
        {
            id: 3,
            src: "/about-us/image3.webp",
        },
        {
            id: 4,
            src: "/about-us/image4.webp",
        },
    ];

    const sizeIcon = 55;

    const BRAND_VALUES = [
        {
            title: "Innovación Constante",
            description: "Estamos a la vanguardia, ofreciendo productos frescos y emocionantes que marcan tendencias.",
            icon: <Settings strokeWidth={2} size={sizeIcon} />
        },
        {
            title: "Inclusividad y Diversidad",
            description: "Celebramos la belleza en todas sus formas y ofrecemos productos para todos los tonos y estilos.",
            icon: <Users strokeWidth={2} size={sizeIcon} />
        },
        {
            title: "Pasión por el Servicio",
            description: "Estamos dedicados a ofrecer un servicio excepcional y a superar tus expectativas.",
            icon: <HeartHandshakeIcon strokeWidth={2} size={sizeIcon} />
        },
        {
            title: "Sustentabilidad",
            description: "Nos comprometemos a brindar productos de alta calidad y una experiencia de compra que se adapte a tus necesidades.",
            icon: <ShoppingBag strokeWidth={2} size={sizeIcon} />
        }];

    return (
        <main className="text-center">
            <Section>
                <Link className="w-72 mb-section-bottom" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 976 200"
                    >
                        <path
                            id="KLASSE"
                            fill="currentColor"
                            d="M106.691,126.087L80.427,80.875,85.8,74.112l0,0c25.014-31.519,55.6-60.906,67.856-68.388V3.406c-17.939,0-53.352.021-70.343,0v2.32c31.334,19.15,21.479,41.4.06,68.388l0,0L45.523,121.8V67.907c0.047-18.761.866-55.543,11.737-62.182V3.406H-0.21v2.32c10.87,6.639,11.69,43.423,11.737,62.182v64.235C11.48,150.9,10.66,187.686-.21,194.324v2.32H57.26v-2.32c-10.87-6.638-11.69-43.422-11.737-62.182v-7.287L60.8,105.606l11.813,20.336-0.007-.008c23.061,39.695,33.4,60.906,21.144,68.389v2.319h65.665v-2.319C147.181,186.853,124.116,156.052,106.691,126.087Zm122.523,68.172h-14.1V67.907c0.047-18.761.868-55.543,11.739-62.182V3.406H169.382v2.32c10.87,6.639,11.69,43.423,11.736,62.182v64.235c-0.046,18.76-.866,55.544-11.736,62.182v2.32H301.191v-48.33h-2.36c-23.68,37.2-54.26,45.945-69.617,45.945h0Zm206.531-68.321L394.34,3.406h-34l10.513,31.111L339.961,125.94c-5.2,15.4-23.374,60.9-35.629,68.384v2.32h60.934v-2.32c-37.863-23.258-27.96-53.34-22.875-68.388l8.353-24.718h42.649l8.5,25.141c5.215,15.437,20.78,61.781,12.012,67.965v2.32h57.47v-2.32C462.529,188.086,449.056,165.334,435.745,125.938Zm-84.2-27.106,20.519-60.723,20.518,60.723H351.549ZM514.942,37.071c0-27.833,24.986-35.077,46.03-35.077a72.886,72.886,0,0,1,69.8,52.735h2.361l-0.2-34.774C612.919,6.463,586.793-.394,560.972-0.394c-35.8,0-79.566,13.343-79.566,52.109,0,54.274,119.944,61.576,119.944,109.719,0,27.29-18.828,36.623-39.871,36.623-28.219,0-67.33-17.628-77.712-52.735h-2.361l0.2,34.774c20.007,13.491,54.049,20.348,79.87,20.348,35.8,0,79.566-13.342,79.566-52.109,0-51.536-126.1-61.8-126.1-111.265h0Zm178.459,0c0-27.833,24.986-35.077,46.03-35.077a72.886,72.886,0,0,1,69.8,52.735h2.361l-0.2-34.774C791.378,6.463,765.252-.394,739.431-0.394c-35.8,0-79.566,13.343-79.566,52.109,0,54.274,119.944,61.576,119.944,109.719,0,27.29-18.828,36.623-39.871,36.623-28.219,0-67.33-17.628-77.712-52.735h-2.361l0.2,34.774c20.007,13.491,54.049,20.348,79.87,20.348,35.8,0,79.566-13.342,79.566-52.109,0-51.536-126.1-61.8-126.1-111.265h0ZM903.97,194.259h-21.3V93.765h19.206c24.194,0,40.568,11.51,48.185,23.548h2.361V67.833h-2.361c-7.619,12.038-23.991,23.548-48.185,23.548H882.672V5.79h14.835c15.357,0,45.936,8.748,69.614,45.946h2.361V3.406H836.938v2.32c10.871,6.639,11.69,43.423,11.737,62.182v64.235c-0.047,18.76-.866,55.544-11.737,62.182v2.32H975.946v-48.33h-2.361c-23.678,37.2-54.258,45.945-69.615,45.945h0Z"
                        />
                    </svg>
                </Link>

                <div className="w-full max-w-3xl mx-auto mb-section-bottom">
                    <p className="text-base leading-relaxed text-muted-foreground text-left md:text-center">
                        En KLASSE, somos una startup apasionada por transformar la belleza
                        en una experiencia personal y única. Desde nuestros primeros pasos,
                        nos hemos comprometido a ofrecer productos de maquillaje y
                        accesorios que no solo realzan tu belleza exterior, sino que también
                        te inspiran a sentirte increíble por dentro. Aunque estamos dando
                        nuestros primeros pasos, nuestro sueño es crecer contigo,
                        expandiendo nuestra oferta con cada nuevo lanzamiento y evolución en
                        el mundo del maquillaje.
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto mb-section-bottom">
                    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {BRAND_VALUES.map((brand, index) => {
                            return (
                                <BrandValues key={index} title={brand.title} description={brand.description}>
                                    {brand.icon}
                                </BrandValues>
                            )
                        })}
                    </ul>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                    {IMAGES_ABOUT_US.map((image) => {
                        return <ImagesAboutUs key={image.id} {...image} />;
                    })}
                </div>
            </Section>
        </main>
    );
}
