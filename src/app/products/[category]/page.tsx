import { PageNotFound } from "@/components/404";
import Products from "@/components/products-page";
import { Section } from "@/components/section";
import arrayProducts from "@/data/products";

interface CategoryPageProps {
    params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { category } = params;

    const productsFilteredByCategory = arrayProducts.filter(
        (product) => category === product.url.categories
    );

    const categoryName = productsFilteredByCategory.length > 0
        ? productsFilteredByCategory[0].category
        : null;

    return (
        <>
            {categoryName ? (
                <main className="pt-8">
                    <Section title={`Lo mejor en ${categoryName.toLowerCase()}`} description="Productos únicos e inigualables solo para ti" >
                        <Products arrayProducts={productsFilteredByCategory} />
                    </Section>
                </main>
            ) : (
                <PageNotFound title="Categoría no encontrada" />
            )}
        </>
    );
}
