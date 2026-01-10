'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import PlaceCard from '@/components/PlaceCard'
import PlaceDetailsModal from '@/components/PlaceDetailsModal'
import LocationPermission from '@/components/LocationPermission'
import { Place, PlaceWithDistance, Coordinates, calculateDistances, sortPlacesByDistance, filterPlacesByType, searchPlaces, getPlaceTypes, filterPlacesByDistance } from '@/utils/distance'

export default function SearchPage() {
  const [places, setPlaces] = useState<Place[]>([])
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceWithDistance[]>([])
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedDistance, setSelectedDistance] = useState('100')
  const [placeTypes, setPlaceTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPlace, setSelectedPlace] = useState<PlaceWithDistance | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const response = await fetch('/places.json')
        const data = await response.json()
        setPlaces(data)
        setPlaceTypes(getPlaceTypes(data))
      } catch (error) {
        console.error('Error loading places:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPlaces()
  }, [])

  useEffect(() => {
    if (userLocation && places.length > 0) {
      let placesWithDistances = calculateDistances(userLocation.latitude, userLocation.longitude, places)
      
      // Apply search filter
      if (searchTerm.trim()) {
        placesWithDistances = searchPlaces(placesWithDistances, searchTerm)
      }
      
      // Apply type filter
      placesWithDistances = filterPlacesByType(placesWithDistances, selectedType)
      
      // Apply distance filter using selected distance
      const maxDistance = parseInt(selectedDistance)
      placesWithDistances = filterPlacesByDistance(placesWithDistances, maxDistance)
      
      // Sort by distance
      const sortedPlaces = sortPlacesByDistance(placesWithDistances)
      setFilteredPlaces(sortedPlaces)
    }
  }, [userLocation, places, searchTerm, selectedType, selectedDistance])

  const handleLocationUpdate = (coords: Coordinates) => {
    setUserLocation(coords)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value)
  }

  const handleDistanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistance(e.target.value)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedType('all')
    setSelectedDistance('100')
  }

  const handlePlaceClick = (place: PlaceWithDistance) => {
    setSelectedPlace(place)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlace(null)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Search Places
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find specific places or filter by type. Search by name, description, or category.
          </p>
          {userLocation && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 inline-block">
              <p className="text-sm text-blue-800">
                <strong>Your Location:</strong> {userLocation.latitude.toFixed(6)}, {userLocation.longitude.toFixed(6)}
              </p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div>
            {!userLocation && (
              <LocationPermission onLocationUpdate={handleLocationUpdate} />
            )}
            
            {/* Search and Filter Controls */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search Places
                  </label>
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name, description, or type..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Type
                  </label>
                  <select
                    id="type"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  >
                    <option value="all">All Types</option>
                    {placeTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-2">
                    Max Distance
                  </label>
                  <select
                    id="distance"
                    value={selectedDistance}
                    onChange={handleDistanceChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  >
                    <option value="10">Within 10 km</option>
                    <option value="25">Within 25 km</option>
                    <option value="50">Within 50 km</option>
                    <option value="100">Within 100 km</option>
                    <option value="200">Within 200 km</option>
                    <option value="500">Within 500 km</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Search Results
                </h2>
                <p className="text-gray-600">
                  {filteredPlaces.length} place{filteredPlaces.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {(searchTerm || selectedType !== 'all' || selectedDistance !== '100') && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 text-sm">
                    <strong>Active filters:</strong>
                    {searchTerm && ` Search: "${searchTerm}"`}
                    {selectedType !== 'all' && ` Type: ${selectedType}`}
                    {selectedDistance !== '100' && ` Max Distance: ${selectedDistance} km`}
                  </p>
                </div>
              )}
            </div>

            {filteredPlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => (
                  <PlaceCard 
                    key={place.id} 
                    place={place} 
                    onClick={handlePlaceClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No places found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find more places.
                </p>
              </div>
            )}
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