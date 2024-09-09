"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
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

const favoriteProducts = arrayProducts
  .filter((product) => product.favorite)
  .slice(0, 6);

export function CarouselProducts() {
  return (
    <div className="w-full">
      <div className="w-full px-14 flex justify-center items-center xl:px-0">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {favoriteProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="overflow-hidden h-96">
                  <CardContent className="w-full h-full group">
                    <Link href={`/products/${hashId(product.id)}`}>
                      <Image
                        loading="lazy"
                        width={350}
                        height={450}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
