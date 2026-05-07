"use client";

import { Package } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  imageUrl?: string | null;
  alt: string;
  className?: string;
}

export function ProductThumb({ imageUrl, alt, className }: Props) {
  const [broken, setBroken] = useState(false);
  const showImage = Boolean(imageUrl) && !broken;

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-muted/40", className)}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl ?? ""}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          <Package className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
