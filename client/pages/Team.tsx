import { ArrowLeft, Award, Users, Heart, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Team() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      slug: 'sarah-johnson',
      name: "Sarah Johnson",
      title: "President & CEO",
      credentials: "CLU, ChFC, LUTCF, FSA",
      experience: "25+ years",
      image: "https://images.pexels.com/photos/3184392/pexels-photo-3184392.jpeg",
      location: "New York, NY",
      bio: "Sarah founded 4 Bridges Insurance Company in 1999 with a vision to make quality insurance accessible to every American family. A graduate of New York University with a degree in Finance, she has built one of the most respected independent insurance agencies in the Northeast. Sarah specializes in life insurance and retirement planning, and has been recognized as a Top 1% Producer by the Million Dollar Round Table for 15 consecutive years. She serves on the board of the National Association of Insurance and Financial Advisors (NAIFA) and is a frequent speaker at industry conferences across the United States.",
      specialties: ["Life Insurance", "Retirement Planning", "Business Insurance", "Executive Benefits"],
      achievements: ["Top 1% Producer Nationwide", "Million Dollar Round Table", "Licensed in 15 States", "NAIFA Board Member", "Industry Speaker"],
      education: "BS Finance, New York University",
      languages: ["English", "Spanish"],
      funFact: "Sarah has helped over 10,000 families secure their financial future"
    },
    {
      slug: 'michael-chen',
      name: "Michael Chen",
      title: "Senior Insurance Advisor",
      credentials: "CLU, ChFC, CFP®, RHU",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg",
      location: "Los Angeles, CA",
      bio: "Michael brings extensive expertise in health insurance and Medicare planning, having served over 5,000 clients across California and Nevada. A proud graduate of UCLA's Anderson School of Management, Michael specializes in helping families navigate complex healthcare decisions in today's rapidly changing insurance landscape. He has been recognized as a Health Insurance Specialist by the California Department of Insurance and serves as a Medicare training instructor for new agents nationwide. Michael is passionate about ensuring every American has access to affordable, comprehensive healthcare coverage.",
      specialties: ["Health Insurance", "Medicare", "Long-term Care", "ACA Compliance"],
      achievements: ["Health Insurance Specialist", "Medicare Expert", "Client Satisfaction Award", "California DOI Recognition", "Medicare Trainer"],
      education: "MBA, UCLA Anderson School",
      languages: ["English", "Mandarin", "Cantonese"],
      funFact: "Michael volunteers with local community health clinics to help underserved families"
    },
    {
      slug: 'jennifer-martinez',
      name: "Jennifer Martinez",
      title: "Client Relations Manager",
      credentials: "LUTCF, ACS, CPCU",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      location: "Austin, TX",
      bio: "Jennifer ensures every client receives personalized attention and ongoing support throughout their insurance journey. Born and raised in Texas, Jennifer brings a deep understanding of Southern hospitality combined with professional excellence. She holds a degree in Business Administration from the University of Texas and has built a reputation for exceptional customer service. Jennifer has received the prestigious 5-Star Reviews award from the Better Business Bureau and serves as a mentor for new insurance professionals entering the industry. Her dedication to client satisfaction has made her one of the most respected relationship managers in the Southwest.",
      specialties: ["Client Support", "Policy Management", "Claims Assistance", "Customer Experience"],
      achievements: ["Customer Service Excellence", "5-Star Reviews", "Client Retention Expert", "BBB Award Winner", "Industry Mentor"],
      education: "BS Business Administration, University of Texas",
      languages: ["English", "Spanish"],
      funFact: "Jennifer has maintained a 98% client retention rate for 8 consecutive years"
    },
    {
      slug: 'david-thompson',
      name: "David Thompson",
      title: "Financial Planning Specialist",
      credentials: "ChFC, CLU, CFP®, AIF",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
      location: "Chicago, IL",
      bio: "David specializes in comprehensive financial planning, helping families across the Midwest build wealth and protect their legacy. A graduate of the University of Chicago Booth School of Business, David has been recognized as a Certified Financial Planner® and serves as an adjunct faculty member teaching estate planning at local universities. He has helped over 2,000 families create comprehensive financial plans that include estate planning, retirement strategies, and wealth transfer solutions. David is a frequent contributor to financial planning publications and speaks regularly at financial literacy events throughout Illinois and surrounding states.",
      specialties: ["Estate Planning", "Retirement Planning", "Wealth Management", "Tax Strategies"],
      achievements: ["Certified Financial Planner", "Estate Planning Specialist", "Investment Advisor", "Industry Author", "Financial Literacy Speaker"],
      education: "MBA, University of Chicago Booth",
      languages: ["English"],
      funFact: "David has helped families preserve over $500M in generational wealth"
    },
    {
      slug: 'robert-washington',
      name: "Robert Washington",
      title: "Commercial Insurance Director",
      credentials: "CPCU, ARM, ALCM",
      experience: "20+ years",
      image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
      location: "Atlanta, GA",
      bio: "Robert leads our commercial insurance division, serving businesses across the Southeast United States. With a background in risk management from Georgia State University, Robert has built one of the most comprehensive commercial insurance programs in the region. He specializes in property, casualty, workers' compensation, and business interruption coverage for companies ranging from small local businesses to Fortune 500 corporations. Robert has been recognized by the National Alliance of Insurance Education & Research and serves on the board of the Georgia Insurance Association.",
      specialties: ["Commercial Property", "Workers Compensation", "Business Interruption", "Risk Management"],
      achievements: ["CPCU Designation", "Georgia Insurance Board", "Commercial Excellence Award", "Risk Management Expert", "Business Leader"],
      education: "BS Risk Management, Georgia State University",
      languages: ["English"],
      funFact: "Robert has insured over 1,000 businesses in the Southeast"
    },
    {
      slug: 'amanda-foster',
      name: "Amanda Foster",
      title: "Medicare Specialist",
      credentials: "CSG, CSA, LUTCF",
      experience: "14+ years",
      image: "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg",
      location: "Phoenix, AZ",
      bio: "Amanda is our dedicated Medicare specialist, helping seniors across Arizona and surrounding states make informed decisions about their healthcare coverage. A graduate of Arizona State University with a focus on gerontology, Amanda has become one of the most respected Medicare advisors in the Southwest. She has helped over 8,000 seniors navigate Medicare options, including Medicare Advantage plans, Part D prescription drug coverage, and Medigap supplements. Amanda is a certified trainer for the Centers for Medicare & Medicaid Services and frequently speaks at senior centers and community events about Medicare planning.",
      specialties: ["Medicare Planning", "Senior Healthcare", "Long-term Care", "Prescription Drug Coverage"],
      achievements: ["Certified Senior Advisor", "Medicare Trainer", "Senior Service Award", "Community Speaker", "CMS Certified"],
      education: "BS Gerontology, Arizona State University",
      languages: ["English"],
      funFact: "Amanda has educated over 15,000 seniors on Medicare options"
    }
  ];

  return (
    <Layout>
      <SEO
        title="Meet Our Team - Licensed Insurance Professionals"
        description="Meet the experienced team at 4 Bridges Insurance Company. Our licensed professionals have over 70 combined years of experience helping families secure their financial future."
        keywords="insurance agents, licensed professionals, insurance team, financial advisors"
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

            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 mr-4" />
              <motion.h1 
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Meet Our Team
              </motion.h1>
            </div>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Licensed professionals with over 70 combined years of experience, dedicated to protecting your family's future.
            </motion.p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by American Families Nationwide</h2>
              <p className="text-gray-600">Our licensed professionals serve clients across the United States</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95+</div>
                <div className="text-gray-600">Years Combined Experience</div>
                <div className="text-xs text-gray-500 mt-1">🇺🇸 U.S. Insurance Industry</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">75,000+</div>
                <div className="text-gray-600">Families Protected</div>
                <div className="text-xs text-gray-500 mt-1">From Coast to Coast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">States Licensed</div>
                <div className="text-xs text-gray-500 mt-1">National Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Licensed Professionals</div>
                <div className="text-xs text-gray-500 mt-1">Fully Regulated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Licensed Professionals</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each team member holds multiple professional designations and maintains active licenses to provide you with expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.slug}
                  id={member.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  role="article"
                  aria-labelledby={`member-name-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative">
                    <motion.img
                      src={member.image}
                      alt={`Professional headshot of ${member.name}, ${member.title} at 4 Bridges Insurance Company`}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-xs font-semibold text-gray-800 flex items-center">
                        📍 {member.location}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white rounded-lg px-3 py-1">
                      <span className="text-xs font-semibold">🇺🇸 U.S. Licensed</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <motion.h3 
                        id={`member-name-${index}`} 
                        className="text-xl font-bold text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {member.name}
                      </motion.h3>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-green-600" aria-hidden="true" />
                        <span className="sr-only">Licensed Insurance Professional</span>
                      </div>
                    </div>

                    <motion.p 
                      className="text-blue-600 font-semibold mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {member.title}
                    </motion.p>
                    <p className="text-sm text-gray-600 mb-3">
                      {member.credentials} • {member.experience} experience
                    </p>

                    <motion.p 
                      className="text-gray-700 text-sm leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {member.bio}
                    </motion.p>

                    {/* Education & Languages */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">
                        <strong>Education:</strong> {member.education}
                      </div>
                      <div className="text-xs text-gray-600">
                        <strong>Languages:</strong> {member.languages.join(", ")}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <Heart className="w-4 h-4 mr-1 text-red-500" aria-hidden="true" />
                        <span>Specialties</span>
                      </h4>
                      <div className="flex flex-wrap gap-2" role="list" aria-label={`${member.name} specialties`}>
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full" role="listitem">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <Award className="w-4 h-4 mr-1 text-yellow-500" aria-hidden="true" />
                        <span>Achievements</span>
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1" role="list" aria-label={`${member.name} achievements`}>
                        {member.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-start" role="listitem">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fun Fact */}
                    <div className="border-t border-gray-200 pt-3">
                      <p className="text-xs text-gray-500 italic">
                        💡 {member.funFact}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Experts?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our licensed professionals are here to help you find the perfect insurance solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => navigate('/')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Team Videos Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team in Action</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get to know our licensed professionals through video introductions, credential highlights, and Q&A sessions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Intro Video */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <p className="text-gray-600 font-medium">Team Introduction Video</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    RECOMMENDED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Welcome to 4 Bridges</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Watch our team introduce themselves and share what makes 4 Bridges Insurance Company special. Learn about our commitment to American families and our nationwide service.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>📹 3-minute team introduction</div>
                    <div>🏢 Office tour and culture highlights</div>
                    <div>🇺🇸 U.S. market focus and values</div>
                  </div>
                </div>
              </div>

              {/* Credentials Highlight Video */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white text-2xl">🎓</span>
                    </div>
                    <p className="text-gray-600 font-medium">Credentials & Expertise</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    FEATURED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Certifications</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    See our team's impressive credentials in action. Learn about CLU, ChFC, CFP® designations and how they benefit our clients across America.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>🎓 CLU, ChFC, CFP® explanations</div>
                    <div>📊 Industry recognition highlights</div>
                    <div>🛡️ Licensing and compliance focus</div>
                  </div>
                </div>
              </div>

              {/* Q&A Video */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white text-2xl">❓</span>
                    </div>
                    <p className="text-gray-600 font-medium">Client Q&A Session</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                    INTERACTIVE
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Your Questions Answered</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join a live Q&A session with our insurance experts. Get answers to common questions about coverage, claims, and insurance planning.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>💬 Live audience questions</div>
                    <div>📅 Regular monthly sessions</div>
                    <div>🎯 Real client scenarios discussed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Call-to-Action */}
            <div className="text-center mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Want to See More?</h3>
                <p className="text-gray-600 mb-6">
                  These videos showcase our team's expertise and commitment to helping American families. Contact us to schedule a personal consultation or join our next Q&A session.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Schedule Consultation
                  </button>
                  <button
                    onClick={() => navigate('/careers')}
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Join Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications & Designations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team holds prestigious certifications from leading U.S. insurance and financial planning organizations,
                ensuring you receive expert guidance backed by the highest industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">CLU - Chartered Life Underwriter</h3>
                <p className="text-gray-600 text-sm">Advanced certification in life insurance and financial planning from The American College</p>
                <div className="mt-3 text-xs text-blue-600 font-medium">Held by: Sarah, Michael, David</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">ChFC - Chartered Financial Consultant</h3>
                <p className="text-gray-600 text-sm">Comprehensive financial planning and insurance expertise designation</p>
                <div className="mt-3 text-xs text-blue-600 font-medium">Held by: Sarah, Michael, David</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">CFP® - Certified Financial Planner</h3>
                <p className="text-gray-600 text-sm">Highest standard in financial planning certification from CFP Board</p>
                <div className="mt-3 text-xs text-blue-600 font-medium">Held by: Michael, David</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">LUTCF - Life Underwriter Training Council Fellow</h3>
                <p className="text-gray-600 text-sm">Advanced life insurance and financial services designation</p>
                <div className="mt-3 text-xs text-blue-600 font-medium">Held by: Sarah, Jennifer, Amanda</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">CPCU - Chartered Property Casualty Underwriter</h3>
                <p className="text-gray-600 text-sm">Property and casualty insurance expertise from The Institutes</p>
                <div className="mt-3 text-xs text-green-600 font-medium">Held by: Jennifer, Robert</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">RHU - Registered Health Underwriter</h3>
                <p className="text-gray-600 text-sm">Specialized health insurance and underwriting designation</p>
                <div className="mt-3 text-xs text-green-600 font-medium">Held by: Michael</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">CSG - Certified Senior Advisor</h3>
                <p className="text-gray-600 text-sm">Medicare and senior healthcare planning certification</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">Held by: Amanda</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">AIF - Accredited Investment Fiduciary</h3>
                <p className="text-gray-600 text-sm">Investment fiduciary and retirement planning designation</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">Held by: David</div>
              </div>
            </div>

            {/* U.S. Regulatory Compliance */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">🇺🇸 U.S. Regulatory Compliance</h3>
                <p className="text-gray-600">Licensed and regulated across multiple states, ensuring the highest standards of professional conduct</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">State Insurance Departments</h4>
                  <p className="text-sm text-gray-600">Licensed in 25+ states with active producer licenses</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-green-600" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">FINRA Registered</h4>
                  <p className="text-sm text-gray-600">Securities licensed professionals for investment guidance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fiduciary Standard</h4>
                  <p className="text-sm text-gray-600">Acting in clients' best interests with full transparency</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}