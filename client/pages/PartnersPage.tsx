import { ArrowLeft, Handshake, Award, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CoverageMap } from '../components/CoverageMap';

export default function PartnersPage() {
  const navigate = useNavigate();

  const partners = [
    {
      name: "State Farm",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/State_Farm_logo.svg/512px-State_Farm_logo.svg.png",
      logoAlt: "State Farm logo",
      description: "America's largest property and casualty insurance company, providing comprehensive auto, home, and life insurance solutions.",
      specialties: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance"],
      rating: "A++ (Superior)",
      founded: "1922",
      customers: "29M+"
    },
    {
      name: "Allstate",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Allstate_logo.svg/512px-Allstate_logo.svg.png",
      logoAlt: "Allstate insurance logo",
      description: "Nationwide insurance provider known for comprehensive coverage and innovative claims service with 24/7 support.",
      specialties: ["Auto Insurance", "Home Insurance", "Life Insurance", "Renters Insurance"],
      rating: "A+ (Superior)",
      founded: "1931",
      customers: "16M+"
    },
    {
      name: "Progressive",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Progressive_Insurance_logo.svg/512px-Progressive_Insurance_logo.svg.png",
      logoAlt: "Progressive Insurance logo",
      description: "Leading auto insurance company offering competitive rates, usage-based insurance, and comprehensive coverage options.",
      specialties: ["Auto Insurance", "Home Insurance", "Commercial Insurance", "Motorcycle Insurance"],
      rating: "A+ (Superior)",
      founded: "1937",
      customers: "20M+"
    },
    {
      name: "Nationwide",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nationwide_Mutual_Insurance_Company_logo.svg/512px-Nationwide_Mutual_Insurance_Company_logo.svg.png",
      logoAlt: "Nationwide Insurance logo",
      description: "Full-service insurance and financial services company providing life, auto, home, and business insurance solutions.",
      specialties: ["Life Insurance", "Auto Insurance", "Home Insurance", "Business Insurance"],
      rating: "A+ (Superior)",
      founded: "1926",
      customers: "14M+"
    },
    {
      name: "Liberty Mutual",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Liberty_Mutual_logo.svg/512px-Liberty_Mutual_logo.svg.png",
      logoAlt: "Liberty Mutual logo",
      description: "Global insurance company offering personal and commercial insurance with a focus on safety and responsible driving.",
      specialties: ["Auto Insurance", "Home Insurance", "Life Insurance", "Workers Compensation"],
      rating: "A (Excellent)",
      founded: "1912",
      customers: "50M+"
    },
    {
      name: "GEICO",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/GEICO_logo.svg/512px-GEICO_logo.svg.png",
      logoAlt: "GEICO auto insurance logo",
      description: "Direct-to-consumer auto insurance company known for low rates, fast claims service, and 15-minute savings quotes.",
      specialties: ["Auto Insurance", "Home Insurance", "Motorcycle Insurance", "RV Insurance"],
      rating: "A++ (Superior)",
      founded: "1936",
      customers: "28M+"
    }
  ];

  const caseStudies = [
    {
      title: 'State Farm + 4 Bridges: Protecting First-Time Homebuyers',
      summary: 'Coordinated bundle delivering home, life, and umbrella coverage for 120 first-time buyers in the Northeast corridor with a 98% satisfaction score.',
      metrics: ['120 households onboarded', 'Average premium savings: 14%', 'Claims resolved within 48 hours'],
      partner: 'State Farm'
    },
    {
      title: 'Allstate Partnership: Employer Benefits Expansion',
      summary: 'Implemented voluntary benefits packages for a 2,000-employee manufacturing client with bilingual enrollment support and digital onboarding.',
      metrics: ['Opt-in rate: 82%', 'Employee satisfaction: 4.7/5', 'Bilingual education sessions delivered in 3 states'],
      partner: 'Allstate'
    },
    {
      title: 'GEICO Commercial Fleet Transition',
      summary: 'Helped a regional delivery company move 65 vehicles to usage-based coverage, reducing risk exposure and improving driver safety scoring.',
      metrics: ['Fleet incidents reduced 22%', 'Telematics adoption 100%', 'Annual premium reduction: $48K'],
      partner: 'GEICO'
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
              At 4 Bridges Insurance Company, we carefully select our carrier partners based on their financial strength, 
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
                  <div className="w-24 h-16 mx-auto mb-3 flex items-center justify-center">
                    <img
                      src={partner.logoUrl}
                      alt={partner.logoAlt}
                      className="max-h-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{partner.description}</p>
                
                {/* Credibility Information */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">A.M. Best Rating:</span>
                      <div className="flex items-center mt-1">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">{partner.rating}</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Founded:</span>
                      <span className="text-gray-600 ml-1">{partner.founded}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-gray-900">Customers:</span>
                      <span className="text-gray-600 ml-1">{partner.customers}</span>
                    </div>
                  </div>
                </div>
                
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

          {/* Partner Case Studies */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.title} className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300" aria-labelledby={study.title.replace(/\s+/g, '-').toLowerCase()}>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{study.partner}</div>
                  <h3 id={study.title.replace(/\s+/g, '-').toLowerCase()} className="text-lg font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{study.summary}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {study.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Coverage Map */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-2xl overflow-hidden mb-12">
            <CoverageMap />
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