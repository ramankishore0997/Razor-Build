import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Zap, Target, Eye, Shield } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Active Clients" },
  { value: 10, suffix: "M+", label: "Ad Spend Managed ($)" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "+", label: "Years in Business" },
];

const values = [
  {
    icon: Shield,
    title: "Trust Through Transparency",
    description:
      "We show you everything upfront — account history, limits, setup details — before any commitment. No surprises, ever.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "Every decision we make is oriented toward one thing: helping your campaigns scale profitably. We don't succeed unless you do.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Open book on account health, spending history, and infrastructure. You'll always know exactly what you're working with.",
  },
  {
    icon: Zap,
    title: "Speed as a Feature",
    description:
      "In advertising, time is money. We prioritize fast activation, fast responses, and fast solutions — always.",
  },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              <span>Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                RAZR Agency
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We started RAZR because we lived the frustration ourselves —
              hitting spending limits, getting accounts restricted, watching
              campaigns stall right as they were about to scale.
            </p>
          </motion.div>

          {/* Story section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Built by Advertisers, for Advertisers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RAZR was founded by a team of media buyers and performance
                marketers who had spent years running campaigns across dozens of
                verticals. We understood the infrastructure gap that separates a
                successful scaling operation from one that's constantly fighting
                the platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Agency ad accounts aren't a workaround — they're the
                professional-grade infrastructure that large advertisers use
                every day. We made that access available to any serious
                advertiser.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve 500+ active clients across e-commerce, lead
                generation, SaaS, and beyond. Every account we provide is one
                we'd run our own campaigns on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To give every serious advertiser access to the same
                infrastructure advantages that the largest agencies in the world
                use — without needing to be one.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where account infrastructure is never the limiting factor
                in a campaign's growth. Where media buyers can focus on
                strategy, creative, and optimization — not fighting the platform.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm mb-32 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-muted-foreground text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Clients Choose Us
              </h2>
              <p className="text-muted-foreground text-lg">
                More than accounts — we're a long-term infrastructure partner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_25px_rgba(0,102,255,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <value.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
