import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Shri Ram Mobiles</span>
            </div>
            <p className="text-zinc-400 max-w-sm">
              Premium mobile repairing services in Deolali, Nashik. We specialize in fixing all types of smartphones with care and expertise.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Services', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="tel:010100101"
                  className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 shrink-0 group-hover:text-cyan-400 transition-colors" />
                  <span>010100101</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-zinc-400">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Nashik Road, near Mahatma Gandhi Statue,<br />
                    Deolali Gaon, Nashik,<br />
                    Maharashtra 422101
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Shri Ram Mobiles. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <a href="tel:010100101" className="hover:text-white transition-colors">Call</a>
             <span>•</span>
             <a href="https://wa.me/010100101?text=Hi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
             <span>•</span>
             <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bdd9500156ce42d:0x68df8df6efbcd059" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Google Maps</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
