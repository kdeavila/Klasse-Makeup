import { BrandValues } from "./components/brand-values";
import { HeartHandshakeIcon, Settings, ShoppingBag, Users } from "lucide-react";
import { ImagesAboutUs } from "./components/image-about";
import { Section } from "@/components/section";

const imagesAboutUs = [
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

export default function AboutUs() {
  return (
    <main className="text-center">
      <Section title="¿Qué es EcoShop?" description="Estamos aquí gracias a ti." className="pt-8">
        <div className="w-full max-w-2xl mx-auto mb-section-bottom">
          <p className="text-base text-muted-foreground text-left text-balance md:text-center">
            En EcoShop, somos una startup apasionada por transformar la belleza
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
            <BrandValues
              title="Innovación Constante"
              description="Estamos a la vanguardia, ofreciendo productos frescos y emocionantes que marcan tendencias."
            >
              <Settings strokeWidth={2} size={55} />
            </BrandValues>

            <BrandValues
              title="Inclusividad y Diversidad"
              description="Celebramos la belleza en todas sus formas y ofrecemos productos para todos los tonos y estilos."
            >
              <Users strokeWidth={2} size={55} />
            </BrandValues>

            <BrandValues
              title="Pasión por el Servicio"
              description="Estamos dedicados a ofrecer un servicio excepcional y a superar tus expectativas."
            >
              <HeartHandshakeIcon strokeWidth={2} size={55} />
            </BrandValues>

            <BrandValues
              title="Sustentabilidad"
              description="Nos comprometemos a brindar productos de alta calidad y una experiencia de compra que se adapte a tus necesidades."
            >
              <ShoppingBag strokeWidth={2} size={55} />
            </BrandValues>
          </ul>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
          {imagesAboutUs.map((image) => {
            return <ImagesAboutUs key={image.id} {...image} />;
          })}
        </div>
      </Section>
    </main>
  );
}
