import PageWrapper from "@/components/layout/PageWrapper";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import LightBeams from "@/components/LightBeams";
import CommandCenter from "@/components/CommandCenter";
import {
  Shield, Infinity as InfinityIcon, Zap, Users, TrendingUp, LifeBuoy,
  DollarSign, Activity, Globe2, Rocket, BarChart3, Sparkles, ArrowRight,
  CheckCircle2, ArrowUpRight, type LucideIcon,
} from "lucide-react";

// ────────────────────────────────────────────────────────────
// Bento blocks (asymmetrical, premium showcase)
// ────────────────────────────────────────────────────────────
type Bento = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  span: string;
  accent: string;
  stat: { v: string; l: string };
};

const BENTO: Bento[] = [
  {
    Icon: DollarSign,
    title: "High Spending Capacity",
    desc: "Account-level limits start uncapped. Push $50k/day without throttling, payment failures, or warmup pain.",
    span: "md:col-span-2 md:row-span-2",
    accent: "from-primary/40 via-blue-500/20 to-transparent",
    stat: { v: "$50k+", l: "Tested daily spend" },
  },
  {
    Icon: Shield,
    title: "Better Stability",
    desc: "Pre-vetted BM structures with strong trust signals. Practically zero algorithmic bans.",
    span: "md:col-span-2",
    accent: "from-emerald-500/30 to-transparent",
    stat: { v: "99.2%", l: "Uptime" },
  },
  {
    Icon: Zap,
    title: "Fast Activation",
    desc: "Provisioned, verified, ready in under 60 minutes.",
    span: "md:col-span-2",
    accent: "from-amber-500/30 to-transparent",
    stat: { v: "<1 hr", l: "Activation" },
  },
  {
    Icon: Users,
    title: "Team Access",
    desc: "Add team members with proper role isolation. Built for agencies + in-house teams.",
    span: "md:col-span-2",
    accent: "from-purple-500/30 to-transparent",
    stat: { v: "Unlimited", l: "Seats" },
  },
  {
    Icon: TrendingUp,
    title: "Scaling Support",
    desc: "Aggressive vertical scaling without limits or throttling.",
    span: "md:col-span-2",
    accent: "from-cyan-500/30 to-transparent",
    stat: { v: "10×", l: "Avg scale" },
  },
  {
    Icon: LifeBuoy,
    title: "Long-Term Support",
    desc: "Lifetime account replacements. Direct access to our internal media buyers and Meta/Google reps.",
    span: "md:col-span-2 md:row-span-2",
    accent: "from-pink-500/30 via-rose-500/20 to-transparent",
    stat: { v: "Lifetime", l: "Replacements" },
  },
];

// ────────────────────────────────────────────────────────────
// Horizontal scroll cards
// ────────────────────────────────────────────────────────────
const HSCROLL = [
  { Icon: InfinityIcon, title: "Unlimited Spend", body: "No daily caps. Push budget from hour one — first campaign, first dollar, no warmup.", color: "from-primary to-cyan-400" },
  { Icon: Shield, title: "Lifetime Replacement", body: "Account flagged unfairly? We swap it free. Balance transferred where technically possible.", color: "from-emerald-400 to-teal-400" },
  { Icon: Activity, title: "Pre-Warmed Pixels", body: "Avg 60 days of pixel history. Better algorithm trust from minute one.", color: "from-purple-400 to-pink-400" },
  { Icon: Globe2, title: "All Verticals", body: "E-com, lead gen, SaaS, info, crypto, nutra, gambling. Black + white hat both.", color: "from-amber-400 to-orange-400" },
  { Icon: Users, title: "Whitelabel Ready", body: "Built for agencies. Multi-client BMs, role isolation, dedicated account manager.", color: "from-blue-400 to-indigo-400" },
  { Icon: BarChart3, title: "Real-Time Metrics", body: "Live spend, ROAS, and account health dashboard accessible 24/7.", color: "from-rose-400 to-red-400" },
];

// ────────────────────────────────────────────────────────────
// Metrics wall
// ────────────────────────────────────────────────────────────
const METRICS = [
  { v: 2.4, suffix: "B+", label: "Ad spend processed", prefix: "$" },
  { v: 1200, suffix: "+", label: "Active advertisers" },
  { v: 99.2, suffix: "%", label: "Account uptime" },
  { v: 12, suffix: " min", label: "Avg support time" },
];

function AnimatedNum({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(eased * value);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  const display = value < 10 ? n.toFixed(1) : Math.floor(n).toLocaleString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <PageWrapper>
      {/* Ambient glows */}
      <div className="absolute top-32 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[80%] left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-[68vh] md:min-h-[72vh] pt-24 md:pt-28 pb-10 md:pb-12 flex items-center overflow-hidden">
        <LightBeams />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Built For Performance</span>
            </div>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.95] mb-6 md:mb-8 break-words">
              Built for <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">high-performance</span><br />
              <span className="font-light italic text-white/60">advertising.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
              Agency-grade infrastructure for advertisers running serious budgets.
              Every feature is engineered to remove the friction between you and scale.
            </p>

            {/* Floating UI mini-cards */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 max-w-3xl">
              {[
                { v: "$50k", l: "Daily Spend" },
                { v: "0", l: "Bans" },
                { v: "<1hr", l: "Activate" },
                { v: "24/7", l: "Support" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-3.5 py-3 md:px-4"
                >
                  <div className="text-xl md:text-2xl font-black text-white">{c.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold mt-0.5">{c.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── BENTO SHOWCASE ─────────────── */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">01 · Showcase</div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">Premium <span className="font-light italic text-white/50">capabilities.</span></h2>
            </div>
            <p className="text-sm md:text-base text-white/50 max-w-md">Each capability isn't a feature — it's infrastructure built and tested at scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[180px] gap-3 md:gap-4">
            {BENTO.map((b, i) => {
              const Icon = b.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`relative group rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden ${b.span}`}
                >
                  <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${b.accent} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="relative p-5 md:p-7 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3 md:mb-4 gap-3">
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-right min-w-0">
                        <div className="text-lg md:text-xl font-black text-white tabular-nums truncate">{b.stat.v}</div>
                        <div className="text-[9px] uppercase tracking-wider text-white/40 font-bold truncate">{b.stat.l}</div>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight mb-2 leading-tight">{b.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed pr-6">{b.desc}</p>
                    <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── COMMAND CENTER ─────────────── */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">02 · Live Dashboard</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-5 md:mb-6">
                Watch the <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">infrastructure</span> work.
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-6 md:mb-8 leading-relaxed">
                Real-time campaign metrics, account health, and activity feed. No more screenshots. No more guessing.
              </p>
              <div className="space-y-2.5 md:space-y-3">
                {[
                  "Live spend tracking across all accounts",
                  "Account health + restriction alerts",
                  "ROAS and conversion velocity",
                  "Activity feed with every event timestamped",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50" />
                <div className="relative w-full">
                  <CommandCenter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── EVERY FEATURE — DESKTOP SCROLL-JACK / MOBILE SWIPE ─────────────── */}

      {/* Mobile-only: native horizontal swipe */}
      <section className="py-12 relative md:hidden">
        <div className="container mx-auto px-4 max-w-7xl mb-6">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">03 · Swipe to explore</div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.95]">Every feature, <span className="font-light italic text-white/50">in motion.</span></h2>
        </div>
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-1 px-4 pb-4">
          <div className="flex gap-4 w-max">
            {HSCROLL.map((c, i) => {
              const Icon = c.Icon;
              return (
                <div key={i} className="relative snap-start shrink-0 w-[78vw] max-w-[340px]">
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${c.color} rounded-3xl blur opacity-40`} />
                  <div className="relative rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 min-h-[380px] flex flex-col overflow-hidden">
                    <div className={`absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br ${c.color} rounded-full blur-3xl opacity-30`} />
                    <div className="relative">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">{String(i + 1).padStart(2, "0")} / {HSCROLL.length}</div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-6 shadow-2xl`}>
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-3 leading-[1.05]">{c.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{c.body}</p>
                    </div>
                    <div className="mt-auto pt-5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Live in production
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* swipe hint */}
        <div className="container mx-auto px-4 mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold">
          <span>← Swipe →</span>
        </div>
      </section>

      {/* Desktop-only: scroll-jacked horizontal track */}
      <section ref={sectionRef} className="relative hidden md:block" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="container mx-auto px-4 max-w-7xl mb-10">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">03 · Scroll to explore</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Every feature, <span className="font-light italic text-white/50">in motion.</span></h2>
          </div>
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-[8vw]">
            {HSCROLL.map((c, i) => {
              const Icon = c.Icon;
              return (
                <div key={i} className="relative group shrink-0 w-[44vw] lg:w-[34vw]">
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${c.color} rounded-3xl blur opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className="relative rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 md:p-10 h-[420px] flex flex-col overflow-hidden">
                    <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${c.color} rounded-full blur-3xl opacity-30`} />
                    <div className="relative">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">{String(i + 1).padStart(2, "0")} / {HSCROLL.length}</div>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-8 shadow-2xl`}>
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 leading-[1.05]">{c.title}</h3>
                      <p className="text-base text-white/70 leading-relaxed">{c.body}</p>
                    </div>
                    <div className="mt-auto pt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Live in production
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─────────────── METRICS WALL ─────────────── */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">04 · Numbers</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">The receipts.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-8 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white tabular-nums mb-2 break-words">
                    <AnimatedNum value={m.v} suffix={m.suffix} prefix={m.prefix || ""} />
                  </div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white/40">{m.label}</div>
                  {/* mini bars */}
                  <div className="mt-4 flex items-end gap-1 h-8">
                    {[...Array(8)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${20 + Math.random() * 80}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + j * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-primary/60 to-primary/10 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── LUXURY CTA ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative group rounded-3xl overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,#0066ff_60deg,transparent_120deg,#7c3aed_240deg,transparent_300deg)] opacity-40"
            />
            <div className="relative rounded-3xl border border-white/15 bg-black/80 backdrop-blur-2xl p-7 sm:p-10 md:p-16 text-center overflow-hidden">
              <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div animate={{ x: ["200%", "-100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-5 md:mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05] mb-5 md:mb-6">
                Stop fighting the platform.<br/>
                <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">Start scaling.</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">Get activated in under an hour. Lifetime support included. No setup fees, no hidden costs.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="https://wa.me/917065339146" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                  Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
                  Get Custom Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
