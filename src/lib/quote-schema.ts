import { z } from "zod";

/**
 * Malaysian phone numbers: local "01x…" mobiles or "+60" international form
 * (mobile or landline). Spaces, dashes and brackets are ignored.
 */
export function normalizeMalaysianPhone(input: string): string | null {
  const compact = input.replace(/[\s\-().]/g, "");
  if (/^01\d{8,9}$/.test(compact)) return `+6${compact}`;
  const intl = compact.match(/^\+60(\d+)$/);
  if (intl && /^(1\d{8,9}|[3-9]\d{7,8})$/.test(intl[1])) return compact;
  return null;
}

export const JOB_TYPES = ["small_job", "home_renovation", "shop_renovation", "not_sure"] as const;

const phone = z
  .string()
  .trim()
  .min(1, "Please enter your WhatsApp or phone number")
  .refine((v) => normalizeMalaysianPhone(v) !== null, {
    message: "Use a Malaysian number starting with +60 or 01, e.g. 012-345 6789",
  });

export const quoteStep1 = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone,
  jobType: z.enum(JOB_TYPES, { errorMap: () => ({ message: "Choose the type of job" }) }),
});

export const quoteStep2 = z.object({
  area: z.string().trim().min(1, "Please enter your area or city").max(100),
  propertyType: z.string().trim().min(1, "Choose a property type").max(60),
  timing: z.string().trim().min(1, "Choose when you need it").max(60),
});

export const quoteStep3 = z.object({
  description: z
    .string()
    .trim()
    .min(10, "A sentence or two helps us quote accurately (at least 10 characters)")
    .max(2000),
  budgetRange: z.string().trim().max(60).optional(),
});

export const quoteFormSchema = quoteStep1.merge(quoteStep2).merge(quoteStep3);
export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const quoteSubmissionSchema = quoteFormSchema.extend({
  photoPaths: z
    .array(z.string().regex(/^uploads\/[A-Za-z0-9-]+\/[A-Za-z0-9._-]{1,120}$/))
    .max(5)
    .default([]),
});
export type QuoteSubmission = z.infer<typeof quoteSubmissionSchema>;
