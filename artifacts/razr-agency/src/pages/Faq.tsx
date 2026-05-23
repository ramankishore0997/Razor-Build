import PageWrapper from "@/components/layout/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Zap, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does account activation take?",
    answer:
      "Setup Access accounts are typically activated within 24-48 hours of payment confirmation. Full Access accounts receive same-day or next-business-day activation, with our team working the process end-to-end. We'll keep you updated in real-time via Telegram or WhatsApp throughout the process.",
  },
  {
    question: "What is your replacement policy?",
    answer:
      "Setup Access includes a one-time free replacement within 30 days if the account encounters issues outside of your control — such as platform-side restrictions not related to policy violations. Full Access comes with a lifetime replacement guarantee: as long as you're following Meta's advertising policies, we'll replace any restricted account at no cost, no questions asked.",
  },
  {
    question: "What kind of support do you provide after activation?",
    answer:
      "All clients get Telegram and WhatsApp access to our support team. Setup Access includes 7-day onboarding support. Full Access clients receive unlimited ongoing support, a dedicated account manager, and proactive account health monitoring. We don't disappear after activation — we stay involved for the long haul.",
  },
  {
    question: "What business categories and niches are supported?",
    answer:
      "We support a wide range of verticals including e-commerce, lead generation, SaaS, health and wellness, finance (within Meta policy), education, real estate, travel, and more. If you're unsure whether your niche qualifies, contact us before purchasing — we'll give you an honest answer. We don't take on businesses that operate outside Meta's advertising policies.",
  },
  {
    question: "How does balance transfer work?",
    answer:
      "If you have existing unspent ad credit or balance on another account, we can guide you through the process of recovering and redirectring it into your new account. Balance transfer support is included with Full Access. Setup Access clients can inquire separately. The exact process depends on the source account situation — contact us and we'll walk you through it.",
  },
  {
    question: "Can I scale my spending significantly with these accounts?",
    answer:
      "Yes — that's the core value proposition. Agency accounts carry significantly higher spending limit tiers than standard self-serve accounts. Full Access accounts are specifically selected for maximum limit tiers. As your campaigns prove ROI and your relationship with the account matures, spending capacity naturally increases. We also provide scaling strategy guidance as part of Full Access support.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-primary/40 bg-card/80 shadow-[0_0_25px_rgba(0,102,255,0.1)]"
          : "border-border bg-card/40 hover:border-border/80"
      }`}
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        data-testid={`faq-toggle-${index}`}
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${open ? "text-primary" : "text-white"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            open
              ? "bg-primary/20 border-primary/40 text-primary"
              : "bg-secondary border-border text-muted-foreground"
          }`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  return (
    <PageWrapper>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/6 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              <span>Common Questions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know before getting started. Don't see your
              question? Reach out directly.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-primary" size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is available on Telegram and WhatsApp. We typically
              respond in under 30 minutes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.3)]"
              data-testid="link-contact-from-faq"
            >
              Ask a Question
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
