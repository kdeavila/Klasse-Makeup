import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="p-4 max-w-5xl mx-auto mb-4">
      <div className="space-y-1">
        <h4 className="text-lg font-semibold leading-none">
          EcoShop Ecommerce
        </h4>
        <p className="text-base text-muted-foreground">
          &copy; Todos los derechos reservados.
        </p>
      </div>

      <Separator className="my-4" />

      <div className="flex h-5 items-center gap-4 text-sm">
        <Link href="/" className="text-base text-muted-foreground">Inicio</Link>
        <Separator orientation="vertical" />
        <Link href="/favorites" className="text-base text-muted-foreground">Favoritos</Link>
        <Separator orientation="vertical" />
        <Link href="/products" className="text-base text-muted-foreground">Productos</Link>
        <Separator orientation="vertical" />
        <Link href="/politics" className="text-base text-muted-foreground">Políticas</Link>
      </div>
    </footer>
  );
}
