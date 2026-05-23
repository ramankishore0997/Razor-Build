import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, Zap, Shield, TrendingUp } from "lucide-react";

const SCENES = [
  {
    chapter: "01",
    icon: Eye,
    title: "Full Visibility",
    body: "See every account in real time before you commit. Daily caps, BM history, and live status — all transparent.",
    accent: "from-blue-500/30 to-cyan-500/20",
  },
  {
    chapter: "02",
    icon: Zap,
    title: "Instant Activation",
    body: "Sign off, go live. Same-day BM connection, billing setup, team access. From paperwork to first campaign in hours.",
    accent: "from-purple-500/30 to-pink-500/20",
  },
  {
    chapter: "03",
    icon: Shield,
    title: "Protected Spend",
    body: "Lifetime replacement on every Full Access account. If an account dies without policy violation, balance and access transfer instantly.",
    accent: "from-emerald-500/30 to-teal-500/20",
  },
  {
    chapter: "04",
    icon: TrendingUp,
    title: "Scale Unlocked",
    body: "Stop hitting $500/day walls. Run uncapped budgets backed by agency-tier trust signals built over years.",
    accent: "from-amber-500/30 to-orange-500/20",
  },
];

export default function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative" style={{ height: `${SCENES.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* progress bar */}
        <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 w-1 h-[60vh] bg-white/5 rounded-full z-30">
          <motion.div
            style={{ height: progress }}
            className="w-full bg-gradient-to-b from-primary via-purple-500 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.6)]"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {SCENES.map((scene, i) => {
            const start = i / SCENES.length;
            const end = (i + 1) / SCENES.length;
            return <Scene key={i} scene={scene} index={i} scrollYProgress={scrollYProgress} start={start} end={end} />;
          })}
        </div>
      </div>
    </section>
  );
}

type SceneProps = {
  scene: (typeof SCENES)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
};

function Scene({ scene, index, scrollYProgress, start, end }: SceneProps) {
  const mid = (start + end) / 2;
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [start, mid, end], [60, 0, -60]);
  const scale = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0.9]);
  const Icon = scene.icon;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${scene.accent} opacity-30 blur-3xl pointer-events-none`} />
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur mb-10">
          <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Chapter {scene.chapter}</span>
        </div>

        <div className="inline-flex w-20 h-20 md:w-24 md:h-24 rounded-3xl border border-primary/30 bg-primary/10 backdrop-blur items-center justify-center mb-8">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        </div>

        <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          {scene.title}
        </h2>
        <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">{scene.body}</p>

        <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          {String(index + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}
