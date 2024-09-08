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

const images = [
  { id: 1, src: "/imagen1.jpg" },
  { id: 2, src: "/imagen2.jpg" },
  { id: 3, src: "/imagen3.jpg" },
  { id: 4, src: "/imagen4.jpg" },
  { id: 5, src: "/imagen5.jpg" },
  { id: 6, src: "/imagen6.jpg" },
  { id: 7, src: "/imagen7.jpg" },
  { id: 8, src: "/imagen8.jpg" },
  { id: 9, src: "/imagen9.jpg" },
];

images.map((image) => {
  console.log(image.src);
});

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
            {images.map((image) => (
              <CarouselItem
                key={image.id}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="overflow-hidden h-[435px]">
                  <CardContent className="w-full h-full">
                    <Link href={`/products/${image.id}`}>
                      <Image
                        width={350}
                        height={450}
                        src={image.src}
                        alt="image"
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
