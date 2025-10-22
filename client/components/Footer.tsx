import { Facebook, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/4bridgesinsurance' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/4bridges-insurance' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/4bridgesinsurance' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@4bridgesinsurance' },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-4" aria-label="4 Bridges Insurance Company">
              <Logo variant="full" size="sm" className="drop-shadow-lg" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
              Protecting American families since 1998 with comprehensive insurance and financial planning solutions.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded">A+ BBB Rating</span>
              <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded">50K+ Families</span>
              <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Licensed in 15 States</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                {label: 'About Us', path: '/about-us'},
                {label: 'Our Team', path: '/about-us#team'},
                {label: 'Careers', path: '/careers'},
                {label: 'Blog', path: '/blog'},
                {label: 'Contact', path: '/contact'},
                {label: 'FAQ', path: '/faq'}
              ].map((link, idx) => (
                <li key={idx} className="group">
                  <Link to={link.path} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 inline-block transform group-hover:translate-x-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Planning Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <h4 className="text-white font-bold mb-4">Planning Services</h4>
            <ul className="space-y-2">
              {[
                {label: 'Retirement Planning', path: '/retirement-planning'},
                {label: 'Estate Planning', path: '/estate-planning'}
              ].map((service, idx) => (
                <li key={idx} className="group">
                  <Link to={service.path} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 inline-block transform group-hover:translate-x-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Products */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-bold mb-4">Insurance Products</h4>
            <ul className="space-y-2">
              {[
                {label: 'Life Insurance', path: '/life-insurance'},
                {label: 'Health Insurance', path: '/health-insurance'},
                {label: 'Medicare Plans', path: '/medicare'},
                {label: 'Final Expense', path: '/final-expense'}
              ].map((service, idx) => (
                <li key={idx} className="group">
                  <Link to={service.path} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 inline-block transform group-hover:translate-x-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="font-semibold text-white">Phone</div>
                <a href="tel:8004274343" className="group-hover:translate-x-1 transition-transform inline-flex items-center" aria-label="Call 4 Bridges Insurance Company at 800-427-4343">(800) 427-4343</a>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="font-semibold text-white">Email</div>
                <a href="mailto:info@4bridgesinsurance.com" className="group-hover:translate-x-1 transition-transform inline-flex items-center" aria-label="Email info at 4 Bridges Insurance dot com">info@4bridgesinsurance.com</a>
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white">Address</div>
                <address className="not-italic leading-relaxed">
                  <span className="block">350 Fifth Avenue, Suite 4820</span>
                  <span className="block">New York, NY 10118</span>
                </address>
              </li>
              <li className="text-gray-400">
                <div className="font-semibold text-white">Hours</div>
                <div className="leading-relaxed">
                  Mon–Fri: 8:00 AM – 8:00 PM EST
                  <span className="block">Sat: 9:00 AM – 5:00 PM EST</span>
                </div>
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
              <span className="font-semibold text-white">Licensed in 15 US States.</span> NY License #LA-1234567 | CA License #0K12345 | TX License #1234567
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
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-blue-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {link.label}
                </Link>
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
