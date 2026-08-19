import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPath = useTransform(scrollYProgress, [0.3, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={containerRef} className="py-24 bg-zinc-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            The Transformation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Watch as we bring damaged devices back to their pristine condition.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden aspect-video bg-zinc-950 border border-white/10 shadow-2xl">
          {/* Base Layer: Broken Phone Representation */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full max-w-[300px] aspect-[1/2] rounded-[3rem] border-8 border-zinc-800 bg-zinc-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
              {/* Simulated cracks */}
              <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10 rotate-45 transform origin-left" />
              <div className="absolute top-1/3 right-0 w-full h-[1px] bg-white/10 -rotate-12 transform origin-right" />
              <div className="absolute bottom-1/3 left-1/4 w-[1px] h-full bg-white/10 rotate-12 transform origin-bottom" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 font-mono text-sm">
                <span>[ SCREEN DAMAGED ]</span>
                <span className="mt-2 text-xs opacity-50">Requires Replacement</span>
              </div>
            </div>
          </div>

          {/* Reveal Layer: Repaired Phone Representation */}
          <motion.div 
            style={{ clipPath }}
            className="absolute inset-0 bg-zinc-950 flex items-center justify-center p-8 border-l border-cyan-500 shadow-[-20px_0_50px_rgba(6,182,212,0.3)] z-10"
          >
            <div className="relative w-full max-w-[300px] aspect-[1/2] rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)]">
               <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-24 h-5 bg-zinc-950 rounded-b-2xl"></div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-xl mb-4">
                     <span className="text-3xl font-bold">S</span>
                  </div>
                  <h3 className="font-bold tracking-wider">RESTORED</h3>
                  <div className="mt-8 px-4 py-1 rounded-full bg-black/30 backdrop-blur text-xs">
                    100% Functionality
                  </div>
               </div>
            </div>
            
            {/* Reveal Line Handle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center">
              <div className="w-1 h-4 bg-white rounded-full" />
            </div>
          </motion.div>
          
          <div className="absolute bottom-6 inset-x-0 text-center z-20 pointer-events-none">
             <p className="text-sm text-zinc-400 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full inline-block">
               Scroll to reveal transformation
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
