import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface HighlightCalloutProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'important';
  title?: string;
}

export function HighlightCallout({ children, type = 'info', title }: HighlightCalloutProps) {
  const config = {
    info: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-900', icon: 'text-blue-600' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-900', icon: 'text-yellow-600' },
    important: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-900', icon: 'text-red-600' },
  };

  const { bg, border, text, icon } = config[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${bg} ${border} border-l-4 rounded-r-lg p-6 my-6`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="flex items-start gap-3"
      >
        <AlertCircle className={`w-6 h-6 ${icon} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          {title && <h4 className={`font-bold ${text} mb-2`}>{title}</h4>}
          <div className={`${text} text-sm leading-relaxed`}>{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
