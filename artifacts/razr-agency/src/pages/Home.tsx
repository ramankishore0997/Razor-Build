import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
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
import ProblemSolution from "@/components/ProblemSolution";
import ROISimulator from "@/components/ROISimulator";
import AccessFlowJourney from "@/components/AccessFlowJourney";
import UrgencyBadge from "@/components/UrgencyBadge";
import HeroRobot from "@/components/HeroRobot";
import GrowthMetrics from "@/components/GrowthMetrics";
import CaseStudyTimeline from "@/components/CaseStudyTimeline";
import FaqPreview from "@/components/FaqPreview";

const features = [
  { icon: Shield, title: "Lower Restriction Risk", desc: "Established trust signals that minimize account bans." },
  { icon: Target, title: "High Spending Capacity", desc: "Agency-tier accounts with higher daily limits." },
  { icon: Zap, title: "Fast Activation", desc: "Get up and running in hours." },
  { icon: Clock, title: "Long-Term Support", desc: "Ongoing assistance from our team." },
];

export default function Home() {

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
                
                <h1 className="text-[3.25rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] text-white mb-6">
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

            {/* Right Column - 40% - Hero Robot */}
            <div className="w-full lg:w-[40%] relative h-[420px] lg:h-[560px] hidden md:block z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <HeroRobot />
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
      <section className="py-16 md:py-24 relative z-10 overflow-hidden bg-black border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">Live Dashboard</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-4 md:mb-6">
              Your <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">Command Center.</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Monitor account health, scaling metrics, and active campaigns — all in one premium view.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
            <CommandCenter className="relative mx-auto max-w-none w-full shadow-[0_30px_100px_-20px_rgba(0,102,255,0.4)]" />
          </motion.div>
        </div>
      </section>

      {/* STATS WALL - Editorial Typography */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 border-l-2 border-primary pl-8">
              <div className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter mb-6">98%</div>
              <div className="w-full max-w-xs">
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4">Client Retention</h4>
                <p className="text-muted-foreground leading-relaxed">Once advertisers switch to our infrastructure, they rarely leave. The stability is simply unmatched by standard setups.</p>
              </div>
            </div>
            
            <div className="flex-1 border-l-2 border-white/20 pl-8">
              <div className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-light leading-none tracking-tighter mb-6 text-white/50">$15<span className="text-4xl sm:text-5xl align-top">M</span></div>
              <div className="w-full max-w-xs">
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4 text-white/70">Monthly Spend</h4>
                <p className="text-muted-foreground leading-relaxed">Processed safely through our agency networks without artificial scaling bottlenecks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION COMPARISON */}
      <ProblemSolution />

      {/* ACCESS FLOW JOURNEY — Request → Review → Activation → Scale */}
      <AccessFlowJourney />

      {/* GROWTH METRICS */}
      <GrowthMetrics />

      {/* ROI SIMULATOR — interactive budget calculator */}
      <ROISimulator />

      {/* CASE STUDY TIMELINE */}
      <CaseStudyTimeline />

      {/* VIDEO TESTIMONIALS */}
      <VideoTestimonials />

      {/* FAQ PREVIEW */}
      <FaqPreview />

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

      {/* URGENCY BADGE — scarcity push above final CTA */}
      <section className="relative z-10 pt-16 pb-4 flex justify-center px-4">
        <UrgencyBadge />
      </section>

      <HolographicCTA />

    </PageWrapper>
  );
}
