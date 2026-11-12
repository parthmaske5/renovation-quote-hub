import type { CSSProperties } from "react";
import { Phone, Ruler, ShieldCheck, Users } from "lucide-react";
import { HOME } from "@/content/home";
import { WhatsAppLink } from "./ContactLinks";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

const ICONS = { ruler: Ruler, users: Users, phone: Phone, shield: ShieldCheck } as const;

export function HomeHero() {
  const h = HOME.hero;
  const step = 360 / h.trades.length;
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

        <div aria-hidden="true" className="flex flex-col items-center gap-3 py-2 lg:py-6">
          <div className="orbit">
            <span className="orbit-track" />
            <span className="orbit-spark" />
            <div className="orbit-ring">
              {h.trades.map((t, i) => (
                <span key={t} className="orbit-arm" style={{ "--a": `${i * step}deg` } as CSSProperties}>
                  <span className="orbit-item">
                    <span className="orbit-pill" style={{ "--pd": `${0.55 + i * 0.09}s` } as CSSProperties}>
                      {t}
                    </span>
                  </span>
                </span>
              ))}
            </div>
            <div className="orbit-hub">
              <svg
                viewBox="0 0 24 24"
                className="size-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span>{h.hubLabel}</span>
            </div>
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
