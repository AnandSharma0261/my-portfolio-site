import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Award, Coffee, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, value: '450+', label: 'Problems Solved', color: 'from-primary to-blue-500' },
    { icon: Award, value: '5⭐', label: 'HackerRank Rating', color: 'from-secondary to-pink-500' },
    { icon: Coffee, value: '2+', label: 'Years Experience', color: 'from-accent to-teal-500' },
    { icon: Users, value: '10K+', label: 'Users Impacted', color: 'from-purple-500 to-indigo-500' },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" ref={ref} className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Building innovative solutions with cutting-edge technologies
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Who am I?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> currently working at <span className="text-secondary font-semibold">Team Pumpkin</span>, specializing in building high-performance web applications with the MERN stack.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              With a strong foundation in <span className="text-accent font-semibold">Computer Science</span> from Dr. A.P.J Abdul Kalam Technical University (CGPA: 7.52), I combine academic excellence with real-world development experience.
            </p>
            <p className="text-white/70 leading-relaxed">
              Previously at <span className="text-primary font-semibold">Agbe Technology</span>, I delivered impactful solutions including payment gateway integration, performance optimization, and scalable UI components that served thousands of users.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">What drives me?</h3>
            <p className="text-white/70 leading-relaxed">
              I'm passionate about solving complex problems and building products that make a difference. With a <span className="text-primary font-semibold">5-star rating in Java and C on HackerRank</span> and <span className="text-secondary font-semibold">450+ DSA problems solved</span>, I bring both technical depth and problem-solving excellence to every project.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content - Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>
                <p className="text-3xl font-bold mb-2 gradient-text">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.3), transparent)`,
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
