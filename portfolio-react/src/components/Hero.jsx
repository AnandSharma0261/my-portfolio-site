import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-semibold text-lg"
              >
                Hi there! 👋 I'm
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold"
              >
                {personalInfo.name}
              </motion.h1>

              <div className="text-2xl md:text-3xl font-semibold h-20">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Expert',
                    2000,
                    'Problem Solver',
                    2000,
                    'Tech Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="gradient-text"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 leading-relaxed max-w-xl"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.a>

              <motion.a
                href="/Anand-resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Card */}
          <motion.div
            variants={itemVariants}
            className="relative lg:block hidden"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <div className="space-y-6">
                  {/* Code snippet animation */}
                  <div className="bg-slate-900/50 rounded-xl p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <p className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}</p>
                      <p className="pl-4 text-green-400">name: <span className="text-yellow-300">"{personalInfo.name}"</span>,</p>
                      <p className="pl-4 text-green-400">skills: <span className="text-yellow-300">["React", "Node", "MongoDB"]</span>,</p>
                      <p className="pl-4 text-green-400">passion: <span className="text-yellow-300">"Building awesome things"</span></p>
                      <p className="text-purple-400">{'}'}</p>
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold gradient-text">2+</p>
                      <p className="text-sm text-white/60">Years Exp</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold gradient-text">10+</p>
                      <p className="text-sm text-white/60">Projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
