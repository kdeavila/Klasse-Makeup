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
      setIsMobile(window.innerWidth < 540);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = isMobile
    ? [
      "https://i.postimg.cc/65rLt8dJ/Banner-Guasha-mobile.jpg",
      "https://i.postimg.cc/YCtN9t34/Banner-Mobile-Bloomshell.jpg",
      "https://i.postimg.cc/1ztpGMbs/Banner-Producto-Mes-Septiembre-Mobile.jpg",
      "https://i.postimg.cc/0QKD3j84/Banner-wonder-Mobile.jpg",
    ]
    : [
      "https://i.postimg.cc/MGF1dV8R/Banner-Guasha-pc.jpg",
      "https://i.postimg.cc/pLkf53Gs/Banner-PC-Bloomshell.jpg",
      "https://i.postimg.cc/L5dLMS58/Banner-Producto-Mes-Septiembre-pc.jpg",
      "https://i.postimg.cc/QCp58zKk/Banner-wonder-pc.jpg",
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
            className="relative w-full h-72 pl-0 md:h-96 xl:h-[460px]"
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={image}
                alt="Hero slider image"
                priority
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute -translate-x-2 right-0" />
      <CarouselPrevious className="border-none text-pink-500 hover:text-pink-400 bg-transparent hover:bg-transparent absolute translate-x-2 left-0" />
    </Carousel>
  );
}
