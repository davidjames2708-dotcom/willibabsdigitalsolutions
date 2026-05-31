"use client";

import { useState } from "react";

export default function PortfolioImage({ src, fallback = "/assets/praise.jpg", alt = "" }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => {
        if (imageSrc !== fallback) {
          setImageSrc(fallback);
        }
      }}
    />
  );
}
