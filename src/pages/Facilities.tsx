import { Section, Card } from '../components/UI';
import { Monitor, Book, Microscope, Bus, Shield, Dumbbell } from 'lucide-react';

export const Facilities = () => {
  const facilities = [
    {
      title: 'Smart Classrooms',
      desc: 'All our classrooms are equipped with interactive digital boards and audio-visual systems to make learning engaging.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Science Laboratories',
      desc: 'Dedicated labs for Physics, Chemistry, and Biology with modern equipment for hands-on practical learning.',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Digital Library',
      desc: 'A vast collection of books, journals, and digital resources to encourage reading and research habits.',
      icon: Book,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Sports Complex',
      desc: 'Extensive facilities for outdoor sports like cricket and football, plus indoor games like table tennis and chess.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Safe Transport',
      desc: 'A fleet of GPS-enabled buses with trained drivers and conductors ensuring safe commute for all students.',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Security & Safety',
      desc: '24/7 CCTV surveillance, fire safety systems, and a dedicated medical room with a trained nurse.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Campus Facilities</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A modern infrastructure designed to provide a safe, inspiring, and comfortable learning environment.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((f, i) => (
            <Card key={i} className="p-0 overflow-hidden group">
              <div className="h-60 overflow-hidden">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-saffron/10 text-saffron rounded-xl flex items-center justify-center mb-6">
                  <f.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" title="Our Commitment to Safety" subtitle="Your child's safety is our top priority.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">CCTV Surveillance</h4>
                  <p className="text-slate-600">The entire campus is under 24/7 video monitoring to ensure a secure environment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">Verified Staff</h4>
                  <p className="text-slate-600">Every staff member undergoes a rigorous background check and police verification.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">Medical Care</h4>
                  <p className="text-slate-600">A fully equipped medical room with a trained nurse is available during school hours.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[40px] p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Transport Network</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Our transport system covers a 20km radius around Kalesra, ensuring that students from nearby villages and urban areas can commute safely and comfortably.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full"></div>
                <span>GPS Tracking for Parents</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full"></div>
                <span>Female Attendant in every bus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full"></div>
                <span>First-aid kits in all vehicles</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
};
