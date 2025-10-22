/**
 * Page Template with Standard Animations
 * Copy this template for consistent animations across all pages
 */

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import SEO from './SEO';
import { fadeInDown, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

interface PageTemplateProps {
  title: string;
  description: string;
  seoKeywords?: string;
  children?: React.ReactNode;
}

export function PageTemplate({ title, description, seoKeywords, children }: PageTemplateProps) {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO 
        title={title}
        description={description}
        keywords={seoKeywords}
      />
      <div className="bg-gray-50">
        
        {/* Hero Section with Standard Animations */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button - Slide in from left */}
            <motion.button
              onClick={() => navigate('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </motion.button>
            
            {/* Title - Fade in down */}
            <motion.h1
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {title}
            </motion.h1>
            
            {/* Description - Fade in up with delay */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-2xl"
            >
              {description}
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </section>
      </div>
    </Layout>
  );
}

/**
 * Animated Card Grid Component
 * Use for consistent card animations
 */
interface AnimatedCardGridProps {
  items: Array<{
    id: string | number;
    content: React.ReactNode;
  }>;
  columns?: 2 | 3 | 4;
  hoverEffect?: boolean;
}

export function AnimatedCardGrid({ items, columns = 3, hoverEffect = true }: AnimatedCardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`grid ${gridCols[columns]} gap-6`}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
          whileHover={hoverEffect ? { y: -4, scale: 1.02 } : undefined}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Animated CTA Button
 * Use for all call-to-action buttons
 */
interface AnimatedCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function AnimatedCTA({ children, onClick, variant = 'primary', className = '' }: AnimatedCTAProps) {
  const baseClass = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`px-8 py-3 rounded-lg font-semibold transition-colors ${baseClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}

/**
 * Animated List
 * Use for feature lists, benefits, etc.
 */
interface AnimatedListProps {
  items: string[];
  icon?: React.ReactNode;
}

export function AnimatedList({ items, icon }: AnimatedListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-3"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="flex items-start gap-3"
        >
          {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
          <p className="text-gray-600">{item}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
