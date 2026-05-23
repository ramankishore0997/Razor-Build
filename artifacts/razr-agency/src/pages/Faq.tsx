import PageWrapper from "@/components/layout/PageWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { cat: "Activation", q: "How long does activation take?", a: "Setup Access takes 24-48 hours. Full Access receives same-day activation." },
  { cat: "Activation", q: "Do I need my own Business Manager?", a: "No, we provide the account within our verified Business Manager and grant you admin/employee access as required." },
  { cat: "Support", q: "What happens if I get restricted?", a: "We have a lifetime replacement guarantee for Full Access. If restricted without policy violation, we replace it free." },
  { cat: "Support", q: "How fast do you respond?", a: "Our Telegram support typically responds in under 30 minutes during business hours, and within a few hours off-hours." },
  { cat: "Scaling", q: "What are the daily spending limits?", a: "Full Access accounts typically start with no daily limit or a very high tier ($5k+), depending on availability and your specific needs." },
  { cat: "Scaling", q: "Can I run crypto/nutra?", a: "Yes — we provide both Blackhat and Whitehat accounts on Meta and Google. Gray-hat verticals like crypto, nutra, and aggressive D2C offers are fully supported on our blackhat infrastructure." },
  { cat: "Platforms", q: "Do you only provide Meta accounts?", a: "No — we provide both Meta (Facebook & Instagram) and Google Ads agency accounts. Same premium quality, same lifetime replacement guarantee, same unlimited spend from day 1." },
  { cat: "Replacements", q: "How does balance transfer work?", a: "If an account goes down, we assist in transferring unspent funds to your replacement account." },
  { cat: "Activation", q: "Can I use my existing cards?", a: "Yes, you can attach your own payment methods. We also offer pre-warmed agency cards for an additional layer of stability." }
];

const categories = ["All", "Activation", "Support", "Scaling", "Replacements"];

export default function Faq() {
  const [activeCat, setActiveCat] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = activeCat === "All" ? faqs : faqs.filter(f => f.cat === activeCat);

  return (
    <PageWrapper>
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-24">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Details.</h1>
            <p className="text-xl text-muted-foreground">Everything you need to know before scaling.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-32 flex flex-col gap-2">
                {categories.map(c => (
                  <button
                    key={c}
                    onClick={() => { setActiveCat(c); setOpenIdx(null); }}
                    className={`text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${
                      activeCat === c ? "bg-white text-black" : "text-muted-foreground hover:bg-white/5"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Right List */}
            <div className="w-full lg:w-3/4 flex flex-col gap-4">
              {filtered.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-2">
                  <button 
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="w-full text-left py-6 flex justify-between items-center group"
                  >
                    <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${openIdx === i ? "text-primary" : "text-white group-hover:text-white/70"}`}>
                      {faq.q}
                    </span>
                    <span className="text-4xl font-light text-white/30 ml-4">{openIdx === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xl text-muted-foreground pb-8 max-w-2xl leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
