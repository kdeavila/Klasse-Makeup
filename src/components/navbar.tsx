import { Heart, User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/60 shadow shadow-gray-200">
      <nav className="flex items-center justify-between h-16 p-4 backdrop-blur">
        <h1 className="text-2xl">Eco<span className="font-bold">Shop</span></h1>

        <div className="flex gap-2 items-center justify-center">
          <Link href="/login">
            <User strokeWidth={2} />
          </Link>

          <Link href="/login" className="pr-2 border-r-[1px] border-gray-300">
            <Heart strokeWidth={2} />
          </Link>

          <ModeToggle />
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
