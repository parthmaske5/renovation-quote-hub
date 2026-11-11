import { Link } from "@tanstack/react-router";
import { BUSINESS, CTA, NAV, mailUrl } from "@/content/site";
import { SERVICE_DETAILS } from "@/content/services";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { Logo } from "./Logo";
import { Txt } from "./Txt";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary pb-24 md:pb-0">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Home repairs, renovations and shop renovations in <Txt>{BUSINESS.city}</Txt>, Malaysia.
          </p>
          <address className="text-sm not-italic leading-relaxed">
            <Txt>{BUSINESS.address}</Txt>
          </address>
          <div className="flex flex-col text-sm text-accent-ink">
            <WhatsAppLink label={BUSINESS.whatsappDisplay} />
            <PhoneLink showNumber />
            <a href={mailUrl} className="min-h-11 content-center font-semibold underline-offset-4 hover:underline">
              <Txt>{BUSINESS.email}</Txt>
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-muted-foreground">Opening hours</h2>
          <dl className="space-y-2 text-sm">
            {BUSINESS.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.days}</dt>
                <dd className="text-right">
                  <Txt>{h.time}</Txt>
                </dd>
              </div>
            ))}
          </dl>
          <h2 className="eyebrow mb-3 mt-8 text-muted-foreground">Service areas</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {BUSINESS.serviceAreas.map((a) => (
              <li key={a}>
                <Txt>{a}</Txt>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-muted-foreground">Quick links</h2>
          <ul className="space-y-1 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="inline-flex min-h-9 items-center hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to={CTA.to} className="inline-flex min-h-9 items-center font-semibold hover:underline">
                {CTA.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-muted-foreground">Services</h2>
          <ul className="space-y-1 text-sm">
            {SERVICE_DETAILS.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex min-h-9 items-center hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/shop-renovation" className="inline-flex min-h-9 items-center hover:underline">
                Shop Renovation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-6">
            {BUSINESS.registrations.map((r) => (
              <li key={r.label}>
                {r.label}: <Txt>{r.value}</Txt>
              </li>
            ))}
          </ul>
          <p>
            © {new Date().getFullYear()} <Txt>{BUSINESS.legalName}</Txt>
          </p>
        </div>
      </div>
    </footer>
  );
}
