import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '(555) 123-4567',
      subtext: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@4bridges.com',
      subtext: 'We\'ll respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      detail: '123 Main Street',
      subtext: 'New York, NY 10001',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm">CONTACT US</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Our dedicated team is here to help. Reach out today and let's discuss how we can help protect your family's financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg p-8 text-center border border-gray-100 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{method.title}</h3>
                <p className="text-gray-600 font-semibold group-hover:text-gray-700">{method.detail}</p>
                <p className="text-sm text-gray-500 mt-1">{method.subtext}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="hidden md:flex items-center hover-lift">
            <img
              src="https://images.pexels.com/photos/7689884/pexels-photo-7689884.jpeg"
              alt="Friendly customer service representative"
              className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Form & Info */}
          <div className="space-y-8">
            {/* Form */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 hover:border-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 hover:border-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 hover:border-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 resize-none hover:border-gray-400"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-semibold animate-pulse">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Business Info */}
            <div className="space-y-6 bg-white rounded-xl p-6 border border-gray-200 shadow-md">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between hover:text-blue-600 transition-colors">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between hover:text-blue-600 transition-colors">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between hover:text-blue-600 transition-colors">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Service Areas</h4>
                <p className="text-gray-600 leading-relaxed">
                  We proudly serve clients throughout the United States. Our team is licensed and qualified to provide insurance services in all 50 states.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 rounded">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-600">Licensed in the United States.</span> All our representatives are fully licensed and insured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
