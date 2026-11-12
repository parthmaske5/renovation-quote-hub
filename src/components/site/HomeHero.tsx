import type { CSSProperties } from "react";
import { Phone, Ruler, ShieldCheck, Users } from "lucide-react";
import { HOME } from "@/content/home";
import { WhatsAppLink } from "./ContactLinks";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

const ICONS = { ruler: Ruler, users: Users, phone: Phone, shield: ShieldCheck } as const;

/** Scattered start positions for the five trade pills (decorative). */
const SCATTER = [
  { x: "-1.5rem", y: "-3.5rem", r: "-9deg" },
  { x: "1.25rem", y: "2.75rem", r: "7deg" },
  { x: "-0.75rem", y: "-1.75rem", r: "-5deg" },
  { x: "1.75rem", y: "3.25rem", r: "10deg" },
  { x: "0.5rem", y: "-3rem", r: "-7deg" },
];

export function HomeHero() {
  const h = HOME.hero;
  return (
    <section aria-labelledby="hero-title" className="hero-anim border-b">
      <div className="container-site grid items-center gap-10 pt-10 pb-12 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pb-20">
        <div className="hero-wrap min-w-0">
          <p className="eyebrow text-accent-ink">{h.eyebrow}</p>
          <h1 id="hero-title" className="hero-title isolate mt-4">
            <span className="hero-mask">
              <span className="hero-line">
                {h.headlineStrike.before}
                <span className="hero-strike">{h.headlineStrike.struck}</span>
                {h.headlineStrike.after}
              </span>
            </span>
            <span className="hero-mask">
              <span className="hero-line" style={{ "--d": "var(--hero-answer-delay)" } as CSSProperties}>
                <span className="hero-answer">{h.headlineAnswer}</span>
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.subline}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <QuoteButton className="w-full sm:w-auto" />
            <WhatsAppLink className="text-accent-ink" />
          </div>
        </div>

        <div aria-hidden="true" className="flex flex-col items-center gap-4 py-6 lg:items-start">
          <div className="relative">
            <ul className="flex flex-wrap justify-center gap-2 rounded-2xl border bg-card p-3 shadow-lg lg:flex-nowrap">
              {h.trades.map((t, i) => {
                const s = SCATTER[i % SCATTER.length]!;
                return (
                  <li
                    key={t}
                    className="hero-pill rounded-full border bg-secondary px-3.5 py-1.5 text-sm font-semibold"
                    style={{ "--x": s.x, "--y": s.y, "--r": s.r } as CSSProperties}
                  >
                    <span className="hero-pill-in" style={{ "--pd": `${i * 0.07}s` } as CSSProperties}>
                      {t}
                    </span>
                  </li>
                );
              })}
            </ul>
            <span className="hero-tick absolute -top-4 -right-4 grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            <Txt>{h.tradesNote}</Txt>
          </p>
        </div>
      </div>

      <div className="border-t bg-secondary">
        <ul className="container-site grid grid-cols-1 gap-x-8 gap-y-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.sellingPoints.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <li key={s.title} className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/15 text-accent-ink">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold leading-snug">{s.title}</span>
                  <span className="text-sm text-muted-foreground">
                    <Txt>{s.body}</Txt>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
