import { Facebook, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Licensing Information', href: '/about-us' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6">
                <span className="text-white font-bold">4B</span>
              </div>
              <div>
                <h3 className="text-white font-bold group-hover:text-blue-400 transition-colors">4 Bridges</h3>
                <p className="text-xs text-gray-400">Insurance</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
              Connecting families with financial security through comprehensive insurance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                {label: 'Home', path: '/'},
                {label: 'About Us', path: '/about-us'},
                {label: 'Our Team', path: '/team'},
                {label: 'Blog', path: '/blog'},
                {label: 'FAQ', path: '/faq'},
                {label: 'Insurance Glossary', path: '/insurance-glossary'},
                {label: 'Products', path: '/life-insurance'},
                {label: 'Careers', path: '/careers'}
              ].map((link, idx) => (
                <li key={idx} className="group">
                  <a href={link.path} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 inline-block transform group-hover:translate-x-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[{label: 'Life Insurance', path: '/life-insurance'}, {label: 'Health Insurance', path: '/health-insurance'}, {label: 'Retirement Planning', path: '/retirement-planning'}, {label: 'Medicare', path: '/medicare'}].map((service, idx) => (
                <li key={idx} className="group">
                  <a href={service.path} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 inline-block transform group-hover:translate-x-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-blue-400 transition-colors group cursor-pointer">
                <span className="font-semibold">Phone:</span><br />
                <span className="group-hover:translate-x-1 transition-transform inline-block">(555) 123-4567</span>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors group cursor-pointer">
                <span className="font-semibold">Email:</span><br />
                <span className="group-hover:translate-x-1 transition-transform inline-block">info@4bridges.com</span>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="font-semibold">Address:</span><br />
                123 Main Street<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side */}
          <div className="space-y-3">
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Licensed in 15 US States.</span> NY License #12345678 | CA License #87654321 | TX License #11223344
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> This website is for informational purposes only. For specific insurance quotes and policy details, please contact our representatives directly. Insurance products are subject to underwriting approval.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 justify-center md:justify-end">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 group"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left text-sm text-gray-500 gap-4 md:gap-0">
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-300 transition-colors group">
              <span className="group-hover:translate-x-1 transition-transform">© {currentYear} 4 Bridges Insurance Company. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex items-center justify-center md:justify-end gap-6">
              {footerLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </footer>
  );
}
