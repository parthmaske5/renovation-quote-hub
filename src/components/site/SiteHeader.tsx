import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS, NAV, telUrl, whatsappUrl } from "@/content/site";
import { PhoneLink, WhatsAppLink } from "./ContactLinks";
import { WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";
import { QuoteButton } from "./QuoteButton";
import { Txt } from "./Txt";

const navLinkClass =
  "rounded-md px-3 py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:decoration-primary data-[status=active]:decoration-2 data-[status=active]:underline-offset-8";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-3">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="hidden size-11 place-items-center rounded-md text-foreground/80 hover:bg-muted hover:text-foreground md:grid"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a
            href={telUrl}
            aria-label="Call us"
            className="grid size-11 place-items-center rounded-md text-foreground/80 hover:bg-muted hover:text-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <QuoteButton size="default" arrow={false} className="ml-1 hidden h-10 px-4 md:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="touch" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b px-5 py-3">
                  <Logo />
                </div>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center rounded-md px-3 text-lg font-semibold hover:bg-muted data-[status=active]:bg-muted"
                        activeOptions={{ exact: true }}
                      >
                        Home
                      </Link>
                    </li>
                    {NAV.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="flex min-h-12 items-center rounded-md px-3 text-lg font-semibold hover:bg-muted data-[status=active]:bg-muted"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="space-y-3 border-t px-5 py-5" onClick={() => setOpen(false)}>
                  <QuoteButton className="w-full" />
                  <div className="flex flex-wrap gap-x-6 text-accent-ink">
                    <WhatsAppLink />
                    <PhoneLink />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Txt>{BUSINESS.hoursSummary}</Txt>
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
