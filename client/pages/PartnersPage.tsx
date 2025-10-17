import { ArrowLeft, Handshake, Award, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PartnersPage() {
  const navigate = useNavigate();

  const partners = [
    {
      name: "Mutual of Omaha",
      logo: "MO",
      description: "Leading provider of life insurance and retirement solutions with over 100 years of experience.",
      specialties: ["Life Insurance", "Disability Insurance", "Long-term Care"]
    },
    {
      name: "Transamerica",
      logo: "TA",
      description: "Comprehensive financial services company offering innovative insurance and investment solutions.",
      specialties: ["Life Insurance", "Retirement Planning", "Investment Products"]
    },
    {
      name: "Foresters Financial",
      logo: "FF",
      description: "Mutual benefit society providing life insurance and financial services to families.",
      specialties: ["Life Insurance", "Children's Insurance", "Final Expense"]
    },
    {
      name: "American General",
      logo: "AG",
      description: "Trusted insurance provider offering flexible life insurance solutions for every stage of life.",
      specialties: ["Term Life", "Whole Life", "Universal Life"]
    },
    {
      name: "Globe Life",
      logo: "GL",
      description: "Specialized in affordable life insurance with simplified underwriting processes.",
      specialties: ["Final Expense", "Term Life", "Whole Life"]
    },
    {
      name: "Cigna Healthcare",
      logo: "CH",
      description: "Global health service company providing comprehensive health insurance solutions.",
      specialties: ["Health Insurance", "Medicare", "Dental & Vision"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          
          <div className="flex items-center mb-6">
            <Handshake className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Our Partners</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            We've partnered with industry-leading insurance carriers to bring you the best coverage options and competitive rates.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Partnership Philosophy */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Partnerships Matter</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At 4 Bridges Insurance, we carefully select our carrier partners based on their financial strength, 
              product innovation, and commitment to customer service. These partnerships allow us to offer you 
              a diverse portfolio of insurance solutions while ensuring the security and reliability you deserve.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Strength</h3>
                <p className="text-gray-600 text-sm">All partners maintain high financial ratings and stability.</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600 text-sm">Award-winning companies with proven track records.</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600 text-sm">Committed to exceptional customer service and claims handling.</p>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3 font-bold text-lg">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{partner.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Partnership Network</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Rates</h4>
                    <p className="text-gray-700 text-sm">Access to multiple carriers means better pricing options for you.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Product Variety</h4>
                    <p className="text-gray-700 text-sm">Comprehensive selection of insurance products and coverage options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Underwriting Flexibility</h4>
                    <p className="text-gray-700 text-sm">Multiple underwriting approaches to find coverage for unique situations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Claims Support</h4>
                    <p className="text-gray-700 text-sm">Streamlined claims processes with dedicated support teams.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-700 text-sm">Access to the latest insurance products and digital tools.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Financial Security</h4>
                    <p className="text-gray-700 text-sm">Peace of mind knowing your coverage is backed by financially strong companies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Coverage</h3>
            <p className="text-gray-600 mb-6">Let us help you compare options from our trusted partners to find the best coverage for your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Compare Quotes
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact an Agent
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}