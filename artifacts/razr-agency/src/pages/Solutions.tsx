import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import CommandCenter from "@/components/CommandCenter";

const solutions = [
  {
    id: "01",
    title: "E-Commerce",
    desc: "Stop fighting daily spending limits on winning creatives. Scale your Advantage+ Shopping campaigns infinitely with premium limits and zero payment failures.",
  },
  {
    id: "02",
    title: "Lead Generation",
    desc: "Maintain stable CPLs across local and national campaigns. Our accounts handle high-volume form fills without triggering automated restriction flags.",
  },
  {
    id: "03",
    title: "SaaS & Software",
    desc: "Deploy sophisticated funnel structures and retargeting matrices. Perfect for B2B cycles that require stable, long-term pixel seasoning.",
  },
  {
    id: "04",
    title: "Agencies",
    desc: "Provide your clients with bulletproof infrastructure. Whitelabel our accounts and eliminate the 'client account went down' emergency call.",
  },
  {
    id: "05",
    title: "High-Volume Performance",
    desc: "For affiliates and aggressive marketers. We provide the stability needed to run 5-figure daily budgets across multiple geos without sweat.",
  }
];

export default function Solutions() {
  return (
    <PageWrapper>
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">01-05</span><br/>
              Solutions
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl font-light">
              Tailored infrastructure for the industries that spend the most.
            </p>
          </div>
        </div>
      </section>

      <div className="relative border-t border-white/10">
        {solutions.map((sol, i) => (
          <section key={sol.id} className="min-h-screen flex items-center border-b border-white/5 relative overflow-hidden py-20">
            {/* Subtle background number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none leading-none">
              {sol.id}
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
                
                {/* Narrative Copy */}
                <div className="w-full lg:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="text-primary font-bold text-xl tracking-widest mb-6">/{sol.id}</div>
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8">{sol.title}</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {sol.desc}
                    </p>
                    <div className="mt-12">
                      <a href="/contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-primary hover:border-primary transition-colors">
                        Discuss Your Needs
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Mockup */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: i % 2 === 0 ? 10 : -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ perspective: "1000px" }}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-primary/20 blur-[100px] ${i % 2 === 0 ? '-left-20' : '-right-20'}`} />
                      <CommandCenter className="relative z-10 w-full shadow-2xl" />
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
}
