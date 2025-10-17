import { ArrowLeft, Shield, Users, Award, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about 4 Bridges Insurance Company - connecting families with financial security through comprehensive insurance solutions and personalized service."
        keywords="about 4 bridges insurance, insurance company, family insurance, financial security"
      />
      <div className="bg-gray-50">
      
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About 4 Bridges Insurance</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Connecting families with financial security through comprehensive insurance solutions and personalized service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Founded in 1998</strong> by insurance veterans Michael Chen and Sarah Rodriguez, 4 Bridges Insurance Company 
              was born from a simple observation: families needed an insurance partner who truly understood their needs, not just 
              someone trying to sell policies. After witnessing too many families struggle with inadequate coverage and confusing 
              insurance jargon, they set out to create a different kind of insurance agency.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the past 25+ years, we've grown from a small two-person office in New York to serving families across 15 states. 
              We've helped over 50,000 families protect what matters most, paid out millions in claims, and built lasting relationships 
              that span generations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name represents the four essential bridges we help you build: protection for your family, security for your 
              future, peace of mind for today, and legacy for tomorrow.
            </p>
          </div>

          {/* Meet Our Team */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  MC
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & CEO</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #12345678)</p>
                <p className="text-sm text-gray-600">30+ years experience in life insurance and retirement planning</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  SR
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Rodriguez</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & President</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #87654321)</p>
                <p className="text-sm text-gray-600">28+ years experience in health insurance and Medicare</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  DW
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">David Williams</h3>
                <p className="text-blue-600 font-semibold mb-2">VP of Operations</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #11223344)</p>
                <p className="text-sm text-gray-600">15+ years experience in estate planning and final expense</p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Trust & Integrity</h3>
              </div>
              <p className="text-gray-600">
                We build lasting relationships based on honesty, transparency, and unwavering commitment to our clients' best interests.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Family First</h3>
              </div>
              <p className="text-gray-600">
                Every decision we make is guided by how it impacts families. We treat our clients like family because that's who we're protecting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              </div>
              <p className="text-gray-600">
                We strive for excellence in every interaction, ensuring our clients receive the highest quality service and coverage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Personalized Solutions</h3>
              </div>
              <p className="text-gray-600">
                No two families are alike. We create customized insurance solutions that fit your unique needs and budget.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide comprehensive, affordable insurance solutions that protect families and individuals throughout their 
              life journey. We are committed to building bridges between our clients and their financial security through 
              education, personalized service, and innovative insurance products.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose 4 Bridges Insurance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Licensed professionals with years of industry experience</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Comprehensive product portfolio from trusted carriers</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Personalized service and ongoing support</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Competitive rates and flexible payment options</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Claims assistance and advocacy</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">Educational resources and financial planning guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Bridges?</h3>
            <p className="text-gray-600 mb-6">Let us help you create a comprehensive insurance strategy that protects your family's future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}