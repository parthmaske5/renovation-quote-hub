import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { PhoneLink, WhatsAppLink } from "@/components/site/ContactLinks";
import { SectionHeading } from "@/components/site/Section";
import { Txt } from "@/components/site/Txt";
import { QUOTE } from "@/content/quote";
import { BUSINESS, mailUrl } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: pageMeta("Get a Quote", "Request a free, written renovation or repair quote in three short steps. Small jobs, home renovation and shop renovation in Malaysia."),
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <section className="bg-secondary py-10 md:py-16">
      <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <SectionHeading as="h1" eyebrow={QUOTE.eyebrow} title={QUOTE.headline} intro={QUOTE.intro} className="mb-8" />
          <QuoteForm />
        </div>
        <aside className="space-y-6 lg:pt-28" aria-label="Contact details">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-lg font-bold">Prefer to talk?</h2>
            <div className="mt-3 flex flex-col text-accent-ink">
              <WhatsAppLink label={BUSINESS.whatsappDisplay} />
              <PhoneLink showNumber />
              <a href={mailUrl} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:underline">
                <Mail className="size-5" aria-hidden="true" /> <Txt>{BUSINESS.email}</Txt>
              </a>
            </div>
            <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> <span><Txt>{BUSINESS.address}</Txt></span>
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold"><Clock className="size-5" aria-hidden="true" /> Opening hours</h2>
            <dl className="mt-3 space-y-2 text-sm">
              {BUSINESS.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt>{h.days}</dt>
                  <dd><Txt>{h.time}</Txt></dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-lg font-bold">Service areas</h2>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {BUSINESS.serviceAreas.map((a) => <li key={a}><Txt>{a}</Txt></li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
