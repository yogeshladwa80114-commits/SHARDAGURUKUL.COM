import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section = ({ children, className = '', id, title, subtitle, dark = false }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-6 ${dark ? 'bg-navy text-white' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-lg md:text-xl max-w-2xl mx-auto ${dark ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export const Card = ({ children, className = '', hover = true, key }: { children: ReactNode, className?: string, hover?: boolean, key?: any }) => {
  return (
    <motion.div 
      key={key}
      whileHover={hover ? { y: -10 } : {}}
      className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CTAButton = ({ children, variant = 'primary', className = '', onClick }: { children: ReactNode, variant?: 'primary' | 'secondary' | 'outline', className?: string, onClick?: () => void }) => {
  const styles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  };
  
  return (
    <button onClick={onClick} className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};
