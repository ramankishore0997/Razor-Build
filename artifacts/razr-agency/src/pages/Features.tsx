import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";
import {
  Shield,
  Infinity as InfinityIcon,
  MessageCircle,
  TrendingUp,
  Target,
  Zap,
  RefreshCw,
  Layers,
  Globe,
  DollarSign,
  BarChart3,
  Building2,
  LifeBuoy,
  RotateCw,
  ArrowRightLeft,
  Rocket,
  Award,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  highlight?: boolean;
};

const BENEFITS: Benefit[] = [
  {
    Icon: CheckCircle2,
    title: "Blackhat & Whitehat Both",
    desc: "Run any niche, any offer. Our accounts handle both compliant and aggressive verticals without flagging.",
    highlight: true,
  },
  {
    Icon: InfinityIcon,
    title: "Unlimited Ad Spend From Day 1",
    desc: "No daily caps, no warm-up periods. Push as much budget as you want from the first hour.",
    highlight: true,
  },
  {
    Icon: Shield,
    title: "Lower Risk of Restrictions",
    desc: "Pre-vetted agency structures with strong trust signals — practically eliminating random algorithmic bans.",
  },
  {
    Icon: MessageCircle,
    title: "Priority Chat Support",
    desc: "Dedicated Telegram & WhatsApp lines. Average response time under 12 minutes, 24/7.",
  },
  {
    Icon: TrendingUp,
    title: "Better Scaling Ability",
    desc: "Engineered for aggressive vertical scaling. Push $10K/day campaigns without throttling.",
  },
  {
    Icon: Target,
    title: "High-Quality Audience & Leads",
    desc: "Premium account history means better algorithm trust and higher converting traffic from day one.",
  },
  {
    Icon: Zap,
    title: "Fast Activation (Within 1 Hour)",
    desc: "Provisioned, verified, and ready to run live campaigns inside 60 minutes of payment.",
    highlight: true,
  },
  {
    Icon: RefreshCw,
    title: "Lifetime Access & Replacements",
    desc: "If an ad account ever faces issues, we replace it for free — for the lifetime of your subscription.",
  },
  {
    Icon: Layers,
    title: "Supports Multiple Business Categories",
    desc: "E-commerce, info products, SaaS, lead gen, crypto, nutra — we cover the full spectrum.",
  },
  {
    Icon: Globe,
    title: "Suitable for Different Niches & Offers",
    desc: "From mainstream D2C to gray-hat offers, our accounts are battle-tested across verticals.",
  },
  {
    Icon: DollarSign,
    title: "Higher Spending Capacity",
    desc: "Account-level spend limits start high and grow with your performance. No artificial ceilings.",
  },
  {
    Icon: BarChart3,
    title: "Better Stability for Scaling",
    desc: "Rock-solid accounts that won't flake during your biggest campaign launches or BFCM pushes.",
  },
  {
    Icon: Building2,
    title: "Business-Friendly Setup",
    desc: "Properly structured Business Manager with clean billing, verified domains, and pixel access.",
  },
  {
    Icon: LifeBuoy,
    title: "Long-Term Advertising Support",
    desc: "We're with you for the long haul — not a one-time sale. Ongoing optimization & guidance.",
  },
  {
    Icon: RotateCw,
    title: "Lifetime Replacement Support",
    desc: "Account died unfairly? We swap it out — no questions, no extra cost, no waiting.",
  },
  {
    Icon: ArrowRightLeft,
    title: "Balance Transfer on Issues",
    desc: "If an ad account faces issues, your remaining balance is transferred to the new account automatically.",
    highlight: true,
  },
  {
    Icon: Rocket,
    title: "Faster Campaign Management",
    desc: "Streamlined access workflow means launching and editing campaigns takes seconds, not minutes.",
  },
  {
    Icon: Award,
    title: "Agency-Level Support",
    desc: "Direct access to our internal media buyers and Meta reps — not generic outsourced helpdesk.",
  },
  {
    Icon: Users,
    title: "Easy Scaling & Team Access",
    desc: "Ideal for agencies, brands & advertisers. Add team members with proper role isolation.",
  },
];

export default function Features() {
  return (
    <PageWrapper>
      <FloatingOrbs />

      {/* INTRO */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-8 block">Why RAZR</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
              Built to <br />
              <span className="font-light italic text-white/70">scale aggressively.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed border-l-2 border-primary pl-6">
              Blackhat & Whitehat — both accounts available. Everything you need to run high-spend Meta campaigns
              without restrictions, bans, or babysitting.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-12 pb-32 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {BENEFITS.map(({ Icon, title, desc, highlight }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`relative rounded-3xl border p-8 group transition-all duration-500 overflow-hidden ${
                  highlight
                    ? "border-primary/30 bg-gradient-to-br from-primary/[0.08] to-transparent hover:border-primary/60"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                }`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    highlight ? "bg-primary/30" : "bg-primary/10"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon badge */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                      highlight
                        ? "bg-primary/15 ring-1 ring-primary/30"
                        : "bg-white/5 ring-1 ring-white/10"
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${highlight ? "text-primary" : "text-white"}`} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-3 leading-tight group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Ready to scale?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Get activated in under an hour. Lifetime support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/plans"
              className="inline-block px-12 py-6 bg-primary text-black font-black text-lg uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              View Pricing
            </a>
            <a
              href="https://wa.me/917065339146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 border border-white/20 text-white font-black text-lg uppercase tracking-widest hover:bg-white/5 transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
