import {createJSONStorage, persist} from 'zustand/middleware';
import {toast} from '@/hooks/use-toast';
import {create} from "zustand";

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

interface UseLovedProductsType {
    lovedItems: Product[],
    addLoveItem: (data: Product) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: Product) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === data.id)

        if (existingItem) {
            return toast({
                title: "El producto ya existe en favoritos 💔",
                variant: "destructive"
            })
        }

        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast({
            title: " Producto añadido a favoritos 🧡"
        })
    },
    removeLovedItem: (id: number) => {
        set({lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]})
        toast({
            title: "Producto eliminado de favoritos 🗑"
        })
    }
}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))