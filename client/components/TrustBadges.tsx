import { Shield, Award, CheckCircle, Star } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    { icon: Shield, label: 'BBB Accredited', rating: 'A+', color: 'blue' },
    { icon: Award, label: 'AM Best Rated', rating: 'A (Excellent)', color: 'green' },
    { icon: CheckCircle, label: 'DOI Licensed', rating: '15 States', color: 'purple' },
    { icon: Star, label: '98% Satisfaction', rating: '5,000+ Reviews', color: 'yellow' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 text-sm font-semibold mb-8 uppercase tracking-wide">
          Trusted & Certified
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="text-center group hover:scale-105 transition-transform">
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-${badge.color}-100 flex items-center justify-center group-hover:bg-${badge.color}-200 transition-colors`}>
                <badge.icon className={`w-8 h-8 text-${badge.color}-600`} />
              </div>
              <p className="font-bold text-gray-900 text-sm">{badge.label}</p>
              <p className="text-xs text-gray-600">{badge.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
