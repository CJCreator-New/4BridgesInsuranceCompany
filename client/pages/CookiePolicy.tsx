import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function CookiePolicy() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title="Cookie Policy"
        description="Learn about how 4 Bridges Insurance Company uses cookies and similar technologies to enhance your browsing experience and provide personalized services."
        keywords="cookie policy, cookies, privacy, tracking, website analytics"
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
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>

          <p className="text-xl text-blue-100 max-w-2xl">
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Cookie className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                They help us provide you with a better browsing experience by remembering your preferences and understanding
                how you use our site.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality
                  such as page navigation, access to secure areas, and basic site features.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. This helps us improve our website's performance and user experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be
                  set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  These cookies are used to track visitors across websites to display ads that are relevant and
                  engaging for individual users. We may share this information with advertisers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Specific Cookies We Use</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics session tracking</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 px-4 py-2">User session management</td>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">preferences</td>
                    <td className="border border-gray-300 px-4 py-2">User preference storage</td>
                    <td className="border border-gray-300 px-4 py-2">Functional</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Managing Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>Browser Settings:</strong> You can control and manage cookies through your browser settings.
                Most browsers allow you to refuse cookies or alert you when cookies are being sent.
              </p>
              <p>
                <strong>Opt-out Options:</strong> You can opt out of interest-based advertising by visiting the
                Network Advertising Initiative opt-out page or the Digital Advertising Alliance opt-out page.
              </p>
              <p>
                <strong>Google Analytics:</strong> You can opt out of Google Analytics tracking by installing the
                Google Analytics Opt-out Browser Add-on.
              </p>
              <p>
                <strong>Essential Cookies:</strong> Please note that disabling certain cookies may affect the
                functionality of our website and your user experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Some cookies on our website are set by third-party services that appear on our pages. We have no control
                over these cookies, and they are subject to the respective third party's privacy policy. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Plugins:</strong> For social sharing functionality</li>
                <li><strong>Live Chat Services:</strong> For customer support interactions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Last Updated:</strong> October 17, 2025<br />
              This Cookie Policy may be updated periodically to reflect changes in our practices or applicable laws.
              We encourage you to review this policy regularly.
            </p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}