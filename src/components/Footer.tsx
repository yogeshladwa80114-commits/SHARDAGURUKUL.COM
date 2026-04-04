import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy font-bold text-xl">
              SG
            </div>
            <div>
              <h2 className="text-xl font-extrabold leading-none">SHARDA GURUKUL</h2>
              <p className="text-[10px] tracking-widest uppercase text-saffron">Kalesra</p>
            </div>
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Empowering young minds with a blend of traditional Gurukul values and modern educational excellence. Shaping the leaders of tomorrow.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-saffron transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 border-l-4 border-saffron pl-4">Quick Links</h3>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/about" className="hover:text-saffron transition-colors">About Our School</Link></li>
            <li><Link to="/academics" className="hover:text-saffron transition-colors">Academic Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-saffron transition-colors">Admission Process</Link></li>
            <li><Link to="/facilities" className="hover:text-saffron transition-colors">Campus Facilities</Link></li>
            <li><Link to="/gallery" className="hover:text-saffron transition-colors">School Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 border-l-4 border-saffron pl-4">Contact Info</h3>
          <ul className="space-y-6 text-slate-400">
            <li className="flex gap-4">
              <MapPin className="text-saffron shrink-0" />
              <span>Sharda Gurukul Kalesra, Yamunanagar, Haryana, India</span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-saffron shrink-0" />
              <span>+91 9728599019</span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-saffron shrink-0" />
              <span>shardagurukul3@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 border-l-4 border-saffron pl-4">Newsletter</h3>
          <p className="text-slate-400 mb-6">Subscribe to get latest school updates and news.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-navy-light border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-saffron transition-colors"
            />
            <button className="btn-primary w-full">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© 2026 Sharda Gurukul Kalesra. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 md:hidden">
        <a href="https://wa.me/919728599019" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <MessageCircle size={30} />
        </a>
        <a href="tel:+919728599019" className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl">
          <Phone size={28} />
        </a>
      </div>
    </footer>
  );
};
