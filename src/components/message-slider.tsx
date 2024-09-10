"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const messages = [
  "¡Descubre la magia de nuestro maquillaje! ✨",
  "¡No te pierdas el 40% de descuento en productos seleccionados! 💄",
  "Transforma tu look con nuestras últimas colecciones. 🌟",
];

export function MessageSlider() {
  return (
    <div className="w-full mb-8">
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
          className="w-full"
        >
          <CarouselContent>
            {messages.map((message, i) => (
              <CarouselItem
                key={i}
                className="flex items-center justify-center bg-muted text-muted-foreground"
              >
                <div className="w-full grid place-content-center p-3 text-base text-balance">
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
