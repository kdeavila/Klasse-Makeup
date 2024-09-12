import Image from "next/image";
import { BrandValues } from "./components/brand-values";
import { HeartHandshakeIcon, Settings, Users } from "lucide-react";
import { ImagesAboutUs } from "./components/image-about";

const imagesAboutUs = [
  {
    id: 1,
    src: "/about-us/image1.jpg",
  },
  {
    id: 2,
    src: "/about-us/image2.jpg",
  },
  {
    id: 3,
    src: "/about-us/image3.jpg",
  },
  {
    id: 4,
    src: "/about-us/image4.jpg",
  },
];

export default function AboutUs() {
  return (
    <main className="mt-16 text-center">
      <section className="py-16 px-8 xl:px-0">
        <div className="w-full max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-semibold mb-4 text-primary">
            ¿Quiénes somos?
          </h1>
          <p className="text-muted-foreground text-balance xl:text-lg">
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

        <div className="w-full max-w-6xl mx-auto">
          <ul className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          </ul>
        </div>
      </section>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
        {imagesAboutUs.map((image) => {
          return <ImagesAboutUs key={image.id} {...image}  />;
        })}
      </div>
    </main>
  );
}
