import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Shield, Target, HeartPulse, Cross, DollarSign, Scale, Users, Briefcase, Mail, Handshake, FileText, HelpCircle, BookOpen, Tag } from 'lucide-react';

const pages = [
  {
    path: '/',
    name: 'Home',
    icon: <Home className="w-6 h-6" />,
    description: 'Main landing page',
    color: 'bg-blue-500',
    screenshot: '/screenshots/home.png',
  },
  {
    path: '/life-insurance',
    name: 'Life Insurance',
    icon: <Shield className="w-6 h-6" />,
    description: 'Protect Your Loved Ones',
    color: 'bg-green-500',
    screenshot: '/screenshots/life-insurance.png',
  },
  {
    path: '/retirement-planning',
    name: 'Retirement Planning',
    icon: <Target className="w-6 h-6" />,
    description: 'Build Your Path to Financial Independence',
    color: 'bg-purple-500',
    screenshot: '/screenshots/retirement-planning.png',
  },
  {
    path: '/health-insurance',
    name: 'Health Insurance',
    icon: <HeartPulse className="w-6 h-6" />,
    description: 'Comprehensive Health Coverage',
    color: 'bg-red-500',
    screenshot: '/screenshots/health-insurance.png',
  },
  {
    path: '/medicare',
    name: 'Medicare',
    icon: <Cross className="w-6 h-6" />,
    description: 'Medicare Coverage Solutions',
    color: 'bg-cyan-500',
    screenshot: '/screenshots/medicare.png',
  },
  {
    path: '/final-expense',
    name: 'Final Expense',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Final Expense Insurance',
    color: 'bg-orange-500',
    screenshot: '/screenshots/final-expense.png',
  },
  {
    path: '/estate-planning',
    name: 'Estate Planning',
    icon: <Scale className="w-6 h-6" />,
    description: 'Secure Your Legacy',
    color: 'bg-teal-500',
    screenshot: '/screenshots/estate-planning.png',
  },
  {
    path: '/about-us',
    name: 'About Us',
    icon: <Users className="w-6 h-6" />,
    description: 'Learn about our team',
    color: 'bg-gray-500',
    screenshot: '/screenshots/about-us.png',
  },
  {
    path: '/careers',
    name: 'Careers',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Join our team',
    color: 'bg-indigo-500',
    screenshot: '/screenshots/careers.png',
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <Mail className="w-6 h-6" />,
    description: 'Get in touch',
    color: 'bg-pink-500',
    screenshot: '/screenshots/contact.png',
  },
  {
    path: '/partners',
    name: 'Partners',
    icon: <Handshake className="w-6 h-6" />,
    description: 'Our trusted partners',
    color: 'bg-yellow-500',
    screenshot: '/screenshots/partners.png',
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    icon: <Shield className="w-6 h-6" />,
    description: 'How we protect your data',
    color: 'bg-blue-700',
    screenshot: '/screenshots/privacy-policy.png',
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    icon: <FileText className="w-6 h-6" />,
    description: 'Legal terms and conditions',
    color: 'bg-gray-600',
    screenshot: '/screenshots/terms-of-service.png',
  },
  {
    path: '/cookie-policy',
    name: 'Cookie Policy',
    icon: <Shield className="w-6 h-6" />,
    description: 'Cookie usage and preferences',
    color: 'bg-amber-600',
    screenshot: '/screenshots/cookie-policy.png',
  },
  {
    path: '/faq',
    name: 'FAQ',
    icon: <HelpCircle className="w-6 h-6" />,
    description: 'Frequently asked questions',
    color: 'bg-green-600',
    screenshot: '/screenshots/faq.png',
  },
  {
    path: '/insurance-glossary',
    name: 'Insurance Glossary',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Key insurance terms explained',
    color: 'bg-purple-600',
    screenshot: '/screenshots/insurance-glossary.png',
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: <Tag className="w-6 h-6" />,
    description: 'Insurance insights and tips',
    color: 'bg-indigo-600',
    screenshot: '/screenshots/blog.png',
  },
];

export default function PagesGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pages Gallery</h1>
          <p className="text-xl text-gray-600">Browse all available pages in the application</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link key={page.path} to={page.path} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={page.screenshot}
                    alt={`${page.name} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to colored background if screenshot doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.className = `relative h-48 ${page.color} flex items-center justify-center`;
                        const icon = target.parentElement.querySelector('.fallback-icon');
                        if (!icon) {
                          const iconDiv = document.createElement('div');
                          iconDiv.className = 'fallback-icon text-white scale-[3]';
                          iconDiv.innerHTML = target.alt;
                          target.parentElement.appendChild(iconDiv);
                        }
                      }
                    }}
                  />
                  <div className={`absolute inset-0 ${page.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${page.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {page.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{page.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 text-xs text-gray-600 font-mono">
                    {page.path}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
