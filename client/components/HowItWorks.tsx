import { Phone, FileText, Shield, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'Call us or fill out our online form for a no-obligation consultation. We\'ll discuss your needs and goals.',
      number: '01'
    },
    {
      icon: FileText,
      title: 'Customized Quote',
      description: 'Based on your information, we provide personalized quotes from multiple A-rated insurance carriers.',
      number: '02'
    },
    {
      icon: Shield,
      title: 'Policy Selection',
      description: 'Together we review options and select the perfect coverage that fits your budget and protection needs.',
      number: '03'
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'Enjoy lifetime support with policy reviews, claims assistance, and expert guidance whenever you need it.',
      number: '04'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Path to Financial Security in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting the right insurance coverage doesn't have to be complicated.
            Our streamlined process ensures you get expert guidance every step of the way.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
                style={{ animation: `slideInUp 0.8s ease-out ${index * 0.2}s both` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl mb-6 group-hover:from-blue-200 group-hover:to-green-200 transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                  <step.icon className="w-10 h-10 text-blue-600" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-6 group"
              style={{ animation: `slideInLeft 0.8s ease-out ${index * 0.2}s both` }}
            >
              {/* Step number and icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-4 group-hover:from-blue-200 group-hover:to-green-200 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have secured their financial future with 4 Bridges Insurance.
              Your free consultation is just one call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8004274343"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (800) 427-4343
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}