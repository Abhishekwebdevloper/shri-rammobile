import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Bring Your Phone",
    description: "Visit our shop in Deolali Gaon with your damaged device."
  },
  {
    number: "02",
    title: "Diagnosis",
    description: "We carefully inspect and diagnose the exact problem."
  },
  {
    number: "03",
    title: "Repair",
    description: "Expert repair using professional tools and quality parts."
  },
  {
    number: "04",
    title: "Get Your Phone Back",
    description: "Your device is restored and ready for use."
  }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            A simple, transparent process to get your device back in working condition.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 border-4 border-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:shadow-[0_0_0_1px_rgba(6,182,212,1)] group-hover:shadow-cyan-500/50 transition-all duration-300 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
