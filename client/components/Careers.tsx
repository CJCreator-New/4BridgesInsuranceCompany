export default function Careers() {
  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Attractive salary and commission structures that reward your performance and dedication to client success.',
    },
    {
      icon: '🎓',
      title: 'Continuous Learning',
      description: 'Access to professional development programs, industry certifications, and ongoing training to advance your expertise.',
    },
    {
      icon: '👥',
      title: 'Collaborative Culture',
      description: 'Work with a supportive team that values your contributions and fosters a culture of professional growth.',
    },
    {
      icon: '🌟',
      title: 'Career Advancement',
      description: 'Clear pathways to leadership positions with opportunities to mentor and build your own team.',
    },
    {
      icon: '🏥',
      title: 'Comprehensive Benefits',
      description: 'Health insurance, retirement plans, flexible schedules, and work-life balance initiatives for all employees.',
    },
    {
      icon: '🎯',
      title: 'Mission-Driven Work',
      description: 'Make a real difference in families\' lives while building lasting relationships with clients and colleagues.',
    },
  ];

  return (
    <section id="careers" className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm">CAREERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Are you passionate about helping families achieve financial security? Join 4 Bridges Insurance Company and make a real difference in people's lives while building a rewarding career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left side - Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team collaboration and meeting"
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Right side - CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to Build Your Career?</h3>
              <p className="text-lg text-gray-600">
                We're looking for talented and motivated individuals to join our growing team. Whether you're an experienced insurance professional or looking to start a new career in the insurance industry, we have exciting opportunities for you.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Multiple Career Paths</p>
                  <p className="text-gray-600 text-sm">Insurance agents, customer service, management, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Flexible Work Environment</p>
                  <p className="text-gray-600 text-sm">Remote opportunities and flexible scheduling available.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Growth & Development</p>
                  <p className="text-gray-600 text-sm">Mentorship programs and clear advancement opportunities.</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 w-full">
              View Open Positions
            </button>
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
      `}</style>
    </section>
  );
}
