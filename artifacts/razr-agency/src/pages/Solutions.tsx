import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Link } from "wouter";
import FloatingOrbs from "@/components/FloatingOrbs";
import {
  ShoppingBag,
  Target,
  Cpu,
  Building2,
  Flame,
  Coins,
  ArrowUpRight,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Solution = {
  id: string;
  Icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  metric: { value: string; label: string };
  gradient: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "01",
    Icon: ShoppingBag,
    tag: "E-Commerce & D2C",
    title: "Scale Winning Creatives Without Limits",
    desc: "Push Advantage+ Shopping & Performance Max campaigns to 5-figure daily budgets without spend caps, payment failures, or warmup pain.",
    bullets: ["Unlimited daily spend", "Verified BM + pixel access", "Catalog ads optimized"],
    metric: { value: "$50k+/day", label: "Tested daily spend" },
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
  },
  {
    id: "02",
    Icon: Target,
    tag: "Lead Generation",
    title: "Stable CPLs at High Volume",
    desc: "Run high-frequency lead campaigns across geos without tripping automated restriction flags. Perfect for local services, coaches, and B2B.",
    bullets: ["No form-fill throttling", "Multi-geo support", "Stable cost per lead"],
    metric: { value: "10k+", label: "Leads/month per acc" },
    gradient: "from-emerald-500/20 via-primary/10 to-transparent",
  },
  {
    id: "03",
    Icon: Cpu,
    tag: "SaaS & B2B",
    title: "Long-Cycle Pixel Seasoning",
    desc: "Deploy sophisticated funnels and retargeting matrices. Pre-seasoned pixel history means your B2B campaigns hit qualified audiences from day one.",
    bullets: ["LinkedIn-grade targeting", "Retargeting matrices", "Long-window attribution"],
    metric: { value: "60 days", label: "Avg pixel history" },
    gradient: "from-purple-500/20 via-primary/10 to-transparent",
  },
  {
    id: "04",
    Icon: Building2,
    tag: "Agencies",
    title: "Whitelabel Bulletproof Infrastructure",
    desc: "Hand your clients accounts that never go down mid-campaign. End the 3am 'account got banned' emergency calls — forever.",
    bullets: ["Whitelabel access", "Multi-client BM setup", "Dedicated account manager"],
    metric: { value: "0", label: "Emergency calls" },
    gradient: "from-orange-500/20 via-primary/10 to-transparent",
  },
  {
    id: "05",
    Icon: Flame,
    tag: "Affiliate & Performance",
    title: "Blackhat-Ready Infrastructure",
    desc: "For aggressive marketers running gray-hat verticals. Crypto, nutra, sweepstakes, gambling — our blackhat accounts handle it all without flinching.",
    bullets: ["All verticals supported", "Cloaker compatible", "Burner-friendly BMs"],
    metric: { value: "100%", label: "Vertical coverage" },
    gradient: "from-red-500/20 via-primary/10 to-transparent",
  },
  {
    id: "06",
    Icon: Coins,
    tag: "Google Ads",
    title: "Premium Google Agency Accounts",
    desc: "Beyond Meta — we provide MCC-backed Google Ads accounts with high spend limits, instant approval, and the same lifetime replacement guarantee.",
    bullets: ["MCC-backed accounts", "Search + PMax ready", "Instant approvals"],
    metric: { value: "1 hr", label: "Activation time" },
    gradient: "from-yellow-500/20 via-primary/10 to-transparent",
  },
];

export default function Solutions() {
  return (
    <PageWrapper>
      <FloatingOrbs />

      {/* HERO */}
      <section className="pt-28 pb-14 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-8 block">
              Solutions / Built For Every Vertical
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
              Whatever you <br />
              <span className="font-light italic text-white/60">run, we scale it.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium leading-relaxed border-l-2 border-primary pl-6">
              From e-commerce empires to aggressive affiliate funnels — RAZR provides the Meta & Google agency
              infrastructure to scale any vertical without restrictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-12 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="relative group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                {/* Gradient blob */}
                <div
                  className={`absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${sol.gradient} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top row: icon + ID */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <sol.Icon className="w-8 h-8 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="text-6xl font-black text-white/[0.06] tracking-tighter leading-none">
                      {sol.id}
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
                    {sol.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-5 group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                    {sol.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {sol.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom row: metric + CTA */}
                  <div className="mt-auto flex items-end justify-between pt-6 border-t border-white/5">
                    <div>
                      <div className="text-3xl font-black text-white tracking-tight">{sol.metric.value}</div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                        {sol.metric.label}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors group/cta"
                    >
                      Get Started
                      <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-14 relative z-10 border-y border-white/10 bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: "$2.4B+", l: "Ad spend processed" },
              { v: "1,200+", l: "Active advertisers" },
              { v: "99.2%", l: "Account uptime" },
              { v: "<1 hr", l: "Avg activation" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-2">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative z-10 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <TrendingUp className="w-12 h-12 text-primary mx-auto mb-8" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Your vertical, <br />
            <span className="text-primary">our infrastructure.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Not sure which solution fits your business? Chat with our team — we'll match you with the right setup in
            under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917065339146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-primary text-black font-black text-lg uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-block px-12 py-6 border border-white/20 text-white font-black text-lg uppercase tracking-widest hover:bg-white/5 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
