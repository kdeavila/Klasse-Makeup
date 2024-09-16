import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    title: "¿Qué métodos de pago aceptan?",
    description:
      "Aceptamos tarjetas de crédito y débito, PayPal y transferencias bancarias. También ofrecemos opciones de pago en efectivo a través de ciertos métodos.",
  },
  {
    title: "¿Cómo puedo rastrear mi pedido?",
    description:
      "Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento y un enlace para rastrear tu paquete.",
  },
  {
    title:
      "¿Puedo modificar o cancelar mi pedido después de haberlo realizado?",
    description:
      "Las modificaciones o cancelaciones solo son posibles si el pedido aún no ha sido procesado. Por favor, contáctanos lo antes posible para realizar cualquier cambio.",
  },
  {
    title: "¿Ofrecen envíos internacionales?",
    description:
      "Sí, realizamos envíos a nivel internacional. Los costos y tiempos de entrega pueden variar según la ubicación.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map(({ title, description }) => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger className="text-left">{title}</AccordionTrigger>
          <AccordionContent className="text-left text-primary/80">
            {description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
