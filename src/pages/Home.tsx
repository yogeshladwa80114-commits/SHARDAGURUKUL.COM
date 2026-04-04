import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, ShieldCheck, ArrowRight, Star, Quote, Phone, MessageCircle } from 'lucide-react';
import { Section, Card, CTAButton } from '../components/UI';

const stats = [
  { label: 'Years of Excellence', value: '5+', icon: Award },
  { label: 'Happy Students', value: '400+', icon: Users },
  { label: 'Qualified Teachers', value: '40+', icon: Star },
  { label: 'Safety Rating', value: '100%', icon: ShieldCheck },
];

const whyChooseUs = [
  {
    title: 'Gurukul Philosophy',
    desc: 'We blend traditional Indian values with modern scientific education for holistic growth.',
    icon: '🕉️'
  },
  {
    title: 'Academic Excellence',
    desc: 'Consistently high results in board exams with a focus on conceptual understanding.',
    icon: '📚'
  },
  {
    title: 'Safe & Secure Campus',
    desc: '24/7 CCTV surveillance and dedicated staff to ensure your child\'s safety.',
    icon: '🛡️'
  },
  {
    title: 'Holistic Development',
    desc: 'Equal emphasis on sports, arts, and life skills alongside academics.',
    icon: '🎨'
  }
];

const programs = [
  {
    title: 'Pre-Primary',
    age: '3-5 Years',
    desc: 'Play-based learning environment focusing on sensory development and social skills.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Primary',
    age: '6-11 Years',
    desc: 'Building strong foundations in core subjects with interactive teaching methods.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Secondary',
    age: '12-18 Years',
    desc: 'Rigorous academic preparation for board exams and future career paths.',
    image: 'https://images.unsplash.com/photo-1523050335456-cbbef71e22b1?auto=format&fit=crop&q=80&w=800'
  }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Grade 8 Student',
    text: 'The transformation in my son\'s discipline and academic performance has been remarkable. The teachers truly care.',
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 2 Student',
    text: 'Best school in Kalesra. The facilities are top-notch and the environment is very welcoming for children.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Anil Verma',
    role: 'Parent of Grade 10 Student',
    text: 'I appreciate how they balance modern education with our cultural values. It\'s exactly what we wanted.',
    avatar: 'https://i.pravatar.cc/150?u=anil'
  }
];

export const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1920" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-block bg-saffron text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Admissions Open 2026–27
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Admissions Open 2026–27
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
              Shaping Future Leaders with Values & Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919728599019" className="btn-primary text-lg px-10 py-4 text-center flex items-center justify-center gap-2">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919728599019" className="btn-secondary text-lg px-10 py-4 text-center flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-saffron/10 text-saffron rounded-xl mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section 
        title="Why Choose Sharda Gurukul?" 
        subtitle="We provide an environment where every child can thrive academically, socially, and emotionally."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <Card key={i} className="text-center">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-navy">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Academic Programs */}
      <Section 
        title="Academic Programs" 
        subtitle="Tailored learning paths for every stage of your child's educational journey."
        className="bg-slate-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="text-saffron font-bold text-sm uppercase tracking-wider mb-2">{program.age}</div>
                <h3 className="text-2xl font-bold mb-4 text-navy">{program.title}</h3>
                <p className="text-slate-600 mb-6">{program.desc}</p>
                <Link to="/academics" className="inline-flex items-center gap-2 text-navy font-bold hover:text-saffron transition-colors">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Facilities Preview */}
      <Section 
        title="World-Class Facilities" 
        subtitle="Our campus is designed to inspire curiosity and facilitate modern learning experiences."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" 
              alt="Smart Classroom" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-bold text-white mb-2">Smart Classrooms</h3>
              <p className="text-slate-200">Equipped with interactive boards and digital learning tools.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-navy rounded-3xl p-8 flex items-center gap-6 text-white shadow-xl">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Star className="text-saffron" size={40} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Science & Computer Labs</h4>
                <p className="text-slate-400">Hands-on practical learning with state-of-the-art equipment.</p>
              </div>
            </div>
            <div className="bg-saffron rounded-3xl p-8 flex items-center gap-6 text-white shadow-xl">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Star className="text-white" size={40} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Sports Infrastructure</h4>
                <p className="text-orange-100">Large playground for cricket, football, and athletic activities.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex items-center gap-6 shadow-xl">
              <div className="w-20 h-20 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                <Star className="text-navy" size={40} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-navy">Safe Transport</h4>
                <p className="text-slate-600">GPS-enabled school buses covering all major routes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <CTAButton variant="outline" onClick={() => window.location.href='/facilities'}>View All Facilities</CTAButton>
        </div>
      </Section>

      {/* Testimonials */}
      <Section 
        title="What Parents Say" 
        subtitle="Hear from the families who have entrusted us with their children's future."
        className="bg-slate-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="relative">
              <Quote className="absolute top-6 right-6 text-slate-100" size={60} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-saffron" />
                <div>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex text-saffron mt-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Admission CTA */}
      <section className="py-24 px-6 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-saffron/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white rounded-[40px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
                Admissions Open for <span className="text-saffron">2026–27</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Limited seats available for Pre-primary to Secondary classes. Give your child the gift of quality education today.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton variant="primary" className="text-lg px-10">Apply Online Now</CTAButton>
                <CTAButton variant="secondary" className="text-lg px-10">Download Prospectus</CTAButton>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 w-full lg:w-96">
              <h3 className="text-2xl font-bold text-navy mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Parent Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-saffron outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-saffron outline-none" />
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-saffron outline-none bg-white">
                  <option>Select Class</option>
                  <option>Nursery</option>
                  <option>Primary</option>
                  <option>Secondary</option>
                </select>
                <button className="btn-primary w-full py-4 text-lg">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
