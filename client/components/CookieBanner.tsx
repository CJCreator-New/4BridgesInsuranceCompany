import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences));
    setIsVisible(false);

    // Enable analytics/marketing cookies here
    if (allPreferences.analytics) {
      // Enable Google Analytics, etc.
      console.log('Analytics cookies enabled');
    }
    if (allPreferences.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);

    // Apply preferences
    if (preferences.analytics) {
      console.log('Analytics cookies enabled');
    }
    if (preferences.marketing) {
      console.log('Marketing cookies enabled');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg cookie">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We use cookies to improve your experience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </a>.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">Necessary Cookies</span>
                    <p className="text-xs text-gray-600">Required for the website to function properly</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">Analytics Cookies</span>
                    <p className="text-xs text-gray-600">Help us understand how visitors use our website</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">Marketing Cookies</span>
                    <p className="text-xs text-gray-600">Used to deliver relevant advertisements</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 p-1 ml-4 flex-shrink-0"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={acceptAll}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Accept All Cookies
          </button>
          <button
            onClick={savePreferences}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Save Preferences
          </button>
          <button
            onClick={acceptNecessaryOnly}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </div>
  );
}