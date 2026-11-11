import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Txt } from "./Txt";

export function Section({
  children,
  className,
  id,
  tone = "default",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "ink";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-16 md:py-24",
        tone === "muted" && "bg-secondary",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  className,
  as: As = "h2",
}: {
  id?: string | undefined;
  eyebrow?: string | undefined;
  title: string;
  intro?: string | undefined;
  tone?: "default" | "ink";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-3", tone === "ink" ? "text-primary" : "text-accent-ink")}>
          <Txt>{eyebrow}</Txt>
        </p>
      )}
      <As
        id={id}
        className={cn(
          "font-bold leading-[1.1]",
          As === "h1" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl",
        )}
      >
        <Txt>{title}</Txt>
      </As>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          <Txt>{intro}</Txt>
        </p>
      )}
    </div>
  );
}
