import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import {
  TrendingUp, Shield, Zap, Building2, Headphones, BarChart3,
  Layers, Users, Clock, RefreshCw, ArrowLeftRight, Star
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High Spending Capacity",
    description: "Access agency-tier ad accounts with significantly higher daily and lifetime spending limits — scale without hitting walls.",
  },
  {
    icon: Shield,
    title: "Lower Restriction Risk",
    description: "Agency accounts carry established trust signals that dramatically reduce the chance of account restrictions or bans.",
  },
  {
    icon: Zap,
    title: "Fast Activation",
    description: "Get your account activated and running within hours, not days. Our streamlined onboarding gets you live fast.",
  },
  {
    icon: Building2,
    title: "Business Friendly Setup",
    description: "Clean business manager structures, proper billing setup, and compliant account architecture from day one.",
  },
  {
    icon: Headphones,
    title: "Agency Support",
    description: "Direct line to our agency specialists who understand Meta advertising at a deep operational level.",
  },
  {
    icon: BarChart3,
    title: "Better Scaling",
    description: "Purpose-built accounts for scaling — designed to handle aggressive budget increases without performance degradation.",
  },
  {
    icon: Layers,
    title: "Multiple Niches",
    description: "Support for a wide range of verticals including e-commerce, lead gen, SaaS, health, finance, and more.",
  },
  {
    icon: Users,
    title: "Team Access",
    description: "Add your team members, media buyers, and collaborators with proper role-based access control.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    description: "Ongoing support beyond initial activation. We're with you for the entire lifecycle of your campaigns.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Replacement",
    description: "If your account ever gets restricted through no fault of your own, we replace it at no additional cost.",
  },
  {
    icon: ArrowLeftRight,
    title: "Balance Transfer Support",
    description: "Seamlessly transfer existing ad balances into your new account. No money left stranded.",
  },
  {
    icon: Star,
    title: "Priority Assistance",
    description: "Jump the queue with priority support tickets, faster response times, and dedicated account management.",
  },
];

export default function Features() {
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
              <span>Everything You Need</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Performance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature we offer is engineered to give your campaigns the
              infrastructure advantage they need to dominate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm cursor-default overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.12)] hover:bg-card/80"
                data-testid={`feature-card-${i}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.2)] transition-all duration-300">
                    <feature.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground text-lg mb-6">
              Ready to get the infrastructure your campaigns deserve?
            </p>
            <a
              href="/plans"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.5)]"
              data-testid="link-view-plans"
            >
              View Plans
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
