import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "@/content/services";
import { Txt } from "./Txt";

export function FaqList({ faqs, idPrefix = "faq" }: { faqs: Faq[]; idPrefix?: string }) {
  return (
    <Accordion type="single" collapsible className="border-t">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`${idPrefix}-${i}`}>
          <AccordionTrigger className="min-h-14 py-4 text-base font-semibold hover:no-underline md:text-lg [&>svg]:size-5">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
            <Txt>{f.a}</Txt>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
