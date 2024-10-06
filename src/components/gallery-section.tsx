import Image from "next/image";

export default function GallerySection() {
    return (
        <section
            className="w-full max-w-7xl h-[650px] mx-auto grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 md:h-[480px] gap-2 mb-section-bottom px-8 2xl:px-0">
            <div className="w-full h-full overflow-hidden cursor-pointer group row-span-2 col-span-2">
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt="image brand gallery"
                        src="https://i.postimg.cc/MGv96W67/imagen1.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
            <div className="w-full h-full overflow-hidden cursor-pointer group col-span-2">
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt="image brand gallery"
                        src="https://i.postimg.cc/pd4qygrg/imagen2.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
            <div className="w-full h-full overflow-hidden cursor-pointer group">
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt="image brand gallery"
                        src="https://i.postimg.cc/LXPvPNZh/imagen3.webp"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
            <div className="w-full h-full overflow-hidden cursor-pointer group">
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt="image brand gallery"
                        src="https://i.postimg.cc/NFwDkm1D/imagen4.webp"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
        </section>

    );
}
