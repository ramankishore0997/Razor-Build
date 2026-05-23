import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Zap, MessageCircle, Phone, Headphones, CheckCircle } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    telegram: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Start the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your campaign goals. We'll respond within 30
              minutes with everything you need to make a decision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                  data-testid="success-message"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,102,255,0.2)]">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Received
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    We'll review your information and reach out via Telegram or
                    email within 30 minutes. Get ready to scale.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" data-testid="contact-form">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Send a Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2" htmlFor="telegram">
                        Telegram Username
                      </label>
                      <input
                        id="telegram"
                        name="telegram"
                        type="text"
                        value={form.telegram}
                        onChange={handleChange}
                        placeholder="@yourusername"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                        data-testid="input-telegram"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2" htmlFor="whatsapp">
                        WhatsApp Number
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="text"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                        data-testid="input-whatsapp"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your business, niche, current ad spend, and what you're looking to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.55)]"
                    data-testid="button-submit"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sticky contact panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6">
                  Reach Us Directly
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://t.me/razragency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                    data-testid="link-telegram"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 border border-[#229ED9]/30 flex items-center justify-center group-hover:bg-[#229ED9]/20 transition-all duration-200">
                      <SiTelegram className="text-[#229ED9]" size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Telegram</div>
                      <div className="text-muted-foreground text-xs">@razragency</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                    data-testid="link-whatsapp"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all duration-200">
                      <SiWhatsapp className="text-[#25D366]" size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">WhatsApp</div>
                      <div className="text-muted-foreground text-xs">Message us anytime</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-primary/5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Headphones className="text-primary" size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Live Support</div>
                      <div className="text-muted-foreground text-xs">Available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">
                  Response Time
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                    <span className="text-muted-foreground text-sm">
                      Telegram: Under 30 minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                    <span className="text-muted-foreground text-sm">
                      WhatsApp: Under 1 hour
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
                    <span className="text-muted-foreground text-sm">
                      Email form: Within 4 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-primary" size={20} />
                  <span className="text-white font-semibold">First time?</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Start by telling us your niche, monthly budget, and what
                  plan you're considering. We'll take it from there.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
