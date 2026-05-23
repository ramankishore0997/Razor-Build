import PageWrapper from "@/components/layout/PageWrapper";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Zap, Shield, Clock, Building2, Headphones,
  TrendingUp, ChevronLeft, ChevronRight, ChevronDown
} from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="text-4xl md:text-5xl font-black text-white">{count}{suffix}</div>;
}

const whyFeatures = [
  { icon: Shield, title: "Lower Restriction Risk", desc: "Established trust signals that minimize account bans and policy flags." },
  { icon: TrendingUp, title: "High Spending Capacity", desc: "Agency-tier accounts with significantly higher daily and lifetime limits." },
  { icon: Zap, title: "Fast Activation", desc: "Get up and running in hours — not days — with our streamlined process." },
  { icon: Clock, title: "Long-Term Support", desc: "Ongoing assistance from our team beyond the initial account setup." },
  { icon: Building2, title: "Business-Friendly Setup", desc: "Proper BM structure, billing, and compliant architecture from day one." },
  { icon: Headphones, title: "Agency Expertise", desc: "Our team has run campaigns across dozens of verticals at scale." },
];

const testimonials = [
  {
    quote: "We went from hitting $500/day limits to running $12k/day budgets within the first week. RAZR changed how we approach scaling entirely.",
    name: "Marcus T.",
    role: "Media Buyer, 7-Figure eCom Brand",
  },
  {
    quote: "The lifetime replacement policy alone is worth it. We've had zero downtime across 8 months of aggressive campaign scaling.",
    name: "Priya L.",
    role: "Performance Marketing Lead",
  },
  {
    quote: "Setup was done same day. Their team walked us through everything and has been available every time we needed support. Best investment this year.",
    name: "Jordan K.",
    role: "Founder, Lead Gen Agency",
  },
  {
    quote: "Tried three other providers before RAZR. None of them came close on either account quality or the support experience. Wish I started here.",
    name: "Alex M.",
    role: "Media Buyer, Finance Vertical",
  },
];

const faqItems = [
  { q: "How fast can I get activated?", a: "Setup Access activates in 24–48 hours. Full Access clients typically get same-day activation with our team managing the entire process." },
  { q: "What if my account gets restricted?", a: "Setup Access includes a 30-day replacement. Full Access comes with a lifetime replacement guarantee — as long as you're following Meta's policies." },
  { q: "What niches do you support?", a: "E-commerce, lead gen, SaaS, health, finance, real estate, education, travel, and more. Contact us if you're unsure about your niche." },
  { q: "Do you offer team access?", a: "Yes. Full Access includes team access for up to 3 seats with proper role-based permissions inside Business Manager." },
];

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 min-h-[220px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="text-4xl text-primary/30 font-serif mb-4 leading-none">"</div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {testimonials[current].name[0]}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[current].name}</div>
                <div className="text-muted-foreground text-sm">{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
          data-testid="btn-prev-testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-border"}`}
              data-testid={`btn-testimonial-dot-${i}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
          data-testid="btn-next-testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === i ? "border-primary/40 bg-card/80" : "border-border bg-card/40"}`}
          data-testid={`home-faq-${i}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            data-testid={`home-faq-toggle-${i}`}
          >
            <span className={`font-medium text-sm transition-colors ${openIndex === i ? "text-primary" : "text-white"}`}>{item.q}</span>
            <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={16} className={openIndex === i ? "text-primary" : "text-muted-foreground"} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/12 via-background to-background" />
        <ParticleBackground />

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-8"
            >
              <Zap size={14} />
              <span>Meta Agency Ad Accounts Provider</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-none">
              Premium Meta
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Agency Ad Accounts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Scale campaigns with agency-level advertising solutions. Higher limits, lower restriction risk, and real support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_25px_rgba(0,102,255,0.45)] hover:shadow-[0_0_40px_rgba(0,102,255,0.65)] transition-all duration-200"
                asChild
                data-testid="btn-get-started"
              >
                <Link href="/plans">
                  Get Started <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base h-14 px-8 border-border hover:border-primary/50 hover:bg-primary/8 transition-all duration-200"
                asChild
                data-testid="btn-view-account"
              >
                <Link href="/contact">View Account First</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-muted-foreground/50" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-border bg-card/20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Clients", value: 500, suffix: "+" },
              { label: "Ad Spend Managed", value: 10, suffix: "M+" },
              { label: "Satisfaction Rate", value: 98, suffix: "%" },
              { label: "Avg Response (min)", value: 30, suffix: "" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
                data-testid={`home-stat-${i}`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RAZR */}
      <section className="py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                RAZR
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide the infrastructure that serious advertisers need to run at full capacity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/35 hover:shadow-[0_0_25px_rgba(0,102,255,0.1)] hover:bg-card/70 transition-all duration-300"
                data-testid={`why-card-${i}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <f.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (abbreviated) */}
      <section className="py-32 bg-card/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Works
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From first message to live campaigns — in 5 steps.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0">
              {[
                { n: "01", t: "Contact Team", d: "Reach out via Telegram or WhatsApp." },
                { n: "02", t: "View Account First", d: "See the account before committing." },
                { n: "03", t: "Activation", d: "We handle the full setup process." },
                { n: "04", t: "Campaign Launch", d: "Go live with your first campaigns." },
                { n: "05", t: "Scaling Support", d: "We scale with you, long-term." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center relative px-4"
                  data-testid={`home-step-${i}`}
                >
                  {i < 4 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm mb-4 relative z-10 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                    {step.n}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{step.t}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
              data-testid="link-how-it-works"
            >
              See the full process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Say
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              500+ advertisers have scaled their campaigns with RAZR infrastructure.
            </p>
          </motion.div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-sm p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-card/30 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Scale Without Limits?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Join 500+ advertisers who stopped fighting their ad accounts and started scaling.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="h-14 px-10 bg-primary text-white shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_50px_rgba(0,102,255,0.7)] hover:bg-primary/90 transition-all duration-200 text-base"
                  asChild
                  data-testid="btn-cta-get-started"
                >
                  <Link href="/plans">Get Started Now <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 border-border hover:border-primary/40 text-base"
                  asChild
                  data-testid="btn-cta-contact"
                >
                  <Link href="/contact">Talk to the Team</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Common{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Questions
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to what most people ask before getting started.
            </p>
          </motion.div>
          <FaqAccordion />
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
              data-testid="link-full-faq"
            >
              See all questions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
