import { ArrowLeft, Award, Users, Heart, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Team() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "President & CEO",
      credentials: "CLU, ChFC, LUTCF",
      experience: "25+ years",
      image: "https://images.pexels.com/photos/3184392/pexels-photo-3184392.jpeg",
      bio: "Sarah founded 4 Bridges Insurance with a vision to make quality insurance accessible to every American family. With over 25 years in the industry, she specializes in life insurance and retirement planning.",
      specialties: ["Life Insurance", "Retirement Planning", "Business Insurance"],
      achievements: ["Top 1% Producer Nationwide", "Million Dollar Round Table", "Licensed in 15 States"]
    },
    {
      name: "Michael Chen",
      title: "Senior Insurance Advisor",
      credentials: "CLU, ChFC, CFP®",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg",
      bio: "Michael brings extensive expertise in health insurance and Medicare planning. He helps families navigate complex healthcare decisions and find the best coverage for their needs.",
      specialties: ["Health Insurance", "Medicare", "Long-term Care"],
      achievements: ["Health Insurance Specialist", "Medicare Expert", "Client Satisfaction Award"]
    },
    {
      name: "Jennifer Martinez",
      title: "Client Relations Manager",
      credentials: "LUTCF, ACS",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      bio: "Jennifer ensures every client receives personalized attention and ongoing support. Her dedication to customer service has earned her recognition as one of the industry's top relationship managers.",
      specialties: ["Client Support", "Policy Management", "Claims Assistance"],
      achievements: ["Customer Service Excellence", "5-Star Reviews", "Client Retention Expert"]
    },
    {
      name: "David Thompson",
      title: "Financial Planning Specialist",
      credentials: "ChFC, CLU, CFP®",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
      bio: "David specializes in comprehensive financial planning, including estate planning and retirement strategies. He helps clients build wealth and protect their legacy for future generations.",
      specialties: ["Estate Planning", "Retirement Planning", "Wealth Management"],
      achievements: ["Certified Financial Planner", "Estate Planning Specialist", "Investment Advisor"]
    }
  ];

  return (
    <Layout>
      <SEO
        title="Meet Our Team - Licensed Insurance Professionals"
        description="Meet the experienced team at 4 Bridges Insurance. Our licensed professionals have over 70 combined years of experience helping families secure their financial future."
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
              <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl">
              Licensed professionals with over 70 combined years of experience, dedicated to protecting your family's future.
            </p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">70+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Families Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                <div className="text-gray-600">States Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Licensed Professionals</div>
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

            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <Shield className="w-5 h-5 text-green-600 ml-2" />
                        <span className="sr-only">Licensed Professional</span>
                      </div>
                      <p className="text-blue-600 font-semibold mb-1">{member.title}</p>
                      <p className="text-sm text-gray-600 mb-3">
                        {member.credentials} • {member.experience} experience
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                      <span className="sr-only">team bio professional credentials</span>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-500" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-1 text-yellow-500" />
                          Achievements
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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

        {/* Certifications Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Certifications & Designations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">CLU - Chartered Life Underwriter</h3>
                <p className="text-gray-600 text-sm">Advanced certification in life insurance and financial planning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">ChFC - Chartered Financial Consultant</h3>
                <p className="text-gray-600 text-sm">Comprehensive financial planning and insurance expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">CFP® - Certified Financial Planner</h3>
                <p className="text-gray-600 text-sm">Highest standard in financial planning certification</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}