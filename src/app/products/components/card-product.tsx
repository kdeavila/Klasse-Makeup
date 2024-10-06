import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import {formatCurrency} from "@/utils/format-currency";
import {hashId} from "@/utils/hash";
import {Eye, ShoppingCart} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    description: string;
    favorite: boolean;
    category: string;
    url: ProductUrl;
}

interface ProductUrl {
    categories: string;
}

interface CardProductProps {
    name: string;
    description: string;
    price: number;
    images: string[];
    id: number;
    favorite: boolean;
    category: string;
    url: ProductUrl;
    onAddToCart: (product: Product) => void;
}

export const CardProduct = (props: CardProductProps) => {
    const {name, description, price, images, id, favorite, category, url, onAddToCart} = props;

    const product: Product = {
        id,
        name,
        description,
        price,
        images,
        favorite,
        category,
        url
    };

    return (
        <Card className="h-96 flex flex-col overflow-hidden group" key={id}>
            <div className="w-full h-full basis-1/2 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={images[0]}
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                    alt={`Imagen de el producto ${name}`}
                />
            </div>

            <CardContent className="px-4 py-2 text-left grow">
                <CardTitle className="text-lg leading-tight font-semibold line-clamp-1">
                    {name}
                </CardTitle>
                <h2 className="text-lg text-foreground/80">{formatCurrency(price)}</h2>
                <CardDescription className="line-clamp-2">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="grid grid-cols-1 gap-2 p-4 pt-0">
                <Link href={`/products/product/${hashId(id)}`}>
                    <Button variant="outline" className="w-full font-semibold">
                        <Eye width={18} strokeWidth={3} className="mr-2"/>
                        Ver en el sitio
                    </Button>
                </Link>

                <Button
                    variant="default"
                    className="w-full font-semibold"
                    onClick={() => onAddToCart(product)}
                >
                    <ShoppingCart width={18} strokeWidth={3} className="mr-2"/>
                    Agregar al carrito
                </Button>
            </CardFooter>
        </Card>
    );
};
