'use client';

import Link from 'next/link';
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';
import { motion } from 'framer-motion';
import TypingText from '@/components/TypingText';
import HeroImage from '@/components/HeroImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text leading-snug sm:leading-tight lg:leading-tight"
            variants={itemVariants}
          >
            <TypingText text="Bagus Angkasawan Sumantri Putra"/>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-6"
            variants={itemVariants}
          >
            Full Stack Developer & AI/ML Engineer
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Crafting digital experiences with cutting-edge technologies. Specialized in web development, cloud computing, and machine learning.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={itemVariants}
          >
            <Link
              href="/experiences"
              className="btn-primary px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold transition-all text-center hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transform hover:scale-105"
            >
              View My Experiences
            </Link>
            <Link
              href="/about"
              className="btn-secondary px-8 py-3 rounded-full glass-effect text-cyan-400 font-bold transition-all text-center border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              Get In Touch
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center flex-wrap"
            variants={itemVariants}
          >
            {[
              {
                icon: SiGmail,
                label: 'Email',
                href: 'mailto:bagusasp01@gmail.com',
                external: true,
              },
              {
                icon: SiLinkedin,
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/bagus-angkasawan-sumantri-putra',
                external: true,
              },
              {
                icon: SiGithub,
                label: 'GitHub',
                href: 'https://github.com/bagusangkasawan',
                external: true,
              },
              {
                icon: SiInstagram,
                label: 'Instagram',
                href: 'https://www.instagram.com/bagusangkasawan',
                external: true,
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  className="glass-effect px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:border-cyan-400/40 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="text-cyan-400 font-bold text-sm flex items-center justify-center sm:justify-start gap-2 transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    {social.label}
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
}
