import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TrueFocusProps {
  children: ReactNode;
  delay?: number;
}

export function TrueFocus({ children, delay = 0 }: TrueFocusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(33, 85, 205, 0.3)' }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-gold-500/20 rounded-lg blur-xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
