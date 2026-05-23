import PageWrapper from "@/components/layout/PageWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Initial Contact & Vetting",
    desc: "Reach out via Telegram. We respond within minutes. We'll briefly review your vertical and spend goals to ensure we're a fit.",
    bullets: [
      "Share your niche/vertical",
      "Discuss target daily spend",
      "Confirm policy compliance"
    ]
  },
  {
    step: "02",
    title: "Transparent Review",
    desc: "Before you pay a dime, we show you the exact account you'll receive. Full transparency on history and limit tiers.",
    bullets: [
      "Live screen-share or screenshots",
      "Verify BM structure",
      "Confirm billing setup"
    ]
  },
  {
    step: "03",
    title: "Activation & Provisioning",
    desc: "Once confirmed, we handle the technical heavy lifting. We assign the account to your Business Manager with proper roles.",
    bullets: [
      "Admin access granted",
      "Pixel/Domain connections",
      "Backup admins assigned"
    ]
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Your account is live. Launch your campaigns. Our team monitors the critical first 48 hours to ensure zero friction.",
    bullets: [
      "Publish first campaigns",
      "Monitor initial spend",
      "Gradual limit scaling"
    ]
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageWrapper>
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-8 block">The Process</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            From first message <br/>
            <span className="text-white/50">to live campaigns.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 relative pb-40" ref={containerRef}>
        <div className="container mx-auto px-4 max-w-4xl relative">
          
          {/* Glowing Line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-primary shadow-[0_0_15px_rgba(0,102,255,1)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-32">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-16 md:pl-32 flex flex-col md:flex-row gap-8 md:gap-10">
                
                {/* Node */}
                <div className="absolute left-2.5 md:left-[2.6rem] top-2 w-4 h-4 -translate-x-1/2 rounded-full border-[4px] border-background bg-primary z-10" />

                {/* Content */}
                <div className="flex-1">
                  <div className="text-[5rem] md:text-[7rem] font-black leading-none text-white/5 -mt-6 md:-mt-12 mb-4 select-none">
                    {step.step}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">{step.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">What happens here</h4>
                    <ul className="flex flex-col gap-3">
                      {step.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
