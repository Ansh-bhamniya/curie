"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "./section-badge";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    company: "Puma",
    salary: "$100K – $250K",
    title: "Sr. Frontend Engineer",
    description:
      "We're looking for a Senior Frontend Engineer to lead our design system and ship across the product.",
    bg: "bg-[#fce3ee]",
    logo: "/logos/puma.svg",
  },
  {
    company: "Meesho",
    salary: "$90K – $160K",
    title: "Lead Product Designer",
    description:
      "We're seeking a Lead Product Designer to shape strategy and drive our design language forward.",
    bg: "bg-[#e6edf0]",
    logo: "/logos/meesho.png",
  },
  {
    company: "Zomato",
    salary: "$200K – $450K",
    title: "Sr. Backend Engineer",
    description:
      "We're looking for a Senior Backend Engineer to design and scale our core platform services.",
    bg: "bg-brand-accent-soft",
    logo: "/logos/zomato.svg",
  },
  {
    company: "Flipkart",
    salary: "$150K – $300K",
    title: "Senior Data Analyst",
    description:
      "We seek a Senior Data Analyst to turn customer behavior data into decisions our teams can act on.",
    bg: "bg-[#fbf0e6]",
    logo: "/logos/flipkart.png",
  },
  {
    company: "Swiggy",
    salary: "$112K – $300K",
    title: "Jr. Growth Marketing Associate",
    description:
      "We seek a Growth Marketing Associate to help plan and run campaigns across our biggest markets.",
    bg: "bg-[#eceaf3]",
    logo: "/logos/swiggy.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

export function Values() {
  return (
    <section className="overflow-hidden bg-brand-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          <SectionBadge>Live Openings</SectionBadge>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.12}
          className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl"
        >
          Real Jobs, Sourced Right Now
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.24}
          className="mt-3 text-base text-brand-muted"
        >
          A live look at the roles Curie is tracking straight from
          company career pages.
        </motion.p>
      </div>

      <div className="mt-10 flex snap-x gap-5 overflow-x-auto px-6 pb-4 lg:justify-center lg:px-8">
        {jobs.map((job, index) => (
          <motion.div
            key={job.company}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15 + index * 0.08}
            className={`flex w-64 min-h-[420px] shrink-0 snap-start flex-col rounded-2xl border border-black/5 p-5 ${job.bg}`}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#0d1008]">
                  {job.company}
                </p>
                <p className="text-xs text-[#0d1008]/60">{job.salary}</p>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold leading-snug text-[#0d1008]">
              {job.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0d1008]/70">
              {job.description}
            </p>

            <Button className="mt-4 w-full rounded-lg bg-[#0d1008] text-white hover:bg-[#0d1008]/90">
              Apply Jobs
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
