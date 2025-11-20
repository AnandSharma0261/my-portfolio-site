import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/resumeData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" ref={ref} className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          My professional journey and contributions
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3, duration: 0.4 }}
                className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-slate-900 hidden md:block z-10"
              />

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-effect p-8 rounded-2xl md:ml-20 relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 gradient-text">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/70">
                        <span className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} className="text-secondary" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold">
                      <Calendar size={16} />
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <span className="mt-1.5 min-w-[6px] h-[6px] bg-gradient-to-r from-primary to-secondary rounded-full" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Experience;
