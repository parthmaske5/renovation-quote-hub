import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PROJECT_CATEGORY_LABEL, type Project } from "@/content/projects";
import { UI } from "@/content/site";
import { Photo } from "./Photo";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

/** Keyboard-accessible project lightbox: Esc closes, ←/→ move between projects. */
export function ProjectLightbox({
  projects,
  openId,
  onOpenChange,
}: {
  projects: Project[];
  openId: string | null;
  onOpenChange: (id: string | null) => void;
}) {
  const index = projects.findIndex((p) => p.id === openId);
  const project = index >= 0 ? projects[index] : null;
  const go = (delta: number) => {
    if (index < 0) return;
    const next = projects[(index + delta + projects.length) % projects.length];
    if (next) onOpenChange(next.id);
  };

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onOpenChange(null)}>
      <DialogContent
        className="max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-4xl overflow-y-auto p-0 sm:rounded-lg [&>button.absolute]:z-10 [&>button.absolute]:rounded-md [&>button.absolute]:bg-background [&>button.absolute]:p-2 [&>button.absolute]:opacity-100"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        {project && (
          <>
            {project.before ? (
              <div className="grid grid-cols-2 gap-px bg-border">
                <Photo id={project.before} label={UI.before} className="aspect-[4/3]" sizes="50vw" />
                <Photo id={project.after} label={UI.after} className="aspect-[4/3]" sizes="50vw" />
              </div>
            ) : (
              <Photo id={project.after} className="aspect-[16/9]" sizes="90vw" />
            )}
            <div className="p-5 md:p-8">
              <p className="eyebrow text-accent-ink">{PROJECT_CATEGORY_LABEL[project.category]}</p>
              <DialogTitle className="mt-2 text-2xl font-bold leading-tight">{project.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Project details: type, location, scope, constraints and result.
              </DialogDescription>
              {project.sample && (
                <p className="mt-3 inline-block rounded-sm bg-placeholder px-2 py-1 text-xs font-semibold text-placeholder-foreground">
                  {UI.sampleProject}
                </p>
              )}
              <dl className="mt-6 grid gap-x-8 gap-y-5 text-[15px] sm:grid-cols-2">
                <Detail term="Project type" value={project.type} />
                <Detail term="Location" value={project.location} />
                <Detail term="Duration" value={project.duration} />
                <Detail term="Constraints" value={project.constraints} />
                <Detail term="Scope" value={project.scope} wide />
                <Detail term="Result" value={project.result} wide />
              </dl>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
                <QuoteButton />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="grid size-11 place-items-center rounded-md border hover:bg-muted"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="grid size-11 place-items-center rounded-md border hover:bg-muted"
                    aria-label="Next project"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Detail({ term, value, wide }: { term: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{term}</dt>
      <dd className="mt-1 leading-relaxed">
        <Txt>{value}</Txt>
      </dd>
    </div>
  );
}
