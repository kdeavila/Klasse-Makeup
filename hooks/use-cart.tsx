import {create} from 'zustand';
import {persist, createJSONStorage} from "zustand/middleware";
import {toast} from "@/hooks/use-toast";

interface CartStore {
    items: Product[],
    addItems: (data: Product, quantity: number) => void,
    removeItems: (id: number) => void,
    removeAll: () => void,
}

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
    categories: string
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItems: (data: Product, quantity: number) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
            return toast({
                title: "El producto ya se encuentra en el carrito 💔",
                variant: "destructive",
            });
        }

        const newProduct = {...data, quantity};
        set({items: [...currentItems, newProduct]});

        toast({
            title: "Producto añadido al carrito 🛒"
        });
    },
    removeItems: (id: number) => {
        set({items: [...get().items.filter((item) => item.id !== id)]})
        toast({
            title: "Producto eliminado del carrito 🗑"
        })
    },
    removeAll: () => set({items: []})
}), {
    name: 'cart-store',
    storage: createJSONStorage(() => localStorage)
}));
