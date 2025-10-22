import { ArrowLeft, Briefcase, Users, TrendingUp, Heart, DollarSign, Clock, Star, Award, Zap, Target, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { JobApplicationForm } from '../components/JobApplicationForm';
import { FadeIn, AnimatedCard, RippleButton, AnimatedStats } from '@/components/bits';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function CareersPage() {
  const navigate = useNavigate();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  const openPositions = [
    {
      title: "Licensed Insurance Agent",
      type: "Full-time",
      location: "Remote/Field",
      salary: "$45,000 - $120,000 annually",
      description: "Join our team as a licensed insurance agent helping families secure their financial future.",
      requirements: ["Valid insurance license", "2+ years experience", "Strong communication skills"],
      icon: <Target className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Customer Service Representative",
      type: "Full-time",
      location: "Office/Remote",
      salary: "$35,000 - $45,000 annually",
      description: "Provide exceptional customer service and support to our valued clients.",
      requirements: ["High school diploma", "Customer service experience", "Professional phone manner"],
      icon: <Heart className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "Marketing Coordinator",
      type: "Full-time",
      location: "Office",
      salary: "$50,000 - $65,000 annually",
      description: "Develop and execute marketing strategies to grow our brand presence.",
      requirements: ["Marketing degree preferred", "Digital marketing experience", "Creative mindset"],
      icon: <Zap className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const employeeStories = [
    {
      name: "Maria Rodriguez",
      role: "Senior Insurance Agent",
      image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
      story: "I started as a customer service rep 5 years ago. The mentorship program and continuous training helped me become a top-producing agent. Now I lead a team and love helping others grow.",
      highlight: "From CSR to Senior Agent in 3 years",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Marketing Coordinator",
      image: "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg",
      story: "The work-life balance here is incredible. I can work remotely, attend my kids' events, and still advance my career. The company truly values family time.",
      highlight: "Remote work + career growth",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Customer Service Manager",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
      story: "What I love most is the collaborative culture. Everyone supports each other, shares knowledge, and celebrates wins together. It's like working with family.",
      highlight: "Built lasting friendships at work",
      rating: 5
    }
  ];

  const cultureHighlights = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Inclusive Culture",
      description: "We celebrate diversity and create an environment where everyone belongs and can thrive.",
      stats: "15+ cultures represented"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Recognition Program",
      description: "Monthly awards for outstanding performance, customer service excellence, and team collaboration.",
      stats: "50+ awards given annually"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Community Impact",
      description: "Active participation in local charities and community service initiatives.",
      stats: "10K+ volunteer hours"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Competitive Compensation",
      description: "Competitive base salaries ranging from $35K-$120K annually, plus commission structure with unlimited earning potential"
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </motion.button>
          
          <FadeIn duration={0.5} delay={0.1}>
            <div className="flex items-center mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="p-3 bg-white/10 rounded-xl backdrop-blur-sm mr-4"
              >
                <Briefcase className="w-12 h-12" />
              </motion.div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Join Our Team</h1>
                <div className="flex items-center text-blue-200">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  <span className="text-sm font-medium">Rated #1 Workplace by Employees</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn duration={0.6} delay={0.3}>
            <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
              Build a rewarding career helping families secure their financial future while growing your own success in a supportive, inclusive environment.
            </p>
          </FadeIn>
          
          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="text-center">
              <AnimatedStats value={98} suffix="%" label="Employee Satisfaction" duration={1.5} />
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <AnimatedStats value={15} suffix="+" label="Years Avg. Tenure" duration={1.5} />
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <AnimatedStats value={50} suffix="+" label="Open Positions" duration={1.5} />
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-blue-200 text-sm">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Why Work With Us */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose 4 Bridges Insurance Company?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At 4 Bridges Insurance Company, we believe our success comes from our people. We're committed to creating 
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

          {/* Employee Stories */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from real people who have built their careers at 4 Bridges Insurance Company.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {employeeStories.map((story, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <AnimatedCard>
                    <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={`${story.name} - ${story.role}`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                    "{story.story}"
                  </blockquote>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-blue-800 text-sm font-medium">{story.highlight}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Culture Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture in Action</h2>
              <p className="text-lg text-gray-600">
                We're more than just a workplace – we're a community that celebrates diversity, innovation, and making a difference.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cultureHighlights.map((highlight, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <AnimatedCard>
                    <div className="text-center bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-gray-800 font-semibold">{highlight.stats}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our growing team and start your career in insurance. We offer competitive compensation, comprehensive training, and opportunities for advancement.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-1 gap-6"
              role="list"
              aria-label="Job openings"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {openPositions.map((position, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <AnimatedCard>
                    <article
                      className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-${position.color}-500 relative overflow-hidden h-full`}
                      role="listitem"
                      aria-labelledby={`job-title-${index}`}
                    >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${position.color}-100 rounded-full -mr-10 -mt-10 opacity-50`}></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between relative z-10">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 bg-${position.color}-100 rounded-lg mr-3`}>
                          <div className={`text-${position.color}-600`}>
                            {position.icon}
                          </div>
                        </div>
                        <div>
                          <h3 id={`job-title-${index}`} className="text-xl font-bold text-gray-900">{position.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-1">
                            <span className={`bg-${position.color}-100 text-${position.color}-800 px-3 py-1 rounded-full font-medium`}>
                              {position.type}
                            </span>
                            <span className="flex items-center">
                              <Globe className="w-4 h-4 mr-1" />
                              {position.location}
                            </span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold" aria-label={`Salary range: ${position.salary}`}>
                              💰 {position.salary}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-1 text-gray-500" />
                          Requirements:
                        </h4>
                        <ul className="grid md:grid-cols-1 gap-1" role="list" aria-label="Job requirements">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-600 text-sm" role="listitem">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                      <div className="md:ml-6 flex-shrink-0">
                        <RippleButton
                          onClick={() => {
                            setSelectedPosition(position.title);
                            setShowApplicationForm(true);
                          }}
                          color="#2563eb"
                          aria-label={`Apply for ${position.title} position`}
                        >
                          Apply Now
                        </RippleButton>
                      </div>
                    </div>
                  </article>
                </AnimatedCard>
              </motion.div>
              ))}
            </motion.div>
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
              <RippleButton
                onClick={() => navigate('/contact')}
                color="#2563eb"
              >
                View All Positions
              </RippleButton>
              <RippleButton
                onClick={() => navigate('/contact')}
                color="transparent"
              >
                Contact HR
              </RippleButton>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Apply for {selectedPosition}</h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="Close application form"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <JobApplicationForm position={selectedPosition} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}