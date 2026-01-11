import Navigation from '@/components/Navigation'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Service Description
            </h2>
            <p className="text-gray-700 mb-4">
              YouShouldGo is a location-based discovery service that helps users find nearby places of interest 
              such as temples, viewpoints, hiking trails, beaches, and other attractions. The service provides 
              distance calculations, place information, and search functionality to enhance user experience.
            </p>
            <p className="text-gray-700">
              Our service is designed to help users make informed decisions about places to visit when they have 
              free time, but we do not guarantee the accuracy or completeness of the information provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Data Accuracy and Disclaimer
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                The information provided by YouShouldGo is based on local JSON data sources and may not always 
                be accurate, up-to-date, or complete. While we strive to maintain accurate information, we cannot 
                guarantee the reliability of the data provided.
              </p>
            </div>
            <p className="text-gray-700">
              Users are advised to verify all information before visiting any recommended location. 
              We are not responsible for any inaccuracies, errors, or omissions in the place information provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Location Services and Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              YouShouldGo requires access to your device&apos;s location to provide relevant recommendations. 
              Your location data is processed locally on your device and is not stored on our servers or 
              shared with third parties.
            </p>
            <p className="text-gray-700 mb-4">
              We respect your privacy and are committed to protecting your personal information. 
              Location data is only used to calculate distances between your current location and 
              places of interest, and is not used for any other purpose.
            </p>
            <p className="text-gray-700">
              You can revoke location access at any time through your device settings, though this 
              will limit the functionality of the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. User Responsibility and Safety
            </h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for their own safety and well-being when visiting recommended locations. 
              We strongly advise users to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Research and verify information about places before visiting</li>
              <li>Check current conditions, opening hours, and accessibility</li>
              <li>Follow local laws, regulations, and safety guidelines</li>
              <li>Exercise caution and common sense when visiting new places</li>
              <li>Consider weather conditions and seasonal factors</li>
              <li>Respect local customs and cultural sensitivities</li>
            </ul>
            <p className="text-gray-700">
              We are not responsible for any accidents, injuries, or other issues that may arise 
              from visiting recommended locations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              YouShouldGo and its content, including but not limited to text, graphics, images, 
              and software, are protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              Users may not copy, reproduce, distribute, or create derivative works from the service 
              without explicit permission. Place images and descriptions are used for informational 
              purposes only and may be subject to their own copyright restrictions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, YouShouldGo and its operators shall not be liable 
              for any direct, indirect, incidental, special, consequential, or punitive damages arising 
              from your use of the service.
            </p>
            <p className="text-gray-700">
              This includes but is not limited to damages for loss of profits, data, or other intangible 
              losses, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Service Availability and Changes
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain service availability but do not guarantee uninterrupted access to the service. 
              The service may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify, suspend, or discontinue the service at any time without notice. 
              We may also update these terms and conditions from time to time, and continued use of the service 
              constitutes acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Governing Law
            </h2>
            <p className="text-gray-700">
              These terms and conditions are governed by and construed in accordance with applicable laws. 
              Any disputes arising from the use of this service shall be resolved in accordance with 
              the laws of the jurisdiction in which the service is operated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions about these terms and conditions or the service, please contact us 
              through the appropriate channels. We are committed to addressing user concerns and improving 
              our service based on feedback.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Acceptance of Terms</h3>
            <p className="text-blue-700 text-sm">
              By using YouShouldGo, you acknowledge that you have read, understood, and agree to be bound 
              by these terms and conditions. If you do not agree to these terms, please do not use the service.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 