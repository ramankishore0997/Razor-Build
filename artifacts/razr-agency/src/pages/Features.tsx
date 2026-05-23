import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Building2, Headphones, BarChart3, Layers, Users, RefreshCw } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";

export default function Features() {
  return (
    <PageWrapper>
      <FloatingOrbs />
      
      {/* TALL EDITORIAL INTRO */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-8 block">The Arsenal</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
              Engineered <br/><span className="font-light italic text-white/70">for dominance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed border-l-2 border-primary pl-6">
              Every feature we offer is designed to remove bottlenecks. We don't just provide accounts; we provide the entire infrastructure needed to scale aggressive campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* TRUE BENTO GRID */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 md:gap-6">
            
            {/* Large Card 1 - Spans 4 cols, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative z-10">
                <Shield className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-4xl font-bold mb-4 w-2/3">Impenetrable Trust Signals</h3>
                <p className="text-lg text-muted-foreground max-w-md">Our agency structures are pre-vetted and hold significant trust score history with Meta, practically eliminating random algorithmic bans.</p>
              </div>
              <div className="relative z-10 mt-8 flex gap-4">
                {/* Visual metric pills */}
                <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">Trust Score: High</div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold uppercase tracking-widest">Ban Rate: {'<'}0.1%</div>
              </div>
            </div>

            {/* Medium Card 1 */}
            <div className="md:col-span-2 md:row-span-1 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-center group hover:bg-white/5 transition-colors">
              <Zap className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Same-Day Go Live</h3>
              <p className="text-sm text-muted-foreground">Accounts provisioned and ready within hours, not days.</p>
            </div>

            {/* Medium Card 2 */}
            <div className="md:col-span-2 md:row-span-1 rounded-[2rem] border border-white/10 bg-primary/5 p-8 flex flex-col justify-center">
              <h3 className="text-4xl font-black text-primary mb-2">∞</h3>
              <h4 className="text-lg font-bold">No Cap Scaling</h4>
              <p className="text-sm text-white/70">Unrestricted daily budgets from day one.</p>
            </div>

            {/* Medium Card 3 */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
              <Users className="w-10 h-10 text-primary mb-6 relative z-10" />
              <div className="mt-auto relative z-10">
                <h3 className="text-2xl font-bold mb-4">Multi-Seat BM</h3>
                <p className="text-sm text-muted-foreground mb-6">Proper role isolation for media buyers, analysts, and admins.</p>
                <div className="w-full h-24 border border-white/10 rounded-xl bg-white/5 flex flex-col justify-center px-4 gap-2">
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="md:col-span-4 md:row-span-2 rounded-[2rem] border border-white/10 bg-black p-10 flex items-center gap-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-3xl" />
              <div className="flex-1 relative z-10">
                <RefreshCw className="w-12 h-12 text-white mb-6" />
                <h3 className="text-4xl font-bold mb-4">Lifetime Replacements</h3>
                <p className="text-lg text-muted-foreground">If an account goes down and you haven't violated core policies, we replace it. Instantly. Free of charge.</p>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center relative z-10">
                <div className="w-48 h-48 rounded-full border-[8px] border-primary/20 border-t-primary animate-spin-slow flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center text-primary font-bold">24/7</div>
                </div>
              </div>
            </div>

            {/* Small icon cards */}
            <div className="md:col-span-2 md:row-span-1 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
              <Building2 className="w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="font-bold">Clean Billing</div>
                <div className="text-xs text-muted-foreground">Pre-warmed cards</div>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
              <Layers className="w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="font-bold">Niche Agnostic</div>
                <div className="text-xs text-muted-foreground">BH/WH supported</div>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
              <Headphones className="w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="font-bold">Direct Line</div>
                <div className="text-xs text-muted-foreground">Telegram support</div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="py-24 relative z-10 text-center">
        <a href="/plans" className="inline-block px-12 py-6 bg-white text-black font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform duration-300">
          View Pricing
        </a>
      </section>
    </PageWrapper>
  );
}
