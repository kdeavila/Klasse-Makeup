"use client"

import {Trash2, Wallet2} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {useCart} from "../../../hooks/use-cart";
import {formatCurrency} from "@/utils/format-currency";
import Image from "next/image";
import {Section} from "@/components/section";

export default function Cart() {
    const {items, removeItems} = useCart();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <Section title="Carrito de compras" description="Productos que tienes agregados en tu carrito"
                 className="pt-8">

            <div className="w-full min-h-72">
                {items.length === 0 ? (
                    <div className="w-full flex justify-center">
                        <p className="w-full text-left text-muted-foreground text-sm md:text-center">El carrito de
                            compras está vacío... </p>
                    </div>
                ) : (
                    <div className="w-full flex flex-col gap-4 md:flex-row lg:gap-8">
                        <Card className="flex-grow"
                        >
                            <CardContent className="p-4 sm:p-6">
                                {items.map(item => (
                                    <div key={item.id}
                                         className="flex items-center justify-between gap-4 mb-4 pb-4 border-b last:border-b-0">
                                        <div className="flex items-center">
                                            <Image src={item.images[0]}
                                                   className="shrink-0 size-20 object-cover mr-4"
                                                   width={80} height={80} alt={`Imagen del producto ${item.name}`}/>

                                            <div className="space-y-0.5">
                                                <h3 className="text-sm font-semibold sm:text-base">{item.name}</h3>
                                                <p className="text-muted-foreground text-sm">Cantidad: <span
                                                    className="font-normal">{item.quantity}</span></p>
                                                <h3 className="text-muted-foreground text-sm sm:text-base">{formatCurrency(item.price)}</h3>
                                            </div>
                                        </div>

                                        <Button variant="ghost" size="icon" className="shrink-0"
                                                onClick={() => removeItems(item.id)}>
                                            <Trash2 className="h-4 w-4"/>
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <aside className="md:w-2/5">
                            <Card className="md:sticky md:top-20">
                                <CardHeader className="p-4 sm:p-6">
                                    <CardTitle className="text-lg">Resumen del Pedido</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Subtotal:</span>
                                            <span>{formatCurrency(total)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Envío:</span>
                                            <span className="text-muted-foreground">Gratis</span>
                                        </div>
                                        <Separator className="my-2"/>
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>Total:</span>
                                            <span>{formatCurrency(total)}</span>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="p-4 sm:p-6">
                                    <Button className="w-full">
                                        <Wallet2 className="size-4 mr-2"/>
                                        Proceder al Pago
                                    </Button>
                                </CardFooter>
                            </Card>
                        </aside>
                    </div>
                )
                }
            </div>
        </Section>
    )
}


