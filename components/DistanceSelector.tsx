'use client'

import { useState, useEffect } from 'react'

interface DistanceSelectorProps {
  distance: number
  onDistanceChange: (distance: number) => void
  maxDistance?: number
}

export default function DistanceSelector({ distance, onDistanceChange, maxDistance = 100 }: DistanceSelectorProps) {
  const [localDistance, setLocalDistance] = useState(distance)

  useEffect(() => {
    setLocalDistance(distance)
  }, [distance])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDistance = parseInt(e.target.value)
    setLocalDistance(newDistance)
  }

  const handleSliderRelease = () => {
    onDistanceChange(localDistance)
  }

  const radius = Math.min(80, (localDistance / maxDistance) * 80) // Max radius of 80px for visualization

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Search Radius</h3>
        <p className="text-sm text-gray-600">Adjust the search area around your location</p>
      </div>
      
      <div className="flex flex-col items-center space-y-6">
        {/* Circular visualization */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Background circle */}
          <div className="absolute w-40 h-40 border-2 border-gray-200 rounded-full"></div>
          
          {/* Distance radius circle */}
          <div 
            className="absolute border-2 border-blue-500 rounded-full bg-blue-50 bg-opacity-30 transition-all duration-300 ease-out"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              left: `${(160 - radius * 2) / 2}px`,
              top: `${(160 - radius * 2) / 2}px`
            }}
          ></div>
          
          {/* Center point */}
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full"></div>
          
          {/* Distance label */}
          <div className="absolute -bottom-8 text-center">
            <span className="text-lg font-bold text-blue-600">{localDistance}</span>
            <span className="text-sm text-gray-600 ml-1">km</span>
          </div>
        </div>
        
        {/* Slider */}
        <div className="w-full max-w-xs">
          <input
            type="range"
            min="1"
            max={maxDistance}
            value={localDistance}
            onChange={handleSliderChange}
            onMouseUp={handleSliderRelease}
            onTouchEnd={handleSliderRelease}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(localDistance / maxDistance) * 100}%, #e5e7eb ${(localDistance / maxDistance) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>1 km</span>
            <span>{maxDistance} km</span>
          </div>
        </div>
        
        {/* Quick preset buttons */}
        <div className="flex space-x-2">
          {[5, 10, 25, 50].map((preset) => (
            <button
              key={preset}
              onClick={() => onDistanceChange(preset)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                localDistance === preset
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {preset} km
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

