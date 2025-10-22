import { MapPin, CheckCircle } from 'lucide-react';

export function CoverageMap() {
  // States where the agency is licensed
  const coveredStates = [
    'New York', 'California', 'Texas', 'Florida', 'Pennsylvania',
    'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
    'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts'
  ];

  const majorCities = [
    { name: 'Los Angeles, CA', coords: 'left-[15%] top-[65%]' },
    { name: 'New York, NY', coords: 'right-[20%] top-[25%]' },
    { name: 'Chicago, IL', coords: 'left-[45%] top-[35%]' },
    { name: 'Houston, TX', coords: 'left-[35%] top-[75%]' },
    { name: 'Phoenix, AZ', coords: 'left-[20%] top-[60%]' },
    { name: 'Philadelphia, PA', coords: 'right-[15%] top-[30%]' },
    { name: 'San Antonio, TX', coords: 'left-[32%] top-[78%]' },
    { name: 'San Diego, CA', coords: 'left-[12%] top-[68%]' },
    { name: 'Dallas, TX', coords: 'left-[38%] top-[70%]' },
    { name: 'San Jose, CA', coords: 'left-[8%] top-[55%]' }
  ];

  return (
    <section className="py-16 bg-white" aria-label="U.S. coverage area map">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Licensed in 15 States</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            We're proud to serve families and businesses across 15 states with comprehensive
            insurance solutions. Our regional expertise ensures you get personalized coverage
            tailored to your state's requirements and your family's needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15 States Licensed</h3>
              <p className="text-gray-600 text-sm">Fully licensed and operational in 15 states</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Regional specialists in major metropolitan areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Carrier Access</h3>
              <p className="text-gray-600 text-sm">Access to 50+ top-rated insurance carriers</p>
            </div>
          </div>
        </div>

        {/* US Map Visualization */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
            {/* Simplified US Map Outline */}
            <div className="relative aspect-[16/10] bg-white rounded-xl shadow-inner overflow-hidden">
              {/* Map Background */}
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                role="img"
                aria-label="United States coverage map"
              >
                {/* Simplified US Outline */}
                <path
                  d="M50,200 Q100,150 150,180 Q200,160 250,190 Q300,170 350,200 Q400,180 450,210 Q500,190 550,220 Q600,200 650,230 Q700,210 750,240 Q800,220 850,250 Q900,230 950,260 L950,400 Q900,420 850,410 Q800,430 750,420 Q700,440 650,430 Q600,450 550,440 Q500,460 450,450 Q400,470 350,460 Q300,480 250,470 Q200,490 150,480 Q100,500 50,490 Z"
                  fill="#e3f2fd"
                  stroke="#1976d2"
                  strokeWidth="2"
                />

                {/* Coverage dots for major cities */}
                {majorCities.map((_, index) => (
                  <circle
                    key={index}
                    cx={200 + index * 60}
                    cy={150 + (index % 3) * 80}
                    r="6"
                    fill="#4caf50"
                    className="animate-pulse"
                  />
                ))}
              </svg>

              {/* Coverage Labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Licensed in 15 States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Statistics */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
            <div className="text-sm text-gray-600">States Licensed</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-sm text-gray-600">Families Protected</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Insurance Carriers</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Service Areas List */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">We're Licensed In:</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {coveredStates.map((state, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {state}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-6">Don't see your state? Contact us to learn about our expanding coverage areas.</p>
        </div>
      </div>
    </section>
  );
}