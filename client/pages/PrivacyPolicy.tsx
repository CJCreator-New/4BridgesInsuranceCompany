import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO 
        title="Privacy Policy"
        description="4 Bridges Insurance privacy policy - how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />
      <div className="bg-gray-50 min-h-screen">
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
              <Shield className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-blue-100">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, including name, email address, phone number, 
                date of birth, Social Security number, health information, and financial information necessary 
                to provide insurance quotes and services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide insurance quotes and policy information</li>
                <li>Process applications and claims</li>
                <li>Communicate with you about your policies</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We share your information with insurance carriers to obtain quotes and process applications. 
                We do not sell your personal information to third parties. We may share information as required 
                by law or to protect our rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement industry-standard security measures to protect your personal information, including 
                encryption, secure servers, and access controls. However, no method of transmission over the 
                internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to improve your experience, analyze site usage, and 
                assist in our marketing efforts. You can control cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. HIPAA Compliance</h2>
              <p className="text-gray-600 mb-6">
                For health insurance matters, we comply with the Health Insurance Portability and Accountability 
                Act (HIPAA) and protect your health information according to federal regulations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 mb-2">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-600">
                Email: privacy@4bridges.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
