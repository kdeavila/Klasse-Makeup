"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[35rem] flex items-center justify-items-start text-left overflow-hidden mb-8">
      <div className="absolute h-3/4 w-full bottom-0 left-0 bg-gradient-to-t from-background to-background/0 z-10"></div>
      <picture className="absolute inset-0 w-full h-full z-0">
        <source
          media="(max-width: 468px)"
          srcSet="/hero-img-mobile.webp"
        />
        <Image
          className="object-cover w-full h-full"
          src={"/hero-img-desktop.webp"}
          width={1920}
          height={1080}
          alt="Hero image"
        />
      </picture>

      <div className="relative z-20 px-8 grid grid-cols-4 w-full max-w-6xl mx-auto xl:px-0">
        <div className="w-full col-span-4 sm:col-span-3 lg:col-span-2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance text-neutral-950">
            ¡Descubre la Revolución de Klasse!
          </h1>
          <p className="text-base text-secondary-foreground mb-6 text-balance text-neutral-800">
            ¡Tu rutina de belleza está a punto de transformarse! Explora nuestra
            nueva línea Essential y dale un upgrade a tu look con productos
            innovadores y de alta calidad.{" "}
            <span className="font-semibold">
              ¡Haz clic ahora y embellece tu vida con Essential!
            </span>
          </p>

          <Link href="#products">
            <Button variant="default" className="font-semibold bg-neutral-950 text-neutral-50">
              Ver productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
