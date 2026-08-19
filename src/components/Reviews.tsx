import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Rahul Patil",
      text: "Excellent service! They fixed my broken iPhone screen in just 2 hours. Very professional and reasonably priced.",
      initials: "RP"
    },
    {
      name: "Sneha Deshmukh",
      text: "Best mobile repair shop in Deolali. My battery was draining fast, and they replaced it quickly. Highly recommend!",
      initials: "SD"
    },
    {
      name: "Amit Sharma",
      text: "Very knowledgeable technicians. They diagnosed a motherboard issue that other shops couldn't fix. Great experience.",
      initials: "AS"
    },
    {
      name: "Pooja Kadam",
      text: "Quick and transparent service. They explained exactly what was wrong with my charging port and fixed it right away.",
      initials: "PK"
    },
    {
      name: "Vikram Singh",
      text: "Got my water-damaged phone repaired here. Didn't think it would survive, but Shri Ram Mobiles brought it back to life!",
      initials: "VS"
    }
  ];

  return (
    <section id="reviews" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6"
          >
            Customer Feedback
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Customers Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 text-xl text-zinc-300 font-medium"
          >
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span>5.0 Average Google Rating</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 transition-colors shadow-xl"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                  <div className="text-xs text-zinc-500">Local Guide</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
