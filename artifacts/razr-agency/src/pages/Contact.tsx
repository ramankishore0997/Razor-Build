import { useState, type FormEvent } from "react";
import PageWrapper from "@/components/layout/PageWrapper";

const CONTACT_EMAIL = "scale@razr.agency";
const TELEGRAM_HANDLE = "razragency";
const WHATSAPP_NUMBER = "15550192831";

export default function Contact() {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [goal, setGoal] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New scaling request — ${name || "Anonymous"}`);
    const body = encodeURIComponent(
      `Name / Company: ${name}\nTelegram: ${telegram}\nWhatsApp: ${whatsapp}\n\nGoal:\n${goal}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <PageWrapper>
      <section className="pt-40 pb-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left 60% - Editorial Form */}
            <div className="w-full lg:w-[60%]">
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">Connect.</h1>
              
              <form className="flex flex-col gap-10" onSubmit={onSubmit}>
                <div className="relative">
                  <label className="block text-2xl font-bold uppercase tracking-tight mb-4 text-white/50">Who are you?</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name or Company" className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-3xl font-medium outline-none focus:border-primary transition-colors placeholder:text-white/10" />
                </div>

                <div className="relative">
                  <label className="block text-2xl font-bold uppercase tracking-tight mb-4 text-white/50">Contact info</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input value={telegram} onChange={(e) => setTelegram(e.target.value)} type="text" placeholder="Telegram @" className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-8 py-5 text-lg outline-none focus:border-primary focus:bg-white/[0.05] transition-all placeholder:text-white/20" />
                    <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} type="text" placeholder="WhatsApp #" className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-8 py-5 text-lg outline-none focus:border-primary focus:bg-white/[0.05] transition-all placeholder:text-white/20" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-2xl font-bold uppercase tracking-tight mb-4 text-white/50">The Goal</label>
                  <textarea value={goal} onChange={(e) => setGoal(e.target.value)} rows={4} placeholder="Niche, current spend, what you need..." className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-lg outline-none focus:border-primary focus:bg-white/[0.05] transition-all placeholder:text-white/20 resize-none"></textarea>
                </div>

                <button type="submit" className="self-start px-12 py-6 bg-primary text-black font-black uppercase tracking-widest text-xl hover:bg-white transition-colors rotate-1 hover:rotate-0 hover:scale-105 duration-300">
                  Send Request
                </button>
              </form>
            </div>

            {/* Right 40% - Stacked Channels */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6 pt-4 lg:pt-32">
              
              {/* Status Widget */}
              <div className="p-8 border border-white/10 bg-white/[0.02] mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </div>
                  <span className="text-xl font-bold uppercase tracking-widest">Online</span>
                </div>
                <p className="text-muted-foreground">3 Support Engineers Active</p>
                <p className="text-xs text-white/40 mt-4 uppercase tracking-widest">Avg Response: 12 Mins</p>
              </div>

              <a href={`https://t.me/${TELEGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer" className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Telegram</h3>
                  <p className="text-muted-foreground">@{TELEGRAM_HANDLE}</p>
                </div>
                <div className="text-4xl text-white/10 group-hover:text-primary group-hover:translate-x-2 transition-all">→</div>
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
                  <p className="text-muted-foreground">+1 (555) 019-2831</p>
                </div>
                <div className="text-4xl text-white/10 group-hover:text-primary group-hover:translate-x-2 transition-all">→</div>
              </a>

              <a href={`mailto:${CONTACT_EMAIL}`} className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground">{CONTACT_EMAIL}</p>
                </div>
                <div className="text-4xl text-white/10 group-hover:text-primary group-hover:translate-x-2 transition-all">→</div>
              </a>

            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
