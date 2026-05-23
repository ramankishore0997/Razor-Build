import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { MessageCircle, Eye, Settings, Rocket, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contact Team",
    description:
      "Reach out via Telegram or WhatsApp. Our team responds within minutes — not hours. Tell us about your business, your niche, and your current ad spend goals.",
    detail: "Average response time: under 30 minutes",
  },
  {
    icon: Eye,
    step: "02",
    title: "View Account Access First",
    description:
      "Before committing, we show you the account — spending history, limit tiers, and infrastructure setup. Full transparency, no surprises.",
    detail: "See everything before you buy",
  },
  {
    icon: Settings,
    step: "03",
    title: "Activation Process",
    description:
      "Once you decide to proceed, we handle the full activation process — business manager setup, billing configuration, and team access provisioning.",
    detail: "Activated within 24 hours",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Campaign Launch",
    description:
      "Your account is live and ready. Launch your campaigns with confidence. Our team remains on standby for the critical first 48 hours of activity.",
    detail: "Go live the same day",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Scaling Support",
    description:
      "As you scale, we scale with you. Ongoing support, spending limit increase recommendations, and account health monitoring — for the long haul.",
    detail: "Unlimited ongoing support",
  },
];

export default function HowItWorks() {
  return (
    <PageWrapper>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/6 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              <span>Simple Process</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Works
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From first contact to running campaigns — our process is
              streamlined to get you operational as fast as possible.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px hidden md:block" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 md:gap-0 mb-16 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)] transition-all duration-300 hover:bg-card/80">
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          i % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          <step.icon className="text-primary" size={22} />
                        </div>
                        <div
                          className={`text-6xl font-black text-primary/10 leading-none select-none ${
                            i % 2 === 0 ? "md:ml-auto" : ""
                          }`}
                        >
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                        {step.detail}
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 border-primary/40 items-center justify-center z-10 shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                    <step.icon className="text-primary" size={20} />
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Step one is just a message away.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_40px_rgba(0,102,255,0.55)]"
              data-testid="link-contact-team"
            >
              Contact the Team
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
