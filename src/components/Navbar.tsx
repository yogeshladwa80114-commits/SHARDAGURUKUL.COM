import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CTAButton } from './UI';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
            SG
          </div>
          <div className="hidden sm:block">
            <h1 className={`text-xl font-extrabold leading-none ${scrolled ? 'text-navy' : 'text-white'}`}>
              SHARDA GURUKUL
            </h1>
            <p className={`text-[10px] tracking-widest uppercase ${scrolled ? 'text-saffron' : 'text-saffron'}`}>
              Kalesra
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium transition-colors hover:text-saffron ${
                location.pathname === link.path 
                  ? 'text-saffron' 
                  : scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <CTAButton variant="primary" className="py-2 px-5 text-sm">
              Apply Now
            </CTAButton>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-xl font-semibold ${
                    location.pathname === link.path ? 'text-saffron' : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <CTAButton variant="primary" className="w-full">Apply Now</CTAButton>
                <a href="tel:+919728599019" className="btn-secondary w-full flex items-center justify-center gap-2">
                  <Phone size={18} /> Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
