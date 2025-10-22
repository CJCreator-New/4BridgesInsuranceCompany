import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

export function RippleButton({
  children,
  onClick,
  color = '#FDAF17',
  textColor = '#2155CD',
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  className?: string;
}) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => setRipples((r) => r.filter((ripple) => ripple.id !== id)), 600);
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg ${className}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export function AnimatedCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl p-6 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
