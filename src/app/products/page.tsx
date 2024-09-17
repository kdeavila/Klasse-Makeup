import Products from "@/components/products-page";
import { Section } from "@/components/section";

export default function ProductsPage() {
  return (
    <Section
      className="pt-8"
      title="Nuestra colección de productos"
      description="La mejor variedad de productos para tu makeup:"
    >
      <Products />
    </Section>
  );
}
