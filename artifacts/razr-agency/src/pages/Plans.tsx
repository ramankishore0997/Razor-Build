import PageWrapper from "@/components/layout/PageWrapper";
import { Check } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";

export default function Plans() {
  return (
    <PageWrapper>
      <FloatingOrbs />
      
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/10 pb-12">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Access <br/><span className="text-white/40">Tiers</span>
            </h1>
            <div className="bg-white/[0.05] border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Starting from $499</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-0 mt-20">
            {/* Setup Access - Narrower */}
            <div className="w-full lg:w-[40%] p-10 lg:pr-16 bg-background border-t border-l border-r lg:border-b lg:border-r-0 border-white/10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Entry Tier</div>
              <h2 className="text-4xl font-bold mb-4">Setup Access</h2>
              <p className="text-muted-foreground mb-12">Perfect for advertisers needing verified infrastructure to launch initial campaigns.</p>
              
              <div className="text-3xl font-black mb-12">Contact Us</div>
              
              <a href="/contact" className="block w-full py-5 text-center border border-white/20 font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
                Inquire
              </a>
            </div>

            {/* Full Access - Wider & Taller */}
            <div className="w-full lg:w-[60%] p-12 bg-white/[0.02] backdrop-blur-xl border border-primary/30 rounded-3xl lg:-ml-8 lg:-mt-8 relative z-20 shadow-[0_0_50px_rgba(0,102,255,0.15)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Premium Tier</div>
                  <div className="px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest">Most Popular</div>
                </div>
                <h2 className="text-5xl font-bold mb-4">Full Access</h2>
                <p className="text-lg text-white/80 max-w-sm mb-12">The complete package. Maximum limits, lifetime support, and everything needed to scale without constraints.</p>
                
                <div className="text-4xl font-black mb-12">Contact Us</div>
                
                <a href="/contact" className="block w-full py-6 text-center bg-primary text-black font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                  Get Full Access
                </a>
              </div>
            </div>
          </div>

          {/* Comparison Matrix */}
          <div className="mt-32">
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-12 text-center">Feature Comparison</h3>
            <div className="w-full border-t border-white/10">
              {[
                { name: "Premium Agency Ad Account", setup: true, full: true },
                { name: "Daily Spending Limit", setup: "Standard ($250-$5k)", full: "Maximum / No Limit" },
                { name: "Activation Time", setup: "24-48 Hours", full: "Same Day" },
                { name: "Support Level", setup: "7-Day Onboarding", full: "Unlimited Ongoing" },
                { name: "Team Seats", setup: "1 Admin", full: "Up to 3 Roles" },
                { name: "Replacement Guarantee", setup: "30 Days (One-Time)", full: "Lifetime" },
                { name: "Dedicated Account Manager", setup: false, full: true },
                { name: "Balance Transfer Support", setup: false, full: true },
              ].map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <div className="w-full sm:w-1/2 py-6 px-4 font-medium">{row.name}</div>
                  <div className="w-full sm:w-1/4 py-6 px-4 text-muted-foreground border-l border-white/5">
                    {typeof row.setup === 'boolean' ? (row.setup ? <Check className="text-white/30" /> : <span className="text-white/10">-</span>) : row.setup}
                  </div>
                  <div className="w-full sm:w-1/4 py-6 px-4 text-primary font-bold border-l border-white/5 bg-primary/[0.02]">
                    {typeof row.full === 'boolean' ? (row.full ? <Check className="text-primary" /> : <span className="text-white/10">-</span>) : row.full}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
