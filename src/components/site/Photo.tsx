import { ImageIcon } from "lucide-react";
import { PHOTOS, type PhotoKey } from "@/content/images";
import { UI } from "@/content/site";
import { cn } from "@/lib/utils";

export function Photo({
  id,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  label,
}: {
  id: PhotoKey;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  label?: string;
}) {
  const photo = PHOTOS[id];
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {label && (
        <span className="absolute left-2 top-2 rounded-sm bg-foreground/85 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-background">
          {label}
        </span>
      )}
      {photo.placeholder && (
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-sm bg-placeholder px-1.5 py-0.5 text-[11px] font-semibold text-placeholder-foreground">
          <ImageIcon className="size-3" aria-hidden="true" />
          {UI.samplePhoto}
        </span>
      )}
    </div>
  );
}
