import { CarouselProducts } from "@/components/carousel";
import Products from "@/components/products";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24 w-full max-w-6xl mx-auto text-center">
      <section className="flex flex-col items-center mb-8 px-8 xl:px-0">
        <SectionHeader
          title="Productos estrellas"
          description="Algunos de nuestros productos más vendidos:"
        />
        <CarouselProducts />
      </section>
      <Separator className="mb-8" />
      <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-8 xl:px-0 ">
        <SectionHeader
          title="Nuestros productos"
          description="La mejor elección de productos para tu makeup:"
        />
        <Products />
      </section>
    </main>
  );
}
