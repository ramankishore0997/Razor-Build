import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { time: '00:00', spend: 1200 },
  { time: '04:00', spend: 1800 },
  { time: '08:00', spend: 4500 },
  { time: '12:00', spend: 9200 },
  { time: '16:00', spend: 15400 },
  { time: '20:00', spend: 22100 },
  { time: '24:00', spend: 28500 },
];

export default function CommandCenter({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-3xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">BM: Atlas Global</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-white/70">Live Status</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-xs text-muted-foreground mb-1">Daily Spend</div>
            <div className="text-2xl font-bold text-white">$28,500</div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-xs text-muted-foreground mb-1">ROAS</div>
            <div className="text-2xl font-bold text-primary">3.24x</div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-xs text-muted-foreground mb-1">Limit Tier</div>
            <div className="text-2xl font-bold text-white">No Limit</div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-48 w-full p-4 rounded-lg bg-white/[0.02] border border-white/5 relative">
          <div className="absolute top-4 left-4 z-10 text-xs font-semibold text-white/50 uppercase tracking-widest">Velocity</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(212, 100%, 50%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(212, 100%, 50%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="spend" 
                stroke="hsl(212, 100%, 50%)" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorSpend)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Campaign Rows */}
        <div className="space-y-2">
          {[
            { name: "CBO - Broad - US", status: "Scaling", color: "text-primary", bg: "bg-primary/20", border: "border-primary/30" },
            { name: "Retargeting - DPA - 7d", status: "Active", color: "text-green-400", bg: "bg-green-400/20", border: "border-green-400/30" },
            { name: "Advantage+ Shopping", status: "Learning", color: "text-yellow-400", bg: "bg-yellow-400/20", border: "border-yellow-400/30" }
          ].map((camp, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-md bg-white/[0.02] border border-white/[0.05]">
              <span className="text-sm text-white/80 font-medium">{camp.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${camp.bg} ${camp.border} ${camp.color}`}>
                {camp.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
