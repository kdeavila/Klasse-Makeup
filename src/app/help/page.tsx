"use client";

import { FAQ } from "@/components/faq";
import MapComponent from "@/components/map";
import { Section } from "@/components/section";

export default function Help() {
  return (
    <main className="text-center">
      <Section
        title="Preguntas frecuentes"
        description="Nuestros clientes preguntan"
        className="max-w-4xl mt-section-bottom"
      >
        <FAQ />
      </Section>

      <Section
        title="Ubicación"
        description="Puedes acercarte a nuestra tienda"
      >
        <MapComponent />
      </Section>
    </main>
  );
}
