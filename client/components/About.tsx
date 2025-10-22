export default function About() {
  const values = [
    {
      icon: '❤️',
      title: 'Financial Empowerment',
      description: 'We help families build lasting financial security through expert guidance and personalized solutions tailored to your unique situation.'
    },
    {
      icon: '🎯',
      title: 'Professional Expertise',
      description: 'Our team of licensed professionals has decades of combined experience in insurance and comprehensive financial planning.'
    },
    {
      icon: '🤝',
      title: 'Personalized Service',
      description: 'We take time to understand your unique needs and customize solutions that fit your family\'s goals and future aspirations.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 hover-lift">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
                alt="Multi-generational American family at home - representing family security, togetherness, and financial protection with 4 Bridges Insurance"
                className="w-full h-96 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900 to-transparent opacity-20 hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent rounded-2xl text-white">
                <p className="text-lg font-semibold">Trusted by thousands of families nationwide</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About 4 Bridges Insurance Company
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At 4 Bridges Insurance Company, we believe that financial security is the foundation of a strong family. Our mission is to empower US families with comprehensive insurance solutions that provide peace of mind and protect their most valuable assets.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">25+ Years of Industry Leadership</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 to-white transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
