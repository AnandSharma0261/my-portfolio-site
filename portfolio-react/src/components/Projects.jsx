import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { projects, personalInfo } from '../data/resumeData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" ref={ref} className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Some of my notable work and client projects
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-effect rounded-2xl overflow-hidden group relative"
          >
            {/* Project type badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                <Briefcase size={14} />
                {project.type}
              </span>
            </div>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${
              index % 2 === 0
                ? 'from-primary/20 to-secondary/20'
                : 'from-secondary/20 to-accent/20'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="p-8 relative z-10">
              {/* Header */}
              <div className="mb-6">
                <motion.h3
                  className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300"
                >
                  {project.title}
                </motion.h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        i % 3 === 0
                          ? 'bg-primary/20 text-primary-light'
                          : i % 3 === 1
                          ? 'bg-secondary/20 text-secondary-light'
                          : 'bg-accent/20 text-accent-light'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3 mb-6">
                {project.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <span className="mt-1.5 min-w-[6px] h-[6px] bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.liveLink !== '#' && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}

                {project.githubLink !== '#' && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </motion.a>
                )}
              </div>
            </div>

            {/* Animated corner accent */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-white/70 mb-6">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 btn-secondary"
        >
          <Github size={20} />
          View More on GitHub
        </motion.a>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Projects;
