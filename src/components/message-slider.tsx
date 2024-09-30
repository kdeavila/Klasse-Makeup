"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const messages = [
  "¡Descubre la magia de nuestro maquillaje! ✨",
  "¡No te pierdas el 40% de descuento en productos seleccionados! 💄",
  "Transforma tu look con nuestras últimas colecciones. 🌟",
];

export function MessageSlider() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {messages.map((message, i) => (
              <CarouselItem
                key={i}
                className="flex items-center justify-center bg-primary text-primary-foreground dark:bg-background dark:text-foreground"
              >
                <div className="w-full grid place-content-center text-base text-balance p-1 xs:p-2">
                  {message}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
