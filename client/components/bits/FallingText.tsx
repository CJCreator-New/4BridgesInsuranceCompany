import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FallingTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FallingText({ children, delay = 0, className = '' }: FallingTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -30, rotateX: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
