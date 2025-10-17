import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Martinez",
    location: "Texas",
    rating: 5,
    text: "When my husband passed unexpectedly, their life insurance gave us the time to grieve without financial worry. They truly care about families.",
    product: "Life Insurance"
  },
  {
    name: "Robert Williams",
    location: "Colorado",
    rating: 5,
    text: "We started planning at 30 and retired early at 60 with $1.8M saved. Best decision we ever made. Thank you for the guidance!",
    product: "Retirement Planning"
  },
  {
    name: "Dorothy Kim",
    location: "Pennsylvania",
    rating: 5,
    text: "Medicare was so confusing until I called them. They explained everything in plain English and found me the perfect plan. My medications cost $15/month now instead of $400!",
    product: "Medicare"
  },
  {
    name: "Sarah Johnson",
    location: "Ohio",
    rating: 5,
    text: "My daughter's diabetes supplies are fully covered. We pay $50/month for medications that would cost $1,200 without insurance. Life-changing!",
    product: "Health Insurance"
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
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[current].text}"</p>
            <span className="sr-only">testimonial review</span>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                <p className="text-sm text-gray-600">{testimonials[current].location} • {testimonials[current].product}</p>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
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
