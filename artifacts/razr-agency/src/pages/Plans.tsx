import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";

const setupFeatures = [
  "1 Agency Ad Account",
  "Standard spending limit tier",
  "Business manager setup",
  "48h activation",
  "7-day onboarding support",
  "Telegram/WhatsApp access",
  "Basic account documentation",
  "One-time replacement (30 days)",
];

const fullFeatures = [
  "1 Premium Agency Ad Account",
  "Maximum spending limit tier",
  "Full business manager setup",
  "Same-day activation",
  "Unlimited ongoing support",
  "Priority Telegram/WhatsApp line",
  "Team access for 3 seats",
  "Lifetime replacement guarantee",
  "Balance transfer support",
  "Dedicated account manager",
  "Scaling strategy consultation",
  "Account health monitoring",
];

export default function Plans() {
  return (
    <PageWrapper>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star size={14} />
              <span>Choose Your Access</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Plans &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Both plans include real agency-tier accounts. Pick the access
              level that matches your campaign goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Setup Access */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,102,255,0.1)] transition-all duration-300"
              data-testid="plan-card-setup"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground text-xs font-medium mb-4">
                  Entry Level
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Setup Access
                </h2>
                <p className="text-muted-foreground">
                  Get started with a verified agency account and all the
                  essentials to launch your first campaigns.
                </p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-black text-white mb-1">
                  Contact Us
                </div>
                <div className="text-muted-foreground text-sm">
                  Pricing based on account tier
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                {setupFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="block w-full py-4 rounded-xl border border-primary/40 text-primary font-semibold text-center hover:bg-primary/10 hover:border-primary transition-all duration-200"
                data-testid="btn-setup-cta"
              >
                Get Setup Access
              </a>
            </motion.div>

            {/* Full Access */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-2xl border border-primary/40 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_rgba(0,102,255,0.15)] hover:shadow-[0_0_60px_rgba(0,102,255,0.25)] transition-all duration-300 overflow-hidden"
              data-testid="plan-card-full"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase">
                    <Star size={11} fill="currentColor" />
                    Best Value
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Full Access
                  </h2>
                  <p className="text-muted-foreground">
                    The complete package. Maximum limits, lifetime support, and
                    everything you need to scale without constraints.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-black text-white mb-1">
                    Contact Us
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Premium tier pricing available on request
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mb-10">
                  {fullFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <Check className="text-primary" size={12} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full py-4 rounded-xl bg-primary text-white font-semibold text-center hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
                  data-testid="btn-full-cta"
                >
                  Get Full Access
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card/50 border border-border text-muted-foreground text-sm">
              <Zap size={14} className="text-primary" />
              Not sure which plan is right for you? Contact us — we'll recommend
              the best fit for your goals.
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
