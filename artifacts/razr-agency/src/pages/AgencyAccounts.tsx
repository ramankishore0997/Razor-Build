import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
  TrendingUp,
  DollarSign,
  Target,
  Activity,
  Zap,
  Shield,
  Users,
  Globe,
  Layers,
  Rocket,
  BarChart3,
  Eye,
  MousePointerClick,
} from "lucide-react";
import { SiMeta, SiGoogleads } from "react-icons/si";
import PageWrapper from "@/components/layout/PageWrapper";
import LightBeams from "@/components/LightBeams";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const META_BENEFITS = [
  { Icon: TrendingUp, title: "High Spending Capacity", body: "Run six-figure daily budgets without hitting platform throttles." },
  { Icon: Shield, title: "Better Stability For Scaling", body: "Tier-1 infrastructure resilient to spikes, peaks and aggressive scaling." },
  { Icon: Zap, title: "Lower Restriction Risk", body: "Built on agency MCC trust signals — fewer flags, fewer pauses." },
  { Icon: Rocket, title: "Faster Campaign Scaling", body: "Skip learning-phase delays. Push budgets 2-5x without resets." },
  { Icon: Layers, title: "Multiple Business Support", body: "Run unlimited BMs and verticals under a single agency umbrella." },
  { Icon: Globe, title: "Agency-Level Infrastructure", body: "Direct access to Meta's agency-tier ecosystem and tooling." },
  { Icon: Users, title: "Team Access Support", body: "Add unlimited team members, media buyers, and creative leads." },
  { Icon: BarChart3, title: "Long-Term Advertising Setup", body: "Stable accounts built for years of growth, not weeks of testing." },
  { Icon: Activity, title: "Faster Activation", body: "Live and spending in under 60 minutes — not 3–7 day waits." },
  { Icon: Target, title: "Better Campaign Management", body: "Premium support, performance reviews, and growth consultations." },
];

const GOOGLE_BENEFITS = [
  { Icon: DollarSign, title: "Higher Advertising Capacity", body: "Lift daily budgets aggressively without spend-cap warnings." },
  { Icon: TrendingUp, title: "Better Campaign Scaling", body: "Scale Search, PMax and YouTube without account suspensions." },
  { Icon: Shield, title: "Agency Support", body: "Backed by tier-1 Google Premier Partner relationships." },
  { Icon: Layers, title: "Multi-Niche Compatibility", body: "Run ecom, leads, SaaS, finance — across categories under one roof." },
  { Icon: Globe, title: "Business Friendly Structure", body: "Clean billing, MCC structure, full invoice transparency." },
  { Icon: Activity, title: "Better Stability", body: "Reduced policy strike risk and faster recovery support." },
  { Icon: Rocket, title: "Faster Launch Support", body: "Pre-warmed accounts ready for immediate high-volume launches." },
  { Icon: Users, title: "Team Collaboration", body: "Multi-user access with role-based controls and audit trails." },
  { Icon: BarChart3, title: "Enterprise Environment", body: "Built on the same infrastructure trusted by Fortune-500 buyers." },
  { Icon: Sparkles, title: "Long-Term Growth Support", body: "Quarterly account reviews, optimisation help, scale roadmaps." },
];

const COMPARISON_ROWS = [
  { label: "Daily Spend Capacity", meta: "Unlimited", google: "Unlimited" },
  { label: "Activation Time", meta: "< 1 hour", google: "< 2 hours" },
  { label: "Account Type", meta: "Agency MCC / BM", google: "MCC Premier" },
  { label: "Verticals Supported", meta: "Whitehat + Greyhat", google: "Whitehat + Greyhat" },
  { label: "Replacement Policy", meta: "Lifetime", google: "Lifetime" },
  { label: "Team Access", meta: "Unlimited Seats", google: "Unlimited Seats" },
  { label: "Restriction Risk", meta: "Lowest in market", google: "Lowest in market" },
  { label: "Support Channel", meta: "24/7 Telegram + WA", google: "24/7 Telegram + WA" },
  { label: "Best For", meta: "Ecom, Leads, Apps", google: "Search, PMax, YouTube" },
];

/* ─────────────────────────────────────────────
   MOCK: META DASHBOARD
   ───────────────────────────────────────────── */

function MetaDashboard() {
  const [spend, setSpend] = useState(184_230);
  const [roas, setRoas] = useState(4.82);
  const [bars, setBars] = useState<number[]>([45, 62, 38, 78, 92, 71, 88, 95, 67, 82, 100, 88]);

  useEffect(() => {
    const id = setInterval(() => {
      setSpend((s) => s + Math.floor(Math.random() * 240) + 80);
      setRoas((r) => +(r + (Math.random() - 0.45) * 0.05).toFixed(2));
      setBars((b) => [...b.slice(1), Math.floor(Math.random() * 60) + 40]);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-60" />

      <div className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,102,255,0.4)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <SiMeta className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Meta Ads Manager</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider">Agency · Tier 1</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-300">Live</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 p-3">
          <motion.div key={spend} initial={{ scale: 0.98 }} animate={{ scale: 1 }} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <DollarSign className="w-3 h-3 text-primary" />
              <span className="text-[9px] text-white/40 uppercase tracking-wider">Spend Today</span>
            </div>
            <div className="text-lg font-black text-white tabular-nums">${spend.toLocaleString()}</div>
            <div className="text-[9px] text-emerald-400 mt-0.5 flex items-center gap-0.5">
              <ArrowUpRight className="w-2.5 h-2.5" /> +24.7%
            </div>
          </motion.div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Target className="w-3 h-3 text-cyan-400" />
              <span className="text-[9px] text-white/40 uppercase tracking-wider">ROAS</span>
            </div>
            <div className="text-lg font-black text-cyan-400 tabular-nums">{roas.toFixed(2)}x</div>
            <div className="text-[9px] text-white/40 mt-0.5">Above target</div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="px-3 pb-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-black uppercase tracking-wider text-white/50">Hourly Velocity</span>
              <span className="text-[9px] text-primary">Last 12h</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  layout
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 bg-gradient-to-t from-primary/40 via-primary to-cyan-400 rounded-sm shadow-[0_0_8px_rgba(0,102,255,0.5)]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Campaign rows */}
        <div className="px-3 pb-3 space-y-1.5">
          {[
            { name: "CBO_Broad_US_Scale", status: "Active", roas: "5.84x", color: "text-emerald-400" },
            { name: "Advantage+_Catalog", status: "Active", roas: "4.21x", color: "text-emerald-400" },
            { name: "Lookalike_1%_Buyers", status: "Learning", roas: "3.10x", color: "text-yellow-400" },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`w-1 h-1 rounded-full bg-current ${c.color} shrink-0`} />
                <span className="text-[10px] font-medium text-white/80 truncate">{c.name}</span>
              </div>
              <span className={`text-[10px] font-black tabular-nums shrink-0 ${c.color}`}>{c.roas}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating widget */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-2 sm:-right-6 rounded-xl border border-emerald-500/30 bg-black/90 backdrop-blur-xl p-2.5 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)]"
      >
        <div className="text-[8px] font-black uppercase tracking-widest text-emerald-400 mb-0.5">+ New Conv</div>
        <div className="text-xs font-black text-white tabular-nums">$847.20</div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOCK: GOOGLE DASHBOARD
   ───────────────────────────────────────────── */

function GoogleDashboard() {
  const [clicks, setClicks] = useState(48_722);
  const [impressions, setImpressions] = useState(2_184_500);
  const [ctr, setCtr] = useState(2.23);
  const [points, setPoints] = useState<number[]>([20, 35, 28, 50, 65, 58, 72, 88, 78, 92, 100]);

  useEffect(() => {
    const id = setInterval(() => {
      setClicks((c) => c + Math.floor(Math.random() * 40) + 10);
      setImpressions((i) => i + Math.floor(Math.random() * 1800) + 500);
      setCtr((c) => +(c + (Math.random() - 0.45) * 0.05).toFixed(2));
      setPoints((p) => [...p.slice(1), Math.floor(Math.random() * 50) + 50]);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Build SVG path
  const w = 280;
  const h = 70;
  const path = points
    .map((v, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (v / 100) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const areaPath = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60" />

      <div className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(34,211,238,0.4)] overflow-hidden">
        {/* Top */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-r from-cyan-500/10 to-transparent">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
              <SiGoogleads className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Google Ads · MCC</div>
              <div className="text-[9px] text-white/40 uppercase tracking-wider">Premier · Agency</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30">
            <Eye className="w-2.5 h-2.5 text-cyan-300" />
            <span className="text-[9px] font-black uppercase tracking-wider text-cyan-300">Streaming</span>
          </div>
        </div>

        {/* 3 stats */}
        <div className="grid grid-cols-3 gap-1.5 p-3">
          <motion.div key={impressions} initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-1 mb-1">
              <Eye className="w-2.5 h-2.5 text-cyan-400" />
              <span className="text-[8px] text-white/40 uppercase tracking-wider truncate">Impr.</span>
            </div>
            <div className="text-sm font-black text-white tabular-nums truncate">{(impressions / 1_000_000).toFixed(2)}M</div>
          </motion.div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-1 mb-1">
              <MousePointerClick className="w-2.5 h-2.5 text-primary" />
              <span className="text-[8px] text-white/40 uppercase tracking-wider truncate">Clicks</span>
            </div>
            <div className="text-sm font-black text-white tabular-nums truncate">{(clicks / 1000).toFixed(1)}k</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-1 mb-1">
              <Target className="w-2.5 h-2.5 text-emerald-400" />
              <span className="text-[8px] text-white/40 uppercase tracking-wider">CTR</span>
            </div>
            <div className="text-sm font-black text-emerald-400 tabular-nums">{ctr.toFixed(2)}%</div>
          </div>
        </div>

        {/* Line chart */}
        <div className="px-3 pb-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-white/50">Performance · 24h</span>
              <span className="text-[9px] text-cyan-400">+18.4%</span>
            </div>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
              <defs>
                <linearGradient id="googleArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(34,211,238)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#googleArea)" />
              <motion.path
                key={points.join(",")}
                d={path}
                fill="none"
                stroke="rgb(34,211,238)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0.8, opacity: 0.8 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Campaign types */}
        <div className="px-3 pb-3 grid grid-cols-2 gap-1.5">
          {[
            { name: "Search", value: "$48k", color: "text-cyan-400", bar: 88 },
            { name: "PMax", value: "$62k", color: "text-primary", bar: 100 },
            { name: "YouTube", value: "$24k", color: "text-purple-400", bar: 42 },
            { name: "Display", value: "$18k", color: "text-emerald-400", bar: 31 },
          ].map((c, i) => (
            <div key={i} className="px-2.5 py-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider">{c.name}</span>
                <span className={`text-[10px] font-black tabular-nums ${c.color}`}>{c.value}</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${c.bar}%` }} transition={{ duration: 1.2, delay: i * 0.1 }} className={`h-full rounded-full bg-current ${c.color} shadow-[0_0_6px_currentColor]`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating widget */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 -left-2 sm:-left-6 rounded-xl border border-primary/30 bg-black/90 backdrop-blur-xl p-2.5 shadow-[0_10px_40px_-10px_rgba(0,102,255,0.5)]"
      >
        <div className="text-[8px] font-black uppercase tracking-widest text-primary mb-0.5">Quality Score</div>
        <div className="text-xs font-black text-white tabular-nums">9.4 / 10</div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function AgencyAccounts() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageWrapper>
      {/* Ambient ─────────────────────────────────── */}
      <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[80%] left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-[80vh] md:min-h-[88vh] pt-24 md:pt-28 pb-16 flex items-center overflow-hidden">
        <LightBeams />

        {/* Floating decorative cards */}
        <motion.div
          style={{ y: heroY }}
          animate={{ rotate: [-3, -6, -3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-32 right-[6%] w-44 rounded-2xl border border-primary/30 bg-black/70 backdrop-blur-xl p-4 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.5)]"
        >
          <div className="flex items-center gap-2 mb-2">
            <SiMeta className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-wider text-white/60">Meta Live</span>
          </div>
          <div className="text-2xl font-black text-white tabular-nums">$184k</div>
          <div className="text-[10px] text-emerald-400">+24.7% today</div>
        </motion.div>

        <motion.div
          style={{ y: heroY }}
          animate={{ rotate: [3, 6, 3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute bottom-20 right-[18%] w-40 rounded-2xl border border-cyan-400/30 bg-black/70 backdrop-blur-xl p-4 shadow-[0_20px_60px_-15px_rgba(34,211,238,0.5)]"
        >
          <div className="flex items-center gap-2 mb-2">
            <SiGoogleads className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-white/60">Google Live</span>
          </div>
          <div className="text-2xl font-black text-white tabular-nums">2.18M</div>
          <div className="text-[10px] text-cyan-400">Impressions</div>
        </motion.div>

        <motion.div
          style={{ y: heroY }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden lg:block absolute top-[35%] left-[6%] w-36 rounded-2xl border border-emerald-500/30 bg-black/70 backdrop-blur-xl p-3 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)]"
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400">Activated</span>
          </div>
          <div className="text-[10px] text-white/60">Account ready in 47 min</div>
        </motion.div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Agency Ad Accounts</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.95] mb-6 md:mb-8 break-words">
            Premium <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">Agency</span><br />
            Advertising <span className="font-light italic text-white/60">Accounts.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed mb-8 md:mb-10">
            Built for advertisers, agencies and scaling businesses. Unlimited spend, lifetime replacement, tier-1 infrastructure.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#meta" className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-black text-sm uppercase tracking-widest overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <SiMeta className="relative w-4 h-4" />
              <span className="relative">Meta Accounts</span>
              <ArrowRight className="relative w-4 h-4" />
            </a>
            <a href="#google" className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur text-white font-black text-sm uppercase tracking-widest hover:bg-white/[0.07] transition-colors">
              <SiGoogleads className="w-4 h-4 text-cyan-400" />
              <span>Google Accounts</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400" /> Tier-1 Agency</div>
            <div className="hidden sm:block w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400" /> Unlimited Spend</div>
            <div className="hidden sm:block w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400" /> Lifetime Replacement</div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ META SECTION ═══════════════ */}
      <section id="meta" className="py-16 md:py-24 relative scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
              <SiMeta className="w-3.5 h-3.5" /> Meta Agency Ad Accounts
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] max-w-4xl">
              The Meta infrastructure <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">serious advertisers</span> run on.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* LEFT — Dashboard */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="lg:col-span-5 lg:sticky lg:top-28">
              <MetaDashboard />
            </motion.div>

            {/* RIGHT — Benefits */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {META_BENEFITS.map((b, i) => {
                  const Icon = b.Icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      whileHover={{ y: -3 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 md:p-5 overflow-hidden h-full">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-9 h-9 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] transition-shadow">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-sm md:text-base font-black uppercase tracking-tight leading-tight pt-1.5">{b.title}</h3>
                          </div>
                          <p className="text-xs md:text-sm text-white/55 leading-relaxed">{b.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Meta CTA card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="mt-10 md:mt-16">
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 opacity-20" />
              <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="relative rounded-3xl border border-primary/30 bg-black/80 backdrop-blur-2xl p-7 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Ready in &lt; 1 hour</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                    Scale faster with <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Meta agency accounts.</span>
                  </h3>
                </div>
                <a href="https://wa.me/917065339146" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-3 px-7 md:px-9 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                  Get Meta Access <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ GOOGLE SECTION ═══════════════ */}
      <section id="google" className="py-16 md:py-24 relative scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-16 md:text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-3 flex items-center gap-2 md:justify-end">
              <SiGoogleads className="w-3.5 h-3.5" /> Google Agency Ad Accounts
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] max-w-4xl md:ml-auto">
              Enterprise-grade <span className="bg-gradient-to-r from-cyan-400 via-primary to-purple-400 bg-clip-text text-transparent">Google Ads</span> for serious growth.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* LEFT — Benefits */}
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {GOOGLE_BENEFITS.map((b, i) => {
                  const Icon = b.Icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      whileHover={{ y: -3 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400/40 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 md:p-5 overflow-hidden h-full">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-9 h-9 rounded-xl border border-cyan-400/30 bg-cyan-400/10 backdrop-blur flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-shadow">
                              <Icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <h3 className="text-sm md:text-base font-black uppercase tracking-tight leading-tight pt-1.5">{b.title}</h3>
                          </div>
                          <p className="text-xs md:text-sm text-white/55 leading-relaxed">{b.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Dashboard */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="lg:col-span-5 lg:order-2 order-1 lg:sticky lg:top-28">
              <GoogleDashboard />
            </motion.div>
          </div>

          {/* Google CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="mt-10 md:mt-16">
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 opacity-20" />
              <motion.div animate={{ x: ["200%", "-100%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <div className="relative rounded-3xl border border-cyan-400/30 bg-black/80 backdrop-blur-2xl p-7 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">Live in &lt; 2 hours</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                    Grow with <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">Google agency accounts.</span>
                  </h3>
                </div>
                <a href="https://wa.me/917065339146" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-3 px-7 md:px-9 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-colors duration-300">
                  Get Google Access <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ COMPARISON ═══════════════ */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-14">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">Side By Side</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
              Meta vs <span className="bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">Google.</span>
            </h2>
            <p className="text-base md:text-lg text-white/55 mt-4 md:mt-5 max-w-2xl mx-auto">Both built on tier-1 agency infrastructure. Pick what fits your funnel — or run both in parallel.</p>
          </motion.div>

          {/* Header cards (always visible) */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative group rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/60 to-purple-500/30 rounded-2xl md:rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl md:rounded-3xl border border-primary/30 bg-black/80 backdrop-blur-2xl p-4 md:p-6 text-center">
                <div className="inline-flex w-10 h-10 md:w-12 md:h-12 rounded-2xl border border-primary/30 bg-primary/10 items-center justify-center mb-2 md:mb-3">
                  <SiMeta className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-2xl font-black uppercase tracking-tight">Meta Agency</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mt-0.5">Facebook · IG · WA · Messenger</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative group rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400/60 to-blue-500/30 rounded-2xl md:rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl md:rounded-3xl border border-cyan-400/30 bg-black/80 backdrop-blur-2xl p-4 md:p-6 text-center">
                <div className="inline-flex w-10 h-10 md:w-12 md:h-12 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 items-center justify-center mb-2 md:mb-3">
                  <SiGoogleads className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <h3 className="text-base md:text-2xl font-black uppercase tracking-tight">Google Agency</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mt-0.5">Search · PMax · YT · Display</p>
              </div>
            </motion.div>
          </div>

          {/* Comparison rows */}
          <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
            {COMPARISON_ROWS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`grid grid-cols-[1.1fr_1fr_1fr] md:grid-cols-3 gap-2 md:gap-6 px-3 md:px-6 py-3 md:py-4 items-center ${
                  i !== COMPARISON_ROWS.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-white/[0.02] transition-colors`}
              >
                <div className="text-[11px] md:text-sm font-bold text-white/50 uppercase tracking-wider leading-tight">{row.label}</div>
                <div className="text-xs md:text-sm font-black text-white text-center flex items-center justify-center gap-1.5">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary shrink-0" />
                  <span className="truncate">{row.meta}</span>
                </div>
                <div className="text-xs md:text-sm font-black text-white text-center flex items-center justify-center gap-1.5">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{row.google}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="relative group rounded-3xl overflow-hidden">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,#0066ff_60deg,transparent_120deg,#22d3ee_240deg,transparent_300deg)] opacity-40" />
            <div className="relative rounded-3xl border border-white/15 bg-black/85 backdrop-blur-2xl p-7 sm:p-10 md:p-16 text-center overflow-hidden">
              <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div animate={{ x: ["200%", "-100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-5 md:mb-6">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Need Agency Access?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05] mb-5 md:mb-6">
                Skip the wait. <br />
                <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">Start scaling today.</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Pick Meta, Google, or both — our team activates accounts in under 60 minutes. No commitment to start, no sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="https://wa.me/917065339146" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
                  Talk to Sales <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
