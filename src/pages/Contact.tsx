import { Section, Card, CTAButton } from '../components/UI';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Contact Us</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          We're here to answer your questions and welcome you to our campus.
        </p>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-navy text-white border-none">
              <h3 className="text-2xl font-bold mb-8 border-l-4 border-saffron pl-4">Get in Touch</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-saffron">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Call Us</p>
                    <p className="text-lg font-bold">+91 9728599019</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-saffron">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email Us</p>
                    <p className="text-lg font-bold">shardagurukul3@gmail.com</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-saffron">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Visit Us</p>
                    <p className="text-lg font-bold">Sharda Gurukul Kalesra, Yamunanagar, Haryana</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-saffron">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Office Hours</p>
                    <p className="text-lg font-bold">Mon - Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </Card>
            
            <div className="flex gap-4">
              <a href="https://wa.me/919728599019" className="flex-1 bg-green-500 text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-green-600 transition-colors">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="tel:+919728599019" className="flex-1 bg-navy text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-navy-light transition-colors">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <h3 className="text-3xl font-bold text-navy mb-8">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none bg-white">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Facilities</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-navy mb-2">Your Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none h-40" placeholder="How can we help you?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <CTAButton variant="primary" className="w-full py-4 text-lg">Send Message</CTAButton>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <MapPin size={48} className="text-saffron mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy mb-2">Find Us on Google Maps</h3>
            <p className="text-slate-500">Sharda Gurukul Kalesra, Yamunanagar, Haryana, India</p>
            <div className="mt-6 w-full max-w-4xl h-80 bg-slate-300 rounded-2xl flex items-center justify-center text-slate-400 italic">
              [ Interactive Map Embed Placeholder ]
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
