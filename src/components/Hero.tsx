import { motion, Variants } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleNetwork from './ParticleNetwork';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <ParticleNetwork />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-title */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// '}HELLO, I'M
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-bright mb-6 tracking-tight"
        >
          Glen Furtado
        </motion.h1>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-4"
        >
          Master's Candidate in Data Science |{' '}
          <span className="gradient-text">Computer Vision & AI Enthusiast</span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building robust, scalable AI solutions for{' '}
          <span className="text-foreground font-medium">Computer vision systems</span>, and{' '}
          <span className="text-foreground font-medium">Autonomous Systems</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <a href="https://drive.google.com/file/d/1loes0UGhL2LyQzqqJ6LsOZl8GyU_wOBk/view?usp=sharing">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
