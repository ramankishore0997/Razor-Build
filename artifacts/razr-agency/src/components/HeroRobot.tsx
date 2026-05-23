import { motion } from "framer-motion";
import RobotMascot from "@/components/RobotMascot";
import { Sparkles, Cpu, Zap } from "lucide-react";

export default function HeroRobot() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      {/* orbiting rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-primary/15"
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,102,255,1)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-purple-500/15"
      >
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1)]" />
      </motion.div>

      {/* floating skill badges around robot */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 -left-4 md:left-0 pointer-events-auto"
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-wider text-white">AI Assistant</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 -right-4 md:right-0 pointer-events-auto"
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <Cpu className="w-3 h-3 text-purple-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-white">Live Monitor</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -right-8 md:right-4 pointer-events-auto"
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <Zap className="w-3 h-3 text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-white">24/7 Active</span>
        </div>
      </motion.div>

      {/* robot */}
      <div className="relative pointer-events-auto">
        <RobotMascot />
      </div>
    </div>
  );
}
