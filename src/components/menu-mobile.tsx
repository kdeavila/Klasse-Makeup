"use client";

import categories from "@/data/categories";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import LinkMenuMobile from "./link-menu-mobile";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline" className="p-2">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <div className="grid grid-cols-1 space-y-2">
          <SheetTitle className="font-medium leading-none px-3 text-pink-500">
            Productos
          </SheetTitle>
          <LinkMenuMobile
            href="/products"
            title="Todos los productos"
            handleClose={handleClose}
          />

          <SheetTitle className="font-medium leading-none px-3 text-pink-500">
            Categorias
          </SheetTitle>

          <ul className="w-full divide-y divide-muted ">
            {categories.map((category, index) => {
              return (
                <li key={index} className="w-full">
                  <LinkMenuMobile
                    href={category.href}
                    title={category.title}
                    handleClose={handleClose}
                  />
                </li>
              );
            })}
          </ul>

          <SheetTitle className="font-medium leading-none px-3 text-pink-500">
            Nosotros
          </SheetTitle>

          <ul className="w-full divide-y divide-muted ">
            <li className="w-full">
              <LinkMenuMobile
                href="/about-us"
                title="Quiénes somos"
                handleClose={handleClose}
              />
            </li>

            <li className="w-full">
              <LinkMenuMobile
                href="/help"
                title="Ayuda"
                handleClose={handleClose}
              />
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
