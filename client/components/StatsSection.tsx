import { AnimatedCounter } from './AnimatedCounter';
import { Users, Shield, MapPin, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { icon: Users, value: 50000, suffix: '+', label: 'Families Protected' },
    { icon: MapPin, value: 15, suffix: ' States', label: 'Nationwide Coverage' },
    { icon: Shield, value: 25, suffix: ' Years', label: 'Industry Experience' },
    { icon: Award, value: 98, suffix: '%', label: 'Customer Satisfaction' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
