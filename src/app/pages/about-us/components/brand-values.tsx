import React from "react";

interface BrandValuesProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function BrandValues(props: BrandValuesProps) {
  const { title, description, children } = props;
  return (
    <li className="border rounded-xl bg-background/10 p-4 flex flex-col space-y-2 items-center justify-center">
      {children}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-balance xl:text-lg">
        {description}
      </p>
    </li>
  );
}
