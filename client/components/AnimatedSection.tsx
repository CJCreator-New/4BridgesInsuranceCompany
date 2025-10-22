/**
 * AnimatedSection Component
 * Wrapper for scroll-triggered animations
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, viewportConfig, withReducedMotion } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const variants = withReducedMotion(fadeInUp);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
