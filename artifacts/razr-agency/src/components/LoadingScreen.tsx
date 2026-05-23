import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          data-testid="loading-screen"
        >
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <div className="text-5xl font-black tracking-tighter text-white">
              RAZR<span className="text-primary">.</span>
            </div>

            {/* Animated bar */}
            <div className="w-48 h-0.5 rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground text-sm tracking-widest uppercase"
            >
              Loading
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
