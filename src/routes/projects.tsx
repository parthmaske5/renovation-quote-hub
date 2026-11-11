import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ClosingCta } from "@/components/site/blocks";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ProjectLightbox } from "@/components/site/ProjectLightbox";
import { SectionHeading } from "@/components/site/Section";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/content/projects";
import { SERVICE_DETAILS } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: pageMeta(
      "Renovation Projects — Homes, Shops & Small Jobs",
      "Before and after photos of home renovations, shop fit-outs and repair jobs, with the scope, constraints and result of each project.",
    ),
  }),
  component: ProjectsPage,
});

const SERVICE_OPTIONS = [
  ...SERVICE_DETAILS.map((s) => ({ value: s.slug as string, label: s.name })),
  { value: "shop-renovation", label: "Shop Renovation" },
];

function ProjectsPage() {
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [service, setService] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (category === "all" || p.category === category) &&
          (service === "all" || (p.services as string[]).includes(service)),
      ),
    [category, service],
  );

  return (
    <>
      <section className="bg-ink py-14 text-ink-foreground md:py-20">
        <div className="container-site">
          <SectionHeading as="h1" tone="ink" eyebrow="Projects" title="Real jobs, before and after" intro="Homes, shops and small repairs. Tap any project for the full story." />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div role="group" aria-label="Filter by project type" className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={category === c.id}
                  onClick={() => setCategory(c.id)}
                  className={cn(
                    "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors",
                    category === c.id ? "border-foreground bg-foreground text-background" : "bg-card hover:border-foreground",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 text-sm font-medium">
              <span>Service</span>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="min-h-11 rounded-md border border-input bg-card px-3 text-sm"
              >
                <option value="all">All services</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>
          <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
            Showing {filtered.length} of {PROJECTS.length} projects
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={setOpenId} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-6 rounded-lg border bg-card p-6 text-muted-foreground">No projects match these filters yet.</p>
          )}
          <ProjectLightbox projects={filtered} openId={openId} onOpenChange={setOpenId} />
        </div>
      </section>

      <ClosingCta title="Want a result like this? Tell us about your space." />
    </>
  );
}
