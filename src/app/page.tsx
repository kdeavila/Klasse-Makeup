import { CardDemo } from "@/components/card-product";
import { CarouselProducts } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-20 text-center">
      <section className="flex flex-col items-center p-4 mb-8">
        <h1 className="text-3xl font-semibold">Productos estrellas</h1>
        <p className="text-lg text-balance text-muted-foreground text-center mb-4">
          Algunos de nuestros productos mas vendidos para ti:
        </p>

        <div className="w-full">
          <div className="w-full px-10 flex justify-center items-center">
            <CarouselProducts />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center max-w-5xl mx-auto px-10">
        <h1 className="text-3xl font-semibold">Nuestros productos</h1>
        <p className="text-lg text-balance text-muted-foreground text-center mb-4">
          La mejor elección de productos para tu makeup:
        </p>
        
        <article className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <CardDemo className="w-full" />
          <CardDemo className="w-full" />
          <CardDemo className="w-full" />
        </article>

        <Link href="/read-more">
          <Button className="block mx-auto" variant="default">
            Leer mas
          </Button>
        </Link>
      </section>
    </main>
  );
}
