import { Section } from '../components/UI';
import { useState } from 'react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', category: 'Campus' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', category: 'Classrooms' },
  { url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800', category: 'Events' },
  { url: 'https://images.unsplash.com/photo-1523050335456-cbbef71e22b1?auto=format&fit=crop&q=80&w=800', category: 'Activities' },
  { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800', category: 'Campus' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', category: 'Classrooms' },
  { url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800', category: 'Events' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', category: 'Activities' },
];

const categories = ['All', 'Campus', 'Classrooms', 'Events', 'Activities'];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="bg-navy py-32 px-6 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">School Gallery</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Capturing the vibrant life and memorable moments at Sharda Gurukul.
        </p>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-saffron text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, i) => (
            <div key={i} className="group relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg border-b-2 border-saffron pb-1">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};
