"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBadge } from "./section-badge";
import { Button } from "@/components/ui/button";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center sm:pt-24 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <SectionBadge>Apply Jobs via AI Agent</SectionBadge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.12}
          className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-brand-dark sm:text-5xl"
        >
          The Job Market Got Crowded.
          <br />
          Your Job Search Just Got Smarter.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.24}
          className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brand-muted/70 sm:text-lg"
        >
          Let AI find jobs that match your skills and apply for you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.36}
          className="mt-6 flex flex-col items-center gap-2.5"
        >
          <Button asChild variant="cta" size="lg" className="rounded-full px-5">
            <a href="#waitlist">
              Join the Waitlist
              <ArrowRight />
            </a>
          </Button>
          <p className="text-xs text-brand-muted">
            No credit card required &middot; Takes under 2 minutes
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[55vh]">
        <CrowdCanvas
          src="/crowd-peeps.png"
          rows={15}
          cols={7}
          className="absolute bottom-0 h-full w-full"
        />
      </div>
    </section>
  );
}
