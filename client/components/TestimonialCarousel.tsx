import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FallingText } from './bits';

const testimonials = [
  {
    name: "Robert Williams",
    location: "Colorado",
    rating: 5,
    text: "We started planning at 30 and retired early at 60 with $1.8M saved. Best decision we ever made. Thank you for the guidance!",
    product: "Retirement Planning",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Jessica & Tom Anderson",
    location: "California",
    rating: 5,
    text: "We bought our first home at 28 and got life insurance the same week. Five years later, we have two kids and $500K in coverage for just $45/month. Best investment we ever made!",
    product: "Life Insurance",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Dorothy Kim",
    location: "Pennsylvania",
    rating: 5,
    text: "Medicare was so confusing until I called them. They explained everything in plain English and found me the perfect plan. My medications cost $15/month now instead of $400!",
    product: "Medicare",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Carlos Ramirez",
    location: "Florida",
    rating: 5,
    text: "As a small business owner, I needed key person insurance. They set up a $1M policy that protects my family AND my employees. My premiums are tax-deductible too!",
    product: "Business Insurance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "The Thompson Family",
    location: "Illinois",
    rating: 5,
    text: "Their whole life policy helped us save $50,000 for our daughter's college. She graduated debt-free! The cash value grew tax-free and we still have the death benefit.",
    product: "Whole Life Insurance",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Robert & Linda Chen",
    location: "Arizona",
    rating: 5,
    text: "At 72 and 70, we thought it was too late for life insurance. They found us a $25K final expense policy for $89/month. Our kids won't have to worry about funeral costs.",
    product: "Final Expense",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Marcus Williams",
    location: "Georgia",
    rating: 5,
    text: "When I broke my back in a car accident, disability insurance paid $4,500/month for 18 months. I kept my house and my family stayed afloat. Thank God I had coverage!",
    product: "Disability Insurance",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "The Rodriguez Family",
    location: "Texas",
    rating: 5,
    text: "Three generations insured with 4 Bridges! Grandparents have Medicare Advantage, parents have term life, and we set up college savings for the grandkids. One-stop shop!",
    product: "Family Planning",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Sarah Johnson",
    location: "Ohio",
    rating: 5,
    text: "My daughter's diabetes supplies are fully covered. We pay $50/month for medications that would cost $1,200 without insurance. Life-changing!",
    product: "Health Insurance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces"
  },
  {
    name: "Maria Martinez",
    location: "Texas",
    rating: 5,
    text: "When my husband passed unexpectedly, their life insurance gave us the time to grieve without financial worry. They truly care about families.",
    product: "Life Insurance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces"
  }
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full text-blue-900 font-bold text-lg mb-4 shadow-lg"
          >
            <span role="img" aria-label="star">⭐</span> What Our Clients Say
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <FallingText delay={0.1}>Real Stories,</FallingText>{' '}
            <FallingText delay={0.2}>Real Results</FallingText>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-xl max-w-3xl mx-auto"
          >
            Real stories from real families who've trusted us with their most important asset—their financial security
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-500 hover:border-blue-200"
              role="article"
              aria-label={`Testimonial from ${testimonials[current].name}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex mb-6"
                role="img"
                aria-label={`${testimonials[current].rating} star rating`}
              >
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-7 h-7 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl md:text-3xl text-gray-700 mb-8 italic leading-relaxed font-medium"
              >
                "{testimonials[current].text}"
              </motion.blockquote>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
                    src={testimonials[current].image}
                    alt={`${testimonials[current].name} - satisfied ${testimonials[current].product} customer`}
                    className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-blue-200"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-xl mb-1">{testimonials[current].name}</p>
                    <p className="text-base text-gray-600 font-medium">{testimonials[current].location} • {testimonials[current].product}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prev}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={next}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.article>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
