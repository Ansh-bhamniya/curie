import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: null },
  { label: "Contact", href: null },
];

const resourceLinks = [
  "Resume Tips",
  "Interview Prep",
  "Career Pages We Cover",
  "Application Tracking",
  "Help Center",
];

const socialLinks = ["Twitter", "LinkedIn", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
              An AI agent that finds real job openings and applies for you —
              pausing only when it needs your judgment.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-dark">Company</p>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) =>
                link.href ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-dark"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <span
                      aria-disabled="true"
                      title="Coming soon"
                      className="cursor-not-allowed text-sm text-brand-muted/40"
                    >
                      {link.label}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-dark">Resources</p>
            <ul className="mt-4 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <span
                    aria-disabled="true"
                    title="Coming soon"
                    className="cursor-not-allowed text-sm text-brand-muted/40"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div id="waitlist" className="scroll-mt-16">
            <p className="text-sm font-semibold text-brand-dark">
              Get job search tips in your inbox
            </p>
            <form className="mt-3 flex items-center gap-2">
              <Input
                type="email"
                placeholder="you@email.com"
                className="rounded-full bg-[#fafcfa]"
              />
              <Button type="button" size="sm" className="shrink-0 rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 sm:flex-row">
          <p className="text-xs text-brand-muted">
            2026 Curie. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <span
                key={social}
                aria-disabled="true"
                title="Coming soon"
                className="cursor-not-allowed text-xs text-brand-muted/40"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
