import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            aria-disabled="true"
            title="Coming soon"
            className="hidden cursor-not-allowed text-sm font-medium text-foreground/30 sm:block"
          >
            Log in
          </span>
          <Button asChild size="sm" className="rounded-full">
            <a href="#waitlist">Join the Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
