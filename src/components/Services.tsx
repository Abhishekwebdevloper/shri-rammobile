import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Battery, Plug, Volume2, Mic, 
  Camera, Droplets, Zap, Wrench, Search, X
} from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  { id: 1, icon: Smartphone, title: 'Screen Replacement', description: 'Cracked or broken screen? We provide high-quality screen replacements.' },
  { id: 2, icon: Battery, title: 'Battery Replacement', description: 'Fast draining battery? Get a new, long-lasting battery installed.' },
  { id: 3, icon: Plug, title: 'Charging Port Repair', description: 'Phone not charging? We can fix or replace damaged charging ports.' },
  { id: 4, icon: Volume2, title: 'Speaker Repair', description: 'Low or no sound? We repair earpiece and loudspeaker issues.' },
  { id: 5, icon: Mic, title: 'Microphone Repair', description: 'People can’t hear you? We replace faulty microphones quickly.' },
  { id: 6, icon: Camera, title: 'Camera Repair', description: 'Blurry or broken camera? We restore your phone’s photo capabilities.' },
  { id: 7, icon: Droplets, title: 'Water Damage Repair', description: 'Dropped in water? Bring it in immediately for liquid damage treatment.' },
  { id: 8, icon: Zap, title: 'Software & Performance', description: 'Phone lagging or stuck on logo? We handle software troubleshooting.' },
  { id: 9, icon: Wrench, title: 'General Mobile Repair', description: 'Any other hardware issues? Our experts can diagnose and fix them.' },
  { id: 10, icon: Search, title: 'Phone Troubleshooting', description: 'Not sure what’s wrong? Let us diagnose the issue for you.' },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 relative z-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Premium Repair Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Expert solutions for all your mobile device problems. Quality parts, careful handling, and professional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all text-zinc-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Enquire Now &rarr;
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[70] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-cyan-500/10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <selectedService.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedService.title}
              </h3>
              
              <p className="text-zinc-300 mb-8 leading-relaxed">
                {selectedService.description} At Shri Ram Mobiles, we use high-quality parts and expert techniques to ensure your device functions perfectly. Bring your device to our Deolali shop for a professional assessment.
              </p>

              <div className="flex gap-4">
                <a 
                  href="tel:+919595905650"
                  className="flex-1 py-3 rounded-xl bg-white text-black font-semibold text-center hover:bg-zinc-200 transition-colors"
                >
                  Call to Enquire
                </a>
                <a 
                  href={`https://wa.me/919595905650?text=${encodeURIComponent(`Hi, I want to enquire about ${selectedService.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#25D366]/20 text-[#25D366] font-semibold text-center hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/30"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
