import { CarouselProducts } from "@/components/carousel";
import { FAQ } from "@/components/faq";
import Hero from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products";
import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mt-16 text-center">
      <MessageSlider />
      <Hero />

      <section className="w-full max-w-6xl mx-auto flex flex-col items-center mb-section-bottom px-8 xl:px-0">
        <SectionHeader
          title="Productos populares"
          description="Algunos de nuestros productos más vendidos:"
        />
        <CarouselProducts />
        <Separator />
      </section>
      <section
        id="products"
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center mb-section-bottom px-8 xl:px-0 "
      >
        <SectionHeader
          title="Nuestros productos"
          description="La mejor elección de productos para tu makeup:"
        />
        <Products />
        <Separator />
      </section>

      <section className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-section-bottom">
        <SectionHeader
          title="Preguntas frecuentes"
          description="ALgunas dudas frecuentes de nuestra tienda:"
        />
        <FAQ />
      </section>
    </main>
  );
}
