"use client";
import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import arrayProducts from "@/data/products";
import { hashId } from "@/utils/hash";

const favoriteProducts = arrayProducts.filter((product) => product.favorite);

export function CarouselProducts() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {favoriteProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  href={`/products/product/${hashId(product.id)}`}
                  className="group"
                >
                  <Card className="w-full h-96 relative bg-transparent">
                    <Image
                      className="block w-full h-full aspect-square object-cover"
                      width={800}
                      height={800}
                      src={product.images[0]}
                      alt={product.name}
                    />
                    <div className="absolute overflow-hidden inset-0 p-6 text-left bg-background/70 flex items-end text-3xl uppercase line-clamp-2 font-bold transition-all opacity-0 group-hover:opacity-100">
                      {product.name}
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute -translate-x-2 right-0" />
          <CarouselPrevious className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute translate-x-2 left-0" />
        </Carousel>
      </div>
    </div>
  );
}
