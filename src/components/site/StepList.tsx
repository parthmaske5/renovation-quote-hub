import type { Step } from "@/content/process";
import { cn } from "@/lib/utils";
import { Txt } from "./Txt";

export function StepList({ steps, className, tone = "default" }: { steps: Step[]; className?: string; tone?: "default" | "ink" }) {
  return (
    <ol className={cn("grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold leading-snug">
              <span className="sr-only">Step {i + 1}: </span>
              <Txt>{s.title}</Txt>
            </h3>
            <p className={cn("mt-1 text-[15px] leading-relaxed", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>
              <Txt>{s.body}</Txt>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
