import { ArrowLeft, Shield, Heart, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import QuoteForm from './QuoteForm';
import { ProductFAQ } from './ProductFAQ';

interface ProductDetailProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  whyImportant: string[];
  keyPoints: string[];
  benefits: string[];
  children?: React.ReactNode;
}

export default function ProductDetail({
  title,
  icon,
  description,
  whyImportant,
  keyPoints,
  benefits,
  children,
}: ProductDetailProps) {
  const navigate = useNavigate();

  return (
    <Layout>
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
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
              <div className="text-white text-2xl">{icon}</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>
          
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive {title.toLowerCase()} solutions designed to protect your family and secure your financial future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* What Is Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Is {title}?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Why Important Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Why Is {title} Important?</h2>
              </div>
              <div className="space-y-2">
                {whyImportant.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Key Points</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Comparison Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Coverage Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Basic</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">$99<span className="text-sm font-normal">/month</span></p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Essential coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Basic benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Customer support
                  </li>
                </ul>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-6 relative bg-blue-50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Standard</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">$149<span className="text-sm font-normal">/month</span></p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Comprehensive coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Wellness programs
                  </li>
                </ul>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Premium</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">$249<span className="text-sm font-normal">/month</span></p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Maximum coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Premium benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 concierge support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    VIP services
                  </li>
                </ul>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="mb-12">
            <QuoteForm insuranceType={title.toLowerCase().replace(' ', '-')} />
          </div>

          {/* Additional Content (Calculators, etc) */}
          {children}

          {/* Testimonials Section */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our {title} Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Phoenix, AZ</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The {title.toLowerCase()} policy we got through 4 Bridges Insurance gave our family complete peace of mind.
                  When my husband passed unexpectedly, the coverage helped us through the toughest time without financial worry."
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Austin, TX</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "I was amazed at how affordable comprehensive {title.toLowerCase()} can be. The team at 4 Bridges Insurance
                  found me the perfect policy that fits my budget and provides excellent coverage for my growing family."
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The Rodriguez Family - Protected Their Dream Home</h3>
                <p className="text-gray-600 mb-3">
                  After losing their primary breadwinner, the Rodriguez family faced mounting medical bills and mortgage payments.
                  Their {title.toLowerCase()} policy provided $500,000 in coverage, allowing them to keep their home and focus on healing.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Result:</span>
                  <span className="ml-2">Home saved • Family protected • Peace of mind restored</span>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Young Professional Builds Financial Security</h3>
                <p className="text-gray-600 mb-3">
                  At age 32, Maria knew she needed {title.toLowerCase()} but thought it would be too expensive.
                  Our advisors found her a policy with $300,000 coverage for just $45/month, securing her family's future.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Result:</span>
                  <span className="ml-2">Affordable coverage • Long-term security • Family protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <ProductFAQ faqs={[
              {
                question: `What is ${title} and how does it work?`,
                answer: `${description} Our expert advisors will help you understand your options and find the right coverage for your needs.`
              },
              {
                question: 'How much does coverage cost?',
                answer: 'Costs vary based on your age, location, coverage amount, and other factors. Use our calculator above for a personalized estimate, or contact us for a free quote.'
              },
              {
                question: 'What\'s the application process like?',
                answer: 'Our streamlined application process takes just 15-20 minutes. We\'ll guide you through every step and answer all your questions along the way.'
              },
              {
                question: 'When does coverage start?',
                answer: 'Most policies provide immediate coverage upon approval, though some may have a short waiting period. We\'ll explain the details during your consultation.'
              },
              {
                question: 'Can I change my coverage later?',
                answer: 'Yes, most policies allow you to adjust your coverage as your needs change. Contact us to discuss modification options.'
              }
            ]} />
          </div>

          {/* Explainer Videos Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learn More About {title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 font-semibold">How {title} Works</p>
                    <p className="text-sm text-gray-500 mt-1">2:34 minutes</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Understanding Your Options</h3>
                  <p className="text-sm text-gray-600">Learn the basics of {title.toLowerCase()} and how it can protect your family.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 font-semibold">Real Stories</p>
                    <p className="text-sm text-gray-500 mt-1">4:12 minutes</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Success Stories</h3>
                  <p className="text-sm text-gray-600">Hear from real customers who found peace of mind with our {title.toLowerCase()} solutions.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">📹 More educational videos available in your personalized consultation</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h3>
            <p className="text-blue-100 mb-8 text-lg">Get personalized {title.toLowerCase()} recommendations from our expert advisors.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label={`Get a quote for ${title}`}
              >
                🚀 Get a Free Quote
              </button>
              <button
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                aria-label={`Contact us about ${title}`}
              >
                📞 Contact Us
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">No obligation • Free consultation • Expert guidance</p>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> The information on this website is for educational use only.
              Consult a licensed advisor or attorney before making decisions about insurance and financial products.
              Coverage and benefits subject to policy terms, limitations, and state availability.
            </p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}