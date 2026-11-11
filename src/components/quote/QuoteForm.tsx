import { CheckCircle2, ImagePlus, Loader2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/site/icons";
import { Txt } from "@/components/site/Txt";
import { QUOTE } from "@/content/quote";
import { whatsappUrl } from "@/content/site";
import { supabase } from "@/integrations/supabase/client";
import { quoteStep1, quoteStep2, quoteStep3, type QuoteFormValues } from "@/lib/quote-schema";
import { submitQuoteRequest } from "@/lib/quote.functions";
import { cn } from "@/lib/utils";

type Values = { name: string; phone: string; jobType: string; area: string; propertyType: string; timing: string; description: string; budgetRange: string };
const EMPTY: Values = { name: "", phone: "", jobType: "", area: "", propertyType: "", timing: "", description: "", budgetRange: "" };
const SCHEMAS = [quoteStep1, quoteStep2, quoteStep3];
const MAX_PHOTOS = 3;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof Values, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = (i: number) => {
    const r = SCHEMAS[i].safeParse(values);
    if (r.success) return true;
    const next: Record<string, string> = {};
    for (const issue of r.error.issues) next[String(issue.path[0])] ??= issue.message;
    setErrors(next);
    const first = Object.keys(next)[0];
    document.getElementById(`q-${first}`)?.focus();
    return false;
  };

  const onNext = () => validate(step) && setStep((s) => s + 1);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) return onNext();
    if (!validate(2)) return;
    setSubmitting(true);
    try {
      const photoPaths: string[] = [];
      for (const file of photos) {
        const safe = file.name.replace(/[^A-Za-z0-9._-]/g, "_").slice(-80) || "photo.jpg";
        const path = `uploads/${crypto.randomUUID()}/${safe}`;
        const { error } = await supabase.storage.from("quote-photos").upload(path, file, { contentType: file.type });
        if (error) toast.error(`Couldn't upload ${file.name}. You can send it on WhatsApp instead.`);
        else photoPaths.push(path);
      }
      await submitQuoteRequest({ data: { ...(values as unknown as QuoteFormValues), budgetRange: values.budgetRange || undefined, photoPaths } });
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    const jobLabel = QUOTE.jobTypes.find((j) => j.value === values.jobType)?.label ?? values.jobType;
    const summary = `Hi, I just sent a quote request on your website.\nName: ${values.name}\nJob: ${jobLabel}\nArea: ${values.area}\nProperty: ${values.propertyType}\nTiming: ${values.timing}\nDetails: ${values.description}${values.budgetRange ? `\nBudget: ${values.budgetRange}` : ""}`;
    return (
      <div className="rounded-lg border bg-card p-6 md:p-10" role="status">
        <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
        <h2 className="mt-4 text-3xl font-bold">{QUOTE.confirmation.title}</h2>
        <p className="mt-2 text-muted-foreground">Here's exactly what happens next:</p>
        <ol className="mt-6 space-y-5">
          {QUOTE.confirmation.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-muted-foreground"><Txt>{s.body}</Txt></p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 border-t pt-6">
          <p className="mb-3 text-sm text-muted-foreground">Want to add photos or talk now? Your summary is already filled in.</p>
          <a href={whatsappUrl(summary)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-md border-2 border-foreground px-5 font-semibold hover:bg-muted">
            <WhatsAppIcon className="size-5" /> Continue on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border bg-card p-5 md:p-8">
      <ol className="mb-8 grid grid-cols-3 gap-2" aria-label="Progress">
        {QUOTE.steps.map((label, i) => (
          <li key={label} aria-current={i === step ? "step" : undefined}>
            <span className={cn("block h-1.5 rounded-full", i <= step ? "bg-primary" : "bg-muted")} />
            <span className={cn("mt-2 block text-xs font-semibold", i === step ? "text-foreground" : "text-muted-foreground")}>
              {i + 1}. {label}
            </span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset className="space-y-5">
          <legend className="sr-only">Step 1: About you</legend>
          <Field id="name" label="Your name" error={errors.name}>
            <Input id="q-name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} className="h-12 text-base" aria-invalid={!!errors.name} />
          </Field>
          <Field id="phone" label="WhatsApp / phone number" hint="+60 or 01x, e.g. 012-345 6789" error={errors.phone}>
            <Input id="q-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} className="h-12 text-base" aria-invalid={!!errors.phone} />
          </Field>
          <div>
            <p id="jobType-label" className="mb-2 text-sm font-semibold">Type of job</p>
            <div role="radiogroup" aria-labelledby="jobType-label" className="grid gap-2 sm:grid-cols-2">
              {QUOTE.jobTypes.map((j, i) => (
                <label key={j.value} className={cn("flex min-h-16 cursor-pointer items-start gap-3 rounded-md border p-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring", values.jobType === j.value ? "border-primary bg-accent" : "hover:border-foreground/40")}>
                  <input id={i === 0 ? "q-jobType" : undefined} type="radio" name="jobType" value={j.value} checked={values.jobType === j.value} onChange={() => set("jobType", j.value)} className="mt-1 size-4 accent-[var(--primary)]" />
                  <span>
                    <span className="block font-semibold">{j.label}</span>
                    <span className="text-sm text-muted-foreground">{j.hint}</span>
                  </span>
                </label>
              ))}
            </div>
            {errors.jobType && <p className="mt-2 text-sm font-medium text-destructive">{errors.jobType}</p>}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="space-y-5">
          <legend className="sr-only">Step 2: The place</legend>
          <Field id="area" label="Area / city" error={errors.area}>
            <Input id="q-area" autoComplete="address-level2" value={values.area} onChange={(e) => set("area", e.target.value)} className="h-12 text-base" aria-invalid={!!errors.area} />
          </Field>
          <Field id="propertyType" label="Property type" error={errors.propertyType}>
            <NativeSelect id="q-propertyType" value={values.propertyType} onChange={(v) => set("propertyType", v)} options={QUOTE.propertyTypes} />
          </Field>
          <Field id="timing" label="When do you need it?" error={errors.timing}>
            <NativeSelect id="q-timing" value={values.timing} onChange={(v) => set("timing", v)} options={QUOTE.timings} />
          </Field>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-5">
          <legend className="sr-only">Step 3: The job</legend>
          <Field id="description" label="Describe the job" hint="What needs doing, rough size, anything we should know." error={errors.description}>
            <Textarea id="q-description" rows={5} value={values.description} onChange={(e) => set("description", e.target.value)} className="text-base" aria-invalid={!!errors.description} />
          </Field>
          <div>
            <p className="mb-2 text-sm font-semibold">Photos <span className="font-normal text-muted-foreground">(optional, up to {MAX_PHOTOS})</span></p>
            <label className="flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed p-4 text-sm font-semibold hover:border-foreground/40 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring">
              <ImagePlus className="size-5" aria-hidden="true" /> Add photos
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => {
                  const files = Array.from(e.target.files ?? []).filter((f) => f.type.startsWith("image/") && f.size <= 10 * 1024 * 1024);
                  setPhotos((p) => [...p, ...files].slice(0, MAX_PHOTOS));
                  e.target.value = "";
                }}
              />
            </label>
            {photos.length > 0 && (
              <ul className="mt-3 space-y-2">
                {photos.map((f, i) => (
                  <li key={i} className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2 text-sm">
                    <span className="truncate">{f.name}</span>
                    <button type="button" onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))} aria-label={`Remove ${f.name}`} className="grid size-9 place-items-center rounded hover:bg-background">
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Field id="budgetRange" label="Budget range (optional)">
            <NativeSelect id="q-budgetRange" value={values.budgetRange} onChange={(v) => set("budgetRange", v)} options={QUOTE.budgets} placeholder="Prefer not to say" />
          </Field>
        </fieldset>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="ghost" size="lg" className="h-12 px-4" onClick={() => setStep((s) => s - 1)}>Back</Button>
        ) : <span />}
        {step < 2 ? (
          <Button type="button" size="xl" onClick={onNext}>Next</Button>
        ) : (
          <Button type="submit" size="xl" disabled={submitting}>
            {submitting && <Loader2 className="animate-spin" />} Send quote request
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={`q-${id}`} className="text-sm font-semibold">{label}</Label>
      {hint && <p className="mt-0.5 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && <p className="mt-2 text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

function NativeSelect({ id, value, onChange, options, placeholder = "Choose one" }: { id: string; value: string; onChange: (v: string) => void; options: readonly string[]; placeholder?: string }) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="h-12 w-full rounded-md border border-input bg-background px-3 text-base">
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
