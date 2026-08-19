import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Phone } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col gap-8 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">Premium Service Center in Deolali</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Your Phone.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Our Expertise.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0"
          >
            Professional mobile repair and trusted service. We bring your devices back to life with care and precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              Book a Repair
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:0123456789"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative hidden lg:flex justify-center items-center perspective-1000"
        >
          {/* Animated 3D Phone Mockup using CSS */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateY: [ -15, -10, -15 ],
              rotateX: [ 5, 10, 5 ]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
            className="relative w-[300px] h-[600px] rounded-[3rem] p-4 bg-zinc-900 border-[8px] border-zinc-800 shadow-2xl shadow-cyan-500/20 transform-style-3d"
          >
            {/* Camera cutout */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center">
              <div className="w-32 h-6 bg-zinc-950 rounded-b-3xl"></div>
            </div>
            
            {/* Screen */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-950 flex flex-col items-center justify-center text-center p-6 border border-white/5">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/10" />
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="z-10"
               >
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <span className="text-2xl font-bold text-white">S</span>
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-2">Shri Ram Mobiles</h2>
                 <p className="text-sm text-zinc-400">System diagnostic in progress...</p>
                 
                 <div className="w-full h-2 bg-white/10 rounded-full mt-8 overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                      className="h-full bg-cyan-400 rounded-full"
                    />
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
