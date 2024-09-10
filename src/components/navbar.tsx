import { Heart, User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bottom-0 h-20 z-50 w-full bg-background/80 backdrop-blur-md border-b-[1px]">
      <nav className="flex items-center justify-between w-full h-full px-8 max-w-6xl mx-auto xl:px-0">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Eco<span className="text-pink-500">Shop</span>
          </h1>
        </Link>

        <div className="flex gap-2 items-center justify-center">
          <Link href="/login">
            <User strokeWidth={2} />
          </Link>

          <Link href="/login" className="pr-2 border-r-[1px] border-gray-300">
            <Heart color="#ec4899" strokeWidth={2} />
          </Link>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};