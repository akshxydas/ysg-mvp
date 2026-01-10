'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import TermsModal from '@/components/TermsModal'
import LocationPermission from '@/components/LocationPermission'
import PlaceCard from '@/components/PlaceCard'
import PlaceDetailsModal from '@/components/PlaceDetailsModal'
import DistanceSelector from '@/components/DistanceSelector'
import { Place, PlaceWithDistance, Coordinates, calculateDistances, sortPlacesByDistance, filterPlacesByDistance } from '@/utils/distance'

export default function HomePage() {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)
  const [places, setPlaces] = useState<Place[]>([])
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null)
  const [nearbyPlaces, setNearbyPlaces] = useState<PlaceWithDistance[]>([])
  const [loading, setLoading] = useState(true)
  const [distanceThreshold, setDistanceThreshold] = useState(10) // Default 10km
  const [selectedPlace, setSelectedPlace] = useState<PlaceWithDistance | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Check if user has already accepted terms
    const accepted = localStorage.getItem('youshouldgo-terms-accepted')
    if (accepted === 'true') {
      setHasAcceptedTerms(true)
    }

    // Load places data
    const loadPlaces = async () => {
      try {
        const response = await fetch('/places.json')
        const data = await response.json()
        setPlaces(data)
      } catch (error) {
        console.error('Error loading places:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPlaces()
  }, [])

  const handleAcceptTerms = () => {
    localStorage.setItem('youshouldgo-terms-accepted', 'true')
    setHasAcceptedTerms(true)
  }

  const handleLocationUpdate = (coords: Coordinates) => {
    setUserLocation(coords)
    updateNearbyPlaces(coords, distanceThreshold)
  }

  const handleDistanceChange = (newDistance: number) => {
    setDistanceThreshold(newDistance)
    if (userLocation) {
      updateNearbyPlaces(userLocation, newDistance)
    }
  }

  const updateNearbyPlaces = (coords: Coordinates, maxDistance: number) => {
    // Calculate distances for all places
    const placesWithDistances = calculateDistances(coords.latitude, coords.longitude, places)

    // Filter by distance threshold
    const placesWithinDistance = filterPlacesByDistance(placesWithDistances, maxDistance)

    // Sort by distance
    const sortedPlaces = sortPlacesByDistance(placesWithinDistance)
    setNearbyPlaces(sortedPlaces)
  }

  const handlePlaceClick = (place: PlaceWithDistance) => {
    setSelectedPlace(place)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlace(null)
  }

  if (!hasAcceptedTerms) {
    return (
      <div className="min-h-screen">
        <TermsModal isOpen={true} onAccept={handleAcceptTerms} />
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen pb-12">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-nature-900 mb-6 tracking-tight">
            Discover <span className="text-terra-500">Amazing Places</span> Near You
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Find the perfect spots to visit when you have free time. From temples and viewpoints to hiking trails and beaches.
          </p>
        </motion.div>

        <LocationPermission onLocationUpdate={handleLocationUpdate} />

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-nature-600"></div>
          </div>
        ) : userLocation ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Distance Selector */}
            <DistanceSelector
              distance={distanceThreshold}
              onDistanceChange={handleDistanceChange}
              maxDistance={100}
            />

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-nature-800 mb-4 flex items-center">
                <span className="mr-2">📍</span> Places Near You
              </h2>
              <div className="bg-nature-50 border border-nature-200 rounded-xl p-4 mb-4 shadow-sm">
                <p className="text-sm text-nature-800">
                  <strong>Your Location:</strong> {userLocation.latitude.toFixed(6)}, {userLocation.longitude.toFixed(6)}
                </p>
                <p className="text-sm text-nature-800 mt-1">
                  <strong>Search Radius:</strong> {distanceThreshold} km
                </p>
              </div>
              <p className="text-stone-600 font-medium ml-1">
                Found {nearbyPlaces.length} place{nearbyPlaces.length !== 1 ? 's' : ''} within {distanceThreshold} km
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {nearbyPlaces.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  onClick={handlePlaceClick}
                />
              ))}
            </motion.div>

            {nearbyPlaces.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-white/50 rounded-2xl border-2 border-dashed border-gray-200"
              >
                <div className="text-gray-300 mb-4">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No places found nearby</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any places within {distanceThreshold} km of your location. Try increasing the search radius or moving to a different area.
                </p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-white/60 backdrop-blur rounded-2xl shadow-sm border border-white">
            <div className="text-nature-300 mb-6">
              <svg className="w-20 h-20 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Enable location access</h3>
            <p className="text-stone-600 max-w-md mx-auto">
              We need your location to show you the best places nearby. Please allow location access in your browser.
            </p>
          </div>
        )}
      </main>

      {/* Place Details Modal */}
      <PlaceDetailsModal
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
} 