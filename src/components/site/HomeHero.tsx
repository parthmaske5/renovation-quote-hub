import { Phone, Ruler, ShieldCheck, Users } from "lucide-react";
import { HOME } from "@/content/home";
import { WhatsAppLink } from "./ContactLinks";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

const ICONS = { ruler: Ruler, users: Users, phone: Phone, shield: ShieldCheck } as const;

export function HomeHero() {
  const h = HOME.hero;
  return (
    <section aria-labelledby="hero-title" className="hero-anim border-b">
      <div className="container-site grid items-center gap-10 pt-6 pb-12 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pb-20">
        <div className="hero-wrap min-w-0">
          <p className="eyebrow text-accent-ink">{h.eyebrow}</p>
          <h1 id="hero-title" className="hero-title isolate mt-4">
            <span className="hero-mask hero-headline-line">
              {h.headline.leadWords.map((word, index) => (
                <span key={word} className="hero-word-mask">
                  <span className="hero-word" data-word={index}>
                    {word}
                  </span>
                </span>
              ))}
              <span className="hero-strike">
                <span className="hero-word-mask">
                  <span className="hero-word" data-word={h.headline.leadWords.length}>
                    {h.headline.struck}
                  </span>
                </span>
              </span>
              <span className="hero-word-mask hero-punctuation">
                <span className="hero-word" data-word={h.headline.leadWords.length}>
                  {h.headline.ending}
                </span>
              </span>
            </span>
            <span className="hero-mask">
              <span className="hero-word hero-answer">{h.headline.answer}</span>
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:mt-6">
            {h.subline}
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:mt-8">
            <QuoteButton className="w-full sm:w-auto" />
            <WhatsAppLink className="text-accent-ink" />
          </div>
        </div>

        <div aria-hidden="true" className="job-card-visual lg:justify-self-end">
          <div className="job-card">
            <div className="job-card-header">
              <span>{h.jobCard.title}</span>
              <span className="job-card-pill">{h.jobCard.contactLabel}</span>
            </div>
            <ul className="job-card-rows">
              {h.trades.map((trade) => (
                <li key={trade} className="job-card-row">
                  <span>{trade}</span>
                  <span className="job-card-status">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="m4.5 10.25 3.45 3.45 7.55-7.45" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <p className="job-card-footer">{h.jobCard.footer}</p>
            <span className="job-card-stamp">{h.jobCard.stamp}</span>
          </div>
          <p className="job-card-note">
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
