import { ArrowLeft, Handshake, Award, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Handshake className="w-12 h-12 mr-4" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our Partners
            </motion.h1>
          </div>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We've partnered with industry-leading insurance carriers to bring you the best coverage options and competitive rates.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Partnership Philosophy */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Our Partnerships Matter
            </motion.h2>
            <motion.p
              className="text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              At 4 Bridges Insurance Company, we carefully select our carrier partners based on their financial strength,
              product innovation, and commitment to customer service. These partnerships allow us to offer you
              a diverse portfolio of insurance solutions while ensuring the security and reliability you deserve.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Financial Strength
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  All partners maintain high financial ratings and stability.
                </motion.p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Industry Recognition
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Award-winning companies with proven track records.
                </motion.p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Customer Focus
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Committed to exceptional customer service and claims handling.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-24 h-16 mx-auto mb-3 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.logoAlt}
                      className="max-h-16 object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {partner.name}
                  </motion.h3>
                </div>
                <motion.p
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {partner.description}
                </motion.p>

                {/* Credibility Information */}
                <motion.div
                  className="border-t border-gray-200 pt-4 mb-4"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                >
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
                </motion.div>

                <motion.div
                  className="border-t border-gray-200 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.7 + idx * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {specialty}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Benefits of Our Partnership Network
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { title: "Competitive Rates", desc: "Access to multiple carriers means better pricing options for you." },
                  { title: "Product Variety", desc: "Comprehensive selection of insurance products and coverage options." },
                  { title: "Underwriting Flexibility", desc: "Multiple underwriting approaches to find coverage for unique situations." }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <div>
                      <motion.h4
                        className="font-semibold text-gray-900"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {benefit.title}
                      </motion.h4>
                      <motion.p
                        className="text-gray-700 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {benefit.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { title: "Claims Support", desc: "Streamlined claims processes with dedicated support teams." },
                  { title: "Innovation", desc: "Access to the latest insurance products and digital tools." },
                  { title: "Financial Security", desc: "Peace of mind knowing your coverage is backed by financially strong companies." }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <div>
                      <motion.h4
                        className="font-semibold text-gray-900"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {benefit.title}
                      </motion.h4>
                      <motion.p
                        className="text-gray-700 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {benefit.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partner Case Studies */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Partner Success Stories
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.title}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  aria-labelledby={study.title.replace(/\s+/g, '-').toLowerCase()}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  <motion.div
                    className="text-sm font-semibold text-blue-600 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {study.partner}
                  </motion.div>
                  <motion.h3
                    id={study.title.replace(/\s+/g, '-').toLowerCase()}
                    className="text-lg font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-600 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {study.summary}
                  </motion.p>
                  <motion.ul
                    className="space-y-2 text-sm text-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {study.metrics.map((metric, metricIndex) => (
                      <motion.li
                        key={metric}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.6 + metricIndex * 0.1
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          aria-hidden="true"
                          className="mt-1 h-2 w-2 rounded-full bg-blue-600"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + 0.7 + metricIndex * 0.1
                          }}
                          viewport={{ once: true }}
                        ></motion.span>
                        <span>{metric}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Coverage Map */}
          <motion.div
            className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CoverageMap />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Find Your Perfect Coverage
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let us help you compare options from our trusted partners to find the best coverage for your needs.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Compare Quotes
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact an Agent
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}