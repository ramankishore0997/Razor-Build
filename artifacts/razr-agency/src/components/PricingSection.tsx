import { motion } from "framer-motion";
import { Check, Sparkles, Crown, ArrowRight, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";
import { trackInitiateCheckout } from "@/lib/pixel";

const FEATURES = [
  "1 Meta Agency Ad Account (Tier-1 BM)",
  "Lifetime access — one-time payment, no renewals",
  "Lifetime free replacement if account ever restricted",
  "Instant activation in under 60 minutes",
  "₹1,00,000+ daily spend capacity from Day 1",
  "All niches allowed — trading, gambling, crypto, nutra, dating",
  "Dedicated account manager + WhatsApp / Telegram support",
  "GST invoice + onboarding call included",
];

export default function PricingSection() {
  const PRICE = "4,999";

  return (
    <section id="pricing" className="py-16 md:py-24 relative scroll-mt-24">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">One Plan · Everything Included</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-5">
            One price. <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Lifetime access.
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto">
            One-time ₹4,999. Lifetime account access. Lifetime replacement guarantee.
            Pay in INR via UPI, Razorpay, bank transfer or crypto. GST invoice included.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-premium relative group rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,102,255,0.5)]"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 via-purple-500/30 to-cyan-400/30 rounded-3xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-3xl border border-primary/40 bg-black/85 backdrop-blur-2xl p-7 md:p-12 overflow-hidden">
            {/* moving light bar */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              animate={{ x: ["200%", "-100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* LEFT: Plan identity + Price */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl border border-primary/40 bg-primary/15 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">
                    <ShieldCheck className="w-3 h-3" />
                    Lifetime Guarantee
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Lifetime Access</h3>
                <p className="text-sm md:text-base text-white/55 mb-7">
                  Everything you need to run any niche on Meta — for life.
                </p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl md:text-7xl font-black tabular-nums tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    ₹{PRICE}
                  </span>
                  <span className="text-sm md:text-base font-bold text-white/40 uppercase tracking-wider">
                    one-time
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/40 font-bold uppercase tracking-wider mb-8">
                  <InfinityIcon className="w-3.5 h-3.5 text-primary" />
                  Pay once · Use forever · GST extra
                </div>

                <a
                  href={buildWaLink("setup-access", { source: "pricing-lifetime" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="pricing-lifetime"
                  onClick={() => trackInitiateCheckout({ plan: "lifetime", value: 4999, currency: "INR" })}
                  className="btn-premium tap-spring w-full inline-flex items-center justify-center gap-3 px-7 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Claim Lifetime Access
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="mt-4 text-center text-[11px] text-white/40 font-medium">
                  WhatsApp activation · 60-minute setup · No subscriptions
                </p>
              </div>

              {/* RIGHT: Features */}
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-5">
                  Everything Included
                </div>
                <ul className="space-y-3.5">
                  {FEATURES.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm md:text-base text-white/85">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

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
