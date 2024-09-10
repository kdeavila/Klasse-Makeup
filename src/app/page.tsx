import { CarouselProducts } from "@/components/carousel";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products";
import SectionHeader from "@/components/section-header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mt-20 text-center">
      <MessageSlider />

      <section className="w-full max-w-6xl mx-auto flex flex-col items-center mb-8 px-8 xl:px-0">
        <SectionHeader
          title="Productos estrellas"
          description="Algunos de nuestros productos más vendidos:"
        />
        <CarouselProducts />
        <Separator />
      </section>

      <section className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-8 xl:px-0 ">
        <SectionHeader
          title="Nuestros productos"
          description="La mejor elección de productos para tu makeup:"
        />
        <Products />
      </section>
    </main>
  );
}
