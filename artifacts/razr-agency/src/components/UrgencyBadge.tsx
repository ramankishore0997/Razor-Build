import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Clock } from "lucide-react";

const TOTAL_SLOTS = 12;

// Deterministic "slots left" that decays through the week
function computeSlotsLeft(): number {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  const hour = now.getHours();
  // Mon=1 starts at 9 slots, Tue=6, Wed=4, Thu=3, Fri=2, Sat=1, Sun=8 (refresh)
  const base = [8, 9, 6, 4, 3, 2, 1][day] ?? 5;
  // Gentle dip later in the day
  const decay = hour >= 18 ? 1 : 0;
  return Math.max(1, base - decay);
}

export default function UrgencyBadge({ className = "" }: { className?: string }) {
  const [slotsLeft, setSlotsLeft] = useState(() => computeSlotsLeft());

  useEffect(() => {
    // Re-check every 90s so it feels live without being silly
    const id = setInterval(() => setSlotsLeft(computeSlotsLeft()), 90_000);
    return () => clearInterval(id);
  }, []);

  const filled = TOTAL_SLOTS - slotsLeft;
  const pct = (filled / TOTAL_SLOTS) * 100;
  const critical = slotsLeft <= 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`relative inline-flex flex-col gap-3 px-5 py-4 rounded-2xl border ${
        critical ? "border-amber-500/40 bg-amber-500/[0.06]" : "border-primary/30 bg-primary/[0.06]"
      } backdrop-blur-xl max-w-md ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className={`relative w-9 h-9 rounded-xl flex items-center justify-center ${
          critical ? "bg-amber-500/15 border border-amber-500/40 text-amber-400" : "bg-primary/15 border border-primary/40 text-primary"
        }`}>
          <Flame className="w-4 h-4" />
          <span className={`absolute inset-0 rounded-xl ${critical ? "bg-amber-500/20" : "bg-primary/20"} animate-ping opacity-60`} style={{ animationDuration: "2.4s" }} />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className={`text-lg md:text-xl font-black tabular-nums ${critical ? "text-amber-400" : "text-primary"}`}>{slotsLeft}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">
              {slotsLeft === 1 ? "slot" : "slots"} left this week
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Clock className="w-3 h-3 text-white/40" />
            <span className="text-[10px] uppercase tracking-wider text-white/40">Onboarding closes Sunday 11:59 PM IST</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute inset-y-0 left-0 rounded-full ${
            critical
              ? "bg-gradient-to-r from-amber-500 to-red-500 shadow-[0_0_12px_rgba(245,158,11,0.7)]"
              : "bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_12px_rgba(0,102,255,0.7)]"
          }`}
        />
      </div>

      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40">
        <span>{filled} / {TOTAL_SLOTS} filled</span>
        <span className="font-bold">Cohort #{Math.max(1, Math.ceil((new Date().getDate()) / 7))}</span>
      </div>
    </motion.div>
  );
}
