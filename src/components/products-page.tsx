import { CardProduct } from "@/app/products/components/card-product";
import { ReactNode } from "react";

interface ProductsProps {
  arrayProducts: any[];
  children?: ReactNode;
}

export default function Products({ arrayProducts, children }: ProductsProps) {
  return (
    <>
      <article className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-section-bottom">
        {arrayProducts.map((product) => {
          return <CardProduct key={product.id} {...product} />;
        })}
      </article>

      {children}
    </>
  );
}
