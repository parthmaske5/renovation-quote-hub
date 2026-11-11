import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CTA } from "@/content/site";
import { cn } from "@/lib/utils";

/** The one primary call to action. Same label, same destination, everywhere. */
export function QuoteButton({
  size = "xl",
  className,
  arrow = true,
}: {
  size?: "default" | "lg" | "xl";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link to={CTA.to} className={cn(buttonVariants({ size }), className)}>
      {CTA.label}
      {arrow && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}
