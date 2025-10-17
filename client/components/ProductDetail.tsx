import { ArrowLeft, Shield, Heart, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import QuoteForm from './QuoteForm';

interface ProductDetailProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  whyImportant: string[];
  keyPoints: string[];
  benefits: string[];
  children?: React.ReactNode;
}

export default function ProductDetail({
  title,
  icon,
  description,
  whyImportant,
  keyPoints,
  benefits,
  children,
}: ProductDetailProps) {
  const navigate = useNavigate();

  return (
    <Layout>
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
              <div className="text-white text-2xl">{icon}</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>
          
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive {title.toLowerCase()} solutions designed to protect your family and secure your financial future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* What Is Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Is {title}?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Why Important Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Why Is {title} Important?</h2>
              </div>
              <div className="space-y-2">
                {whyImportant.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Key Points</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="mb-12">
            <QuoteForm insuranceType={title.toLowerCase().replace(' ', '-')} />
          </div>

          {/* Additional Content (Calculators, etc) */}
          {children}

          {/* CTA Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Contact our expert team to learn more about {title.toLowerCase()} options.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get a Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> The information on this website is for educational use only. 
              Consult a licensed advisor or attorney before making decisions about insurance and financial products. 
              Coverage and benefits subject to policy terms, limitations, and state availability.
            </p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}