import { ArrowLeft, Shield, Users, Award, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { staggerContainer, staggerItem } from '@/lib/animations';

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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 overflow-hidden">
        {/* Animated background particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [0, -20, 0],
                scale: [0, 1, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About 4 Bridges Insurance Company
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting families with financial security through comprehensive insurance solutions and personalized service.
          </motion.p>
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
          <AnimatedSection>
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership Team</h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="text-center group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
                  alt="Michael Chen, Co-Founder and CEO of 4 Bridges Insurance - Asian American insurance executive with 30+ years experience"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & CEO</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #12345678)</p>
                <p className="text-sm text-gray-600">30+ years experience in life insurance and retirement planning. Certified Financial Planner (CFP®). Passionate about helping families achieve financial independence.</p>
              </motion.div>
              <motion.div 
                className="text-center group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces"
                  alt="Sarah Rodriguez, Co-Founder and President of 4 Bridges Insurance - Hispanic American insurance leader with 28+ years experience"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Rodriguez</h3>
                <p className="text-blue-600 font-semibold mb-2">Co-Founder & President</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #87654321)</p>
                <p className="text-sm text-gray-600">28+ years experience in health insurance and Medicare. Bilingual advocate for underserved communities. Mother of two, community volunteer.</p>
              </motion.div>
              <motion.div 
                className="text-center group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces"
                  alt="David Williams, VP of Operations at 4 Bridges Insurance - experienced insurance operations leader"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">David Williams</h3>
                <p className="text-blue-600 font-semibold mb-2">VP of Operations</p>
                <p className="text-sm text-gray-600 mb-2">Licensed Agent (NY #11223344)</p>
                <p className="text-sm text-gray-600">15+ years experience in estate planning and final expense. Chartered Life Underwriter (CLU®). Dedicated to operational excellence and client satisfaction.</p>
              </motion.div>
            </motion.div>
          </div>
          </AnimatedSection>

          {/* Our Values */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <motion.h3 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                >
                  Trust & Integrity
                </motion.h3>
              </div>
              <p className="text-gray-600">
                We build lasting relationships based on honesty, transparency, and unwavering commitment to our clients' best interests.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <motion.h3 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                >
                  Family First
                </motion.h3>
              </div>
              <p className="text-gray-600">
                Every decision we make is guided by how it impacts families. We treat our clients like family because that's who we're protecting.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <motion.h3 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                >
                  Excellence
                </motion.h3>
              </div>
              <p className="text-gray-600">
                We strive for excellence in every interaction, ensuring our clients receive the highest quality service and coverage.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <motion.h3 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                >
                  Personalized Solutions
                </motion.h3>
              </div>
              <p className="text-gray-600">
                No two families are alike. We create customized insurance solutions that fit your unique needs and budget.
              </p>
            </motion.div>
          </motion.div>

          {/* Company Timeline */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                <motion.div 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    1998
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                    <p className="text-gray-600">4 Bridges Insurance Company founded in New York City by Michael Chen and Sarah Rodriguez with a mission to provide honest, family-focused insurance solutions.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2005
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion Begins</h3>
                    <p className="text-gray-600">Expanded to serve families across 5 states, introduced comprehensive life insurance and retirement planning services.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2015
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">Launched online quoting system and expanded product portfolio to include health insurance and Medicare solutions.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2023
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nationwide Reach</h3>
                    <p className="text-gray-600">Now serving families in 15 states with over 50,000 clients protected. Achieved A+ BBB rating and industry-leading customer satisfaction.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Licensing & Certifications */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Licensing & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">State Licensed</h3>
                <p className="text-gray-600 text-sm">Licensed in 15 states including NY, CA, TX, FL, and more</p>
                <div className="mt-2 text-xs text-gray-500">License #12345678</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">A.M. Best Rated</h3>
                <p className="text-gray-600 text-sm">A (Excellent) financial strength rating</p>
                <div className="mt-2 text-xs text-gray-500">Superior stability</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">BBB Accredited</h3>
                <p className="text-gray-600 text-sm">A+ rating with thousands of reviews</p>
                <div className="mt-2 text-xs text-gray-500">Top-rated agency</div>
              </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose 4 Bridges Insurance Company?</h2>
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
              <motion.button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClickCapture={(e) => {
                  const button = e.currentTarget;
                  const rect = button.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  const ripple = document.createElement('div');
                  ripple.style.position = 'absolute';
                  ripple.style.borderRadius = '50%';
                  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                  ripple.style.transform = 'scale(0)';
                  ripple.style.animation = 'ripple 0.6s linear';
                  ripple.style.left = `${x - 10}px`;
                  ripple.style.top = `${y - 10}px`;
                  ripple.style.width = '20px';
                  ripple.style.height = '20px';
                  
                  button.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 600);
                }}
              >
                Get Started Today
              </motion.button>
              <motion.button 
                onClick={() => navigate('/contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClickCapture={(e) => {
                  const button = e.currentTarget;
                  const rect = button.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  const ripple = document.createElement('div');
                  ripple.style.position = 'absolute';
                  ripple.style.borderRadius = '50%';
                  ripple.style.backgroundColor = 'rgba(37, 99, 235, 0.6)';
                  ripple.style.transform = 'scale(0)';
                  ripple.style.animation = 'ripple 0.6s linear';
                  ripple.style.left = `${x - 10}px`;
                  ripple.style.top = `${y - 10}px`;
                  ripple.style.width = '20px';
                  ripple.style.height = '20px';
                  
                  button.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 600);
                }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}