import { ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO 
        title="Terms of Service"
        description="4 Bridges Insurance Company terms of service - legal terms and conditions for using our website and services."
        keywords="terms of service, legal terms, conditions"
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
              <FileText className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-blue-100">Last Updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
              <p className="text-gray-600 mb-6">
                This website is for informational purposes only. Insurance quotes and policy details provided 
                are estimates and subject to underwriting approval. Final terms and pricing will be determined 
                by the insurance carrier.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Licensing</h2>
              <p className="text-gray-600 mb-6">
                4 Bridges Insurance Company and its representatives are licensed insurance agents in the states 
                where we conduct business. License numbers are available upon request.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accuracy of Information</h2>
              <p className="text-gray-600 mb-6">
                While we strive to provide accurate information, we make no warranties about the completeness, 
                reliability, or accuracy of information on this website. Insurance products, rates, and availability 
                are subject to change without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Guarantee of Coverage</h2>
              <p className="text-gray-600 mb-6">
                Submission of an application does not guarantee approval or coverage. All applications are subject 
                to underwriting review and approval by the insurance carrier.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on this website, including text, graphics, logos, and software, is the property of 
                4 Bridges Insurance Company and protected by copyright laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                4 Bridges Insurance Company shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from your use of this website or our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the content 
                or privacy practices of these external sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms of Service at any time. Continued use of the website 
                after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">For questions about these Terms of Service:</p>
              <address className="not-italic text-gray-600 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:legal@4bridges.com" className="text-blue-600 hover:underline">legal@4bridges.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:8004274343" className="text-blue-600 hover:underline">(800) 4BRIDGES</a></p>
                <p><strong>Address:</strong> 456 Insurance Plaza, Suite 200, New York, NY 10001</p>
              </address>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
