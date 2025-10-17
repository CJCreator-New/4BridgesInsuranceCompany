import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm font-semibold border border-blue-300">
              ✓ Trusted Insurance Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Protecting American Dreams—One Family at a Time
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              For over 25 years, we've helped 50,000+ families across 15 states secure their financial future. Your peace of mind is our mission.
            </p>
            
            {/* Customer Story Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mt-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Real Story: The Martinez Family</p>
                  <p className="text-sm text-blue-100">"When my husband passed unexpectedly, their life insurance gave us the time to grieve without financial worry. They truly care." - Maria M., Texas</p>
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

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Get an insurance quote"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="View insurance products"
              >
                View Products
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center animate-fade-in-up">
            <div className="relative w-full h-96">
              <OptimizedImage
                src="https://images.pexels.com/photos/5849553/pexels-photo-5849553.jpeg"
                alt="Family protection with insurance shield"
                className="w-full h-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900 to-transparent opacity-30"></div>
            </div>
          </div>
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
