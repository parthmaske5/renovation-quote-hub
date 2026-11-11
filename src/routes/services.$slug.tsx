import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { useState } from "react";
import { ClosingCta } from "@/components/site/blocks";
import { WhatsAppLink } from "@/components/site/ContactLinks";
import { FaqList } from "@/components/site/FaqList";
import { Photo } from "@/components/site/Photo";
import { ProjectLightbox } from "@/components/site/ProjectLightbox";
import { QuoteButton } from "@/components/site/QuoteButton";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StepList } from "@/components/site/StepList";
import { Txt } from "@/components/site/Txt";
import { getProject } from "@/content/projects";
import { getServiceDetail, SERVICE_DETAILS } from "@/content/services";
import { BUSINESS, UI } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    // Shop renovation has one dedicated landing page; never a duplicate detail page.
    if (params.slug === "shop-renovation") {
      throw redirect({ to: "/shop-renovation", statusCode: 301 });
    }
    const service = getServiceDetail(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getServiceDetail(loaderData.slug) : undefined;
    if (!service) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    return { meta: pageMeta(`${service.name} in ${BUSINESS.city}`, `${service.summary} ${service.need}`.slice(0, 158)) };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const service = getServiceDetail(slug)!;
  const project = getProject(service.projectId);
  const [openId, setOpenId] = useState<string | null>(null);
  const others = SERVICE_DETAILS.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="border-b bg-secondary">
        <div className="container-site grid items-center gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/services" className="hover:underline">
                Services
              </Link>{" "}
              / <span aria-current="page">{service.name}</span>
            </nav>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] md:text-5xl">{service.name}</h1>
            <p className="mt-3 inline-flex items-center gap-1.5 font-medium text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              <span>
                Serving <Txt>{BUSINESS.areaSummary}</Txt> and nearby
              </span>
            </p>
            <p className="mt-5 text-lg leading-relaxed">{service.need}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <QuoteButton className="w-full sm:w-auto" />
              <WhatsAppLink
                className="text-accent-ink"
                message={`Hi, I'd like a quote for ${service.name.toLowerCase()}. My job is: `}
              />
            </div>
          </div>
          <Photo id={service.photo} priority className="aspect-[4/3] rounded-lg" />
        </div>
      </section>

      <Section labelledBy="scope-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeading id="scope-title" eyebrow="What's included" title={service.summary} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.scope.map((s) => (
              <li key={s} className="flex gap-3 rounded-lg border bg-card p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-ink" aria-hidden="true" />
                <span>
                  <Txt>{s}</Txt>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {project && (
        <Section tone="muted" labelledBy="related-title">
          <Reveal>
            <div className="grid overflow-hidden rounded-lg border bg-card lg:grid-cols-2">
              <button type="button" onClick={() => setOpenId(project.id)} aria-label={`${UI.viewProject}: ${project.title}`}>
                {project.before ? (
                  <div className="grid h-full grid-cols-2 gap-px bg-border">
                    <Photo id={project.before} label={UI.before} className="aspect-[4/5] h-full lg:aspect-auto" sizes="25vw" />
                    <Photo id={project.after} label={UI.after} className="aspect-[4/5] h-full lg:aspect-auto" sizes="25vw" />
                  </div>
                ) : (
                  <Photo id={project.after} className="aspect-[4/3] h-full lg:aspect-auto" />
                )}
              </button>
              <div className="p-6 md:p-10">
                <p className="eyebrow text-accent-ink">Related project</p>
                <h2 id="related-title" className="mt-2 text-2xl font-bold">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.type} · <Txt>{project.location}</Txt>
                </p>
                <dl className="mt-6 space-y-4 text-[15px]">
                  <div>
                    <dt className="font-semibold">Scope</dt>
                    <dd className="mt-1 text-muted-foreground">{project.scope}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Result</dt>
                    <dd className="mt-1">
                      <Txt>{project.result}</Txt>
                    </dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => setOpenId(project.id)}
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-ink underline underline-offset-4"
                >
                  {UI.viewProject} <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
          <ProjectLightbox projects={[project]} openId={openId} onOpenChange={setOpenId} />
        </Section>
      )}

      <Section labelledBy="process-title">
        <SectionHeading id="process-title" eyebrow="How it works" title="What happens when you get in touch" />
        <StepList steps={service.process} className="mt-10 lg:grid-cols-4" />
      </Section>

      <Section tone="muted" labelledBy="service-faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="service-faq-title" eyebrow="FAQ" title={`${service.name}: common questions`} />
          <FaqList faqs={service.faqs} idPrefix={service.slug} />
        </div>
      </Section>

      <ClosingCta
        title={`Get a clear price for your ${service.name.toLowerCase()} job.`}
        whatsappMessage={`Hi, I'd like a quote for ${service.name.toLowerCase()}. My job is: `}
      />

      <section aria-labelledby="other-services" className="border-t py-12">
        <div className="container-site">
          <h2 id="other-services" className="eyebrow text-muted-foreground">
            Other services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex min-h-11 items-center rounded-full border bg-card px-4 text-sm font-medium hover:border-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/shop-renovation"
                className="inline-flex min-h-11 items-center rounded-full border bg-card px-4 text-sm font-medium hover:border-foreground"
              >
                Shop Renovation
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
