export default function Partners() {
  const partners = [
    {
      name: 'State Farm',
      logo: 'SF',
      color: 'from-red-500 to-red-600',
      alt: 'State Farm Insurance logo - A.M. Best rated A++ (Superior)',
      description: 'America\'s #1 auto and home insurer'
    },
    {
      name: 'Allstate',
      logo: 'AS',
      color: 'from-blue-500 to-blue-600',
      alt: 'Allstate Insurance logo - Nationwide coverage with 24/7 claims',
      description: 'Nationwide coverage with good hands protection'
    },
    {
      name: 'Progressive',
      logo: 'PG',
      color: 'from-indigo-500 to-indigo-600',
      alt: 'Progressive Insurance logo - Name Your Price tool available',
      description: 'Snapshot discount program and competitive rates'
    },
    {
      name: 'Nationwide',
      logo: 'NW',
      color: 'from-blue-600 to-blue-700',
      alt: 'Nationwide Insurance logo - Life, auto, home, and business coverage',
      description: 'Full-service insurance for life and property'
    },
    {
      name: 'Liberty Mutual',
      logo: 'LM',
      color: 'from-yellow-500 to-yellow-600',
      alt: 'Liberty Mutual Insurance logo - Responsibility.org sponsor',
      description: 'Auto, home, and life insurance solutions'
    },
    {
      name: 'GEICO',
      logo: 'GC',
      color: 'from-green-500 to-green-600',
      alt: 'GEICO Insurance logo - 15 minutes could save you 15% or more',
      description: 'Low-cost auto insurance with fast claims'
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-28 px-4 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold text-lg shadow-xl">
            🤝 Our Insurance Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Carrier Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with leading insurance carriers to bring you the best coverage options and competitive rates available in the market. Our relationships ensure you get the protection you need at the price you deserve.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center justify-center h-44 border border-gray-200 hover:border-blue-300 cursor-pointer hover:-translate-y-3 transform hover:scale-105"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
              role="article"
              aria-label={`${partner.name} insurance carrier partner`}
            >
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}
                  role="img"
                  aria-label={partner.alt}
                >
                  {partner.logo}
                </div>
                <p className="text-base font-bold text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">{partner.name}</p>
                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="text-center">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Verified & Certified:</span> All our partner carriers are A.M. Best rated and fully licensed to operate in the United States, ensuring the highest standards of financial security and customer protection.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
