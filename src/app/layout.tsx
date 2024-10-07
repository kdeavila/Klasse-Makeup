import "./globals.css";
import type {Metadata} from "next";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import {Toaster} from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: "Klasse Makeup | Tienda de Maquillaje y accesorios",
    description: "Tienda online de productos de maquillaje y accesorios. Klasse Makeup tiene todo tipo de productos para tu belleza.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es">
        <head>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
        </head>
        <body className="font-arimo">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            {children}
            <Footer/>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
