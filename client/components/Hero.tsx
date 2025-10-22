import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { FadeIn, ParticleBackground, RippleButton } from './bits';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 px-4 overflow-hidden">
      <ParticleBackground color="#2155CD" count={50} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <FadeIn duration={0.5} delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm font-semibold border border-blue-300">
              <Shield className="w-5 h-5" aria-hidden="true" />
              <span>Trusted Since 1998 | 50,000+ Families Protected</span>
            </div>
            </FadeIn>

            <FadeIn duration={0.6} delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Protecting American Dreams—One Family at a Time
            </h1>
            </FadeIn>
            
            <FadeIn duration={0.6} delay={0.3}>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed max-w-3xl">
              For over 25 years, we've helped 50,000+ families across 15 states secure their financial future. Your peace of mind is our mission.
            </p>
            </FadeIn>
            
            {/* Customer Story Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-white/15 to-blue-100/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 mt-6 shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Play className="w-7 h-7 text-blue-900" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-lg font-bold mb-2 text-white">Real Story: The Martinez Family</p>
                  <p className="text-base text-blue-50 leading-relaxed">"When my husband passed unexpectedly, their life insurance gave us the time to grieve without financial worry. They truly care." - Maria M., Texas</p>
                </div>
              </div>
            </motion.div>

            {/* Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Life Insurance',
                'Retirement Planning',
                'Health Insurance',
                'Medicare',
                'Final Expense',
                'Estate Planning'
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 transform hover:translate-x-1 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-blue-300">✓</span>
                  <span className="text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Enhanced */}
            <FadeIn duration={0.6} delay={0.5}>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <RippleButton
                color="#FDAF17"
                textColor="#2155CD"
                onClick={() => scrollToSection('contact')}
                className="shadow-2xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <Shield className="w-6 h-6" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </span>
              </RippleButton>
              <RippleButton
                color="rgba(255,255,255,0.1)"
                textColor="#ffffff"
                onClick={() => scrollToSection('products')}
                className="border-2 border-white backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </span>
              </RippleButton>
            </div>
            </FadeIn>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 flex flex-wrap items-center gap-6 text-blue-100"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">50,000+ Families Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">A+ BBB Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Image - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full h-96 group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop"
                alt="Happy multi-ethnic American family with children outdoors - representing family protection, financial security, and peace of mind with 4 Bridges Insurance"
                className="w-full h-full shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">25+ Years</p>
                    <p className="text-xs text-gray-600">Trusted Service</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
