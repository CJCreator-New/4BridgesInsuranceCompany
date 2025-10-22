import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Info, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

interface InfoBannerProps {
  type?: 'info' | 'success' | 'warning' | 'urgent';
  message: string;
  dismissible?: boolean;
}

export function InfoBanner({ type = 'info', message, dismissible = true }: InfoBannerProps) {
  const [visible, setVisible] = useState(true);

  const config = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: Info },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: CheckCircle },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: AlertCircle },
    urgent: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: AlertCircle },
  };

  const { bg, border, text, icon: Icon } = config[type];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`${bg} ${border} border-2 rounded-lg p-4 mb-6`}
        >
          <div className="flex items-start gap-3">
            <Icon className={`w-5 h-5 ${text} flex-shrink-0 mt-0.5`} />
            <p className={`${text} flex-1 font-medium`}>{message}</p>
            {dismissible && (
              <button
                onClick={() => setVisible(false)}
                className={`${text} hover:opacity-70 transition-opacity`}
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
