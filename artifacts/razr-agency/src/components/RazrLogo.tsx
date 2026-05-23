import { motion } from "framer-motion";

type Variant = "full" | "icon" | "white" | "dark";

interface Props {
  variant?: Variant;
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function RazrLogo({ variant = "full", size = 32, className = "", animated = true }: Props) {
  const isDark = variant === "dark";
  const isWhite = variant === "white";
  const textColor = isDark ? "#0a0a0a" : "#ffffff";
  const accentColor = isWhite ? "#ffffff" : "#0066ff";

  const Icon = (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {animated && (
        <motion.div
          aria-hidden
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[28%] blur-md"
          style={{ background: accentColor, opacity: 0.35 }}
        />
      )}
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="relative drop-shadow-[0_2px_8px_rgba(0,102,255,0.4)]"
      >
        <defs>
          {/* Metal gradient body */}
          <linearGradient id="razr-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1f" />
            <stop offset="48%" stopColor="#0a0a0e" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          {/* Neon blue accent */}
          <linearGradient id="razr-neon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00a3ff" />
            <stop offset="50%" stopColor={accentColor} />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          {/* Light highlight along top edge */}
          <linearGradient id="razr-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          {/* Neon glow filter */}
          <filter id="razr-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rounded square base */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="16"
          fill={isWhite ? "#ffffff" : "url(#razr-metal)"}
          stroke={isWhite ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"}
          strokeWidth="1"
        />
        {/* Top highlight */}
        {!isWhite && (
          <rect x="2" y="2" width="60" height="30" rx="16" fill="url(#razr-highlight)" />
        )}

        {/* Futuristic R monogram - sharp cut geometry */}
        <g filter="url(#razr-glow)">
          {/* Vertical stem */}
          <path
            d="M 16 14 L 24 14 L 24 50 L 16 50 Z"
            fill={isWhite ? "#0a0a0e" : "url(#razr-neon)"}
          />
          {/* Top loop (sharp cut, no curves) */}
          <path
            d="M 24 14 L 42 14 L 50 22 L 50 28 L 42 34 L 24 34 L 24 26 L 40 26 L 42 24 L 42 22 L 40 22 L 24 22 Z"
            fill={isWhite ? "#0a0a0e" : "url(#razr-neon)"}
          />
          {/* Diagonal leg with sharp angle cut */}
          <path
            d="M 34 34 L 42 34 L 50 50 L 42 50 Z"
            fill={isWhite ? "#0a0a0e" : "url(#razr-neon)"}
          />
        </g>

        {/* Neon accent dot bottom-right (signature) */}
        <circle
          cx="52"
          cy="52"
          r="2.4"
          fill={accentColor}
          filter="url(#razr-glow)"
        />
        {animated && (
          <motion.circle
            cx="52"
            cy="52"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            initial={{ r: 2.4, opacity: 0.8 }}
            animate={{ r: [2.4, 6, 2.4], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </svg>
    </div>
  );

  if (variant === "icon") return <span className={className}>{Icon}</span>;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {Icon}
      <span
        className="font-black tracking-[-0.04em] leading-none select-none"
        style={{ fontSize: size * 0.78, color: textColor, fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
      >
        RAZR
        <span style={{ color: accentColor }}>.</span>
      </span>
    </span>
  );
}
