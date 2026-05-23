import { useState, type FormEvent } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Mail, ArrowUpRight, Activity, Clock, Users, Zap } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

const CONTACT_EMAIL = "scale@razr.marketing";
const TELEGRAM_HANDLE = "razrsupport";
const WHATSAPP_NUMBER = "917065339146";

export default function Contact() {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [goal, setGoal] = useState("");
  const [focus, setFocus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi RAZR team — new scaling request`,
      ``,
      `*Name / Company:* ${name || "—"}`,
      `*Telegram:* ${telegram || "—"}`,
      `*WhatsApp:* ${whatsapp || "—"}`,
      ``,
      `*Goal:*`,
      `${goal || "—"}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <PageWrapper>
      {/* Ambient glows */}
      <div className="absolute top-32 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <section className="pt-28 pb-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Command Center</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
              Let's <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">connect.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us your scaling goal. Our team gets back within minutes — not days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT: Floating widgets / status */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Live status widget */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-primary/30 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-6 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                  />
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      </span>
                      <span className="text-sm font-black uppercase tracking-widest text-white">Live · Online</span>
                    </div>
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        <Users className="w-3 h-3" /> Active
                      </div>
                      <div className="text-2xl font-black text-white tabular-nums">3</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        <Clock className="w-3 h-3" /> Avg
                      </div>
                      <div className="text-2xl font-black text-primary tabular-nums">12<span className="text-sm text-white/40 ml-0.5">min</span></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        <Zap className="w-3 h-3" /> Today
                      </div>
                      <div className="text-2xl font-black text-white tabular-nums">47</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Telegram */}
              <ContactChannel
                href={`https://t.me/${TELEGRAM_HANDLE}`}
                icon={<SiTelegram className="w-6 h-6 text-[#229ED9]" />}
                title="Telegram"
                value={`@${TELEGRAM_HANDLE}`}
                badge="Fastest"
                delay={0.15}
                accent="from-[#229ED9]/40 to-blue-500/20"
              />

              {/* WhatsApp */}
              <ContactChannel
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                icon={<SiWhatsapp className="w-6 h-6 text-[#25D366]" />}
                title="WhatsApp"
                value="+91 70653 39146"
                badge="Preferred"
                delay={0.2}
                accent="from-[#25D366]/40 to-emerald-500/20"
              />

              {/* Email */}
              <ContactChannel
                href={`mailto:${CONTACT_EMAIL}`}
                icon={<Mail className="w-6 h-6 text-primary" />}
                title="Email"
                value={CONTACT_EMAIL}
                delay={0.25}
                accent="from-primary/40 to-purple-500/20"
              />

              {/* Floating mini info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 mt-2 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-black uppercase tracking-wider text-white mb-1">Why message us?</div>
                    <div className="text-xs text-white/60 leading-relaxed">Talk to a real human about your vertical, budget, and goals — get a custom plan within minutes.</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Premium Glass Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,#0066ff_60deg,transparent_120deg,#7c3aed_240deg,transparent_300deg)] opacity-30"
                />
                <div className="relative rounded-3xl border border-white/15 bg-black/70 backdrop-blur-2xl p-8 md:p-10 overflow-hidden">
                  {/* moving border lights */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                  <motion.div
                    animate={{ x: ["200%", "-100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  />

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">New Request</h2>
                      <p className="text-sm text-white/50">We'll receive your request on WhatsApp instantly</p>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                      <SiWhatsapp className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">via WhatsApp</span>
                    </div>
                  </div>

                  <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <PremiumField label="Your name / company" focused={focus === "name"}>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocus("name")}
                        onBlur={() => setFocus(null)}
                        type="text"
                        placeholder="e.g. Atlas Commerce"
                        className="w-full bg-transparent outline-none text-lg font-medium text-white placeholder:text-white/20"
                      />
                    </PremiumField>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <PremiumField label="Telegram" focused={focus === "tg"}>
                        <input
                          value={telegram}
                          onChange={(e) => setTelegram(e.target.value)}
                          onFocus={() => setFocus("tg")}
                          onBlur={() => setFocus(null)}
                          type="text"
                          placeholder="@yourhandle"
                          className="w-full bg-transparent outline-none text-base font-medium text-white placeholder:text-white/20"
                        />
                      </PremiumField>
                      <PremiumField label="WhatsApp" focused={focus === "wa"}>
                        <input
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          onFocus={() => setFocus("wa")}
                          onBlur={() => setFocus(null)}
                          type="text"
                          placeholder="+91 ..."
                          className="w-full bg-transparent outline-none text-base font-medium text-white placeholder:text-white/20"
                        />
                      </PremiumField>
                    </div>

                    <PremiumField label="Your goal" focused={focus === "goal"}>
                      <textarea
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        onFocus={() => setFocus("goal")}
                        onBlur={() => setFocus(null)}
                        rows={4}
                        placeholder="Niche, current daily spend, what you need..."
                        className="w-full bg-transparent outline-none text-base font-medium text-white placeholder:text-white/20 resize-none"
                      />
                    </PremiumField>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="text-xs text-white/40 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        Encrypted · We never share your data
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-black font-black text-sm uppercase tracking-widest overflow-hidden shadow-[0_10px_40px_rgba(37,211,102,0.4)]"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-[#25D366] to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <SiWhatsapp className="relative w-5 h-5" />
                        <span className="relative">Send on WhatsApp</span>
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function PremiumField({ label, focused, children }: { label: string; focused: boolean; children: React.ReactNode }) {
  return (
    <div className="relative">
      <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-2 transition-colors ${focused ? "text-primary" : "text-white/40"}`}>
        {label}
      </label>
      <div className={`relative rounded-xl border bg-white/[0.02] px-5 py-3.5 transition-all ${focused ? "border-primary/50 bg-primary/[0.04] shadow-[0_0_30px_rgba(0,102,255,0.15)]" : "border-white/10"}`}>
        {children}
      </div>
    </div>
  );
}

function ContactChannel({
  href,
  icon,
  title,
  value,
  badge,
  delay,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  badge?: string;
  delay: number;
  accent: string;
}) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="relative group block"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${accent} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
      <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 flex items-center justify-between gap-4 group-hover:border-white/20 transition-colors overflow-hidden">
        <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${accent} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black uppercase tracking-tight text-white">{title}</h3>
              {badge && (
                <span className="text-[9px] font-black uppercase tracking-wider text-primary px-1.5 py-0.5 rounded border border-primary/30 bg-primary/10">{badge}</span>
              )}
            </div>
            <div className="text-xs text-white/50">{value}</div>
          </div>
        </div>
        <ArrowUpRight className="relative w-4 h-4 text-white/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
      </div>
    </motion.a>
  );
}
