import { CarouselProducts } from "@/components/carousel";
import GallerySection from "@/components/gallery-section";
import Hero from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products-page";
import { Section } from "@/components/section";
import { VideoCategories } from "@/components/video-categories";
import arrayProducts from "@/data/products";
import Link from "next/link";

export default function Home() {
  const products = arrayProducts.slice(0, 8);

  return (
    <main className="text-center">
      <MessageSlider />
      <Hero />

      <Section
        title="Productos populares"
        description="Algunos de nuestros productos más vendidos:"
      >
        <CarouselProducts />
      </Section>

      <Section
        title="Nuestros productos"
        description="La mejor elección de productos para tu makeup:"
      >
        <Products arrayProducts={products}></Products>
        <Link className="text-sm" href="/products">
          Ver todos los productos ...
        </Link>
      </Section>

      <Section
        title="Look TikTok"
        description="Comparte un video utilizando nuestros productos"
      >
        <VideoCategories />
      </Section>

      <GallerySection />
    </main>
  );
}
