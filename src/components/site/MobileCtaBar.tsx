import { useRouterState } from "@tanstack/react-router";
import { whatsappUrl } from "@/content/site";
import { WhatsAppIcon } from "./icons";
import { QuoteButton } from "./QuoteButton";

/** Sticky bottom bar on mobile: wide primary CTA + WhatsApp icon. Hidden on the quote page itself. */
export function MobileCtaBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/get-a-quote")) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <QuoteButton className="h-12 flex-1" />
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          className="grid size-12 shrink-0 place-items-center rounded-md border border-input bg-card text-foreground"
        >
          <WhatsAppIcon className="size-6" />
        </a>
      </div>
    </div>
  );
}
