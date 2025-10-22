import { Shield, Users, Award, Clock, DollarSign, Heart } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Trusted',
      description: 'Fully licensed in 15 states with A+ BBB rating and A.M. Best financial strength rating.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Family-Owned & Operated',
      description: 'We understand family needs because we are a family business serving families since 1998.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: '98% customer satisfaction with thousands of 5-star reviews and industry recognition.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: '25+ Years Experience',
      description: 'Decades of insurance expertise helping 50,000+ families secure their financial future.',
      color: 'orange'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Access to multiple A-rated carriers for the best rates without compromising coverage.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every client gets dedicated support with customized solutions for their unique needs.',
      color: 'rose'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
    rose: 'bg-rose-500 hover:bg-rose-600'
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why 50,000+ Families Trust 4 Bridges Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another insurance company. We're your partners in building financial security,
            backed by decades of experience and a commitment to putting families first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animation: `slideInUp 0.8s ease-out ${index * 0.1}s both` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorClasses[reason.color as keyof typeof colorClasses]} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <reason.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">A+</div>
              <div className="text-sm text-gray-600">BBB Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">A</div>
              <div className="text-sm text-gray-600">A.M. Best Rated</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}