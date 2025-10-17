import { ArrowLeft, Briefcase, Users, TrendingUp, Heart, DollarSign, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPage() {
  const navigate = useNavigate();

  const openPositions = [
    {
      title: "Licensed Insurance Agent",
      type: "Full-time",
      location: "Remote/Field",
      description: "Join our team as a licensed insurance agent helping families secure their financial future.",
      requirements: ["Valid insurance license", "2+ years experience", "Strong communication skills"]
    },
    {
      title: "Customer Service Representative",
      type: "Full-time",
      location: "Office/Remote",
      description: "Provide exceptional customer service and support to our valued clients.",
      requirements: ["High school diploma", "Customer service experience", "Professional phone manner"]
    },
    {
      title: "Marketing Coordinator",
      type: "Full-time",
      location: "Office",
      description: "Develop and execute marketing strategies to grow our brand presence.",
      requirements: ["Marketing degree preferred", "Digital marketing experience", "Creative mindset"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Competitive Compensation",
      description: "Base salary plus commission structure with unlimited earning potential"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Career Growth",
      description: "Clear advancement paths with ongoing training and development opportunities"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to fit your lifestyle"
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
            <Briefcase className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            Build a rewarding career helping families secure their financial future while growing your own success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Why Work With Us */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose 4 Bridges Insurance?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At 4 Bridges Insurance, we believe our success comes from our people. We're committed to creating 
              an environment where talented individuals can thrive, grow, and make a meaningful impact on families' lives.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supportive Culture</h3>
                <p className="text-gray-600 text-sm">Collaborative environment where everyone's success matters.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 text-sm">Clear career paths with mentorship and training programs.</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Meaningful Work</h3>
                <p className="text-gray-600 text-sm">Make a real difference in families' financial security.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Employee Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{position.type}</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-600 text-sm">Submit your application and resume through our online portal.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Screening</h3>
                <p className="text-gray-600 text-sm">Initial conversation with our HR team to discuss your background.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Meet with hiring managers to discuss the role and your fit.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
                <p className="text-gray-600 text-sm">Complete onboarding and begin your journey with us.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Career?</h3>
            <p className="text-gray-600 mb-6">Join our team and help families build bridges to financial security while building your own successful career.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Positions
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}