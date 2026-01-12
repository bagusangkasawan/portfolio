'use client';

import { motion } from 'framer-motion';

interface ScrollHintProps {
  show: boolean;
}

export default function ScrollHint({ show }: ScrollHintProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      exit={{ opacity: 0 }}
      className="hidden lg:block lg:fixed lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:z-40"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-cyan-400 text-sm font-medium">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </div>
    </motion.div>
  );
}
