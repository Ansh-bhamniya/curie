import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-brand-dark px-8 py-12 text-center sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(187,244,156,0.25),transparent)]"
        />
        <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Stop Filling Out Forms?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-base text-white/60">
          Let Curie find real openings and apply on your behalf, so you
          can spend that time on interviews instead.
        </p>
        <Button
          asChild
          variant="cta"
          size="lg"
          className="relative mt-6 rounded-full px-5"
        >
          <a href="#waitlist">
            Join the Waitlist
            <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
