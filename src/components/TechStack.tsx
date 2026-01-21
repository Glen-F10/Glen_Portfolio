import { motion, Variants } from 'framer-motion';

const TechStack = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categories = [
    {
      title: 'Core',
      items: ['Python', 'Machine Learning', 'Computer Vision', 'Data Science'],
    },
    {
      title: 'Frameworks & Tools',
      items: ['TensorFlow', 'OpenCV', 'Sickit learn', 'Flask nd Django'],
    },
    {
      title: 'Languages',
      items: ['English (Fluent)', 'German (A2)', 'Hindi (Native)'],
    },
  ];

  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">
              {'02. '}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-bright mt-2">
              Tech Stack
            </h2>
          </motion.div>

          {/* Categories grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <motion.div
                      key={item}
                      variants={itemVariants}
                      className="group flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />
                      <span className="text-foreground group-hover:text-text-bright transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-12 border-t border-border"
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
              Expertise Level
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: 'Computer Vision & Image Processing', level: 70 },
                { skill: 'Deep Learning & Neural Networks', level: 50 },
                { skill: 'MLOps & Model Deployment', level: 50 },
                { skill: 'Data Engineering & Pipelines', level: 60 },
              ].map((item) => (
                <motion.div
                  key={item.skill}
                  className="space-y-2"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-foreground text-sm">{item.skill}</span>
                    <span className="font-mono text-primary text-sm">{item.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
