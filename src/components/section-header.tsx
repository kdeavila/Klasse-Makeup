import React from "react";

interface ProductSectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<ProductSectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full text-left mb-4">
      <h1 className="text-3xl font-semibold leading-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
