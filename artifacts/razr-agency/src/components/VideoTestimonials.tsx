import { motion } from "framer-motion";
import { Play, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Media Buyer · 7-Figure eCom",
    init: "MT",
    color: "from-blue-500/40 to-purple-600/40",
    quote: "Went from hitting $500/day limits to running $12k/day budgets within the first week. RAZR changed how we approach scaling entirely.",
    metric: "$12K/day",
    sub: "Budget Scale",
  },
  {
    name: "Priya L.",
    role: "Performance Lead · DTC Brand",
    init: "PL",
    color: "from-pink-500/40 to-orange-500/40",
    quote: "The lifetime replacement policy alone is worth it. Zero downtime across 8 months of aggressive campaign scaling. No comparison.",
    metric: "0% Downtime",
    sub: "8 Months Active",
  },
  {
    name: "Jordan K.",
    role: "Founder · Performance Agency",
    init: "JK",
    color: "from-emerald-500/40 to-cyan-500/40",
    quote: "Setup was done same day. Their team walked us through everything. Best infrastructure investment we made this year, hands down.",
    metric: "1 Hour",
    sub: "To Activation",
  },
  {
    name: "Ahmed R.",
    role: "Growth Lead · Mobile Apps",
    init: "AR",
    color: "from-amber-500/40 to-red-500/40",
    quote: "Google agency accounts unlocked verticals we couldn't touch before. Restriction-free scaling for our finance clients was a game changer.",
    metric: "4.2x ROAS",
    sub: "Q1 Average",
  },
  {
    name: "Sofia M.",
    role: "Founder · DTC Apparel",
    init: "SM",
    color: "from-purple-500/40 to-fuchsia-500/40",
    quote: "Support responds in minutes, not days. Real humans who actually understand media buying. Refreshing change from typical SaaS support.",
    metric: "12 min",
    sub: "Avg Response",
  },
];

export default function VideoTestimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Voices</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Trusted by <br />
              <span className="font-light italic text-white/50">operators who scale.</span>
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm font-bold uppercase tracking-wider text-white/70">4.9 / 5.0</span>
          </div>
        </div>
      </div>

      {/* Edge gradients */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {items.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-[380px] md:w-[440px] shrink-0 group"
            >
              {/* glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">
                {/* "Video" header preview */}
                <div className={`relative h-44 bg-gradient-to-br ${t.color} overflow-hidden`}>
                  {/* noise/grain */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                  {/* moving light */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* avatar */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border-2 border-white/30 flex items-center justify-center font-black text-lg text-white">
                      {t.init}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/70">{t.role}</div>
                    </div>
                  </div>

                  {/* play button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </motion.div>

                  {/* live recording dot */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">REC</span>
                  </div>
                </div>

                {/* body */}
                <div className="p-6">
                  <Quote className="w-5 h-5 text-primary/50 mb-3" />
                  <p className="text-[15px] text-white/80 leading-relaxed mb-5 min-h-[96px]">{t.quote}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-2xl font-black text-primary tabular-nums">{t.metric}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/40">{t.sub}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
