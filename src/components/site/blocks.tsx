import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock, FileCheck2, Quote, ShieldCheck, UserRound } from "lucide-react";
import { useState, type ReactNode } from "react";
import { HOME } from "@/content/home";
import { FEATURED_PROJECTS, type Project } from "@/content/projects";
import { SERVICE_GROUPS } from "@/content/services";
import { BUSINESS, UI } from "@/content/site";
import { cn } from "@/lib/utils";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { Photo } from "./Photo";
import { ProjectCard } from "./ProjectCard";
import { ProjectLightbox } from "./ProjectLightbox";
import { QuoteButton } from "./QuoteButton";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { Txt } from "./Txt";

export function PathCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {HOME.paths.map((p, i) => (
        <Reveal key={p.id} delay={i * 80}>
          <Link
            to={p.to}
            className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
          >
            <Photo id={p.photo} className="aspect-[16/9]" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.promise}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.examples.map((e) => (
                  <li key={e} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                    {e}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-ink">
                {p.linkLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function ServiceGroupCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {SERVICE_GROUPS.map((g, i) => (
        <Reveal key={g.id} delay={(i % 2) * 80}>
          <article
            id={g.id}
            className={cn(
              "flex h-full scroll-mt-24 flex-col overflow-hidden rounded-lg border bg-card",
              g.id === "design-pm" && "border-primary/50",
            )}
          >
            {detailed && <Photo id={g.photo} className="aspect-[16/7]" sizes="(min-width: 768px) 50vw, 100vw" />}
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow text-accent-ink">{g.audience}</p>
              <h3 className="mt-2 text-xl font-bold">{g.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{g.situation}</p>
              <ul className="mt-4 grid gap-x-4 gap-y-1.5 text-[15px] sm:grid-cols-2">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    <span>
                      <Txt>{it}</Txt>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-5">
                {g.links.map((l) =>
                  "href" in l ? (
                    <Link key={l.label} to={l.href} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-ink underline-offset-4 hover:underline">
                      {l.label} <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <Link
                      key={l.slug}
                      to="/services/$slug"
                      params={{ slug: l.slug }}
                      className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-ink underline-offset-4 hover:underline"
                    >
                      {l.label} <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/** The single dark band: featured projects. */
export function ProjectsBand({
  projects = FEATURED_PROJECTS,
  title = "Recent work, before and after",
  intro = "A few examples of the jobs we take on. Tap a project for the full scope, constraints and result.",
  eyebrow = "Projects",
}: {
  projects?: Project[];
  title?: string;
  intro?: string;
  eyebrow?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <Section tone="ink" labelledBy="projects-band-title">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="projects-band-title" tone="ink" eyebrow={eyebrow} title={title} intro={intro} />
        <Link
          to="/projects"
          className="inline-flex min-h-11 shrink-0 items-center gap-1.5 font-semibold text-ink-foreground underline underline-offset-4"
        >
          All projects <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 70} className="h-full">
            <ProjectCard project={p} onOpen={setOpenId} tone="ink" />
          </Reveal>
        ))}
      </div>
      <ProjectLightbox projects={projects} openId={openId} onOpenChange={setOpenId} />
    </Section>
  );
}

export function TrustSection() {
  const credentials = [
    ...BUSINESS.registrations.map((r) => ({ icon: FileCheck2, title: r.label, body: r.value })),
    { icon: ShieldCheck, title: "Insurance", body: BUSINESS.insurance },
    { icon: BadgeCheck, title: "Warranty", body: BUSINESS.warranty },
  ];
  return (
    <Section labelledBy="trust-title">
      <SectionHeading
        id="trust-title"
        eyebrow="Proof"
        title={HOME.trust.title}
        intro={
          BUSINESS.yearsInBusiness
            ? `${BUSINESS.yearsInBusiness} of renovation and repair work. Real customers, real registrations, warranty in writing.`
            : "Real customers, real registrations, warranty in writing."
        }
      />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {HOME.trust.reviews.map((r, i) => (
          <li key={i}>
            <Reveal delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-lg border bg-card p-6">
                <Quote className="size-7 text-primary" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed">
                  <Txt>{r.quote}</Txt>
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
                    <UserRound className="size-5" />
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold">
                      <Txt>{r.name}</Txt>
                    </span>
                    <span className="text-muted-foreground">
                      <Txt>{r.context}</Txt>
                    </span>
                  </span>
                </figcaption>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-placeholder-foreground">
                  {UI.replaceReview} · add customer photo
                </p>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {credentials.map((c) => (
          <li key={c.title} className="flex gap-3 rounded-lg bg-secondary p-4">
            <c.icon className="mt-0.5 size-5 shrink-0 text-accent-ink" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold">{c.title}</p>
              <p className="mt-0.5 text-muted-foreground">
                <Txt>{c.body}</Txt>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function PricingSection() {
  return (
    <Section tone="muted" labelledBy="pricing-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading id="pricing-title" eyebrow="Pricing" title={HOME.pricing.title} intro={HOME.pricing.intro} />
          {BUSINESS.smallJobsFrom && (
            <p className="mt-6 text-lg font-semibold">Small jobs from {BUSINESS.smallJobsFrom}</p>
          )}
          <div className="mt-8">
            <QuoteButton />
            <p className="mt-3 text-sm text-muted-foreground">Free, written and itemised. No obligation.</p>
          </div>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {HOME.pricing.factors.map((f, i) => (
            <li key={f.title} className={cn("rounded-lg border bg-card p-5", i === 4 && "sm:col-span-2")}>
              <p className="text-sm font-bold text-accent-ink">0{i + 1}</p>
              <h3 className="mt-1 font-semibold">{f.title}</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">{f.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function ClosingCta({
  title = HOME.closing.title,
  body = HOME.closing.body,
  whatsappMessage,
}: {
  title?: string;
  body?: string;
  whatsappMessage?: string;
}) {
  return (
    <section aria-labelledby="closing-title" className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-accent p-8 md:p-14">
            <div className="max-w-2xl">
              <h2 id="closing-title" className="text-3xl font-bold leading-tight md:text-4xl">
                <Txt>{title}</Txt>
              </h2>
              <p className="mt-4 flex items-start gap-2 text-lg text-accent-foreground">
                <Clock className="mt-1 size-5 shrink-0" aria-hidden="true" />
                <span>
                  <Txt>{body}</Txt>
                </span>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <QuoteButton />
              <div className="flex flex-wrap gap-x-6 text-accent-foreground">
                <WhatsAppLink message={whatsappMessage} />
                <PhoneLink showNumber />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Inner page intro, light by default. */
export function PageIntro({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b bg-secondary py-12 md:py-20">
      <div className="container-site">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} className="max-w-3xl" />
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
