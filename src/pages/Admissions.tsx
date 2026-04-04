import { Section, Card, CTAButton } from '../components/UI';
import { FileText, ClipboardCheck, Calendar, UserPlus, HelpCircle } from 'lucide-react';

export const Admissions = () => {
  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Admissions 2026–27</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the Sharda Gurukul family. Follow our simple step-by-step process to secure your child's future.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <Section title="Admission Process" subtitle="A transparent and straightforward journey for parents.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block z-0"></div>
          
          {[
            { step: '01', title: 'Inquiry', desc: 'Fill out the online inquiry form or visit the school campus.', icon: HelpCircle },
            { step: '02', title: 'Interaction', desc: 'A friendly interaction with the child and a meeting with the Principal.', icon: UserPlus },
            { step: '03', title: 'Documentation', desc: 'Submit required documents and complete the registration form.', icon: FileText },
            { step: '04', title: 'Confirmation', desc: 'Pay the admission fee to secure the seat and welcome your child.', icon: ClipboardCheck }
          ].map((item, i) => (
            <Card key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-saffron text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-navy mb-8">Eligibility Criteria</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-saffron">
                <h4 className="font-bold text-navy mb-2">Age Requirements (as of March 31st)</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Nursery:</strong> 3+ Years</li>
                  <li><strong>LKG:</strong> 4+ Years</li>
                  <li><strong>UKG:</strong> 5+ Years</li>
                  <li><strong>Grade 1:</strong> 6+ Years</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-navy">
                <h4 className="font-bold text-navy mb-2">Required Documents</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-navy rounded-full"></div> Birth Certificate (Original + Copy)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-navy rounded-full"></div> Previous School TC (if applicable)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-navy rounded-full"></div> 4 Passport size photographs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-navy rounded-full"></div> Aadhar Card of Child & Parents</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
            <h2 className="text-3xl font-bold text-navy mb-8">Admission Inquiry Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Applying for Class</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none bg-white">
                    <option>Select Class</option>
                    <option>Nursery</option>
                    <option>Grade 1</option>
                    <option>Grade 5</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Parent/Guardian Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="Enter parent name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Message (Optional)</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-saffron outline-none h-32" placeholder="Any specific questions?"></textarea>
              </div>
              <CTAButton variant="primary" className="w-full py-4 text-lg">Submit Inquiry</CTAButton>
              <p className="text-center text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
            </form>
          </div>
        </div>
      </Section>

      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Calendar className="mx-auto mb-6 text-saffron" size={64} />
          <h2 className="text-4xl font-bold mb-6">Book a School Visit</h2>
          <p className="text-xl mb-10 opacity-90">The best way to experience our campus is to see it in person. Schedule a guided tour today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton variant="primary" className="px-12">Schedule Visit</CTAButton>
            <a href="tel:+919728599019" className="btn-outline px-12 border-white text-white hover:bg-white hover:text-navy flex items-center justify-center">
              Call Admissions Office
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
