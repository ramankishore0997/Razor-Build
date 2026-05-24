import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Activity, Zap, Target } from "lucide-react";

const METRICS = [
  { Icon: TrendingUp, label: "Avg ROAS lift", from: 1.8, to: 4.6, suffix: "x", color: "from-primary to-cyan-400" },
  { Icon: Activity, label: "Account uptime", from: 30, to: 99.2, suffix: "%", color: "from-emerald-400 to-teal-400" },
  { Icon: Zap, label: "Time to scale", from: 14, to: 1, suffix: " day", color: "from-amber-400 to-orange-400", invert: true },
  { Icon: Target, label: "CPA reduction", from: 0, to: 42, suffix: "%", color: "from-purple-400 to-pink-400" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
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
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function GrowthMetrics() {
  return (
    <section className="py-20 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">Growth Metrics</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
              Numbers that <br />
              <span className="font-light italic text-white/50">don't lie.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md">
            Aggregated results across 1,200+ active advertisers in the last 12 months. Real campaigns, real budgets.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((m, i) => {
            const Icon = m.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-premium tap-spring relative group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-7 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br ${m.color} rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${m.invert ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-primary/15 text-primary border border-primary/30"}`}>
                      {m.invert ? "↓ Faster" : "↑ Better"}
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white tabular-nums mb-2 leading-none">
                    <Counter value={m.to} suffix={m.suffix} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">{m.label}</div>

                  {/* before vs after mini bars */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/30 font-bold">
                      <span className="w-10">Before</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "28%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-white/30 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white font-bold">
                      <span className="w-10">After</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }} className={`h-full bg-gradient-to-r ${m.color} rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
