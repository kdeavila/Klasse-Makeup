"use client"

import Link from "next/link";
import {ModeToggle} from "./toggle-theme";
import {MenuMobile} from "./menu-mobile";
import {MenuDesktop} from "./menu-desktop";
import {useCart} from "../../hooks/use-cart";
import {BaggageClaim, Heart, ShoppingCart} from "lucide-react";
import KlasseIcon from "../../public/klasse";
import {useLovedProducts} from "../../hooks/use-loved-products";

export function Navbar() {
    const cart = useCart();
    const {lovedItems} = useLovedProducts();

    return (
        <header
            className="sticky top-0 left-0 right-0 bottom-0 h-16 z-50 w-full bg-muted/90 backdrop-blur-md border-b-[1px]">
            <nav className="flex items-center justify-between w-full h-full px-8 max-w-7xl mx-auto 2xl:px-0">
                <Link href="/">
                    <KlasseIcon className="w-24"/>
                </Link>
                <MenuDesktop/>

                <div className="flex gap-4 items-center justify-center">
                    <Link
                        href="/favorites">
                        {lovedItems.length === 0 ? (
                            <Heart color="#ec4899" strokeWidth={2}/>
                        ) : (
                            <Heart color="#ec4899" stroke="#8F265A" fill="#ec4899" strokeWidth={2}/>
                        )}
                    </Link>
                    {cart.items.length === 0 ? (
                            <Link href="/cart">
                                <ShoppingCart strokeWidth={2}/>
                            </Link>
                        ) :
                        (
                            <Link href="/cart" className="flex gap-1">
                                <BaggageClaim strokeWidth={1}/>
                                <span>{cart.items.length}</span>
                            </Link>
                        )
                    }
                    <ModeToggle/>
                    <MenuMobile/>
                </div>
            </nav>
        </header>
    );
}
