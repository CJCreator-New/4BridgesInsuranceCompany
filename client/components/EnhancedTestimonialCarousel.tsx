import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maria Rodriguez',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'When my husband passed unexpectedly, their $500K life insurance policy gave us time to grieve without financial worry. The claims process was smooth and compassionate.',
    product: 'Life Insurance'
  },
  {
    name: 'James Chen',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Navigating Medicare was overwhelming until I found 4 Bridges. They explained every option clearly and saved me $2,400 annually on my Medigap plan.',
    product: 'Medicare'
  },
  {
    name: 'Sarah Johnson',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'As a single mom, I needed affordable health insurance. They found me an ACA plan with $0 premium and great coverage for my kids. Life-changing!',
    product: 'Health Insurance'
  },
  {
    name: 'Robert Williams',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Retirement planning seemed impossible at 55. Now at 62, I have a solid 401(k) strategy and will retire comfortably at 67. Thank you!',
    product: 'Retirement Planning'
  }
];

export function EnhancedTestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Quote className="w-12 h-12 text-blue-600 opacity-20" />
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                <p className="text-sm text-gray-600">{testimonials[current].location}</p>
                <p className="text-xs text-blue-600 font-semibold">{testimonials[current].product}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
