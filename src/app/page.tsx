import { CarouselProducts } from "@/components/carousel";
import { FAQ } from "@/components/faq";
import HeroSection from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products";
import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mt-20 text-center">
      <MessageSlider />
      <HeroSection />

      <section className="w-full max-w-6xl mx-auto flex flex-col items-center mb-8 px-8 xl:px-0">
        <SectionHeader
          title="Productos estrellas ✨"
          description="Algunos de nuestros productos más vendidos:"
        />
        <CarouselProducts />
        <Separator />
      </section>
      <section
        id="products"
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center mb-8 px-8 xl:px-0 "
      >
        <SectionHeader
          title="Nuestros productos"
          description="La mejor elección de productos para tu makeup:"
        />
        <Products />
        <Separator />
      </section>

      <section className="w-full max-w-6xl mx-auto px-8 xl:px-0">
        <SectionHeader
          title="Preguntas frecuentes"
          description="ALgunas dudas frecuentes de nuestra tienda:"
        />
        <FAQ />
      </section>
    </main>
  );
}
