import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Layers, Wrench } from 'lucide-react';
import { skills } from '../data/resumeData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'frameworks', name: 'Frameworks & Libraries', icon: Layers },
    { id: 'tools', name: 'Tools & Technologies', icon: Wrench },
  ];

  const getAllSkills = () => {
    return [
      ...skills.languages.map(skill => ({ name: skill, category: 'languages' })),
      ...skills.frameworks.map(skill => ({ name: skill, category: 'frameworks' })),
      ...skills.tools.map(skill => ({ name: skill, category: 'tools' })),
    ];
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills();
    return getAllSkills().filter(skill => skill.category === activeCategory);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'languages':
        return 'from-primary to-blue-500';
      case 'frameworks':
        return 'from-secondary to-pink-500';
      case 'tools':
        return 'from-accent to-teal-500';
      default:
        return 'from-purple-500 to-indigo-500';
    }
  };

  return (
    <section id="skills" ref={ref} className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Tools and technologies I use to bring ideas to life
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                : 'glass-effect text-white/70 hover:text-white'
            }`}
          >
            <category.icon size={20} />
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
      >
        {getFilteredSkills().map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="glass-effect p-6 rounded-2xl text-center group relative overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

            <div className="relative z-10">
              {/* Skill initial as icon */}
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${getCategoryColor(skill.category)} flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300`}>
                {skill.name.charAt(0).toUpperCase()}
              </div>

              <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                {skill.name}
              </h3>
            </div>

            {/* Animated border on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                background: `linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.5), transparent)`,
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Categories Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-3xl font-bold gradient-text mb-2">
            {skills.languages.length}+
          </div>
          <div className="text-white/70">Programming Languages</div>
        </div>

        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-3xl font-bold gradient-text mb-2">
            {skills.frameworks.length}+
          </div>
          <div className="text-white/70">Frameworks & Libraries</div>
        </div>

        <div className="glass-effect p-6 rounded-2xl text-center">
          <div className="text-3xl font-bold gradient-text mb-2">
            {skills.tools.length}+
          </div>
          <div className="text-white/70">Tools & Technologies</div>
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Skills;
