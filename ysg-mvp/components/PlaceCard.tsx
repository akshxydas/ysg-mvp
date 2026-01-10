'use client'

import Image from 'next/image'
import { PlaceWithDistance } from '@/utils/distance'
import { motion } from 'framer-motion'

interface PlaceCardProps {
  place: PlaceWithDistance
  onClick: (place: PlaceWithDistance) => void
}

export default function PlaceCard({ place, onClick }: PlaceCardProps) {
  const formatDistance = (distance: number) => {
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`
    }
    return `${distance.toFixed(1)}km`
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-terra-400' : 'text-gray-300'
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-stone-600 ml-1">({rating})</span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-transparent hover:border-nature-200"
      onClick={() => onClick(place)}
    >
      {place.image_url && (
        <div className="relative h-48 w-full overflow-hidden group">
          <Image
            src={place.image_url}
            alt={place.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-white/90 backdrop-blur text-nature-800 text-xs px-2 py-1 rounded-full font-bold shadow-sm ring-1 ring-nature-100">
              {place.type}
            </span>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-nature-700 transition-colors">
            {place.name}
          </h3>
          <span className="text-xs font-semibold text-terra-600 bg-terra-50 px-2 py-1 rounded-full border border-terra-100 shrink-0 ml-2">
            {formatDistance(place.distance)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {place.description}
        </p>

        <div className="space-y-2 border-t border-gray-100 pt-3">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-nature-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-gray-700">Best time: {place.best_time}</span>
          </div>

          {place.address && (
            <div className="flex items-start text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-nature-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-2">{place.address}</span>
            </div>
          )}

          {renderStars(place.rating)}
        </div>
      </div>
    </motion.div>
  )
} 