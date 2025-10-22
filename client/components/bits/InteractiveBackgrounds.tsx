import { motion } from 'framer-motion';

export function ParticleBackground({ color = '#2155CD', count = 45 }: { color?: string; count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            backgroundColor: color,
            opacity: Math.random() * 0.5 + 0.2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function AnimatedWaves({ color = '#3b82f6' }: { color?: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.3"
          animate={{ d: ['M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z', 'M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z'] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.path
          d="M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.5"
          animate={{ d: ['M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z', 'M0,70 Q300,120 600,70 T1200,70 L1200,120 L0,120 Z'] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

export function GradientBackground({ colors = ['#3b82f6', '#8b5cf6', '#ec4899'] }: { colors?: string[] }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${colors.join(', ')})`,
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}
