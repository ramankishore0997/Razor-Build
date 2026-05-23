import PageWrapper from "@/components/layout/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="pt-40 pb-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="relative pl-8 md:pl-16 border-l-4 border-primary mb-32">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif italic leading-tight text-white/90">
              "We started RAZR because we lived the frustration ourselves."
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left 60% */}
            <div className="w-full lg:w-[60%]">
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">The Infrastructure Gap</h2>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  RAZR was built by media buyers who spent years running aggressive campaigns. We hit the same walls everyone does: random $50 daily limits, arbitrary restrictions, and campaigns stalling just as they were becoming profitable.
                </p>
                <p>
                  We realized the problem wasn't our strategy or our creatives. The problem was the <strong className="text-white font-normal">infrastructure</strong>. Standard self-serve Business Managers are built for local bakeries, not performance marketers spending 5-figures a day.
                </p>
                <div className="py-8 my-8 border-y border-white/10 text-3xl font-bold text-white uppercase tracking-tighter">
                  <span className="text-primary text-5xl">500+</span><br/>
                  Active clients scaled.
                </div>
                <p>
                  Agency ad accounts aren't a "hack" — they are the professional-grade infrastructure that large global agencies use every day. We built RAZR to democratize that access. If you have the budget and the strategy, the platform shouldn't hold you back.
                </p>
              </div>
            </div>

            {/* Right 40% */}
            <div className="w-full lg:w-[40%] flex flex-col gap-12 pt-4">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Core Value 01</h3>
                <h4 className="text-2xl font-bold mb-3">Radical Transparency</h4>
                <p className="text-muted-foreground">We show you the account before you pay. No black boxes, no guessing games.</p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Core Value 02</h3>
                <h4 className="text-2xl font-bold mb-3">Speed as a Feature</h4>
                <p className="text-muted-foreground">In media buying, delays cost money. Same-day activation and 30-minute support responses.</p>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">Core Value 03</h3>
                <h4 className="text-2xl font-bold mb-3">Long-Term Partnership</h4>
                <p className="text-muted-foreground">We don't just sell accounts; we provide ongoing scaling strategy and infrastructure management.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
