import { Clock, MapPin, Phone, Ruler, ShieldCheck, Users } from "lucide-react";
import { HOME } from "@/content/home";
import { BUSINESS } from "@/content/site";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { Photo } from "./Photo";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

const ICONS = { ruler: Ruler, users: Users, phone: Phone, shield: ShieldCheck } as const;

export function HomeHero() {
  const h = HOME.hero;
  return (
    <section aria-labelledby="hero-title" className="border-b">
      <div className="container-site grid items-center gap-8 pt-8 pb-10 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-16">
        <div>
          <p className="eyebrow text-accent-ink">
            <Txt>{h.eyebrow}</Txt>
          </p>
          <h1 id="hero-title" className="mt-3 text-[2.15rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
            {h.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <Txt>{h.subline}</Txt>
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <QuoteButton className="w-full sm:w-auto" />
            <div className="flex flex-wrap gap-x-6 text-accent-ink">
              <WhatsAppLink />
              <PhoneLink />
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden="true" />
              <span>
                <Txt>{BUSINESS.city}</Txt>, Malaysia
              </span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              <Txt>{BUSINESS.hoursSummary}</Txt>
            </li>
          </ul>
        </div>

        <Photo
          id="heroKitchen"
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="aspect-[4/3] rounded-lg shadow-xl lg:aspect-[5/5.2]"
        />
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
