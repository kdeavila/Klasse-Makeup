import Image from "next/image";

export function PageNotFound({ title }: { title: string }) {
    return (
        <main className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 p-8 md:py-12 md:flex-row">
            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-pretty uppercase mb-2">{title}</h1>
                <p className="text-sm text-muted-foreground">Lamentamos no haber podido encontrar lo que buscabas...</p>
            </div>

            <div className="size-80 md:size-[30rem] relative">
                <Image src="/404.svg" className="w-full h-full pointer-events-none" fill priority alt="Imagen de página no encontrada" />
            </div>
        </main>
    );
}