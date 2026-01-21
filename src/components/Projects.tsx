import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Radar, Satellite, Settings } from 'lucide-react';
import { useState, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  index: number;
}

const ProjectCard = ({ title, description, tags, icon, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 opacity-0 blur-sm transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.8 : 0 }}
      />

      <div className="relative bg-card border border-border rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:border-primary/30 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project number */}
        <span className="absolute top-6 right-6 font-mono text-6xl font-bold text-border/50 select-none">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-text-bright mb-3 pr-12">
            {title}
          </h3>

          {/* Description */}
          <p className="text-foreground leading-relaxed mb-6">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href="#"
              className="text-text-muted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="text-text-muted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'YOLOv8 Drone Detection',
      description:
        'Real-time aerial threat detection system optimized for edge deployment. Achieves 45+ FPS on embedded hardware while maintaining high accuracy in adverse conditions.',
      tags: ['YOLOv8', 'PyTorch', 'ONNX', 'Edge AI'],
      icon: <Radar className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Satellite Imagery Segmentation',
      description:
        'Advanced terrain mapping solution using U-Net architecture and GeoPandas for geospatial analysis. Processes multi-spectral imagery for defense applications.',
      tags: ['U-Net', 'GeoPandas', 'TensorFlow', 'GIS'],
      icon: <Satellite className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Turbine Predictive Maintenance',
      description:
        'Time-series forecasting system for rotary machinery health monitoring. Reduces unplanned downtime by 40% through early anomaly detection.',
      tags: ['LSTM', 'Time Series', 'Scikit-learn', 'Docker'],
      icon: <Settings className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'03. '}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-bright mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
