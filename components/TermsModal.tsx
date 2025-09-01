'use client'

import { useState } from 'react'

interface TermsModalProps {
  isOpen: boolean
  onAccept: () => void
}

export default function TermsModal({ isOpen, onAccept }: TermsModalProps) {
  const [hasReadTerms, setHasReadTerms] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to YouShouldGo
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Disclaimer</h3>
              <p className="text-sm">
                This application provides location-based recommendations based on local JSON data. 
                While we strive for accuracy, the information may not always be up-to-date or complete. 
                Please verify details before visiting any location.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
              <div className="text-sm space-y-2 max-h-60 overflow-y-auto">
                <p>
                  <strong>1. Service Description:</strong> YouShouldGo is a location-based discovery service that helps users find nearby places of interest.
                </p>
                <p>
                  <strong>2. Data Accuracy:</strong> The information provided is based on local data sources and may not always be accurate or current.
                </p>
                <p>
                  <strong>3. Location Services:</strong> This app requires access to your location to provide relevant recommendations. Your location data is processed locally and not stored on our servers.
                </p>
                <p>
                  <strong>4. User Responsibility:</strong> Users are responsible for their own safety and should exercise caution when visiting recommended locations.
                </p>
                <p>
                  <strong>5. Privacy:</strong> We respect your privacy. Location data is only used to calculate distances and is not shared with third parties.
                </p>
                <p>
                  <strong>6. Limitation of Liability:</strong> We are not responsible for any issues that may arise from visiting recommended locations.
                </p>
                <p>
                  <strong>7. Changes to Service:</strong> We reserve the right to modify or discontinue this service at any time.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="readTerms"
                checked={hasReadTerms}
                onChange={(e) => setHasReadTerms(e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="readTerms" className="text-sm text-gray-700">
                I have read and agree to the Terms & Conditions and understand the disclaimer
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onAccept}
              disabled={!hasReadTerms}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                hasReadTerms
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 