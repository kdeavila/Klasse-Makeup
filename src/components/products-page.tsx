"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import arrayProducts from "@/data/products";
import { Eye, ShoppingCart } from "lucide-react";
import { hashId } from "@/utils/hash";
import { formatCurrency } from "@/utils/format-currency";

const PRODUCTS_PER_PAGE = 8;

export default function Products() {
  const [visibleProducts, setVisibleProducts] = useState(
    arrayProducts.slice(0, PRODUCTS_PER_PAGE)
  );
  const [nextIndex, setNextIndex] = useState(PRODUCTS_PER_PAGE);

  const loadMoreProducts = () => {
    const newProducts = arrayProducts.slice(
      nextIndex,
      nextIndex + PRODUCTS_PER_PAGE
    );
    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setNextIndex((prevIndex) => prevIndex + PRODUCTS_PER_PAGE);
  };

  return (
    <>
      <article className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-section-bottom">
        {visibleProducts.map((product) => {
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

      <Button
        className="block mx-auto hover:bg-muted"
        variant="outline"
        onClick={loadMoreProducts}
      >
        Ver más
      </Button>
    </>
  );
}
