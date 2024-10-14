import Image from "next/image";
import React from "react";

interface ImagesAboutUsProps {
  id: number;
  src: string;
}

export function ImagesAboutUs(props: ImagesAboutUsProps) {
  const { id, src } = props;
  return (
    <Image
      className="w-full h-auto aspect-square object-cover pointer-events-none"
      src={src}
      alt={`Image-about-us-${id}`}
      width={650}
      height={650}
    />
  );
}
