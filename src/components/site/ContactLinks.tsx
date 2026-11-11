import { Phone } from "lucide-react";
import { BUSINESS, UI, telUrl, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";
import { Txt } from "./Txt";

/** Secondary contact: text links only, never styled as a competing button. */
export function WhatsAppLink({
  message,
  className,
  label = UI.whatsapp,
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline",
        className,
      )}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {label}
    </a>
  );
}

export function PhoneLink({ className, showNumber = false }: { className?: string; showNumber?: boolean }) {
  return (
    <a
      href={telUrl}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline",
        className,
      )}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      {showNumber ? <Txt>{BUSINESS.phoneDisplay}</Txt> : UI.call}
    </a>
  );
}
