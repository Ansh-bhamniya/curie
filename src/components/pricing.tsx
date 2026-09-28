"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { Check, Star } from "lucide-react";
import { SectionBadge } from "./section-badge";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Plan",
    description: "For testing the waters with a handful of applications.",
    price: { monthly: 0, annual: 0 },
    cta: "Start for Free",
    features: [
      "5 auto-applications / month",
      "Resume match scoring",
      "Daily job alerts",
      "Basic application tracker",
      "Review before every submit",
    ],
    featured: false,
  },
  {
    name: "Pro Plan",
    description: "For job seekers applying at scale every week.",
    price: { monthly: 499, annual: 399 },
    cta: "Start Pro Trial",
    features: [
      "Unlimited auto-applications",
      "Priority job matching",
      "Instant ‘Needs You’ alerts",
      "Full application tracker",
      "Email confirmation checks",
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    description: "For a fully hands-off job search.",
    price: { monthly: 999, annual: 799 },
    cta: "Get Premium",
    features: [
      "Everything in Pro",
      "Resume optimization suggestions",
      "AI-drafted cover letters",
      "Weekly application digest",
      "Priority support",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsAnnual(checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x, y },
        colors: ["#1e4841", "#bbf49c", "#ecfdcd", "#ffffff"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <SectionBadge>Pricing</SectionBadge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
          Pick the Plan That Matches Your Job Search
        </h2>
        <p className="mt-3 text-base text-brand-muted">
          Start free. Upgrade once you're ready to apply at scale.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5">
        <Switch
          ref={switchRef}
          checked={isAnnual}
          onCheckedChange={handleToggle}
        />
        <span className="text-sm font-medium text-brand-dark">
          Annual billing{" "}
          <span className="text-[#4c7a2c]">(Save ~20%)</span>
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 30, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.featured ? -16 : 0,
                    opacity: 1,
                    scale: plan.featured ? 1 : 0.95,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 24,
              delay: index * 0.08,
            }}
            className={cn(
              "relative flex min-h-[480px] flex-col rounded-xl p-6",
              plan.featured
                ? "z-10 border-2 border-brand-dark bg-brand-dark text-white"
                : "border border-black/5 bg-[#fafcfa] text-brand-dark"
            )}
          >
            {plan.featured && (
              <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-brand-accent px-2.5 py-1">
                <Star className="h-3.5 w-3.5 fill-current text-[#0d1008]" />
                <span className="text-xs font-semibold text-[#0d1008]">
                  Popular
                </span>
              </div>
            )}

            <h3 className="text-base font-semibold">{plan.name}</h3>
            <p
              className={cn(
                "mt-1 text-sm",
                plan.featured ? "text-white/60" : "text-brand-muted"
              )}
            >
              {plan.description}
            </p>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                <NumberFlow
                  value={isAnnual ? plan.price.annual : plan.price.monthly}
                  locales="en-IN"
                  format={{
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  transformTiming={{ duration: 500, easing: "ease-out" }}
                />
              </span>
              <span
                className={cn(
                  "text-sm",
                  plan.featured ? "text-white/60" : "text-brand-muted"
                )}
              >
                / month
              </span>
            </div>
            <p
              className={cn(
                "text-xs",
                plan.featured ? "text-white/50" : "text-brand-muted"
              )}
            >
              {isAnnual ? "billed annually" : "billed monthly"}
            </p>

            <a
              href="#waitlist"
              className={cn(
                "mt-5 inline-flex h-9 w-full items-center justify-center rounded-full text-sm font-semibold transition-all duration-300",
                plan.featured
                  ? "bg-brand-accent text-[#0d1008] hover:brightness-95"
                  : "bg-brand-dark text-white hover:opacity-90"
              )}
            >
              {plan.cta}
            </a>

            <hr
              className={cn(
                "my-5",
                plan.featured ? "border-white/10" : "border-black/5"
              )}
            />

            <p
              className={cn(
                "text-xs font-medium uppercase tracking-wide",
                plan.featured ? "text-white/50" : "text-brand-muted"
              )}
            >
              Features
            </p>
            <ul className="mt-2.5 flex flex-col gap-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      plan.featured ? "text-brand-accent" : "text-brand-dark"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
