import { CarouselProducts } from "@/components/carousel";
import Hero from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mt-16 text-center">
      <MessageSlider />
      <Hero />

      <Section
        title="Productos populares"
        description="Algunos de nuestros productos más vendidos:"
      >
        <CarouselProducts />
        <Separator />
      </Section>

      <Section
        title="Nuestros productos"
        description="La mejor elección de productos para tu makeup:"
      >
        <Products />
        <Separator />
      </Section>
    </main>
  );
}
