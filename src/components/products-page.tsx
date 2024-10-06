"use client"

import {CardProduct} from "@/app/products/components/card-product";
import {ReactNode} from "react";
import {useCart} from "../../hooks/use-cart";

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

interface ProductsProps {
    arrayProducts: Product[];
    children?: ReactNode;
}

export default function Products({arrayProducts, children}: ProductsProps) {
    const {addItems} = useCart();

    return (
        <>
            <article
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-section-bottom">
                {arrayProducts.map((product) => {
                    return <CardProduct key={product.id} {...product} onAddToCart={() => addItems(product, 1)}/>;
                })}
            </article>

            {children}
        </>
    );
}
