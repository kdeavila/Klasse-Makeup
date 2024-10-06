import React from "react";

interface BrandValuesProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function BrandValues(props: BrandValuesProps) {
  const { title, description, children } = props;
  return (
    <li className="border bg-card p-8 flex flex-col space-y-2 items-center justify-center">
      {children}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground text-balance">
        {description}
      </p>
    </li>
  );
}
