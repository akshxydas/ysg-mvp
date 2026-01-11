import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About YouShouldGo
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing places near you when you have free time
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What is YouShouldGo?
          </h2>
          <p className="text-gray-700 mb-4">
            YouShouldGo is a location-based discovery app that helps you find interesting places to visit 
            when you have free time. Whether you&apos;re looking for temples, viewpoints, hiking trails, beaches, 
            or other attractions, we&apos;ll help you discover the best spots near your current location.
          </p>
          <p className="text-gray-700">
            Our app uses your device&apos;s location to calculate distances and show you the nearest places, 
            sorted by proximity. Each place includes detailed information about the best time to visit, 
            ratings, and descriptions to help you make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Location-Based Discovery</h3>
            </div>
            <p className="text-gray-700">
              Get personalized recommendations based on your current location. 
              We calculate distances using the Haversine formula for accurate results.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Smart Search & Filter</h3>
            </div>
            <p className="text-gray-700">
              Search places by keywords or filter by type. Find exactly what you&apos;re looking for 
              with our intuitive search and filtering system.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Best Time to Visit</h3>
            </div>
            <p className="text-gray-700">
              Each place includes information about the best time to visit, 
              helping you plan your trips for the optimal experience.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">User Ratings</h3>
            </div>
            <p className="text-gray-700">
              See ratings and reviews for each place to help you make informed decisions 
              about where to spend your free time.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Accept Terms & Conditions</h3>
                <p className="text-gray-700">
                  When you first visit the app, you&apos;ll need to read and accept our terms and conditions, 
                  including important disclaimers about data accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Grant Location Permission</h3>
                <p className="text-gray-700">
                  Allow the app to access your location so we can find places near you. 
                  Your location data is processed locally and not stored on our servers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Discover Places</h3>
                <p className="text-gray-700">
                  Browse nearby places sorted by distance, or use the search and filter features 
                  to find specific types of places or locations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Plan Your Visit</h3>
                <p className="text-gray-700">
                  Review place details, ratings, and best times to visit before making your decision. 
                  Each place includes comprehensive information to help you plan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">
            ⚠️ Important Notice
          </h2>
          <p className="text-yellow-700">
            This application uses local JSON data for place information. While we strive for accuracy, 
            the data may not always be up-to-date or complete. Please verify details before visiting any location. 
            We are not responsible for any issues that may arise from visiting recommended places.
          </p>
        </div>
      </main>
    </div>
  )
} 