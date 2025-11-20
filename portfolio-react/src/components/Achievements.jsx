import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';
import { achievements, education } from '../data/resumeData';

const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const icons = [Trophy, Award, Star, Target];

  return (
    <section id="achievements" ref={ref} className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Achievements & <span className="gradient-text">Education</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Recognition and academic excellence
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Achievements & Recognition
          </h3>

          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-effect p-6 rounded-2xl group relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>

                  <h4 className="text-xl font-bold mb-4 text-white">
                    {achievement.title}
                  </h4>

                  <ul className="space-y-3">
                    {achievement.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 min-w-[6px] h-[6px] bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
                        <span className="text-white/70">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Education
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-effect p-8 rounded-2xl group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Timeline dot */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-white">
                    {edu.cgpa}
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2 text-white">
                  {edu.degree}
                </h4>

                <p className="text-primary font-semibold mb-2">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-2 text-white/60">
                  <Award size={16} className="text-accent" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}

          {/* Stats card */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5⭐</div>
                <div className="text-white/70 text-sm">HackerRank Java</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5⭐</div>
                <div className="text-white/70 text-sm">HackerRank C</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">450+</div>
                <div className="text-white/70 text-sm">DSA Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">#1</div>
                <div className="text-white/70 text-sm">IIMT Infinity</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Achievements;
