import { CarouselProducts } from "@/components/carousel";
import Hero from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import arrayProducts from "@/data/products";
import { formatCurrency } from "@/utils/format-currency";
import { hashId } from "@/utils/hash";
import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
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
        <Separator />
      </Section>

      <Section
        title="Nuestros productos"
        description="La mejor elección de productos para tu makeup:"
      >
        <article className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-section-bottom">
          {products.map((product) => {
            return (
              <Card
                className="h-96 flex flex-col overflow-hidden group"
                key={product.id}
              >
                <div className="w-full h-full basis-1/2 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    src={product.images[0]}
                    height={300}
                    width={300}
                    alt={product.name}
                  />
                </div>

                <CardContent className="px-4 py-2 text-left grow">
                  <CardTitle className="text-lg leading-tight font-semibold line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <h2 className="text-lg text-foreground/80">
                    {formatCurrency(product.price)}
                  </h2>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="grid grid-cols-1 gap-2 p-4 pt-0">
                  <Link
                    href={`/products/product/${hashId(product.id)}`}
                    className="w-full block"
                  >
                    <Button variant="outline" className="w-full font-semibold">
                      <Eye width={18} strokeWidth={3} className="mr-2" />
                      Ver detalles
                    </Button>
                  </Link>

                  <Button
                    variant="default"
                    className="w-full font-semibold flex flex-row items-center"
                  >
                    <ShoppingCart width={18} strokeWidth={3} className="mr-2" />
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </article>

        <Link
          className="block items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mx-auto mb-section-bottom hover:bg-muted border border-input bg-background hover:text-accent-foreground p-2"
          href="/products"
        >
          Ver todos los productos
        </Link>
      </Section>
    </main>
  );
}
