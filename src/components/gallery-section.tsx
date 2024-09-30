import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full max-w-7xl h-[650px] mx-auto grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 md:h-[480px] gap-2 mb-section-bottom px-8 2xl:px-0">
      <div className="w-full h-full overflow-hidden cursor-pointer group row-span-2 col-span-2">
        <Image
          className="w-full h-full object-cover group-hover:scale-105  transition-transform duration-300s"
          alt="image brand gallery"
          src="https://i.postimg.cc/MGv96W67/imagen1.jpg"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full overflow-hidden cursor-pointer group col-span-2">
        <Image
          className="w-full h-full object-cover group-hover:scale-105  transition-transform duration-300"
          alt="image brand gallery"
          src="https://i.postimg.cc/pd4qygrg/imagen2.jpg"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full overflow-hidden cursor-pointer group">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt="image brand gallery"
          src="https://i.postimg.cc/LXPvPNZh/imagen3.webp"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full overflow-hidden cursor-pointer group">
        <Image
          className="w-full h-full object-cover group-hover:scale-105  transition-transform duration-300"
          alt="image brand gallery"
          src="https://i.postimg.cc/NFwDkm1D/imagen4.webp"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
    </section>
  );
}
