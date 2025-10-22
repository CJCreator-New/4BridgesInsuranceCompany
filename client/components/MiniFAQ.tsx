import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function MiniFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does life insurance cost?",
      answer: "Life insurance costs vary based on age, health, coverage amount, and policy type. We work with multiple A-rated carriers to find you the most competitive rates. Most families can get comprehensive coverage for $50-200/month."
    },
    {
      question: "What types of insurance do you offer?",
      answer: "We specialize in life insurance, health insurance, Medicare plans, final expense insurance, retirement planning, and estate planning. All policies are from A-rated, financially stable insurance companies."
    },
    {
      question: "Do you work with all insurance companies?",
      answer: "We partner with the top-rated insurance carriers in the industry including Mutual of Omaha, Transamerica, American National, and many others. This gives you access to the best rates and coverage options."
    },
    {
      question: "How long does it take to get approved?",
      answer: "Most applications are processed within 24-48 hours. Some policies may require additional medical information, but we guide you through the entire process and keep you updated every step of the way."
    },
    {
      question: "Can I change my policy later?",
      answer: "Yes! Most policies allow you to adjust coverage amounts, add riders, or convert term life to permanent life insurance. We review your policy annually and help you make changes as your needs evolve."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Common Questions About Insurance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get quick answers to the most common insurance questions.
            Can't find what you're looking for? Contact us for personalized assistance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              style={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" aria-hidden="true" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100"
                  style={{ animation: 'slideDown 0.3s ease-out' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our licensed insurance professionals are here to help you find the perfect coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8004274343"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Call (800) 427-4343
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
      `}</style>
    </section>
  );
}