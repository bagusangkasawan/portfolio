'use client';

import { motion } from 'framer-motion';
import { MapPin, Lightbulb, BookOpen, HelpCircle } from 'lucide-react';
import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
} from 'react-icons/si';

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

export default function AboutPage() {
  const educations = [
    {
      school: 'UNIVERSITAS PRAMITA INDONESIA',
      program: 'Informatics Engineering',
      location: 'Tangerang, Banten',
      period: '2021 - 2025',
      gpa: '3.62',
    },
    {
      school: 'MAN 1 KOTA TANGERANG',
      program: 'Science (IPA)',
      location: 'Tangerang, Banten',
      period: '2017 - 2020',
    },
  ];

  return (
    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me & Contact
        </motion.h1>

        {/* About Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              <BookOpen className="inline w-6 h-6 mr-2" />
              Education
            </h2>
            <div className="space-y-6">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-cyan-500/20 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-bold text-white mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-cyan-300 font-semibold mb-1">
                    {edu.program}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-purple-300 mb-1">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-effect p-8 rounded-2xl"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              <MapPin className="inline w-6 h-6 mr-2" />
              Quick Info
            </h2>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-cyan-400 font-bold text-sm mb-1">Location</p>
                <p className="text-gray-300">Tangerang, Banten, Indonesia</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold text-sm mb-1">Email</p>
                <a
                  href="mailto:bagusasp01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors break-all"
                >
                  bagusasp01@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-6 border-t border-cyan-500/20">
              <p className="text-gray-300 leading-relaxed">
                Passionate about building scalable applications and exploring the frontiers of AI and emerging technologies. Always eager to learn and collaborate on innovative projects.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* My Journey */}
        <motion.div
          className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            <Lightbulb className="inline w-6 h-6 mr-2" />
            My Journey
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a Full Stack Developer with a strong interest in building modern and scalable web applications. My journey started from a curiosity about how digital products work, which gradually evolved into hands-on experience across frontend, backend, and cloud technologies.
            </p>
            <p>
              Throughout my journey, I have worked with various technologies such as React, Node.js, Spring Boot, and cloud platforms including AWS and Google Cloud. I'm particularly passionate about machine learning and AI, having participated in multiple intensive programs and bootcamps.
            </p>
            <p>
              Beyond development, I enjoy being involved in learning communities. I have taken roles as a mentor and facilitator in intensive programs, where I helped guide participants through structured learning paths and practical projects.
            </p>
            <p>
              Outside of coding, I actively explore new technologies and experiment with new tools to sharpen my skills. I enjoy learning through hands-on practice and staying updated with trends in web development and artificial intelligence.
            </p>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="mb-16"
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
            Let's Connect
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: SiLinkedin, title: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/bagus-angkasawan-sumantri-putra', description: 'Follow my professional profile' },
              { icon: SiGithub, title: 'GitHub', value: 'Check My Projects', href: 'https://github.com/bagusangkasawan', description: 'Explore my repositories' },
              { icon: SiInstagram, title: 'Instagram', value: 'Follow on Instagram', href: 'https://www.instagram.com/bagusangkasawan', description: 'See more about me' },
            ].map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-6 rounded-2xl text-center hover:border-cyan-400/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <method.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors mb-2">
                  {method.title}
                </h3>
                <p className="text-white font-semibold mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-gray-400">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HelpCircle className="inline w-6 h-6 mr-2" />
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                q: 'What is your typical response time?',
                a: 'Usually within 3–6 hours. For urgent matters, DM me on LinkedIn or Instagram.',
              },
              {
                q: 'Are you available for freelance projects?',
                a: 'Yes! I am open to freelance opportunities and collaborations. Contact me for details.',
              },
              {
                q: 'What is your tech stack?',
                a: 'I work with modern tech: React, Node.js, Python, Cloud platforms (AWS, GCP, Azure), and more.',
              },
              {
                q: 'Are you open to competitions, hackathons, or funding opportunities?',
                a: 'Yes! I am open to professional competitions, hackathons, and funding opportunities.',
              },
              {
                q: 'Do you have experience as a mentor or facilitator in intensive programs?',
                a: 'Yes! I have experience as a mentor and facilitator in intensive learning programs.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-6 rounded-2xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
