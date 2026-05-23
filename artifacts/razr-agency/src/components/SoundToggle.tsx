import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("razr-sound");
    if (stored === "on") setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (!ctxRef.current) {
      try {
        const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        ctxRef.current = new AC();
      } catch {
        return;
      }
    }

    const playClick = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(820, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.08);
      g.gain.setValueAtTime(0.06, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.1);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [role='button'], input, label")) {
        playClick();
      }
    };

    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [enabled]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem("razr-sound", next ? "on" : "off");
    if (next && ctxRef.current?.state === "suspended") {
      ctxRef.current.resume();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full border border-white/15 bg-black/50 backdrop-blur-xl items-center justify-center text-white/70 hover:text-white hover:border-primary/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] hidden md:flex"
      title={enabled ? "Sound on — click to mute" : "Sound off — click to enable"}
    >
      {enabled ? (
        <Volume2 className="w-4 h-4 text-primary" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
      {enabled && (
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,102,255,1)]" />
      )}
    </motion.button>
  );
}
