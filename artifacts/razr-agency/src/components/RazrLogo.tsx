import { motion } from "framer-motion";

type Variant = "primary" | "horizontal" | "icon" | "dark" | "light" | "mono";

interface Props {
  variant?: Variant;
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * RAZR Marketing — premium brand mark
 * Custom RM monogram fused inside a chamfered shield.
 * - R: left vertical stem + angular top bowl + diagonal leg
 * - M: shares R's diagonal as its left peak, second peak + right stem
 * Metal gradient body, electric blue neon edges, silver inset ring.
 */
export default function RazrLogo({
  variant = "primary",
  size = 32,
  className = "",
  animated = true,
}: Props) {
  const isLight = variant === "light";
  const isDark = variant === "dark";
  const isMono = variant === "mono";

  const textPrimary = isLight ? "#0a0a0e" : "#ffffff";
  const textSecondary = isLight ? "rgba(10,10,14,0.55)" : "rgba(255,255,255,0.5)";
  const accent = isMono ? (isLight ? "#0a0a0e" : "#ffffff") : "#0066ff";
  const accentSoft = isMono ? "rgba(255,255,255,0.35)" : "#00a3ff";

  const id = (k: string) => `razr-${variant}-${k}`;

  const Mark = (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {animated && !isLight && !isMono && (
        <motion.div
          aria-hidden
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[26%] blur-lg"
          style={{ background: accent, opacity: 0.4 }}
        />
      )}
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="relative"
      >
        <defs>
          {/* Shield body — matte black to deep navy metal */}
          <linearGradient id={id("body")} x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor={isLight ? "#ffffff" : "#1c1f2e"} />
            <stop offset="40%" stopColor={isLight ? "#f5f5f7" : "#0a0d18"} />
            <stop offset="100%" stopColor={isLight ? "#e6e8ec" : "#000000"} />
          </linearGradient>
          {/* Neon edge — electric blue to deep blue */}
          <linearGradient id={id("neon")} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isMono ? accent : "#00d4ff"} />
            <stop offset="55%" stopColor={accent} />
            <stop offset="100%" stopColor={isMono ? accent : "#0040cc"} />
          </linearGradient>
          {/* Silver metallic highlight */}
          <linearGradient id={id("silver")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={isLight ? "0" : "0.5"} />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          {/* Light sweep gradient */}
          <linearGradient id={id("sweep")} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          {/* Outer glow */}
          <filter id={id("glow")} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Chamfered shield clip — octagonal feel */}
          <clipPath id={id("clip")}>
            <path d="M 12 2 L 52 2 L 62 12 L 62 52 L 52 62 L 12 62 L 2 52 L 2 12 Z" />
          </clipPath>
        </defs>

        {/* SHIELD BODY (chamfered octagon) */}
        <path
          d="M 12 2 L 52 2 L 62 12 L 62 52 L 52 62 L 12 62 L 2 52 L 2 12 Z"
          fill={`url(#${id("body")})`}
          stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)"}
          strokeWidth="0.75"
        />
        {/* Inset silver ring */}
        <path
          d="M 13 4 L 51 4 L 60 13 L 60 51 L 51 60 L 13 60 L 4 51 L 4 13 Z"
          fill="none"
          stroke={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)"}
          strokeWidth="0.5"
        />
        {/* Top metallic highlight */}
        <path
          d="M 12 2 L 52 2 L 62 12 L 62 28 L 2 28 L 2 12 Z"
          fill={`url(#${id("silver")})`}
        />

        {/* RM MONOGRAM — sharp angular cuts only */}
        <g clipPath={`url(#${id("clip")})`} filter={id("glow") ? `url(#${id("glow")})` : undefined}>
          {/* R — left vertical stem */}
          <path
            d="M 12 14 L 18 14 L 18 50 L 12 50 Z"
            fill={`url(#${id("neon")})`}
          />
          {/* R — top horizontal bar with sharp cut */}
          <path
            d="M 18 14 L 30 14 L 33 17 L 33 23 L 30 26 L 18 26 L 18 20 L 28 20 L 28 20 Z"
            fill={`url(#${id("neon")})`}
          />
          {/* R — diagonal leg shared with M's left peak */}
          <path
            d="M 24 26 L 30 26 L 36 38 L 30 38 Z"
            fill={`url(#${id("neon")})`}
          />

          {/* M — left descender (continuation of R's leg) */}
          <path
            d="M 30 38 L 36 38 L 36 50 L 30 50 Z"
            fill={`url(#${id("neon")})`}
          />
          {/* M — center valley peak */}
          <path
            d="M 36 38 L 42 38 L 39 44 L 33 44 Z"
            fill={`url(#${id("neon")})`}
            opacity="0.85"
          />
          {/* M — right peak */}
          <path
            d="M 42 38 L 48 26 L 52 26 L 52 50 L 46 50 L 46 38 Z"
            fill={`url(#${id("neon")})`}
          />
          {/* M — right vertical stem */}
          <path
            d="M 46 14 L 52 14 L 52 26 L 46 26 Z"
            fill={`url(#${id("neon")})`}
          />
        </g>

        {/* Signature notch — top right corner accent */}
        <path
          d="M 56 2 L 62 2 L 62 8"
          fill="none"
          stroke={accentSoft}
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.9"
        />
        {/* Accent dot — bottom left */}
        <circle cx="8" cy="56" r="1.6" fill={accent} />

        {/* Animated light sweep across face */}
        {animated && (
          <g clipPath={`url(#${id("clip")})`}>
            <motion.rect
              y="0"
              width="20"
              height="64"
              fill={`url(#${id("sweep")})`}
              transform="skewX(-20)"
              initial={{ x: -30 }}
              animate={{ x: [-30, 80] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut",
              }}
            />
          </g>
        )}
      </svg>
    </div>
  );

  if (variant === "icon") return <span className={className}>{Mark}</span>;

  // Type lockup — RAZR (bold tight) + MARKETING (wide-tracked underneath)
  const wordSize = size * 0.62;
  const subSize = size * 0.21;

  if (variant === "horizontal") {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        {Mark}
        <span
          className="font-black leading-none select-none"
          style={{
            fontSize: wordSize,
            color: textPrimary,
            letterSpacing: "-0.035em",
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
          }}
        >
          ADMIZ
          <span
            className="font-light"
            style={{
              color: textSecondary,
              marginLeft: size * 0.22,
              letterSpacing: "0.05em",
              fontStyle: "italic",
            }}
          >
            Agency
          </span>
        </span>
      </span>
    );
  }

  // Primary stacked lockup
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {Mark}
      <span className="flex flex-col leading-none select-none" style={{ gap: size * 0.08 }}>
        <span
          className="font-black"
          style={{
            fontSize: wordSize,
            color: textPrimary,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
          }}
        >
          ADMIZ
        </span>
        <span
          className="font-bold uppercase"
          style={{
            fontSize: subSize,
            color: textSecondary,
            letterSpacing: "0.32em",
            lineHeight: 1,
          }}
        >
          Agency
        </span>
      </span>
    </span>
  );
}
