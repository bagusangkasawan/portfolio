'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  Code2,
  BarChart3,
  Code2 as Languages,
  Globe,
  Brain,
  Cloud,
  Database,
  Wrench,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFlask,
  SiSpringboot,
  SiNextdotjs,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiGooglecloud,
  SiAlibabacloud,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiVite,
  SiDocker,
  SiN8N,
  SiGooglecolab,
  SiGooglegemini
} from 'react-icons/si';
import {
  FaJava,
  FaMicrosoft,
  FaAws,
  FaRobot
} from 'react-icons/fa';

const techIcons: { [key: string]: React.ElementType } = {
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Java': FaJava,
  'React': SiReact,
  'Express': SiExpress,
  'Node.js': SiNodedotjs,
  'Flask': SiFlask,
  'Spring Boot': SiSpringboot,
  'Next.js': SiNextdotjs,
  'Scikit-Learn': SiScikitlearn,
  'TensorFlow': SiTensorflow,
  'Neural Networks': SiKeras,
  'Generative AI': SiGooglegemini,
  'Agentic AI': FaRobot,
  'Google Cloud Platform': SiGooglecloud,
  'Alibaba Cloud': SiAlibabacloud,
  'AWS': FaAws,
  'Microsoft Azure': FaMicrosoft,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Oracle': SiOracle,
  'Git': SiGit,
  'Vite': SiVite,
  'Colab': SiGooglecolab,
  'Docker': SiDocker,
  'n8n': SiN8N,
};

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'PT BANK CENTRAL ASIA TBK (BCA)',
      position: 'Application Developer',
      type: 'Internship (On-Site)',
      period: 'January 2025 - January 2026',
      description: 'Migrating backend system to Spring Boot, developing API documentation using Swagger, and preparing technical documentation. This experience enhanced my skills and improved my understanding of modern Java architectures.',
      icon: Building2,
    },
    {
      company: 'DICODING INDONESIA',
      position: 'Mentor for Asah Intensive Program',
      type: 'Freelance',
      period: 'October 2025 - January 2026',
      description: 'Guided participants throughout the Asah Intensive Program by providing weekly consultation sessions, supporting the instructor during each ILT session, and assisting learners in addressing challenges.',
      icon: Users,
    },
    {
      company: 'DICODING INDONESIA',
      position: 'Facilitator for Google Cloud Arcade Program',
      type: 'Freelance',
      period: 'July - September 2025',
      description: 'Accompanied participants through a WhatsApp group by responding to questions, providing general guidance on program activities, and clarifying learning instructions during the Google Cloud Arcade program.',
      icon: SiGooglecloud,
    },
    {
      company: 'DICODING INDONESIA',
      position: 'Facilitator for elevAIte with Dicoding Program',
      type: 'Freelance',
      period: 'January - June 2025',
      description: 'Provided support to participants in the elevAIte with Dicoding program, a collaboration with Microsoft. Responsible for answering participant questions via email and assisting them in navigating learning materials.',
      icon: FaMicrosoft,
    },
    {
      company: 'BTPN SYARIAH',
      position: 'Full Stack Developer',
      type: 'Project-Based Internship',
      period: 'September - October 2023',
      description: 'During this Project-Based Internship, I learned about the role of a Full Stack Developer at BTPN Syariah. Gained hands-on experience with JavaScript, MySQL, Git, and other tools commonly used in modern development.',
      icon: Code2,
    },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Languages,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'Express', 'Node.js', 'Next.js', 'Flask', 'Spring Boot'],
      color: 'from-cyan-500/20 to-green-500/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Scikit-Learn', 'TensorFlow', 'Neural Networks', 'Generative AI', 'Agentic AI'],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      skills: ['Google Cloud Platform', 'Alibaba Cloud', 'AWS', 'Microsoft Azure'],
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'Vite', 'Colab', 'Docker', 'n8n'],
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experiences & Skills
        </motion.h1>

        {/* Work Experiences Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-8 text-center"
            variants={itemVariants}
          >
            <Building2 className="inline w-6 h-6 mr-2" />
            Work Experiences
          </motion.h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-8 rounded-2xl hover:border-cyan-400/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 mb-4">
                  <exp.icon className="w-10 h-10 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
                          {exp.position}
                        </h2>
                        <p className="text-lg font-semibold text-white">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-purple-300">
                          {exp.type}
                        </p>
                        <p className="text-sm text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Code2 className="inline w-6 h-6 mr-2" />
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A comprehensive toolkit of technologies and frameworks I've mastered
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className={`glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 border ${category.borderColor}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold text-cyan-400">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComponent = techIcons[skill];
                    return (
                      <motion.span
                        key={skillIdx}
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold border ${category.borderColor} hover:border-current transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {IconComponent ? <IconComponent className="w-4 h-4" /> : '⚙️'}
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BarChart3 className="inline w-6 h-6 mr-2" />
            Proficiency Levels
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                Expert
              </h3>
              <div className="space-y-3">
                {['JavaScript/TypeScript', 'React/Next.js', 'Express/Node.js', 'SQL/NoSQL Databases'].map(
                  (skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-purple-400 mb-4">
                Advanced
              </h3>
              <div className="space-y-3">
                {['Python', 'AI/ML', 'Cloud Computing', 'Docker/Container'].map(
                  (skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-pink-400 mb-4">
                Intermediate
              </h3>
              <div className="space-y-3">
                {['Automation', 'Agentic AI', 'Spring Boot', 'Kubernetes'].map(
                  (skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-green-400 mb-4">
                Learning
              </h3>
              <div className="space-y-3">
                {['Go', 'Laravel', 'GraphQL', 'Blockchain'].map(
                  (skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl font-bold text-cyan-400 mb-2">{experiences.length}</p>
            <p className="text-gray-300 text-sm">Work Experiences</p>
          </motion.div>
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl font-bold text-purple-400 mb-2">6+</p>
            <p className="text-gray-300 text-sm">Tech Categories</p>
          </motion.div>
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl font-bold text-pink-400 mb-2">30+</p>
            <p className="text-gray-300 text-sm">Technologies</p>
          </motion.div>
          <motion.div
            className="glass-effect p-6 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <p className="text-3xl font-bold text-green-400 mb-2">∞</p>
            <p className="text-gray-300 text-sm">Still Learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
