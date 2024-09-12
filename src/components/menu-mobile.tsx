"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import categories from "@/data/categories";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LinkMenuMobile from "./link-menu-mobile";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
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

          <LinkMenuMobile
            handleClickOpen={handleClickOpen}
            href="/products"
            title="Todos los productos"
          />

          <h4 className="font-medium leading-none px-3 text-pink-500">
            Categorías
          </h4>

          <ul className="w-full divide-y divide-muted ">
            {categories.map((category, index) => {
              return (
                <li key={index} className="w-full">
                  <LinkMenuMobile
                    handleClickOpen={handleClickOpen}
                    href={category.href}
                    title={category.title}
                  />
                </li>
              );
            })}
          </ul>

          <h4 className="font-medium leading-none px-3 text-pink-500">
            Nosotros
          </h4>

          <ul className="w-full divide-y divide-muted ">
            <li className="w-full">
              <LinkMenuMobile
                handleClickOpen={handleClickOpen}
                href="/pages/about-us"
                title="Quiénes somos"
              />
            </li>

            <li className="w-full">
              <LinkMenuMobile
                handleClickOpen={handleClickOpen}
                href="/pages/help"
                title="Ayuda"
              />
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
