'use client';

import { motion } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Zap,
  Trophy,
  Medal,
  Star,
} from 'lucide-react';
import {
  SiTensorflow,
  SiAlibabacloud,
  SiNvidia,
  SiGooglecolab,
  SiGooglecloud,
  SiJavascript
} from 'react-icons/si';
import { FaMicrosoft, FaFileAlt, FaAws } from 'react-icons/fa';

export default function CertificationsPage() {
  const certifications = [
    {
      name: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'June 1, 2025',
      url: 'https://learn.microsoft.com/en-us/users/bagusangkasawan/credentials/dab289db842acf65',
      icon: FaMicrosoft,
    },
    {
      name: 'Dev Cert for Machine Learning with TensorFlow',
      issuer: 'dev.cert by dev.id',
      date: 'May 19, 2025',
      url: 'https://dev.id/certificate/verify/41VQMPRWM8',
      icon: SiTensorflow,
    },
    {
      name: 'Cloud Computing',
      issuer: 'Alibaba Cloud',
      date: 'May 22, 2024',
      url: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_4b2bc5998838d997de06df7e5bcd2695.png',
      icon: SiAlibabacloud,
    },
    {
      name: 'Junior Web Developer',
      issuer: 'BNSP (LSP Informatika)',
      date: 'October 20, 2023',
      url: 'https://drive.google.com/file/d/1F0m-g4tNLJW105ACH2kTKFedq-YZSmkg/view',
      icon: FaFileAlt,
    },
  ];

  const professionalDevelopment = [
    {
      program: 'LASKAR AI 2025',
      role: 'AI Engineer',
      type: 'Bootcamp',
      period: 'February 2025 - July 2025',
      description: 'Intensive program with practical skills in data preprocessing, model development, and deployment using TensorFlow.',
      icon: SiNvidia,
    },
    {
      program: 'BANGKIT ACADEMY 2024 BATCH 2',
      role: 'Machine Learning',
      type: 'Independent Study',
      period: 'September 2024 - January 2025',
      description: 'Building, training, and deploying ML models using TensorFlow with capstone project on education.',
      icon: SiGooglecolab,
    },
    {
      program: 'ORBIT FUTURE ACADEMY',
      role: 'AWS re/Start Batch 9',
      type: 'Bootcamp',
      period: 'July - September 2024',
      description: 'Foundational AWS skills with hands-on experience in cloud architecture and systems operations.',
      icon: FaAws,
    },
    {
      program: 'SYNRGY ACADEMY BATCH 7',
      role: 'Full Stack Web Javascript',
      type: 'Bootcamp',
      period: 'March - July 2024',
      description: 'Full Stack Web Development with ReactJS, NodeJS, ExpressJS, and PostgreSQL.',
      icon: SiJavascript,
    },
    {
      program: 'BANGKIT ACADEMY 2023 BATCH 2',
      role: 'Cloud Computing',
      type: 'Independent Study',
      period: 'August 2023 - January 2024',
      description: 'Intensive Cloud Computing program with Google Cloud Platform and real-world projects.',
      icon: SiGooglecloud,
    },
  ];

  const awards = [
    {
      title: 'CoMate - Top 50 (Rank 22) Llama Project Incubator',
      issuer: 'Meta x Hacktiv8 Indonesia',
      type: 'Hackathon',
      date: 'October 2025',
      icon: Trophy,
    },
    {
      title: 'CheckMate - Top 20 (Best 4 Per Theme) Hackathon',
      issuer: 'Hackinfest Sucofindo 2025',
      type: 'Hackathon',
      date: 'September 2025',
      icon: Medal,
    },
    {
      title: 'EduMate - Winner, IDCamp Developer Challenge #2',
      issuer: 'Indosat Ooredoo Hutchison x SheHacks',
      type: 'Developer Challenge',
      date: 'August 2025',
      icon: Star,
    },
    {
      title: 'MentyMate - Top 30 Hackathon Yayasan Peduli BUMN',
      issuer: 'Pikiran Terbaik Negeri x elevAIte',
      type: 'Hackathon',
      date: 'July 2025',
      icon: Trophy,
    },
    {
      title: 'MentalMate - Winner, Microsoft Online Hackathon 2025',
      issuer: 'Digital Talent Scholarship x elevAIte',
      type: 'Hackathon',
      date: 'June 2025',
      icon: Medal,
    },
    {
      title: 'CourseMate - Top 5 Capstone Project Teams',
      issuer: 'Bangkit Academy 2024 Batch 2',
      type: 'Independent Study',
      date: 'January 2025',
      icon: Star,
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
          Certifications & Achievements
        </motion.h1>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Award className="inline w-8 h-8 mr-2" /> Certifications
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-6 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <cert.icon className="w-10 h-10 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-400 group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-white font-semibold mt-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

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
            <GraduationCap className="inline w-8 h-8 mr-2" /> Professional Development
          </motion.h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {professionalDevelopment.map((dev, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4">
                  <dev.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
                          {dev.program}
                        </h3>
                        <p className="text-white font-semibold">
                          {dev.role}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-purple-300 font-semibold">
                          {dev.type}
                        </p>
                        <p className="text-gray-400">{dev.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {dev.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Awards & Honors */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Trophy className="inline w-8 h-8 mr-2" /> Honors & Awards
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                className="glass-effect p-6 rounded-2xl text-center hover:border-pink-500/50 transition-all duration-300 group flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center justify-center flex-col min-h-[140px]">
                  <award.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-cyan-400 group-hover:text-pink-400 transition-colors mb-2 line-clamp-3">
                    {award.title}
                  </h3>
                </div>
                <div className="mt-auto">
                  <p className="text-purple-300 font-semibold text-sm mb-2">
                    {award.issuer}
                  </p>
                  <p className="text-xs text-gray-400">{award.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-cyan-400 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Zap className="inline w-6 h-6 mr-2" /> Achievement Summary
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-3xl font-bold text-cyan-400 mb-2">{certifications.length}</p>
              <p className="text-gray-300 text-sm">Official Certifications</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-3xl font-bold text-purple-400 mb-2">{professionalDevelopment.length}</p>
              <p className="text-gray-300 text-sm">Bootcamp Programs</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-3xl font-bold text-pink-400 mb-2">{awards.length}</p>
              <p className="text-gray-300 text-sm">Major Awards</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-3xl font-bold text-green-400 mb-2">
                {certifications.length + professionalDevelopment.length + awards.length}
              </p>
              <p className="text-gray-300 text-sm">Total Programs</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
