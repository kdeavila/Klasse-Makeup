import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/format-currency";
import { hashId } from "@/utils/hash";
import { ChevronRight, ShoppingCart } from "lucide-react";
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
    const { name, description, price, images, id, favorite, category, url, onAddToCart } = props;

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
        <Card className="h-96 flex flex-col overflow-hidden" key={id}>
            <div className="w-full h-full basis-1/2 overflow-hidden">
                <img
                    src={images[0]}
                    className="w-full h-full object-cover"
                    alt={`Imagen de el producto ${name}`}
                    loading="lazy"
                />
            </div>

            <CardContent className="p-4 pb-2 text-left grow space-y-1">
                <CardTitle className="text-xl font-bold uppercase line-clamp-1">
                    {name}
                </CardTitle>

                <h3 className="text-lg text-foreground/80">{formatCurrency(price)}</h3>

                <CardDescription className="text-muted-foreground line-clamp-3">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="grid grid-cols-5 p-4">
                <Button
                    variant="default"
                    className="w-full font-semibold col-span-4"
                    onClick={() => onAddToCart(product)}
                >
                    <ShoppingCart width={18} strokeWidth={2} className="mr-2" />
                    Agregar al carrito
                </Button>

                <Link href={`/products/product/${hashId(id)}`}>
                    <Button variant="outline" className="col-span-1">
                        <ChevronRight strokeWidth={2} width={22} />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};
