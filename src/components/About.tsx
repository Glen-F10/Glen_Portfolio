import { motion, Variants } from 'framer-motion';
import { MapPin, Globe, Briefcase } from 'lucide-react';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const badges = [
    {
      icon: Globe,
      title: 'German C2 Proficiency',
      subtitle: 'Target certification',
    },
    {
      icon: Briefcase,
      title: 'Werkstudent Eligible',
      subtitle: '20h/week availability',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">
              {'01. '}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-bright mt-2">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Bio content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Originally from <span className="text-text-bright font-medium">India</span>, 
                now pursuing my Master's in Data Science in{' '}
                <span className="text-text-bright font-medium">Berlin, Germany</span>. 
                I specialize in bridging the gap between theoretical mathematics and 
                real-world application.
              </p>
              
              <p className="text-foreground leading-relaxed">
                My focus lies in developing{' '}
                <span className="text-primary font-mono text-sm">computer vision</span> and{' '}
                <span className="text-primary font-mono text-sm">deep learning</span> solutions 
                that meet the rigorous standards of the defense and aerospace industries. 
                I'm passionate about creating AI systems that are not just accurate, 
                but also robust, interpretable, and production-ready.
              </p>

              <div className="flex items-center gap-2 text-text-muted pt-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm">Berlin, Germany</span>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {badges.map((badge) => (
                <motion.div
                  key={badge.title}
                  className="group relative bg-card border border-border rounded-lg p-5 transition-all duration-300 hover:border-primary/50 card-glow"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <badge.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-text-bright font-semibold mb-1">
                        {badge.title}
                      </h3>
                      <p className="text-sm text-text-muted font-mono">
                        {badge.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Accent line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r transition-all duration-300 group-hover:h-8" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
