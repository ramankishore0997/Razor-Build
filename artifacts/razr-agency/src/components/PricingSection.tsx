import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight, Crown } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";
import { trackInitiateCheckout } from "@/lib/pixel";

const PLANS = [
  {
    id: "startup" as const,
    name: "Startup",
    tagline: "For new advertisers getting started",
    price: "1,999",
    badge: "Quick Start",
    Icon: Zap,
    accent: "from-cyan-400/40 to-blue-500/20",
    border: "border-white/10",
    glow: "shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]",
    waIntent: "setup-access" as const,
    features: [
      "1 Meta Agency Ad Account",
      "We handle ad spend deposits for you",
      "5% deposit fee on every top-up",
      "Instant activation in under 60 minutes",
      "₹1,00,000+ daily spend capacity",
      "WhatsApp + Telegram support",
      "GST invoice included",
    ],
    cta: "Start with Startup",
  },
  {
    id: "full" as const,
    name: "Full Setup",
    tagline: "For scaling advertisers & agencies",
    price: "2,999",
    badge: "Most Popular",
    Icon: Crown,
    accent: "from-primary/50 to-purple-500/30",
    border: "border-primary/40",
    glow: "shadow-[0_30px_80px_-20px_rgba(0,102,255,0.5)]",
    waIntent: "full-access" as const,
    features: [
      "2 Meta Agency Ad Accounts (redundancy)",
      "0% deposit fee — keep 100% of your spend",
      "Self-deposit directly from your card / bank",
      "Unlimited daily spend capacity",
      "Lifetime free replacement guarantee",
      "Dedicated account manager + priority support",
      "GST invoice + onboarding call",
    ],
    cta: "Go Full Setup",
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative scroll-mt-24">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-5">
            Simple Plans. <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              No hidden fees.
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto">
            One-time setup, lifetime access. Pay in INR via UPI, Razorpay, bank transfer or crypto. GST invoice included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PLANS.map((plan, i) => {
            const Icon = plan.Icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`card-premium relative group rounded-3xl overflow-hidden ${plan.glow}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${plan.accent} rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative rounded-3xl border ${plan.border} bg-black/85 backdrop-blur-2xl p-7 md:p-9 h-full flex flex-col overflow-hidden`}>
                  {/* moving light bar for featured */}
                  {plan.featured && (
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                  )}

                  {/* Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl border ${plan.featured ? "border-primary/40 bg-primary/15" : "border-white/15 bg-white/5"} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${plan.featured ? "text-primary" : "text-cyan-400"}`} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${
                      plan.featured
                        ? "border-primary/40 bg-primary/15 text-primary"
                        : "border-white/15 bg-white/5 text-white/60"
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Name + tagline */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/55 mb-6">{plan.tagline}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tighter">₹{plan.price}</span>
                    <span className="text-sm font-bold text-white/40 uppercase tracking-wider">one-time</span>
                  </div>
                  <div className="text-[11px] text-white/40 font-bold uppercase tracking-wider mb-6">
                    GST extra · Lifetime access
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-white/75">
                        <span className={`shrink-0 w-5 h-5 rounded-full ${plan.featured ? "bg-primary/15 border-primary/40" : "bg-emerald-500/10 border-emerald-500/30"} border flex items-center justify-center mt-0.5`}>
                          <Check className={`w-3 h-3 ${plan.featured ? "text-primary" : "text-emerald-400"}`} strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={buildWaLink(plan.waIntent, { source: `pricing-${plan.id}` })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackInitiateCheckout({ plan: plan.id, value: Number(plan.price.replace(",", "")), currency: "INR" })}
                    className={`btn-premium tap-spring inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-colors duration-300 ${
                      plan.featured
                        ? "bg-white text-black hover:bg-primary hover:text-white"
                        : "border border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 text-xs md:text-sm text-white/50"
        >
          Need a custom plan, 5+ accounts, or enterprise terms?{" "}
          <a
            href={buildWaLink("founder-call", { source: "pricing-custom" })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline underline-offset-4"
          >
            Talk to our founder →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
