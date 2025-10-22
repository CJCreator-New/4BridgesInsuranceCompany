import ProductCard from './ProductCard';
import { Heart, Target, Stethoscope, Building2, Shield, FileText } from 'lucide-react';
import { FadeIn, AnimatedCard } from './bits';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function Products() {
  const products = [
    {
      title: 'Life Insurance',
      icon: <Heart className="w-8 h-8" />,
      description: 'Comprehensive life insurance coverage to protect your family\'s financial future. Ensure your loved ones are taken care of with flexible policy options tailored to your needs.',
    },
    {
      title: 'Retirement Planning',
      icon: <Target className="w-8 h-8" />,
      description: 'Strategic retirement planning services to help you achieve financial independence. Build a secure retirement with personalized investment strategies and expert guidance.',
    },
    {
      title: 'Health Insurance',
      icon: <Stethoscope className="w-8 h-8" />,
      description: 'Complete health insurance solutions for you and your family. Access quality healthcare coverage with affordable rates and comprehensive medical benefits.',
    },
    {
      title: 'Medicare',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Expert Medicare guidance to maximize your benefits. Navigate Medicare options with confidence and choose coverage that fits your healthcare needs.',
    },
    {
      title: 'Final Expense',
      icon: <Shield className="w-8 h-8" />,
      description: 'Final expense insurance to ease the burden on your family. Ensure your end-of-life expenses are covered, giving your loved ones peace of mind.',
    },
    {
      title: 'Estate Planning',
      icon: <FileText className="w-8 h-8" />,
      description: 'Comprehensive estate planning services to protect your legacy. Organize your assets and ensure your wishes are honored with proper documentation.',
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn duration={0.6} delay={0.1}>
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm">OUR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover comprehensive insurance solutions designed to protect your family and secure your financial future.
          </p>
        </div>
        </FadeIn>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={staggerItem}>
              <AnimatedCard>
                <ProductCard
                  title={product.title}
                  icon={product.icon}
                  description={product.description}
                  index={index}
                />
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
