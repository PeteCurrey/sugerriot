'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  "Accessing global sweetness database...",
  "Quantizing nostalgia parameters...",
  "Mapping 1980s flavor clusters...",
  "Synthesizing high-sugar profiles...",
  "Cross-referencing British candy icons...",
  "Analyzing regional preferences...",
  "Recalibrating for premium standards...",
  "Matching textures to personality...",
];

export default function AnalyzingState() {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLog(prev => (prev + 1) % LOGS.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
      {/* Scanning Bar Animation */}
      <div className="relative w-64 h-64 border-2 border-border/30 rounded-full flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-off-white/20" />
        
        {/* Revolving Line */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-4 border-magenta opacity-40 z-10 origin-center"
        />

        {/* Pulse Circle */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-40 h-40 bg-magenta rounded-full blur-2xl"
        />

        <div className="relative z-20 flex flex-col items-center">
          <span className="text-mono-xs font-mono font-bold text-text-primary tracking-widest animate-pulse">ANALYZING</span>
          <span className="text-mono-xs font-mono text-magenta">DISCOVERY_ID</span>
        </div>
      </div>

      {/* Log Feed */}
      <div className="h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentLog}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            className="text-mono-xs font-mono text-text-muted uppercase tracking-[0.2em]"
          >
            {LOGS[currentLog]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Detailed Textual Scan Lines */}
      <div className="mt-8 flex flex-col items-center gap-1 opacity-20">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex gap-2 text-mono-xs font-mono">
            {Array.from({ length: 6 }).map((_, j) => (
              <span key={j} className={i + j % 2 === 0 ? "text-magenta" : "text-text-primary"}>
                {Math.random().toString(36).substring(2, 5).toUpperCase()}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
