import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { forwardRef } from 'react';

interface EnhancedFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
}

export const EnhancedFormInput = forwardRef<HTMLInputElement, EnhancedFormInputProps>(
  ({ label, error, success, icon, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          <motion.input
            ref={ref}
            whileFocus={{ 
              scale: 1.01,
              boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
            }}
            transition={{ duration: 0.2 }}
            className={`
              w-full px-4 py-3 ${icon ? 'pl-10' : ''} 
              border-2 rounded-xl
              ${error ? 'border-red-500 bg-red-50' : success ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}
              focus:outline-none focus:border-blue-500
              transition-all duration-200
              ${className}
            `}
            {...props}
          />
          
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {error && <AlertCircle className="w-5 h-5 text-red-500" />}
              {success && <CheckCircle className="w-5 h-5 text-green-500" />}
            </motion.div>
          )}
        </div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-600 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.p>
        )}
        
        {success && !error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-green-600 flex items-center gap-1"
          >
            <CheckCircle className="w-4 h-4" />
            Looks good!
          </motion.p>
        )}
      </div>
    );
  }
);

EnhancedFormInput.displayName = 'EnhancedFormInput';
