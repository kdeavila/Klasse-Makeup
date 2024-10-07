"use client"

import {ShoppingCart, Trash2} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {useLovedProducts} from "../../../hooks/use-loved-products";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {formatCurrency} from "@/utils/format-currency";
import {Section} from "@/components/section";
import {useCart} from "../../../hooks/use-cart";

interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    description: string;
    favorite: boolean;
    category: string;
    url: ProductUrl;
    quantity: number;
}

interface ProductUrl {
    categories: string;
}

export default function FavoriteProducts() {
    const {lovedItems, removeLovedItem} = useLovedProducts();
    const {addItems} = useCart();

    const addItemsToCart = (product: Product) => {
        removeLovedItem(product.id)
        setTimeout(() => {
            addItems(product, 1)
        }, 1000)
    }

    return (
        <Section title="Productos favoritos" description="Productos que has guardado en tu lista de deseos."
                 className="max-w-2xl pt-8">

            <div className="w-full min-h-72">
                {lovedItems.length === 0 ? (
                    <div className="w-full flex justify-center">
                        <p className="w-full text-left text-muted-foreground text-sm md:text-center">El carrito de
                            compras está vacío... </p>
                    </div>
                ) : (
                    <div className="w-full flex flex-col gap-4 md:flex-row lg:gap-8">
                        <Card className="flex-grow">
                            <CardContent className="p-4 sm:p-6">
                                {lovedItems.map(product => (
                                    <div key={product.id}
                                         className="flex items-center justify-between gap-4 mb-4 pb-4 border-b last:border-b-0">
                                        <div className="flex items-center">
                                            <Image src={product.images[0]}
                                                   className="shrink-0 size-20 object-cover mr-4"
                                                   width={80} height={80} alt={`Imagen del producto ${product.name}`}/>

                                            <div className="space-y-0.5">
                                                <h3 className="text-sm font-semibold sm:text-base">{product.name}</h3>
                                                <p className="text-muted-foreground text-sm">Cantidad: <span
                                                    className="font-normal">{product.quantity}</span></p>
                                                <h3 className="text-muted-foreground text-sm sm:text-base">{formatCurrency(product.price)}</h3>
                                            </div>
                                        </div>

                                        <div className="flex flex-col shrink-0">
                                            <Button variant="outline" size="icon"
                                                    onClick={() => addItemsToCart(product)}>
                                                <ShoppingCart strokeWidth={2} className="size-4"/>
                                            </Button>

                                            <Button variant="ghost" size="icon"
                                                    onClick={() => removeLovedItem(product.id)}>
                                                <Trash2 strokeWidth={2} className="size-4"/>
                                            </Button>

                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                )
                }
            </div>
        </Section>
    )
}