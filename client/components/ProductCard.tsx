import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ProductCard({ icon, title, description, index = 0 }: ProductCardProps) {
  const navigate = useNavigate();
  
  const getProductPath = (title: string) => {
    return '/' + title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleCardClick = () => {
    navigate(getProductPath(title));
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:-translate-y-2 hover:border-blue-300 cursor-pointer overflow-hidden transform hover:scale-105"
      style={{
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Background animation on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>

        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-blue-300 transition-colors duration-300">
          <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
      `}</style>
    </div>
  );
}
