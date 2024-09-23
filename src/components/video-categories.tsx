import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function VideoCategories() {
  const categoryArray = [
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
    <div className="w-full grid items-center gap-8">
      <div className="w-full max-w-5xl mx-auto aspect-video overflow-hidden">
        <video
          src="/video-category/video-tiktok.mp4"
          autoPlay
          loop
          controls
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
        {categoryArray.map((product) => {
          const { id, name, src, href } = product;

          return (
            <Link key={id} href={href}>
              <Card className="w-full flex flex-col items-center gap-4 p-4 group bg-background hover:bg-muted transition-colors duration-300">
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
