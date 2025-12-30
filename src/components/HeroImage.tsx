'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="flex justify-center md:justify-end order-1 md:order-2"
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
    >
      <motion.div
        className="relative w-full max-w-lg overflow-hidden"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        style={{ willChange: 'transform' }}
      >
        <motion.div
          className="relative w-full aspect-square drop-shadow-[0_5px_15px_rgba(6,182,212,0.2)] rounded-3xl overflow-hidden"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          style={{ willChange: 'transform' }}
        >
          <Image
            src="/my-photo.webp"
            alt="Bagus Angkasawan"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-contain opacity-95"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
