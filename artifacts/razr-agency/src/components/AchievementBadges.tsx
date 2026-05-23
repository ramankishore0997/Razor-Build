import { motion } from "framer-motion";
import { Star, Crown, Headphones, Building2 } from "lucide-react";

const BADGES = [
  { icon: Star, label: "Top Rated", sub: "4.9 / 5.0", delay: 0 },
  { icon: Crown, label: "Premium Access", sub: "Tier-1 Network", delay: 0.15 },
  { icon: Headphones, label: "24 / 7 Support", sub: "12 min avg", delay: 0.3 },
  { icon: Building2, label: "Agency Level", sub: "Meta + Google", delay: 0.45 },
];

export default function AchievementBadges() {
  return (
    <div className="flex flex-wrap gap-3 mt-12">
      {BADGES.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + b.delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.04 }}
            className="group relative flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div className="relative leading-none">
              <div className="text-[11px] font-black uppercase tracking-wider text-white">{b.label}</div>
              <div className="text-[10px] font-medium text-white/50 mt-1">{b.sub}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
