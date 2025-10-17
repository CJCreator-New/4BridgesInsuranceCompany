import { useState } from 'react';
import { Menu, X, ChevronDown, Heart, Target, Stethoscope, Building2, Shield, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Partners', path: '/partners' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const products = [
    { label: 'Life Insurance', path: '/life-insurance', icon: <Heart className="w-5 h-5" /> },
    { label: 'Retirement Planning', path: '/retirement-planning', icon: <Target className="w-5 h-5" /> },
    { label: 'Health Insurance', path: '/health-insurance', icon: <Stethoscope className="w-5 h-5" /> },
    { label: 'Medicare', path: '/medicare', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Final Expense Insurance', path: '/final-expense-insurance', icon: <Shield className="w-5 h-5" /> },
    { label: 'Estate Planning', path: '/estate-planning', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex-shrink-0 group cursor-pointer"
            aria-label="Go to home page"
          >
            <div className="flex items-center space-x-3 transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">4B</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">4 Bridges</h1>
                <p className="text-xs text-blue-600">Insurance</p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {/* Products Dropdown */}
              <li className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}>
                <button 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="Products menu"
                  aria-expanded={isProductsOpen}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {products.map((product) => (
                      <button
                        key={product.path}
                        onClick={() => navigate(product.path)}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                      >
                        <div className="mr-3 text-blue-600">{product.icon}</div>
                        <span className="text-gray-700 hover:text-blue-600">{product.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <SearchBar />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-110"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-spin" style={{ animationDuration: '0.3s' }} />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-down">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 to-transparent font-medium transition-all duration-200 transform hover:translate-x-2"
                  style={{
                    animation: `slideInLeft 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Products Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Products</div>
                {products.map((product, index) => (
                  <button
                    key={product.path}
                    onClick={() => {
                      navigate(product.path);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 to-transparent font-medium transition-all duration-200 transform hover:translate-x-2 flex items-center"
                    style={{
                      animation: `slideInLeft 0.3s ease-out ${(navItems.length + index) * 0.05}s both`,
                    }}
                  >
                    <div className="mr-3 text-blue-600">{product.icon}</div>
                    {product.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
