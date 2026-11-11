import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { ClosingCta, ProjectsBand } from "@/components/site/blocks";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import { FaqList } from "@/components/site/FaqList";
import { Photo } from "@/components/site/Photo";
import { QuoteButton } from "@/components/site/QuoteButton";
import { Section, SectionHeading } from "@/components/site/Section";
import { Txt } from "@/components/site/Txt";
import { SHOP_PROJECTS } from "@/content/projects";
import { SHOP } from "@/content/shop";
import { pageMeta } from "@/lib/seo";

const SHOP_WA = "Hi, I'd like a quote for a shop renovation. My shop is: ";

export const Route = createFileRoute("/shop-renovation")({
  head: () => ({
    meta: pageMeta(
      "Shop Renovation & Commercial Fit-out",
      "Shop and commercial renovation planned around minimal downtime, a clear budget and your opening date. Design, approvals, build and handover by one team.",
    ),
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <section className="border-b">
        <div className="container-site grid items-center gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-accent-ink">{SHOP.hero.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">{SHOP.hero.headline}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{SHOP.hero.subline}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <QuoteButton className="w-full sm:w-auto" />
              <WhatsAppLink className="text-accent-ink" message={SHOP_WA} />
            </div>
          </div>
          <Photo id="shopCafeAfter" priority className="aspect-[4/3] rounded-lg shadow-xl" />
        </div>
      </section>

      <Section tone="muted" labelledBy="promise-title">
        <SectionHeading id="promise-title" eyebrow="Our promise" title="Built around how a business actually runs" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {SHOP.promises.map((p, i) => (
            <li key={p.title} className="rounded-lg border bg-card p-6">
              <p className="text-sm font-bold text-accent-ink">0{i + 1}</p>
              <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="handle-title">
        <SectionHeading id="handle-title" eyebrow="What we handle" title="Everything from layout to handover" intro="One contract, one project lead, every trade." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SHOP.handles.map((h) => (
            <li key={h.title} className="flex gap-3 rounded-lg border bg-card p-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-ink" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground"><Txt>{h.body}</Txt></p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" labelledBy="timeline-title">
        <SectionHeading id="timeline-title" eyebrow="How a shop project runs" title="A timeline built backwards from opening day" />
        <ol className="mt-10 border-l-2 border-primary pl-6 md:pl-8">
          {SHOP.timeline.map((t) => (
            <li key={t.title} className="relative pb-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[33px] top-1 size-4 rounded-full border-2 border-primary bg-background md:-left-[41px]" />
              <h3 className="font-bold"><Txt>{t.title}</Txt></h3>
              <p className="mt-1 text-muted-foreground"><Txt>{t.body}</Txt></p>
            </li>
          ))}
        </ol>
      </Section>

      <ProjectsBand projects={SHOP_PROJECTS} eyebrow="Shop projects" title="Shops we've fitted out" intro="Tap a project to see the scope, constraints and result." />

      <Section labelledBy="shop-faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="shop-faq-title" eyebrow="FAQ" title="Questions shop owners ask" />
          <FaqList faqs={SHOP.faqs} idPrefix="shop-faq" />
        </div>
      </Section>

      <ClosingCta title="Tell us your opening date. We'll plan backwards from it." whatsappMessage={SHOP_WA} />
    </>
  );
}
