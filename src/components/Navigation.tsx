import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Tech', href: '#tech' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold text-text-bright">
              G<span className="text-primary">.</span>
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="group relative text-sm text-foreground hover:text-text-bright transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="font-mono text-primary text-xs mr-1">
                  0{index + 1}.
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="mailto:glen@example.com"
              className="px-4 py-2 border border-primary text-primary text-sm rounded hover:bg-primary/10 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`fixed inset-0 bg-background md:hidden ${
            isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-2xl text-foreground hover:text-text-bright transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  y: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="font-mono text-primary text-sm mr-2">
                  0{index + 1}.
                </span>
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:glen@example.com"
              className="mt-4 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
