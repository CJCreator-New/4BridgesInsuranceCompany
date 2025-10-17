import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 animate-in fade-in">
      <div className="bg-white rounded-xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in-95">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Before You Go...</h3>
          <p className="text-gray-600 mb-6">
            Get a <strong className="text-blue-600">FREE insurance quote</strong> and see how much you could save. 
            No obligation, no pressure.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => {
                setIsVisible(false);
                navigate('/contact');
              }}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get My Free Quote
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-600 hover:text-gray-800 text-sm"
            >
              No thanks, I'll pass
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Join 50,000+ families who trust us with their insurance needs
          </p>
        </div>
      </div>
    </div>
  );
}
