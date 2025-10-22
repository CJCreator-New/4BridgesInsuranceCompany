import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { contactFormSchema, ContactFormData, ContactResponse } from '../../shared/contact';

export default function ContactPage() {
  const navigate = useNavigate();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result: ContactResponse = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again or call us directly.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: "(800) 427-4343",
      link: "tel:8004274343",
      description: "Mon-Fri 8AM-8PM EST",
      ariaLabel: "Call us at 800-427-4343"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: "info@4bridgesinsurance.com",
      link: "mailto:info@4bridgesinsurance.com",
      description: "24-hour response time",
      ariaLabel: "Email us at info@4bridgesinsurance.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Main Office",
      details: "350 Fifth Avenue, Suite 4820",
      description: "New York, NY 10118",
      link: "https://maps.google.com/?q=350+Fifth+Avenue+New+York+NY+10118",
      ariaLabel: "View office location on map"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-8PM EST",
      description: "Sat: 9AM-5PM EST | Sun: Closed",
      ariaLabel: "Business hours information"
    }
  ];

  const productChannels = [
    {
      product: "Life Insurance",
      phone: "(800) 427-4343 ext. 101",
      email: "life@4bridgesinsurance.com",
      hours: "Mon-Fri 8AM-8PM EST"
    },
    {
      product: "Health & Medicare",
      phone: "(800) 427-4343 ext. 102",
      email: "health@4bridgesinsurance.com",
      hours: "Mon-Sat 8AM-6PM EST"
    },
    {
      product: "Retirement Planning",
      phone: "(800) 427-4343 ext. 103",
      email: "retirement@4bridgesinsurance.com",
      hours: "Mon-Fri 9AM-7PM EST"
    },
    {
      product: "Claims Support",
      phone: "(800) 427-4343 ext. 911",
      email: "claims@4bridgesinsurance.com",
      hours: "24/7 Emergency Line"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with 4 Bridges Insurance Company. Call (800) 4BRIDGES or visit our office for expert insurance guidance and quotes."
        keywords="contact insurance agent, insurance quotes, insurance office, get insurance quote"
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
            <MessageSquare className="w-12 h-12 mr-4" />
            <motion.h1 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
          </div>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to secure your family's future? Get in touch with our insurance experts today.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {info.icon}
                </motion.div>
                <motion.h3 
                  className="text-lg font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {info.title}
                </motion.h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700 font-medium mb-1 block transition-colors"
                    aria-label={info.ariaLabel}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                )}
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Product-Specific Contact Channels */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Product-Specific Support</h2>
            <p className="text-gray-600 text-center mb-8">Connect directly with our specialized teams for faster service</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3 text-center">{channel.product}</h3>
                  <div className="space-y-2 text-sm">
                    <a href={`tel:${channel.phone.replace(/\D/g, '')}`} className="flex items-center text-blue-600 hover:text-blue-700">
                      <Phone className="w-4 h-4 mr-2" />
                      {channel.phone}
                    </a>
                    <a href={`mailto:${channel.email}`} className="flex items-center text-blue-600 hover:text-blue-700">
                      <Mail className="w-4 h-4 mr-2" />
                      {channel.email}
                    </a>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Documents Banner */}
          <motion.div
            className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FileText className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-lg font-bold text-amber-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Important Documents Needed
                </motion.h3>
                <motion.p 
                  className="text-amber-800 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  For faster processing of your claim or quote request, please have these documents ready:
                </motion.p>
                <motion.ul 
                  className="text-sm text-amber-700 space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <li>• Government-issued ID (Driver's License, Passport)</li>
                  <li>• Social Security Number or Tax ID</li>
                  <li>• Recent medical records (if applicable)</li>
                  <li>• Current insurance policy information</li>
                </motion.ul>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  data-testid="success-message" 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800">{submitMessage}</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  data-testid="error-message" 
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start"
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800">{submitMessage}</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      data-testid="input-name"
                      {...register('name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.name && (
                      <motion.p 
                        data-testid="error-name" 
                        className="text-red-600 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      data-testid="input-email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.email && (
                      <motion.p 
                        data-testid="error-email" 
                        className="text-red-600 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      data-testid="input-phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="(800) 4BRIDGES"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <motion.select
                      id="subject"
                      data-testid="input-subject"
                      {...register('subject')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Select a subject</option>
                      <option value="life-insurance">Life Insurance</option>
                      <option value="health-insurance">Health Insurance</option>
                      <option value="retirement-planning">Retirement Planning</option>
                      <option value="medicare">Medicare</option>
                      <option value="final-expense">Final Expense</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </motion.select>
                    {errors.subject && (
                      <motion.p 
                        data-testid="error-subject" 
                        className="text-red-600 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    data-testid="input-message"
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                  {errors.message && (
                    <motion.p 
                      data-testid="error-message" 
                      className="text-red-600 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Add ripple effect
                    const button = event?.currentTarget as HTMLElement;
                    const ripple = document.createElement('span');
                    ripple.className = 'absolute inset-0 bg-white opacity-30 rounded-lg animate-ping';
                    button.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                  }}
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <motion.div 
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-bold text-gray-900">Visit Our Office</h3>
                  <p className="text-sm text-gray-600">350 Fifth Avenue, Suite 4820, New York, NY 10118</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174288083984!2d-73.98823492346198!3d40.74844097138775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2s350%20Fifth%20Avenue%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="4 Bridges Insurance Office Location - 350 Fifth Avenue, New York"
                  aria-label="Interactive map showing office location"
                ></iframe>
                <div className="p-4 bg-gray-50">
                  <a 
                    href="https://maps.google.com/?q=350+Fifth+Avenue+Suite+4820+New+York+NY+10118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center"
                    aria-label="Open in Google Maps"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 text-green-600 mr-2" />
                  Live Chat Available
                </h3>
                <p className="text-gray-700 mb-4">
                  Get instant answers from our insurance experts. Average response time: 2 minutes.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    No appointment needed
                  </p>
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Available Mon-Fri 8AM-8PM EST
                  </p>
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Screen sharing for quotes
                  </p>
                </div>
                <button
                  onClick={() => window.open('https://tawk.to/chat/demo', '_blank')}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  aria-label="Start live chat with insurance expert"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Live Chat
                </button>
              </div>

              {/* Quick Response */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We understand that insurance decisions are important and often time-sensitive. That's why we guarantee:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Response to all inquiries within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Same-day quotes for most insurance products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Immediate assistance for urgent matters</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-700 mb-4">
                  For urgent claims or policy matters outside business hours:
                </p>
                <a 
                  href="tel:8004274343"
                  className="flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-4"
                  aria-label="Call emergency line"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (800) 427-4343 ext. 911
                </a>
                <p className="text-sm text-gray-600 text-center">Available 24/7 for existing policyholders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}
