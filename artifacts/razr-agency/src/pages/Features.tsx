import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Link } from "wouter";
import LightBeams from "@/components/LightBeams";
import { buildWaLink } from "@/lib/whatsapp";
import {
  Shield, Zap, Users, TrendingUp, LifeBuoy, DollarSign, Globe2, Rocket,
  Sparkles, ArrowRight, Check, X, Crown, Award, Clock, RefreshCw,
  HeadphonesIcon, FileCheck, BadgeCheck, ShieldCheck, Layers, Building2,
  Coins, Dice5, HeartHandshake, Pill, Cigarette, Banknote, Gift,
  Home as HomeIcon, ShoppingBag, Bitcoin, Sparkle, GraduationCap,
  Activity, Wallet, Receipt, MessageCircle, Languages, PhoneCall,
  Target, BarChart3, Database, type LucideIcon,
} from "lucide-react";

// ────────────────────────────────────────────────────────────
// SECTION 1 — Allowed Niches (gray/black-hat allowed)
// ────────────────────────────────────────────────────────────
const NICHES: { Icon: LucideIcon; name: string; tag: string }[] = [
  { Icon: Coins, name: "Trading / Forex", tag: "Crypto signals OK" },
  { Icon: Dice5, name: "Gambling / Casino", tag: "Betting & fantasy" },
  { Icon: HeartHandshake, name: "Adult / Dating", tag: "Soft-adult allowed" },
  { Icon: Pill, name: "Nutra / Supplements", tag: "Weight loss OK" },
  { Icon: Cigarette, name: "CBD / Vape", tag: "Tobacco-adjacent" },
  { Icon: Banknote, name: "Loans / Lending", tag: "Insurance too" },
  { Icon: Gift, name: "Sweepstakes / Cashback", tag: "Affiliate friendly" },
  { Icon: HomeIcon, name: "Real Estate / Lead Gen", tag: "All countries" },
  { Icon: ShoppingBag, name: "Dropshipping / Gray-Hat", tag: "E-com OK" },
  { Icon: Bitcoin, name: "NFT / Web3 / Crypto", tag: "Exchanges allowed" },
  { Icon: Sparkle, name: "Astrology / Tarot", tag: "Spiritual niches" },
  { Icon: GraduationCap, name: "Edu / Coaching / Jobs", tag: "Info products" },
];

// ────────────────────────────────────────────────────────────
// SECTION 2 — Why No Bans (6 reasons)
// ────────────────────────────────────────────────────────────
const REASONS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: BadgeCheck,
    title: "Whitelisted Agency BM",
    body: "Meta-verified Tier-1 partner status. Policy enforcement is relaxed for whitelisted BMs — what gets your personal account banned doesn't trigger ours.",
  },
  {
    Icon: Clock,
    title: "Pre-Warmed Aged Accounts",
    body: "Every account has 90+ days of real spend history. Fresh accounts get flagged instantly — ours look like established advertisers from minute one.",
  },
  {
    Icon: Crown,
    title: "Tier-1 BM (not Tier-3 Reseller)",
    body: "Most agencies resell Tier-3 BMs that collapse in weeks. We provide direct Tier-1 partner accounts with the highest possible trust score.",
  },
  {
    Icon: ShieldCheck,
    title: "Domain Pre-Verified",
    body: "Business verification, domain ownership, and pixel setup are completed before handover. You skip the most common ban triggers.",
  },
  {
    Icon: PhoneCall,
    title: "Direct Meta Rep Channel",
    body: "Disputes go straight to a Meta partner rep — not through public support tickets. Most policy flags get reversed within 24 hours.",
  },
  {
    Icon: Activity,
    title: "Daily Health Monitoring",
    body: "Our team watches account quality scores proactively. Issues are caught and fixed before they become bans.",
  },
];

// ────────────────────────────────────────────────────────────
// SECTION 3 — Replacement Guarantee Steps
// ────────────────────────────────────────────────────────────
const REPLACEMENT_STEPS = [
  { Icon: MessageCircle, title: "You Report", body: "Message us on WhatsApp the moment an account is restricted — anytime, any day." },
  { Icon: Clock, title: "24-Hour SLA", body: "New account assigned and activated within 1 working day. No paperwork, no waiting." },
  { Icon: RefreshCw, title: "Lifetime Cover", body: "Free replacements forever. Same spend capacity, same Tier-1 BM, no questions asked." },
];

// ────────────────────────────────────────────────────────────
// SECTION 4 — Spend & Performance
// ────────────────────────────────────────────────────────────
const SPEND_FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Rocket, title: "₹1 Lakh+ Daily Spend Day 1", body: "No warmup needed — push full budget on your first campaign, first hour." },
  { Icon: TrendingUp, title: "No Daily / Lifetime Caps", body: "Full Setup plan removes all spend ceilings. Scale to any number you want." },
  { Icon: Globe2, title: "Multi-Region Targeting", body: "US, UK, Australia, EU, India, Middle East — all geographies unlocked." },
  { Icon: Wallet, title: "Multi-Currency Campaigns", body: "Run in USD, EUR, INR, AED — switch per campaign, not per account." },
  { Icon: Layers, title: "Multi-Pixel on Single BM", body: "Track multiple websites and funnels from one Business Manager." },
  { Icon: Target, title: "Custom + Lookalike Audiences", body: "Full Custom Audience and Lookalike features unlocked from day one." },
];

// ────────────────────────────────────────────────────────────
// SECTION 5 — Comparison Table
// ────────────────────────────────────────────────────────────
const COMPARISON: { feature: string; normal: string; razr: string; razrGood: boolean }[] = [
  { feature: "Trading / Gambling / Crypto Ads", normal: "Banned instantly", razr: "Fully allowed", razrGood: true },
  { feature: "Daily Spend Limit", normal: "₹5,000 (new accounts)", razr: "₹1 Lakh+ from Day 1", razrGood: true },
  { feature: "Ban Risk", normal: "High — random flags", razr: "Near zero", razrGood: true },
  { feature: "Replacement Policy", normal: "None — start over", razr: "Lifetime free", razrGood: true },
  { feature: "Setup Time", normal: "7-14 days verification", razr: "60 minutes", razrGood: true },
  { feature: "Support", normal: "Chatbot only", razr: "Dedicated manager", razrGood: true },
  { feature: "Account Age", normal: "Fresh (flagged)", razr: "Pre-warmed 90+ days", razrGood: true },
  { feature: "Meta Escalation Channel", normal: "Public ticket queue", razr: "Direct partner rep", razrGood: true },
  { feature: "Multi-Region Targeting", normal: "Limited by country", razr: "All geos unlocked", razrGood: true },
  { feature: "Pixel & CAPI Setup", normal: "DIY", razr: "Done for you", razrGood: true },
];

// ────────────────────────────────────────────────────────────
// SECTION 6 — Quality & Tech Specs
// ────────────────────────────────────────────────────────────
const QUALITY_SPECS: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Crown, title: "Tier-1 Business Manager", body: "Top 1% Meta partner-level BM with maximum trust score." },
  { Icon: Clock, title: "90+ Day Aged Accounts", body: "Real spend history pre-loaded — no fresh-account flags." },
  { Icon: FileCheck, title: "Verified Payment Methods", body: "Payment + billing already attached and approved by Meta." },
  { Icon: ShieldCheck, title: "High Trust Score", body: "Account health rated 'Good' or better before handover." },
  { Icon: Database, title: "Full Credentials Handover", body: "You own the login — full admin access, not shared seats." },
];

// ────────────────────────────────────────────────────────────
// SECTION 7 — Support & Service
// ────────────────────────────────────────────────────────────
const SUPPORT_FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Users, title: "Dedicated Account Manager", body: "One human, not a queue. Same person handles your account for life." },
  { Icon: MessageCircle, title: "WhatsApp + Telegram", body: "Reach us where you actually chat — not via slow email tickets." },
  { Icon: Zap, title: "12-Min Avg Response", body: "Real-time support during Indian business hours, fast off-hours too." },
  { Icon: Languages, title: "Hindi + English Support", body: "Talk in the language you're comfortable in. No translation gaps." },
  { Icon: HeadphonesIcon, title: "Free Onboarding Call", body: "30-min strategy + setup call included with Full Setup plan." },
  { Icon: PhoneCall, title: "Direct Meta Escalation", body: "Disputes routed directly to Meta partner rep — fastest possible resolution." },
];

// ────────────────────────────────────────────────────────────
// SECTION 8 — Bonus Features
// ────────────────────────────────────────────────────────────
const BONUS_FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: BarChart3, title: "Conversion API (CAPI) Help", body: "We help you set up server-side tracking for iOS 14.5+ accuracy." },
  { Icon: Database, title: "Pixel Data Transfer", body: "Migrate existing pixel data to your new agency account smoothly." },
  { Icon: TrendingUp, title: "CBO / ABO Setup Ready", body: "Campaign Budget Optimization configured and tested before handover." },
  { Icon: Building2, title: "Multi-Account Management", body: "Guidance on scaling to 5, 10, 20+ accounts as you grow." },
  { Icon: Receipt, title: "GST Invoice — Every Payment", body: "Tax-compliant invoices in your business name for every transaction." },
  { Icon: Award, title: "Free Strategy Consultation", body: "Get our team's media-buying playbook — what works in your niche." },
];

// ────────────────────────────────────────────────────────────
// SECTION 0 — Hero stats
// ────────────────────────────────────────────────────────────
const HERO_STATS = [
  { v: "5,000+", l: "Accounts delivered" },
  { v: "0", l: "Random bans" },
  { v: "24hr", l: "Replacement SLA" },
  { v: "₹500Cr+", l: "Spend processed" },
  { v: "60min", l: "Activation" },
  { v: "12min", l: "Avg support" },
];

// ────────────────────────────────────────────────────────────
// Reusable section header
// ────────────────────────────────────────────────────────────
function SectionHeader({ no, kicker, title, subtitle }: { no: string; kicker: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">
        {no} · {kicker}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-3 md:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export default function Features() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur mb-6 md:mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-black tracking-[0.2em] text-emerald-300 uppercase">Ban-Proof Infrastructure</span>
            </div>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.95] mb-6 md:mb-8 break-words">
              Accounts that <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                don't get banned.
              </span><br />
              <span className="font-light italic text-white/60">Even for the gray niches.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
              Trading. Gambling. Crypto. Nutra. Dating. Loans.
              All the verticals that destroy normal ad accounts —
              we run them on Tier-1 agency BMs with lifetime replacement cover.
            </p>

            {/* Stats bar */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-5xl">
              {HERO_STATS.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-3 py-3 md:px-4 md:py-4"
                >
                  <div className="text-lg md:text-2xl font-black text-white tabular-nums">{c.v}</div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 font-bold mt-0.5">{c.l}</div>
                </motion.div>
              ))}
            </div>

            {/* Hero WhatsApp CTA */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
              <a
                href={buildWaLink("general", { source: "features-hero" })}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="features-hero-wa"
                className="btn-premium tap-spring inline-flex items-center justify-center gap-3 px-7 md:px-8 py-3.5 md:py-4 rounded-full bg-white text-black font-black text-xs md:text-sm uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/plans"
                data-cta="features-hero-plans"
                className="btn-premium tap-spring inline-flex items-center justify-center gap-3 px-7 md:px-8 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/40"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 01 · ALLOWED NICHES ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="01"
            kicker="Allowed Niches"
            title={<>Run the niches that <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">normal accounts can't.</span></>}
            subtitle="Every category below is fully approved on our agency BMs. No shadow-bans, no overnight kills, no policy roulette."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {NICHES.map((n, i) => {
              const Icon = n.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="relative group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 md:p-5 overflow-hidden"
                >
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3.5} />
                  </div>
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tight leading-tight mb-1 pr-7">
                    {n.name}
                  </h3>
                  <p className="text-[11px] md:text-xs text-white/45 font-medium leading-snug">{n.tag}</p>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs md:text-sm text-white/40">
            Niche not listed? <a href={buildWaLink("general", { source: "features-niche-ask" })} target="_blank" rel="noopener noreferrer" data-cta="features-niche-ask" className="text-primary font-bold hover:underline">Ask on WhatsApp →</a> (most are allowed)
          </p>
        </div>
      </section>

      {/* ─────────────── 02 · WHY NO BANS ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="02"
            kicker="Why No Bans"
            title={<>6 reasons our accounts <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">survive everything.</span></>}
            subtitle="Most agencies sell you the same Tier-3 BMs that get killed in 2 weeks. Here's what makes ours different."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {REASONS.map((r, i) => {
              const Icon = r.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-7 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl border border-primary/40 bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Reason {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3 leading-tight">{r.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── 03 · REPLACEMENT GUARANTEE ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader
            no="03"
            kicker="Replacement Guarantee"
            title={<>Banned anyway? <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">New account in 24 hours.</span></>}
            subtitle="No paperwork. No reviews. No 'sorry, your case is unique.' Just a fresh Tier-1 account, free, forever."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative">
            {/* connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {REPLACEMENT_STEPS.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative rounded-3xl border border-emerald-400/20 bg-black/50 backdrop-blur-xl p-7 md:p-8 text-center overflow-hidden"
                >
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-400/40 flex items-center justify-center mx-auto mb-5 relative">
                      <Icon className="w-7 h-7 text-emerald-400" />
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-400 text-black text-xs font-black flex items-center justify-center border-2 border-black">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">{s.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-xs md:text-sm text-white/45">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Same spend capacity restored · Same Tier-1 BM · Carry-over balance protection
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────── 04 · SPEND & PERFORMANCE ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="04"
            kicker="Spend & Performance"
            title={<>Scale without <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">spend ceilings.</span></>}
            subtitle="Every limit a normal account hits — daily caps, region locks, currency restrictions — gone."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SPEND_FEATURES.map((f, i) => {
              const Icon = f.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-7 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/15 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl border border-primary/40 bg-primary/15 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-2 leading-tight">{f.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{f.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── 05 · COMPARISON TABLE ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeader
            no="05"
            kicker="Side-by-Side"
            title={<>Normal account vs <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">RAZR Agency.</span></>}
            subtitle="The truth no agency wants you to compare directly."
          />

          <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-4 md:py-5 border-b border-white/10 bg-white/[0.02]">
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white/40">Feature</div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white/40 flex items-center gap-1.5">
                <X className="w-3 h-3 text-red-400" /> Normal Account
              </div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" /> RAZR Agency
              </div>
            </div>

            {COMPARISON.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-3.5 md:py-4 border-b border-white/5 last:border-b-0 ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}
              >
                <div className="text-xs md:text-sm font-bold text-white leading-snug">{row.feature}</div>
                <div className="text-xs md:text-sm text-white/45 leading-snug flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-400/60 shrink-0 mt-0.5" />
                  <span>{row.normal}</span>
                </div>
                <div className="text-xs md:text-sm text-white leading-snug flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="font-semibold">{row.razr}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 06 · QUALITY SPECS ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="06"
            kicker="Quality & Specs"
            title={<>Built to <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">premium spec.</span></>}
            subtitle="The technical details that separate Tier-1 partner accounts from reseller scraps."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {QUALITY_SPECS.map((q, i) => {
              const Icon = q.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 md:p-6 overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl border border-amber-400/30 bg-amber-400/10 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-amber-400" />
                  </div>
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tight mb-2 leading-tight">{q.title}</h3>
                  <p className="text-xs md:text-sm text-white/55 leading-relaxed">{q.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── 07 · SUPPORT ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="07"
            kicker="Support & Service"
            title={<>Real humans. <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Indian timezone.</span> Fast replies.</>}
            subtitle="The post-purchase experience most agencies skip — it's the whole point for us."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SUPPORT_FEATURES.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative group rounded-3xl border border-cyan-400/15 bg-black/40 backdrop-blur-xl p-6 md:p-7 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-2 leading-tight">{s.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── 08 · BONUS FEATURES ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader
            no="08"
            kicker="Bonus & Extras"
            title={<>Everything else <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">that's included.</span></>}
            subtitle="The thoughtful touches that take a setup from 'okay' to 'just works'."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {BONUS_FEATURES.map((f, i) => {
              const Icon = f.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative group rounded-2xl border border-purple-400/15 bg-black/40 backdrop-blur-xl p-5 md:p-6 overflow-hidden"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl border border-purple-400/30 bg-purple-400/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black uppercase tracking-tight mb-1.5 leading-tight">{f.title}</h3>
                      <p className="text-xs md:text-sm text-white/60 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative group rounded-3xl overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,#0066ff_60deg,transparent_120deg,#7c3aed_240deg,transparent_300deg)] opacity-40"
            />
            <div className="relative rounded-3xl border border-white/15 bg-black/85 backdrop-blur-2xl p-7 sm:p-10 md:p-16 text-center overflow-hidden">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-5 md:mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05] mb-5 md:mb-6">
                Stop losing accounts.<br/>
                <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">Start scaling safely.</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Activated in under an hour. Lifetime replacement included.
                Pay in INR with GST invoice. WhatsApp us to start.
              </p>

              {/* Quick price pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-7 md:mb-8">
                <a
                  href={buildWaLink("setup-access", { source: "features-cta-startup" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="features-cta-startup"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/70 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-sm font-black text-white">₹1,999</span>
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Startup · 5% Dep</span>
                </a>
                <a
                  href={buildWaLink("full-access", { source: "features-cta-full" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="features-cta-full"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/15 hover:bg-primary/25 hover:border-primary/80 transition-colors shadow-[0_8px_24px_-8px_rgba(0,102,255,0.5)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-black text-white">₹2,999</span>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Full · 0% Dep</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">★ Popular</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={buildWaLink("general", { source: "features-final-wa" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="features-final-wa"
                  className="btn-premium tap-spring inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  data-cta="features-final-contact"
                  className="btn-premium tap-spring inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-colors duration-300"
                >
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
