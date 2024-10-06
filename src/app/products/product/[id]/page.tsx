"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import arrayProducts from "@/data/products";
import {formatCurrency} from "@/utils/format-currency";
import {hashId} from "@/utils/hash";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Minus, Plus, ShoppingCart} from "lucide-react";
import {useState} from "react";
import Image from "next/image";
import {useCart} from "../../../../../hooks/use-cart";

interface ProductPageProps {
    params: { id: string };
}

export default function ProductPage({params}: ProductPageProps) {
    const {id} = params;
    const {addItems} = useCart()
    const product = arrayProducts.find((product) => hashId(product.id) === id);

    const [currentImage, setCurrentImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };


    return (
        <main className="text-left px-8">
            <Card className="w-full max-w-5xl mx-auto overflow-hidden my-section-bottom">
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
                                    {product.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`w-20 h-20 flex-shrink-0 cursor-pointer ${
                                                currentImage === index
                                                    ? "border-2 border-primary"
                                                    : "border border-gray-200"
                                            }`}
                                            onClick={() => setCurrentImage(index)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="order-1 md:order-2 flex-grow">
                                    <Image
                                        src={product.images[currentImage]}
                                        alt={`Product image ${currentImage + 1}`}
                                        width={500}
                                        height={500}
                                        priority
                                        className="w-full h-[460px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <Badge variant="default" className="mb-6">
                                {product.category}
                            </Badge>
                            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

                            <ScrollArea className="w-full h-[170px] text-muted-foreground mb-6">
                                {product.description}
                            </ScrollArea>

                            <div className="text-3xl font-bold text-primary/85 mb-6">
                                {formatCurrency(product.price)}
                            </div>
                            <div className="flex items-center space-x-4 mb-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={decrementQuantity}
                                    disabled={quantity === 1}
                                >
                                    <Minus className="h-4 w-4"/>
                                </Button>
                                <span className="text-xl font-semibold">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={incrementQuantity}
                                >
                                    <Plus className="h-4 w-4"/>
                                </Button>
                            </div>
                            <Button className="w-full" onClick={() => addItems(product, quantity)}>
                                <ShoppingCart className="mr-2 h-4 w-4"/> Agregar al carrito
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
