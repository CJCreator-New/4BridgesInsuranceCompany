import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, Award, Star } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  color: string;
  bgColor: string;
}

const badges: TrustBadge[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    label: 'SSL Secured',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    label: 'Data Protected',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    label: 'Verified Company',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: 'A+ BBB Rating',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: <Star className="w-6 h-6" />,
    label: '98% Satisfaction',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
];

export function TrustBadges({ variant = 'horizontal' }: { variant?: 'horizontal' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {badges.slice(0, 3).map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className={`flex items-center gap-2 ${badge.bgColor} ${badge.color} px-3 py-1.5 rounded-full text-xs font-semibold`}
          >
            {badge.icon}
            <span>{badge.label}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4"
    >
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          whileHover={{ scale: 1.05, y: -2 }}
          className={`flex items-center gap-3 ${badge.bgColor} ${badge.color} px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
        >
          {badge.icon}
          <span className="font-semibold text-sm">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
