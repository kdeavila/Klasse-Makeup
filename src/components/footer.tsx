import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="p-8 max-w-7xl mx-auto 2xl:px-0">
      <div className="space-y-1">
        <h4 className="text-lg font-semibold leading-none mb-1">
          EcoShop Ecommerce
        </h4>
        <p className="text-sm text-muted-foreground">
          &copy; Todos los derechos reservados.
        </p>
      </div>
      <Separator className="my-2" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Link href="/" className="text-muted-foreground">
          Inicio
        </Link>
        <Separator orientation="vertical" />
        <Link href="/favorites" className="text-muted-foreground">
          Favoritos
        </Link>
        <Separator orientation="vertical" />
        <Link href="/products" className="text-muted-foreground">
          Productos
        </Link>
        <Separator orientation="vertical" />
        <Link href="/politics" className="text-muted-foreground">
          Políticas
        </Link>
      </div>
    </footer>
  );
}
