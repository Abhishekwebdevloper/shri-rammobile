import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Map, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Visit Our Shop Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-12"
            >
              Have a question or need a repair? Contact us or visit our store in Deolali Gaon. We're here to help you get your device back on track.
            </motion.p>

            <div className="flex flex-col gap-6 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">
                    Nashik Road, near Mahatma Gandhi Statue,<br />
                    Deolali Gaon, Nashik, Maharashtra 422101
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">
                    Mon-Sat: 11:30 AM – 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="tel:+919595905650"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919595905650?text=Hi,%20I%20want%20to%20enquire%20about%20mobile%20repair."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-semibold flex items-center gap-2 hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-[500px] bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden relative"
          >
            {/* Embedded Google Map */}
            <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4589255018617!2d73.8344!3d19.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9500156ce42d%3A0x68df8df6efbcd059!2sOm%20Sai%20Mobile!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
            
            {/* Absolute positioned Get Directions CTA */}
            <div className="absolute bottom-6 inset-x-6 z-20">
              <a 
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bdd9500156ce42d:0x68df8df6efbcd059" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors shadow-2xl"
              >
                <Map className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
