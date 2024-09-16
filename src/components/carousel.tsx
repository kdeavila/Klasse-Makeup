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
    <div className="w-full mb-section-bottom">
      <div className="w-full flex justify-center items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {favoriteProducts
              .map((product) => (
                <CarouselItem
                  key={product.id}
                  className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Link
                    href={`/products/${hashId(product.id)}`}
                    className="group"
                  >
                    <Card className="w-full h-96 relative bg-transparent">
                      <Image
                        className="block w-full h-full aspect-square object-cover"
                        width={250}
                        height={250}
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="absolute overflow-hidden inset-0 p-8 text-balance bg-background/90 grid place-content-center text-2xl font-semibold transition-all opacity-0 group-hover:opacity-100">
                        {product.name}
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))
              .slice(0, 6)}
          </CarouselContent>
          <CarouselPrevious className="hidden 2xl:inline-flex" />
          <CarouselNext className="hidden 2xl:inline-flex" />
        </Carousel>
      </div>
    </div>
  );
}
