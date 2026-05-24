import { motion } from "framer-motion";
import { ShieldCheck, FileText, Headphones, IndianRupee } from "lucide-react";

const PAY_METHODS = ["UPI", "Razorpay", "Bank Transfer", "USDT / Crypto"];

export default function IndianTrustStrip() {
  return (
    <section className="relative z-10 py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center p-5 md:p-7">
            {/* LEFT — India badge */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.5)]">
                <div className="absolute inset-0 flex flex-col">
                  <div className="flex-1 bg-[#ff9933]" />
                  <div className="flex-1 bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-[#000080]" />
                  </div>
                  <div className="flex-1 bg-[#138808]" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1">Made for India</div>
                <div className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">
                  Trusted by <span className="text-primary">500+</span> Indian Advertisers
                </div>
                <div className="text-xs text-white/50 mt-0.5">Local support · INR billing · GST invoices</div>
              </div>
            </div>

            {/* RIGHT — Payment + trust strip */}
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-wrap gap-2 md:justify-end">
                {PAY_METHODS.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/75"
                  >
                    <IndianRupee className="w-3 h-3 text-emerald-400" />
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:gap-5 md:justify-end text-[10px] md:text-xs text-white/55 font-bold uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-emerald-400" /> GST Invoice
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Secure Payment
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Headphones className="w-3 h-3 text-emerald-400" /> Hindi & English Support
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
