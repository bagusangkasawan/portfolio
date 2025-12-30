'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ScrollHint from './ScrollHint';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isHomePage) return;

    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 750);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isHomePage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
      {!isHomePage && <ScrollHint show={showScrollHint} />}
    </motion.div>
  );
}
