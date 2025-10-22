import { ArrowRight, Phone, Shield } from 'lucide-react';

export function CTAStrip() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-blue-100 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Secure Your Family's Future?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Don't wait for tomorrow to protect what matters most. Get your free, no-obligation quote today
            and discover how 4 Bridges Insurance can provide the peace of mind your family deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:via-orange-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 transform hover:-translate-y-2 overflow-hidden"
              aria-label="Get your free insurance quote now"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-3">
                <Shield className="w-6 h-6" aria-hidden="true" />
                Get Free Quote Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </button>

            <a
              href="tel:8004274343"
              className="group relative border-3 border-white bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-white/40 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 transform hover:-translate-y-2"
              aria-label="Call us at 800-427-4343"
            >
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" aria-hidden="true" />
                Call (800) 427-4343
              </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">98% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}