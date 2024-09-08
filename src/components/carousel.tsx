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

const images = [
  { id: 1, src: "/imagen1.jpg" },
  { id: 2, src: "/imagen2.jpg" },
  { id: 3, src: "/imagen3.jpg" },
  { id: 4, src: "/imagen4.jpg" },
  { id: 5, src: "/imagen5.jpg" },
];

images.map((image) => {
  console.log(image.src);
});

export function CarouselProducts() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
              <Card className="overflow-hidden h-[435px]">
                <CardContent className="w-full h-full">
                  <Link href={`/products/${image.id}`}>
                    <img
                      src={image.src}
                      alt="image"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
