import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import categories from "@/data/categories";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";

export function MenuMobile() {
  return (
    <Popover>
      <PopoverTrigger asChild className="md:hidden">
        <Button variant="ghost" className="p-0">
          <Menu strokeWidth={2} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:hidden">
        <div className="grid grid-cols-1 space-y-2">
          <h4 className="font-medium leading-none px-3 text-pink-500">
            Productos
          </h4>

          <Link
            href="/products"
            className="flex justify-between items-center p-3 pl-8 select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Ver todos
            <ChevronRight strokeWidth={2} width={16} height={16} />
          </Link>

          <h4 className="font-medium leading-none px-3 text-pink-500">
            Categorías
          </h4>

          <ul className="w-full divide-y divide-muted ">
            {categories.map((category, index) => {
              return (
                <li key={index}>
                  <Link
                    href={category.href}
                    className="flex justify-between items-center p-3 pl-8 select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {category.title}
                    <ChevronRight strokeWidth={2} width={16} height={16} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <h4 className="font-medium leading-none px-3 text-pink-500">
            Nosotros
          </h4>

          <ul className="w-full divide-y divide-muted ">
            <li>
              <Link
                href="/about-us"
                className="flex justify-between items-center p-3 pl-8 select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Quiénes somos
                <ChevronRight strokeWidth={2} width={16} height={16} />
              </Link>
            </li>

            <li>
              <Link
                href="/help"
                className="flex justify-between items-center p-3 pl-8 select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                Ayuda
                <ChevronRight strokeWidth={2} width={16} height={16} />
              </Link>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
