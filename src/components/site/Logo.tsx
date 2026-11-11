import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/content/site";
import { Txt } from "./Txt";

/** Replace the square mark with the real logo file when available. */
export function Logo({ tone = "default" }: { tone?: "default" | "ink" }) {
  return (
    <Link to="/" className="inline-flex min-h-11 items-center gap-2.5" aria-label={`${BUSINESS.name} — home`}>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-md bg-primary text-[9px] font-extrabold tracking-wider text-primary-foreground"
      >
        LOGO
      </span>
      <span
        className={
          tone === "ink"
            ? "text-base font-extrabold leading-tight text-ink-foreground"
            : "text-base font-extrabold leading-tight"
        }
      >
        <Txt>{BUSINESS.name}</Txt>
      </span>
    </Link>
  );
}
