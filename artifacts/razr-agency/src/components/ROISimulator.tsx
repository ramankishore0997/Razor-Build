import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Zap, ArrowUpRight } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";

const BUDGETS = [1000, 5000, 10000, 25000, 50000, 100000];

function formatUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}k`;
  return `$${n.toFixed(0)}`;
}

export default function ROISimulator() {
  const [budget, setBudget] = useState(10000);

  const stats = useMemo(() => {
    // Conservative agency-tier assumptions
    const standardRoas = 1.8;   // typical personal/fresh BM
    const agencyRoas = 4.2;     // RAZR agency-tier accounts
    const standardRevenue = budget * standardRoas;
    const agencyRevenue = budget * agencyRoas;
    const uplift = agencyRevenue - standardRevenue;
    const upliftPct = ((agencyRoas - standardRoas) / standardRoas) * 100;
    return { standardRevenue, agencyRevenue, uplift, upliftPct, standardRoas, agencyRoas };
  }, [budget]);

  const max = Math.max(stats.agencyRevenue, stats.standardRevenue);
  const standardPct = (stats.standardRevenue / max) * 100;
  const agencyPct = (stats.agencyRevenue / max) * 100;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">ROI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
            See what <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">agency tier</span> unlocks.
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            Move the slider. Watch the numbers shift. This is the real difference between fighting the platform and scaling with it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/15 to-cyan-400/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-black to-black backdrop-blur-xl p-6 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            {/* Budget input */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-end justify-between mb-4 gap-3">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-1">Monthly Ad Spend</div>
                  <div className="text-4xl md:text-5xl font-black tracking-tight tabular-nums">
                    {formatUSD(budget)}
                    <span className="text-base md:text-lg text-white/40 font-bold ml-2">/ month</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">Live</span>
                </div>
              </div>

              <input
                type="range"
                min={1000}
                max={100000}
                step={500}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 accent-primary cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgb(0 102 255) 0%, rgb(0 102 255) ${((budget - 1000) / 99000) * 100}%, rgba(255,255,255,0.1) ${((budget - 1000) / 99000) * 100}%, rgba(255,255,255,0.1) 100%)`,
                }}
                aria-label="Monthly ad spend"
              />

              <div className="flex flex-wrap gap-2 mt-4">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                      budget === b
                        ? "bg-primary text-white border border-primary shadow-[0_0_20px_rgba(0,102,255,0.5)]"
                        : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {formatUSD(b)}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison bars */}
            <div className="space-y-6 mb-8">
              {/* Standard */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-white/50">Standard Setup</span>
                    <span className="text-[10px] text-white/30">{stats.standardRoas}x ROAS</span>
                  </div>
                  <div className="text-lg md:text-xl font-black tabular-nums text-white/70">{formatUSD(stats.standardRevenue)}</div>
                </div>
                <div className="relative h-10 md:h-12 rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden">
                  <motion.div
                    key={`std-${budget}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${standardPct}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-xl bg-gradient-to-r from-white/10 to-white/20 border-r border-white/20"
                  />
                </div>
              </div>

              {/* Agency */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">RAZR Agency Tier</span>
                    <span className="text-[10px] text-primary/70">{stats.agencyRoas}x ROAS</span>
                  </div>
                  <div className="text-xl md:text-2xl font-black tabular-nums bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {formatUSD(stats.agencyRevenue)}
                  </div>
                </div>
                <div className="relative h-10 md:h-12 rounded-xl bg-white/[0.03] border border-primary/20 overflow-hidden">
                  <motion.div
                    key={`agency-${budget}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${agencyPct}%` }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="h-full rounded-xl bg-gradient-to-r from-primary via-purple-500 to-cyan-400 shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* Outcome stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400/90">Extra Revenue</span>
                </div>
                <div className="text-2xl md:text-3xl font-black tabular-nums text-emerald-400">+{formatUSD(stats.uplift)}</div>
                <div className="text-[11px] text-white/40 mt-1">per month</div>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-primary">ROAS Lift</span>
                </div>
                <div className="text-2xl md:text-3xl font-black tabular-nums bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  +{stats.upliftPct.toFixed(0)}%
                </div>
                <div className="text-[11px] text-white/40 mt-1">vs standard setup</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs md:text-sm text-white/50 text-center sm:text-left">
                Conservative estimates based on agency-tier benchmarks.
                <br className="hidden sm:block" />
                Most clients exceed these numbers after optimization.
              </div>
              <a
                href={buildWaLink("roi-tier", { source: "roi-simulator" })}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
              >
                Lock My Tier
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
