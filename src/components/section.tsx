import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  id?: string;
}

export function Section({ children, title, description, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto flex flex-col items-center mb-section-bottom px-8 2xl:px-0",
        className
      )}
    >
      <div className="w-full text-left mb-section-bottom md:text-center">
        <h1 className="text-2xl font-semibold uppercase mb-1">{title}</h1>
        <p className="text-sm text-primary/85 tracking-wider">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
}
