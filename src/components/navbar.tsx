import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import { MenuMobile } from "./menu-mobile";
import { MenuDesktop } from "./menu-desktop";

export function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 bottom-0 h-16 z-50 w-full bg-background/90 backdrop-blur-md border-b-[1px]">
      <nav className="flex items-center justify-between w-full h-full px-8 max-w-7xl mx-auto 2xl:px-0">
        <Link href="/">
          <h1 className="uppercase text-2xl font-bold">
            Klass<span className="text-pink-500">e</span>
          </h1>
        </Link>

        <MenuMobile />

        <MenuDesktop />

        <div className="flex gap-2 items-center justify-center order-2">
          <Link href="/user">
            <User strokeWidth={2} />
          </Link>
          <Link href="/bag">
            <ShoppingCart strokeWidth={2} />
          </Link>
          <Link
            href="/favorites"
            className="pr-2 border-r border-muted-foreground"
          >
            <Heart color="#ec4899" strokeWidth={2} />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
