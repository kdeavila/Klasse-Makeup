"use client"

import {Trash2} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {useCart} from "../../../hooks/use-cart";
import {formatCurrency} from "@/utils/format-currency";

export default function Cart() {
    const {items, removeItems} = useCart();
    const total = items.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="w-full max-w-7xl px-8 xl:px-0 mx-auto my-12">
            <h1 className="text-3xl font-bold mb-8">Tu Carrito de Compras</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <main className="flex-grow">
                    {items.length === 0 ? (
                        <p className="text-muted-foreground text-sm">No hay productos en tu carrito... Intenta añadir
                            algunos.</p>
                    ) : (
                        <Card>
                            <CardContent className="p-3 sm:p-8">
                                {items.map(item => (
                                    <div key={item.id}
                                         className="flex items-center justify-between gap-4 mb-4 pb-4 border-b last:border-b-0">
                                        <div className="flex items-center">
                                            <img src={item.images[0]} alt={`Imagen del producto ${item.name}`}
                                                 className="w-20 h-20 object-cover rounded mr-4"/>
                                            <div>
                                                <h3 className="font-semibold text-wrap">{item.name} x {item.quantity}</h3>
                                                <h3 className="text-gray-600">{formatCurrency(item.price)}</h3>
                                            </div>
                                        </div>

                                        <Button variant="destructive" size="icon"
                                                onClick={() => removeItems(item.id)}>
                                            <Trash2 className="h-4 w-4"/>
                                            <span className="sr-only">Eliminar {item.name}</span>
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )
                    }
                </main>

                <aside className="lg:w-1/3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumen del Pedido</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Envío:</span>
                                    <span>Gratis</span>
                                </div>
                                <Separator className="my-2"/>
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Proceder al Pago</Button>
                        </CardFooter>
                    </Card>
                </aside>
            </div>
        </div>
    )
}