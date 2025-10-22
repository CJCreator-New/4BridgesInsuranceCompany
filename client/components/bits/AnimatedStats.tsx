import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedStatsProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

export function AnimatedStats({ value, label, prefix = '', suffix = '', duration = 2, icon }: AnimatedStatsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      {icon && <div className="mb-3 text-blue-600">{icon}</div>}
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}
