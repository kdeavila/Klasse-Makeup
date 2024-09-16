"use client";

import { FAQ } from "@/components/faq";
import { Section } from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Help() {
  return (
    <main className="mt-16 text-center">
      <Section
        title="Preguntas frecuentes"
        description="Nuestros clientes preguntan"
        className="max-w-4xl pt-8"
      >
        <FAQ />
      </Section>

      <Section
        title="Ubicación"
        description="Puedes acercarte a nuestra tienda"
      >
        <Skeleton className="w-full h-96" />
      </Section>
    </main>
  );
}
