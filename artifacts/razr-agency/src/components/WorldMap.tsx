import { motion } from "framer-motion";

export default function WorldMap() {
  return (
    <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto opacity-40 mix-blend-screen pointer-events-none">
      <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.2)" />
        </pattern>
        
        {/* Simplified abstract shapes representing continents filled with dots */}
        <path d="M150 100 Q 250 50 300 150 T 200 250 T 150 100" fill="url(#dots)" />
        <path d="M250 200 Q 350 250 300 350 T 200 450 T 250 200" fill="url(#dots)" />
        <path d="M450 80 Q 600 50 650 150 T 550 250 T 450 80" fill="url(#dots)" />
        <path d="M500 220 Q 600 200 650 300 T 550 400 T 500 220" fill="url(#dots)" />
        <path d="M700 100 Q 850 50 900 200 T 800 300 T 700 100" fill="url(#dots)" />
        <path d="M800 250 Q 900 250 950 350 T 850 450 T 800 250" fill="url(#dots)" />
      </svg>
      
      {/* Pulsing Nodes */}
      {[
        { top: '25%', left: '25%' }, // NA
        { top: '65%', left: '30%' }, // SA
        { top: '30%', left: '55%' }, // EU
        { top: '60%', left: '58%' }, // AF
        { top: '35%', left: '80%' }, // AS
        { top: '75%', left: '85%' }, // OC
      ].map((pos, i) => (
        <div 
          key={i} 
          className="absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-primary"
          style={{ top: pos.top, left: pos.left }}
        >
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
        </div>
      ))}
    </div>
  );
}
