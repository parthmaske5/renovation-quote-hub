import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { ClosingCta, TrustSection } from "@/components/site/blocks";
import { Photo } from "@/components/site/Photo";
import { Section, SectionHeading } from "@/components/site/Section";
import { Txt } from "@/components/site/Txt";
import { ABOUT } from "@/content/about";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About Us — Our Own Skilled Renovation Team",
      "A renovation and repair team with our own electricians, plumbers, tilers, painters and carpenters, and one point of contact from quote to handover.",
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b bg-secondary">
        <div className="container-site grid items-center gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading as="h1" eyebrow={ABOUT.eyebrow} title={ABOUT.headline} />
            <p className="mt-5 text-lg leading-relaxed"><Txt>{ABOUT.intro}</Txt></p>
            <p className="mt-4 leading-relaxed text-muted-foreground"><Txt>{ABOUT.story}</Txt></p>
          </div>
          <Photo id="team" priority className="aspect-[4/3] rounded-lg" />
        </div>
      </section>
      <Section labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="How we work" title="What you can expect from us" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.values.map((v) => (
            <li key={v.title} className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="muted" labelledBy="team-title">
        <SectionHeading id="team-title" eyebrow="The team" title="The people you'll deal with" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {ABOUT.team.map((m, i) => (
            <li key={i} className="flex items-center gap-4 rounded-lg border bg-card p-5">
              <span className="grid size-14 place-items-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
                <UserRound className="size-6" />
              </span>
              <div>
                <p className="font-semibold"><Txt>{m.name}</Txt></p>
                <p className="text-sm text-muted-foreground"><Txt>{m.role}</Txt></p>
                <p className="mt-1 text-[11px] font-semibold uppercase text-placeholder-foreground">Add team photo</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <TrustSection />
      <ClosingCta />
    </>
  );
}
