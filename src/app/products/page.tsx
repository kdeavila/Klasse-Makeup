import Products from "@/components/products-page";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import arrayProducts from "@/data/products";

export default function ProductsPage() {
  return (
    <Section
      className="pt-8"
      title="Nuestra colección de productos"
      description="La mejor variedad de productos para tu makeup:"
    >
      <Products arrayProducts={arrayProducts}>
        <Button className="block mx-auto hover:bg-muted" variant="outline">
          Ver más
        </Button>
      </Products>
    </Section>
  );
}
