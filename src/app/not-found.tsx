import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="grid place-content-center text-center min-h-[calc(100vh-10rem)]">
        <h1 className="text-8xl font-bold text-pink-500">404</h1>

        <Separator className="my-4" />
        <h1 className="text-2xl mb-1 font-bold text-primary">
          Página no Encontrada
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Si quieres regresar al inicio, haz click{" "}
          <Link className="underline" href="/">
            aquí
          </Link>
        </p>
      </div>
    </main>
  );
}
