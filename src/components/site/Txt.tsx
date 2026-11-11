import { Fragment } from "react";
import { cn } from "@/lib/utils";

const TOKEN = /(\[[^\]]+\])/g;

/** Renders content text, highlighting [placeholders] the owner still needs to fill in. */
export function Txt({ children, className }: { children: string; className?: string }) {
  const parts = children.split(TOKEN);
  if (parts.length === 1) return <>{children}</>;
  return (
    <>
      {parts.map((part, i) =>
        TOKEN.test(part) && part.startsWith("[") ? (
          <mark
            key={i}
            title="Placeholder — replace with real details"
            className={cn(
              "rounded-sm bg-placeholder px-1 font-medium text-placeholder-foreground [box-decoration-break:clone]",
              className,
            )}
          >
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
