import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const links = [
    { icon: Github, href: 'https://github.com/Glen-F10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/glen-furtado-294b30385/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:glenfurtado1010@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-32 overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large CTA text */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono text-primary text-sm tracking-wider block mb-4">
              {'// '}CURRENTLY
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-bright tracking-tight">
              OPEN TO{' '}
              <span className="gradient-text text-glow">WORK</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-foreground max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Interested in computer vision projects or defense related projects
            Let's build something extraordinary together.
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-medium">{link.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-text-muted font-mono">
              <span className="text-primary">{'<'}</span>
              {' Designed & Built by Glen Furtado '}
              <span className="text-primary">{'/>'}</span>
            </p>
            <p className="text-xs text-text-muted/60 mt-2">
              © {new Date().getFullYear()} — Berlin, Germany
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
