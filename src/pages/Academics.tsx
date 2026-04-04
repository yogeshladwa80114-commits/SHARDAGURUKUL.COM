import { Section, Card, CTAButton } from '../components/UI';
import { BookOpen, FlaskConical, Laptop, Music, Palette, Trophy } from 'lucide-react';

export const Academics = () => {
  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Academic Excellence</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive curriculum designed to challenge, inspire, and prepare students for the future.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <Section title="Our Curriculum" subtitle="We follow the CBSE curriculum with an integrated approach to learning.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Pre-Primary Wing',
              focus: 'Learning through Play',
              subjects: ['Language Development', 'Numeracy Skills', 'Creative Arts', 'Physical Education'],
              desc: 'Our pre-primary section uses the Montessori method to foster independence and curiosity in young learners.'
            },
            {
              title: 'Primary Wing',
              focus: 'Foundation Building',
              subjects: ['English & Hindi', 'Mathematics', 'Environmental Science', 'Computer Literacy'],
              desc: 'Focusing on core literacy and numeracy while introducing scientific concepts and social studies.'
            },
            {
              title: 'Secondary Wing',
              focus: 'Academic Rigor',
              subjects: ['Science (Phy, Che, Bio)', 'Advanced Math', 'Social Sciences', 'Information Technology'],
              desc: 'Preparing students for board examinations with intensive coaching and regular assessments.'
            }
          ].map((wing, i) => (
            <Card key={i} className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-navy mb-2">{wing.title}</h3>
              <div className="text-saffron font-bold mb-6">{wing.focus}</div>
              <p className="text-slate-600 mb-8 flex-grow">{wing.desc}</p>
              <div className="space-y-3">
                <h4 className="font-bold text-navy border-b border-slate-100 pb-2">Key Subjects:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {wing.subjects.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-500">
                      <div className="w-1.5 h-1.5 bg-saffron rounded-full"></div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" title="Teaching Methodology" subtitle="How we ensure effective learning for every student.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
            <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-8">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-6">Interactive Learning</h3>
            <p className="text-slate-600 leading-relaxed">
              We move beyond rote memorization. Our teachers use interactive whiteboards, group discussions, and project-based learning to ensure students understand the "why" behind every concept.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
            <div className="w-16 h-16 bg-saffron text-white rounded-2xl flex items-center justify-center mb-8">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-6">Practical Application</h3>
            <p className="text-slate-600 leading-relaxed">
              Science and math are best learned by doing. Our state-of-the-art labs provide students with the opportunity to conduct experiments and see theories in action.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Beyond Academics" subtitle="Holistic development through co-curricular activities.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Sports', icon: Trophy },
            { name: 'Arts & Crafts', icon: Palette },
            { name: 'Music', icon: Music },
            { name: 'Coding', icon: Laptop },
            { name: 'Public Speaking', icon: BookOpen },
            { name: 'Yoga', icon: FlaskConical }
          ].map((act, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-saffron transition-colors group">
              <div className="w-12 h-12 bg-slate-50 text-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-saffron group-hover:text-white transition-colors">
                <act.icon size={24} />
              </div>
              <h4 className="font-bold text-navy text-sm">{act.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-20 px-6 bg-saffron text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-xl mb-10 opacity-90">Admissions are now open for the academic year 2026–27.</p>
          <CTAButton variant="secondary" className="bg-navy hover:bg-navy-light text-lg px-12">Apply Now</CTAButton>
        </div>
      </section>
    </main>
  );
};
