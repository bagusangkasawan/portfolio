'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Zap,
  ChevronDown,
  ChevronUp,
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
  SiTensorflow,
  SiGooglegemini,
  SiKeras,
  SiGooglecloud,
  SiAmazon,
  SiAlibabacloud,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJupyter,
  SiVite,
  SiDocker,
  SiN8N,
} from 'react-icons/si';
import {
  FaJava,
  FaMicrosoft,
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
  'TensorFlow': SiTensorflow,
  'Neural Networks': SiKeras,
  'Generative AI': SiGooglegemini,
  'Agentic AI': FaRobot,
  'Google Cloud Platform': SiGooglecloud,
  'Alibaba Cloud': SiAlibabacloud,
  'AWS': SiAmazon,
  'Microsoft Azure': FaMicrosoft,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Oracle': SiOracle,
  'Git': SiGit,
  'Colab': SiJupyter,
  'Vite': SiVite,
  'Docker': SiDocker,
  'n8n': SiN8N,
};

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  status: 'Completed' | 'In Progress' | 'Archived';
  github?: string;
  link?: string;
}

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (idx: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedProjects(newExpanded);
  };

  const expandAll = () => {
    const allIndices = new Set(projects.slice(0, visibleCount).map((_, idx) => idx));
    setExpandedProjects(allIndices);
  };

  const collapseAll = () => {
    setExpandedProjects(new Set());
  };

  const projects: Project[] = [
    {
      title: 'CourseMate',
      description: 'AI-powered course recommendations system',
      longDescription: 'Built an intelligent course recommendation engine that analyzes user preferences and learning patterns. Leverages machine learning to provide personalized educational content suggestions. Top 5 winner in Bangkit Academy 2024 Batch 2 Capstone Project, led by Google, Goto, and Traveloka.',
      technologies: ['Python', 'TensorFlow', 'Neural Networks', 'Flask', 'Google Cloud Platform'],
      highlights: [
        'AI-powered recommendation algorithm',
        'Personalized learning paths',
        'Top 5 Capstone Project winner',
        'Deployed on Google Cloud Platform'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'MentalMate v1',
      description: 'Mental health assistant with AI support',
      longDescription: 'Developed an AI-powered mental health assistant designed to provide emotional support and mental wellness guidance. Winner of Microsoft Online Hackathon 2025. Features conversational AI, mood tracking, and personalized wellness recommendations.',
      technologies: ['Python', 'Generative AI', 'Flask', 'Microsoft Azure', 'Node.js'],
      highlights: [
        'Conversational AI for mental health',
        'Real-time emotional support',
        'Microsoft Hackathon Winner 2025',
        'Secure user data handling'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'MentyMate (MentalMate v2)',
      description: 'Enhanced mental health assistant with interactive features',
      longDescription: 'Upgraded version of MentalMate with enhanced interactive capabilities, improved UI/UX, and advanced mental health features. Top 30 winner in Yayasan Peduli BUMN Hackathon - Pikiran Terbaik Negeri x elevAIte. Features include progress tracking, community support, and professional resource integration.',
      technologies: ['React', 'TypeScript', 'Python', 'Generative AI', 'Google Cloud Platform'],
      highlights: [
        'Interactive wellness dashboard',
        'Progress tracking & analytics',
        'Top 30 Hackathon winner',
        'Enhanced user experience'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'EnergyMate',
      description: 'Smart household energy management system',
      longDescription: 'Intelligent energy management system that monitors and optimizes household energy consumption. Scored 94/100 in Laskar AI 2025 Capstone Project. Uses ML models to predict energy usage patterns and provide optimization recommendations, helping reduce utility costs.',
      technologies: ['Python', 'TensorFlow', 'IoT', 'Flask', 'Time Series Analysis'],
      highlights: [
        'Smart energy consumption prediction',
        'ML-based optimization algorithms',
        'Scored 94/100 in Capstone',
        '40% average energy savings'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'EduMate',
      description: 'Interactive learning platform with student monitoring',
      longDescription: 'Comprehensive educational platform offering interactive learning experiences combined with intelligent student monitoring capabilities. Winner of IDCamp Developer Challenge #2 by Indosat Ooredoo Hutchison x SheHacks 2024. Features real-time progress tracking, adaptive learning paths, and teacher dashboards.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB', 'Google Cloud Platform'],
      highlights: [
        'Interactive learning modules',
        'Real-time student monitoring',
        'IDCamp Developer Challenge Winner',
        'Adaptive learning algorithms'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'CheckMate',
      description: 'AI-powered product insights and quality assessment',
      longDescription: 'Intelligent platform for product analysis, quality assessment, and educational insights using AI. Top 20 (Best 4 Per Theme) winner in Hackinfest Sucofindo 2025. Provides comprehensive product evaluation, compliance checking, and detailed analytics for informed decision-making.',
      technologies: ['Python', 'Generative AI', 'TensorFlow', 'Flask', 'Google Cloud Platform'],
      highlights: [
        'AI-powered quality assessment',
        'Product insights & analytics',
        'Top 20 Hackinfest winner',
        'Compliance checking system'
      ],
      status: 'Completed',
      github: '#',
      link: '#',
    },
    {
      title: 'XportMate',
      description: 'Digital export support and trade facilitation platform',
      longDescription: 'Platform designed to support digital export initiatives and facilitate international trade. Provides tools and resources for businesses looking to expand their digital export capabilities, market analysis, and trade documentation support.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      highlights: [
        'Digital export facilitation',
        'Market analysis tools',
        'Trade documentation support',
        'Secure payment integration'
      ],
      status: 'In Progress',
      github: '#',
      link: '#',
    },
    {
      title: 'EkrafMate',
      description: 'Creative talent matching and opportunity platform',
      longDescription: 'Innovative platform connecting creative talents with business opportunities. Facilitates collaboration between creative professionals and organizations seeking creative services. Features portfolio showcasing, project matching, and collaboration tools.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      highlights: [
        'Talent matching algorithm',
        'Portfolio management system',
        'Project collaboration features',
        'Skill-based recommendations'
      ],
      status: 'In Progress',
      github: '#',
      link: '#',
    },
    {
      title: 'CoMate',
      description: 'Collaborative platform selected in Meta Llama Project Incubator',
      longDescription: 'An innovative collaborative platform built by an amazing team that achieved Top 50 (Rank 22) recognition in the prestigious Llama Project Incubator by Meta x Hacktiv8 Indonesia. The project demonstrates strong potential in leveraging Meta\'s Llama AI technology for creating meaningful collaborative experiences.',
      technologies: ['Python', 'Generative AI', 'Llama AI', 'React', 'Node.js', 'Google Cloud Platform'],
      highlights: [
        'Top 50 Llama Project Incubator finalist',
        'Meta x Hacktiv8 Indonesia partnership',
        'Leverages cutting-edge Llama AI technology',
        'Innovative collaborative platform design'
      ],
      status: 'In Progress',
      github: '#',
      link: '#',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0 },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects & Work
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A showcase of projects I've built, demonstrating my skills in full-stack development, machine learning, and cloud architecture
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-6 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group relative overflow-hidden flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <motion.div 
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </motion.div>

                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <p key={hIdx} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">✓</span>
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-cyan-300 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-center py-1 rounded text-xs bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-center py-1 rounded text-xs bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12">
            <motion.h2
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              All Projects
            </motion.h2>
            <div className="flex gap-3">
              {(() => {
                const visibleProjects = projects.slice(0, visibleCount);
                const allExpanded = visibleProjects.every((_, idx) => expandedProjects.has(idx));
                const hasAnyExpanded = visibleProjects.some((_, idx) => expandedProjects.has(idx));

                return (
                  <>
                    {!allExpanded && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={expandAll}
                        className="px-4 py-2 rounded-lg font-semibold
                                  bg-cyan-500/20 hover:bg-cyan-500/30
                                  text-cyan-400 border border-cyan-500/30
                                  transition-all text-sm"
                      >
                        Expand All
                      </motion.button>
                    )}
                    {allExpanded && hasAnyExpanded && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={collapseAll}
                        className="px-4 py-2 rounded-lg font-semibold
                                  bg-purple-500/20 hover:bg-purple-500/30
                                  text-purple-400 border border-purple-500/30
                                  transition-all text-sm"
                      >
                        Collapse All
                      </motion.button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.slice(0, visibleCount).map((project, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-8 rounded-2xl hover:border-cyan-400/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-4">
                      {project.description}
                    </p>
                  </div>
                  <motion.div 
                    className={`px-4 py-2 rounded-full text-sm font-bold border whitespace-nowrap ${getStatusColor(project.status)}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.status}
                  </motion.div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleProject(idx)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg mb-6
                            bg-cyan-500/20 hover:bg-cyan-500/30
                            text-cyan-400 border border-cyan-500/30
                            transition-all font-semibold text-sm"
                >
                  {expandedProjects.has(idx) ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Collapse Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Expand Details
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedProjects.has(idx) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights</h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-purple-300 mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => {
                            const IconComponent = techIcons[tech];
                            return (
                              <span
                                key={techIdx}
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white text-sm font-semibold border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
                              >
                                {IconComponent ? <IconComponent className="w-4 h-4" /> : '⚙️'}
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-white/10">
                        {project.github && (
                          <a
                            href={project.github}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                          >
                            <SiGithub className="w-5 h-5" />
                            View on GitHub
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30"
                          >
                            <ExternalLink className="w-5 h-5" />
                            View Live
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          {visibleCount < projects.length && (
            <div className="flex justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-3 rounded-full font-semibold
                          bg-gradient-to-r from-purple-500 to-cyan-500
                          text-white shadow-lg shadow-cyan-500/20
                          hover:shadow-cyan-500/40 transition-all"
              >
                Show More Projects
              </motion.button>
            </div>
          )}
        </motion.div>

        <motion.div
          className="mt-16 glass-effect p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-cyan-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Interested in collaborating?
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I'm always open to interesting projects and opportunities. Let's build something amazing together!
          </motion.p>
          <motion.a
            href="/about"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
}
