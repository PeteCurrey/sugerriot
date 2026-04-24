'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface WorldBackgroundProps {
  activeWorld: string | null;
}

export default function WorldBackground({ activeWorld }: WorldBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-white overflow-hidden">
      <AnimatePresence>
        {activeWorld && (
          <motion.div
            key={activeWorld}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }} // Increased slightly for better visibility
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-[10vw]"
          >
            {activeWorld === 'british' && (
              <svg className="w-full h-full" viewBox="0 0 60 30" preserveAspectRatio="none">
                 <rect width="60" height="30" fill="#00247D" />
                 <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                 <path d="M0,0 L60,30 M60,0 L0,30" stroke="#CF142B" strokeWidth="2" />
                 <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                 <path d="M30,0 v30 M0,15 h60" stroke="#CF142B" strokeWidth="6" />
              </svg>
            )}

            {activeWorld === 'american' && (
              <div className="w-full h-full flex flex-col relative">
                {/* 13 Stripes */}
                <div className="flex-1 flex flex-col">
                  {[...Array(13)].map((_, i) => (
                    <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-[#B22234]' : 'bg-transparent'}`} />
                  ))}
                </div>
                {/* Blue Canton */}
                <div className="absolute top-0 left-0 w-[45%] h-[53.85%] bg-[#3C3B6E] flex flex-wrap p-12 gap-8 content-start overflow-hidden">
                   {[...Array(50)].map((_, i) => (
                     <div key={i} className="w-6 h-6 bg-white rotate-45 shrink-0" />
                   ))}
                </div>
              </div>
            )}

            {activeWorld === 'japanese' && (
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="w-[70vh] h-[70vh] rounded-full bg-[#BC002D] shadow-[0_0_100px_rgba(188,0,45,0.15)]" />
              </div>
            )}

            {activeWorld === 'world' && (
               <div className="w-full h-full relative opacity-60">
                 {/* Longitudinal/Latitudinal Grid */}
                 <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                    {[...Array(72)].map((_, i) => (
                      <div key={i} className="border-[0.5px] border-[#2ECC71]/30" />
                    ))}
                 </div>
                 {/* Rotating Globe Outlines */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90vh] h-[90vh] rounded-full border-[2px] border-[#2ECC71]/20 animate-spin-slow" />
                    <div className="absolute w-[70vh] h-[70vh] rounded-full border-[1px] border-[#2ECC71]/15 animate-spin-slow-reverse" />
                    <div className="absolute w-[50vh] h-[50vh] rounded-full border-[1px] border-[#2ECC71]/10 animate-spin-slow" />
                 </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
