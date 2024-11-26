import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function VideoCategories() {

  const CATEGORIES = [
    {
      id: 1,
      name: "Ojos",
      src: "/video-category/imagen1.png",
      href: "products/eyes",
    },
    {
      id: 2,
      name: "Labios",
      src: "/video-category/imagen2.png",
      href: "products/lips",
    },
    {
      id: 3,
      name: "Accesorios",
      src: "/video-category/imagen3.png",
      href: "products/accessories",
    },
    {
      id: 4,
      name: "Rostro",
      src: "/video-category/imagen4.png",
      href: "products/facial",
    },
  ];
  return (
    <div className="w-full grid gap-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full">
          <video
            src="/video-category/video-tiktok.mp4"
            autoPlay
            loop
            controls
            muted
            className="w-full h-full object-cover"
          >
          </video>
        </div>

        <aside className="basis-1/3 shrink-0">
          <Card className="h-full p-4 text-left hover:border-[#ec4599] transition-colors duration-150">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Detalles del Look 💗</h2>
              <ul className="space-y-2 mb-8">
                <li className="text-sm text-muted-foreground">Base ligera para un acabado natural</li>
                <li className="text-sm text-muted-foreground">Iluminador en puntos estratégicos</li>
                <li className="text-sm text-muted-foreground">Cejas peinadas hacia arriba</li>
                <li className="text-sm text-muted-foreground">Labios con brillo transparente</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Intrucciones: </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">Para lograr un acabado natural, comienza aplicando una base ligera con una esponja húmeda o con los dedos, asegurándote de difuminar bien. Luego, utiliza un iluminador en puntos estratégicos como el arco de las cejas, los pómulos y el puente de la nariz, difuminando suavemente con los dedos.</p>
            </CardContent>
          </Card>
        </aside>
      </div>

      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.map((product) => {
          const { id, name, src, href } = product;

          return (
            <Link key={id} href={href}>
              <Card className="w-full flex flex-col items-center gap-4 p-4 group bg-background hover:bg-muted hover:border-[#ec4599] transition-colors duration-200">
                <CardHeader className="w-36 p-0">
                  <Image
                    className="w-full h-full aspect-square object-cover group-hover:scale-105 duration-300"
                    src={src}
                    width={400}
                    height={400}
                    alt={name}
                  />
                </CardHeader>

                <CardContent className="flex flex-col items-center space-y-2">
                  <span className="inline-flex items-center gap-1 text-lg font-medium">
                    {name} <ChevronRight width={16} strokeWidth={2} />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
