import { motion } from "framer-motion";

const fakeLogos = [
  "ATLAS COMMERCE", "PRISM LABS", "VOLTAGE", "NORTHWIND",
  "NEXUS MEDIA", "HORIZON CO", "EQUINOX", "VENTURE X",
  "NOVA DIGITAL", "AURA", "STELLAR", "ELEVATE"
];

export default function MarqueeLogos() {
  return (
    <div className="w-full overflow-hidden bg-background py-10 border-y border-white/5 relative flex items-center">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-10 md:gap-8 items-center pl-16 md:pl-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...fakeLogos, ...fakeLogos].map((logo, i) => (
          <span 
            key={i} 
            className={`text-xl md:text-2xl tracking-tighter uppercase text-white/30 transition-colors hover:text-white/80 cursor-default select-none ${
              i % 3 === 0 ? "font-black" : i % 2 === 0 ? "font-light" : "font-semibold"
            }`}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
