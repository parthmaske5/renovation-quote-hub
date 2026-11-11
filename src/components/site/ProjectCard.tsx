import { MapPin } from "lucide-react";
import { PROJECT_CATEGORY_LABEL, type Project } from "@/content/projects";
import { UI } from "@/content/site";
import { cn } from "@/lib/utils";
import { Photo } from "./Photo";
import { Txt } from "./Txt";

export function ProjectCard({
  project,
  onOpen,
  tone = "default",
  showBeforeAfter = true,
}: {
  project: Project;
  onOpen: (id: string) => void;
  tone?: "default" | "ink";
  showBeforeAfter?: boolean;
}) {
  const ink = tone === "ink";
  const pair = showBeforeAfter && project.before;
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border",
        ink ? "border-ink-border bg-ink-raised" : "bg-card",
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="block text-left focus-visible:outline-offset-[-2px]"
        aria-label={`${UI.viewProject}: ${project.title}`}
      >
        {pair ? (
          <div className="grid grid-cols-2 gap-px bg-ink-border">
            <Photo id={project.before!} label={UI.before} className="aspect-[4/5]" sizes="(min-width: 1024px) 15vw, 50vw" />
            <Photo id={project.after} label={UI.after} className="aspect-[4/5]" sizes="(min-width: 1024px) 15vw, 50vw" />
          </div>
        ) : (
          <Photo id={project.after} className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, 100vw" />
        )}
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold">
          <span className={cn("eyebrow", ink ? "text-primary" : "text-accent-ink")}>
            {PROJECT_CATEGORY_LABEL[project.category]}
          </span>
          <span className={cn("inline-flex items-center gap-1", ink ? "text-ink-muted" : "text-muted-foreground")}>
            <MapPin className="size-3.5" aria-hidden="true" />
            <Txt>{project.location}</Txt>
          </span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug">{project.title}</h3>
        <p className={cn("mt-2 line-clamp-3 text-sm leading-relaxed", ink ? "text-ink-muted" : "text-muted-foreground")}>
          <span className="font-semibold">Scope: </span>
          {project.scope}
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          <span className="font-semibold">Result: </span>
          <Txt>{project.result}</Txt>
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <button
            type="button"
            onClick={() => onOpen(project.id)}
            className={cn(
              "min-h-11 text-sm font-semibold underline underline-offset-4",
              ink ? "text-ink-foreground" : "text-accent-ink",
            )}
          >
            {UI.viewProject}
          </button>
          {project.sample && (
            <span className="rounded-sm bg-placeholder px-1.5 py-0.5 text-[11px] font-semibold text-placeholder-foreground">
              Sample
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
