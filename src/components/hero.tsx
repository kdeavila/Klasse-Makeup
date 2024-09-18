"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = isMobile
    ? [
        "/hero-slider/Banner-Guasha-mobile.jpg",
        "/hero-slider/Banner-Mobile-Bloomshell.jpg",
        "/hero-slider/Banner-ProductoMes-Septiembre-mobile.jpg",
        "/hero-slider/Banner-wonder-mobile.jpg",
      ]
    : [
        "/hero-slider/Banner-Guasha-pc.jpg",
        "/hero-slider/Banner-PC-Bloomshell.jpg",
        "/hero-slider/Banner-ProductoMes-Septiembre-pc.jpg",
        "/hero-slider/Banner-wonder-pc.jpg",
      ];

  return (
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
      className="w-full mb-section-bottom"
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="w-full h-72 pl-0 md:h-96 xl:h-[600px]"
          >
            <Image
              className="w-full h-full object-cover"
              src={image}
              width={1920}
              height={1080}
              alt="hero image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute -translate-x-2 right-0" />
      <CarouselPrevious className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute translate-x-2 left-0" />
    </Carousel>
  );
}
