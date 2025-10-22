import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BounceLoaderProps {
  children: ReactNode;
  delay?: number;
}

export function BounceLoader({ children, delay = 0 }: BounceLoaderProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
