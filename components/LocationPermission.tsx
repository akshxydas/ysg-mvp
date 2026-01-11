'use client'

import { useState, useEffect, useCallback } from 'react'
import { Coordinates } from '@/utils/distance'

interface LocationPermissionProps {
  onLocationUpdate: (coords: Coordinates) => void
}

export default function LocationPermission({ onLocationUpdate }: LocationPermissionProps) {
  const [locationStatus, setLocationStatus] = useState<'idle' | 'requesting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [userCoords, setUserCoords] = useState<Coordinates | null>(null)

  const requestLocation = useCallback(() => {
    setLocationStatus('requesting')
    setErrorMessage('')

    if (!navigator.geolocation) {
      setLocationStatus('error')
      setErrorMessage('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: Coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
        setUserCoords(coords)
        onLocationUpdate(coords)
        setLocationStatus('success')
      },
      (error) => {
        setLocationStatus('error')
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMessage('Location permission denied. Please enable location access in your browser settings.')
            break
          case error.POSITION_UNAVAILABLE:
            setErrorMessage('Location information is unavailable. Please try again.')
            break
          case error.TIMEOUT:
            setErrorMessage('Location request timed out. Please try again.')
            break
          default:
            setErrorMessage('An unknown error occurred while getting your location.')
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    )
  }, [onLocationUpdate])

  useEffect(() => {
    // Auto-request location when component mounts
    requestLocation()
  }, [requestLocation])

  if (locationStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-green-800 font-medium">Location access granted</span>
        </div>
        {userCoords && (
          <div className="bg-white rounded p-3 mb-2">
            <p className="text-sm text-gray-700 font-medium mb-1">Your Coordinates:</p>
            <p className="text-sm text-gray-600">
              Latitude: <span className="font-mono">{userCoords.latitude.toFixed(6)}</span>
            </p>
            <p className="text-sm text-gray-600">
              Longitude: <span className="font-mono">{userCoords.longitude.toFixed(6)}</span>
            </p>
          </div>
        )}
        <p className="text-green-700 text-sm">
          We&apos;re finding the best places near you...
        </p>
      </div>
    )
  }

  if (locationStatus === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-red-800 font-medium">Location access required</h3>
            <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
            <button
              onClick={requestLocation}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (locationStatus === 'requesting') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
          <span className="text-blue-800 font-medium">Getting your location...</span>
        </div>
        <p className="text-blue-700 text-sm mt-1">
          Please allow location access when prompted by your browser.
        </p>
      </div>
    )
  }

  return null
} 