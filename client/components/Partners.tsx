export default function Partners() {
  const partners = [
    { name: 'Secure Guard', logo: 'SG', color: 'from-blue-500 to-blue-600' },
    { name: 'Family Shield', logo: 'FS', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Trust Plus', logo: 'TP', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Life Secure', logo: 'LS', color: 'from-blue-600 to-blue-700' },
    { name: 'Future Guard', logo: 'FG', color: 'from-sky-500 to-sky-600' },
    { name: 'Prime Cover', logo: 'PC', color: 'from-blue-400 to-blue-700' },
  ];

  return (
    <section id="partners" className="py-16 md:py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm">TRUSTED PARTNERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Insurance Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading insurance carriers to bring you the best coverage options and competitive rates available in the market.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex items-center justify-center h-40 border border-gray-200 hover:border-blue-300 cursor-pointer hover:-translate-y-2"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                  {partner.logo}
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">{partner.name}</p>
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
