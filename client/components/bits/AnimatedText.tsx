import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function FadeIn({ children, duration = 0.6, delay = 0 }: { children: ReactNode; duration?: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Typewriter({ text, speed = 50 }: { text: string; speed?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * (speed / 1000), duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function HyperSpeed({ children, duration = 0.4 }: { children: ReactNode; duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
