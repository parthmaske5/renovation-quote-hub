import { createServerFn } from "@tanstack/react-start";
import { normalizeMalaysianPhone, quoteSubmissionSchema } from "./quote-schema";

/** Public: stores a quote request. The table has no browser access; only this function writes to it. */
export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSubmissionSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("quote_requests")
      .insert({
        name: data.name,
        phone: normalizeMalaysianPhone(data.phone) ?? data.phone,
        job_type: data.jobType,
        area: data.area,
        property_type: data.propertyType,
        timing: data.timing,
        description: data.description,
        budget_range: data.budgetRange || null,
        photo_paths: data.photoPaths,
      })
      .select("id")
      .single();
    if (error) {
      console.error("quote_requests insert failed", error);
      throw new Error("We couldn't save your request. Please try again or WhatsApp us.");
    }
    return { id: row.id };
  });
