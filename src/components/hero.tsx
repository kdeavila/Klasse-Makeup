"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-8rem)] min-h-96 flex items-center text-left overflow-hidden mb-section-bottom lg:h-[calc(100vh-15rem)]">
      <div className="absolute h-full w-full bottom-0 left-0 bg-gradient-to-r from-background to-background/15 z-10"></div>
      <picture className="absolute inset-0 w-full h-full z-0 blur-sm">
        <source media="(max-width: 468px)" srcSet="/hero-img-mobile.jpg" />
        <Image
          className="object-cover w-full h-full pointer-events-none"
          src={"/hero-img-desktop.jpg"}
          width={1920}
          height={1080}
          alt="Hero image"
        />
      </picture>

      <div className="relative z-20 px-8 grid grid-cols-4 w-full max-w-6xl mx-auto xl:px-0">
        <div className="w-full col-span-4 sm:col-span-3 lg:col-span-2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">
            ¡Descubre la Revolución de Klasse!
          </h1>
          <p className="text-base mb-6 text-balance">
            ¡Tu rutina de belleza está a punto de transformarse! Explora nuestra
            nueva línea Essential y dale un upgrade a tu look con productos
            innovadores y de alta calidad.
            <span className="font-semibold">
              ¡Haz clic ahora y embellece tu vida con Essential!
            </span>
          </p>

          <Link href="#products">
            <Button
              variant="default"
              className="font-semibold"
            >
              Ver productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
