import PageWrapper from "@/components/layout/PageWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe, Clock, Target, CreditCard, Lock, Infinity as InfinityIcon } from "lucide-react";
import { Link } from "wouter";
import MarqueeLogos from "@/components/MarqueeLogos";
import CommandCenter from "@/components/CommandCenter";
import FloatingOrbs from "@/components/FloatingOrbs";
import WorldMap from "@/components/WorldMap";
import TrustWall from "@/components/TrustWall";
import AchievementBadges from "@/components/AchievementBadges";
import HolographicCTA from "@/components/HolographicCTA";
import LightBeams from "@/components/LightBeams";
import VideoTestimonials from "@/components/VideoTestimonials";
import ScrollStory from "@/components/ScrollStory";
import HeroRobot from "@/components/HeroRobot";
import { useRef } from "react";

const features = [
  { icon: Shield, title: "Lower Restriction Risk", desc: "Established trust signals that minimize account bans." },
  { icon: Target, title: "High Spending Capacity", desc: "Agency-tier accounts with higher daily limits." },
  { icon: Zap, title: "Fast Activation", desc: "Get up and running in hours." },
  { icon: Clock, title: "Long-Term Support", desc: "Ongoing assistance from our team." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <PageWrapper>
      <FloatingOrbs />
      
      {/* HERO SECTION - Asymmetric */}
      <section className="relative min-h-[78vh] pt-24 pb-10 flex items-center overflow-hidden z-10">
        <LightBeams />
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center h-full">
            {/* Left Column - 60% */}
            <div className="w-full lg:w-[60%] flex flex-col items-start relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 mb-6 border-b border-primary/30 pb-2">
                  <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-primary uppercase">
                    May 23, 2026 // Meta & Google Agency Accounts
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] text-white mb-6">
                  SCALE <br/>
                  <span className="font-light italic tracking-tight text-white/70">WITHOUT</span><br/>
                  LIMITS.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 font-medium leading-relaxed">
                  Premium Meta & Google Agency infrastructure for high-volume advertisers. Stop fighting the platform, start scaling your campaigns.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-6 w-full max-w-md">
                  <a href="https://wa.me/917065339146" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto relative group">
                    <div className="absolute inset-0 bg-primary rounded-none blur group-hover:blur-md transition-all duration-300 opacity-50" />
                    <button className="relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                      Get Started
                    </button>
                  </a>
                  <Link href="/contact" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
                    Contact Us
                  </Link>
                </div>

                <AchievementBadges />
              </motion.div>
            </div>

            {/* Right Column - 40% - Robot + Floating UI */}
            <div className="w-full lg:w-[40%] relative h-[420px] lg:h-[560px] hidden md:block z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <HeroRobot />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -right-20 bottom-0 w-[110%] z-10 hidden lg:block opacity-70"
                style={{ perspective: "1000px" }}
              >
                <div style={{ transform: "rotateY(-15deg) rotateX(5deg) rotateZ(-2deg) scale(0.75)", transformStyle: "preserve-3d" }}>
                  <CommandCenter />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <TrustWall />
      <MarqueeLogos />

      {/* WHY RAZR - BENTO GRID */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Infrastructure</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Built to <br/><span className="font-light italic text-white/50">outperform</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
            {/* Large Feature Card - Chart */}
            <div className="md:col-span-8 md:row-span-2 relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Shield className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-3xl font-bold mb-2">Unmatched Stability</h4>
                <p className="text-muted-foreground max-w-md">Our agency-tier accounts carry established trust signals that dramatically reduce the chance of restrictions compared to standard Business Managers.</p>
              </div>
              <div className="relative z-0 mt-8 h-40 w-full rounded-xl border border-white/5 bg-black/50 overflow-hidden flex items-end">
                 {/* Fake chart visualization */}
                 <div className="w-full h-full flex items-end justify-between px-4 gap-2 pt-8">
                   {[40, 60, 45, 80, 65, 90, 75, 100].map((h, i) => (
                     <div key={i} className="w-full bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                 </div>
              </div>
            </div>

            {/* Top Right Small Card */}
            <div className="md:col-span-4 md:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 group hover:border-white/20 transition-colors flex flex-col justify-center">
              <Target className="w-8 h-8 text-white mb-4" />
              <h4 className="text-xl font-bold mb-2">High Capacity</h4>
              <p className="text-sm text-muted-foreground">Scale spend daily without artificial caps.</p>
            </div>

            {/* Bottom Right Small Card */}
            <div className="md:col-span-4 md:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 group hover:border-white/20 transition-colors flex flex-col justify-center">
              <Zap className="w-8 h-8 text-white mb-4" />
              <h4 className="text-xl font-bold mb-2">Instant Action</h4>
              <p className="text-sm text-muted-foreground">Same-day activation for verified partners.</p>
            </div>

            {/* Bottom Left Medium Card */}
            <div className="md:col-span-5 md:row-span-1 rounded-3xl border border-white/10 bg-primary/5 p-8 group hover:bg-primary/10 transition-colors">
              <h4 className="text-2xl font-bold mb-2 text-primary">0% Downtime</h4>
              <p className="text-sm text-white/70">Lifetime replacement guarantee on Full Access accounts.</p>
            </div>

            {/* Bottom Right Medium Card */}
            <div className="md:col-span-7 md:row-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 group flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-2">Team Access</h4>
                <p className="text-sm text-muted-foreground">Proper role-based permissions.</p>
              </div>
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-white/10 flex items-center justify-center text-xs font-bold text-white/50 backdrop-blur-md">U{i}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMAND CENTER PREVIEW */}
      <section className="py-16 relative z-10 overflow-hidden bg-black border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Your Command Center</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to monitor account health, scaling metrics, and active campaigns in one view.</p>
        </div>
        
        <div className="w-[120%] md:w-[150%] max-w-none -ml-[10%] md:-ml-[25%] opacity-80" style={{ transform: "rotateX(20deg) rotateZ(-5deg)", perspective: "1000px" }}>
          <CommandCenter className="max-w-none w-full scale-125 md:scale-150 origin-top shadow-[0_0_100px_rgba(0,102,255,0.2)]" />
        </div>
      </section>

      {/* STATS WALL - Editorial Typography */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 border-l-2 border-primary pl-8">
              <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter mb-6">98%</div>
              <div className="w-full max-w-xs">
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Client Retention</h4>
                <p className="text-muted-foreground leading-relaxed">Once advertisers switch to our infrastructure, they rarely leave. The stability is simply unmatched by standard setups.</p>
              </div>
            </div>
            
            <div className="flex-1 border-l-2 border-white/20 pl-8">
              <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-light leading-none tracking-tighter mb-6 text-white/50">$15<span className="text-5xl align-top">M</span></div>
              <div className="w-full max-w-xs">
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4 text-white/70">Monthly Spend</h4>
                <p className="text-muted-foreground leading-relaxed">Processed safely through our agency networks without artificial scaling bottlenecks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Sticky Reveal */}
      <section className="py-16 relative z-10 bg-white/[0.02] border-y border-white/5" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="sticky top-40">
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Process</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
                  From zero <br/>to live.
                </h3>
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8 py-20">
              {[
                { step: "01", title: "Consultation", desc: "We review your business model, current spending, and scaling goals to ensure fit." },
                { step: "02", title: "Account Review", desc: "Full transparency. We show you the exact account you'll receive before commitment." },
                { step: "03", title: "Activation", desc: "Same-day provisioning. We connect your BM, set up billing, and grant team access." },
                { step: "04", title: "Scale", desc: "Go live. Our team monitors health and provides ongoing scaling support." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px", once: true }}
                  className="relative pl-12 border-l border-white/10"
                >
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
                  <div className="text-2xl font-light text-white/30 mb-4">{item.step}</div>
                  <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL STORYTELLING */}
      <ScrollStory />

      {/* VIDEO TESTIMONIALS */}
      <VideoTestimonials />

      {/* WORLD MAP */}
      <section className="py-16 relative z-10 overflow-hidden bg-black border-y border-white/5">
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-8">Global Reach</h2>
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-10">Trusted in 40+ countries</h3>
        </div>
        <div className="relative -mt-10">
          <WorldMap />
        </div>
      </section>

      <HolographicCTA />

    </PageWrapper>
  );
}
