import { SectionBadge } from "./section-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you find these jobs?",
    answer:
      "We scrape listings directly from company career pages, so what you see is what's actually live — not a stale third-party feed that's already been filled.",
  },
  {
    question: "How does the AI actually apply for me?",
    answer:
      "The agent opens the job's application page on the company's own site, fills in your details from your resume and profile, and submits it. Once it's in, we check your inbox for a confirmation email to make sure it went through.",
  },
  {
    question: "What happens if it gets stuck on a question?",
    answer:
      "It stops. We won't have it guess your salary expectations or invent an answer to a screening question. You'll get a ‘Needs You’ prompt, answer it once, and the agent picks up exactly where it left off.",
  },
  {
    question: "Do I have to review every application first?",
    answer:
      "No — once you turn on auto-apply for a role, it submits directly. You can also switch to review-before-send mode if you'd rather approve each one yourself.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-brand-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Questions, Answered
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            Everything you need to know about how the agent applies on
            your behalf.
          </p>
        </div>

        <Accordion
          defaultValue={["how-does-the-ai-actually-apply-for-me"]}
          className="mt-10 overflow-hidden rounded-xl border border-black/5 bg-white"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="border-black/5 px-5 not-last:border-b"
            >
              <AccordionTrigger className="py-4 text-sm font-semibold text-brand-dark hover:no-underline sm:text-base [&_svg]:text-brand-muted">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-brand-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
