import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function FeaturedBadge() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="absolute -top-3 -right-3 z-10"
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
      >
        <Star className="w-3 h-3 fill-white" />
        Featured
      </motion.div>
    </motion.div>
  );
}
