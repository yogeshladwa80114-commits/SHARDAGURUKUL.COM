import { Section, Card } from '../components/UI';
import { Target, Eye, Award, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">About Our School</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A legacy of excellence, rooted in values and driven by innovation.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1523050335456-cbbef71e22b1?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-navy mb-6">Our Vision & Mission</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-saffron/10 rounded-2xl flex items-center justify-center shrink-0 text-saffron">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To provide a nurturing environment that fosters academic excellence, character development, and a lifelong passion for learning, inspired by the Gurukul tradition.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center shrink-0 text-navy">
                  <Eye size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be a leading educational institution that produces globally competent citizens who are deeply connected to their cultural roots and ethical values.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
              alt="Students Learning" 
              className="rounded-[40px] shadow-3xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <div className="text-4xl font-bold text-saffron mb-2">15+</div>
              <p className="text-navy font-bold">Years of Educational Excellence in Kalesra</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6">Principal's Message</h2>
          <div className="w-24 h-1 bg-saffron mx-auto mb-10"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa154da09f5b?auto=format&fit=crop&q=80&w=800" 
              alt="Principal" 
              className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-navy mb-4">Dr. S. K. Sharma</h3>
            <p className="text-saffron font-bold mb-6 italic">M.A., Ph.D., B.Ed. - Principal</p>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                "At Sharda Gurukul, we believe that education is not just about filling a bucket, but lighting a fire. Our goal is to ignite the curiosity within every child and provide them with the tools they need to navigate the complexities of the modern world while staying true to their values."
              </p>
              <p>
                "We focus on the holistic development of our students, ensuring they grow into compassionate, responsible, and capable individuals. Our dedicated faculty works tirelessly to create a supportive and challenging environment where every student can reach their full potential."
              </p>
              <p>
                "I welcome you to join our family and witness the transformation of your child into a future leader."
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Core Values" subtitle="The pillars that define our educational approach.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Discipline', desc: 'Fostering self-control and respect for rules and others.', icon: ShieldCheck },
            { title: 'Integrity', desc: 'Upholding honesty and strong moral principles.', icon: Award },
            { title: 'Innovation', desc: 'Encouraging creative thinking and new ideas.', icon: BookOpen },
            { title: 'Empathy', desc: 'Understanding and sharing the feelings of others.', icon: Heart }
          ].map((v, i) => (
            <Card key={i} className="text-center">
              <div className="w-16 h-16 bg-navy/5 text-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <v.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">{v.title}</h4>
              <p className="text-slate-600">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
};

const ShieldCheck = ({ size }: { size: number }) => <Award size={size} />; // Placeholder for missing icon
const Heart = ({ size }: { size: number }) => <Award size={size} />; // Placeholder for missing icon
