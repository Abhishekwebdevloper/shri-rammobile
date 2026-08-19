import { motion } from 'motion/react';
import { ShieldCheck, Target, MapPin, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Experienced Service',
    description: 'Professional mobile repair assistance you can rely on.'
  },
  {
    icon: Target,
    title: 'Quality-Focused Repairs',
    description: 'Careful diagnosis and repair with high-quality components.'
  },
  {
    icon: ThumbsUp,
    title: 'Trusted Local Shop',
    description: 'Proudly serving customers in the Deolali community.'
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easily accessible near Mahatma Gandhi Statue.'
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            >
              Why Choose Us
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              The Standard for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Premium Repair
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8"
            >
              At Shri Ram Mobiles, we don't just fix phones; we restore your connection to the world. Our commitment to quality and customer satisfaction sets us apart in Deolali.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-8"
            >
              <div>
                <div className="text-4xl font-bold text-white mb-1">5.0</div>
                <div className="flex gap-1 text-yellow-500 mb-2">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <div className="text-sm text-zinc-500">Google Rating</div>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="p-6 rounded-3xl bg-zinc-900 border border-white/5 hover:border-cyan-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors text-zinc-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
