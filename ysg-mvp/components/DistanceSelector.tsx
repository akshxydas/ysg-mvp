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
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-stone-100 p-8 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-nature-900 mb-2">Search Radius</h3>
        <p className="text-sm text-stone-500">Adjust the search area around your location</p>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {/* Circular visualization */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Background circle */}
          <div className="absolute w-40 h-40 border-2 border-stone-100 rounded-full border-dashed"></div>

          {/* Distance radius circle */}
          <div
            className="absolute border-2 border-terra-400 rounded-full bg-terra-50 bg-opacity-40 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(224,122,95,0.2)]"
            style={{
              width: `${Math.max(20, radius * 2)}px`,
              height: `${Math.max(20, radius * 2)}px`,
            }}
          ></div>

          {/* Center point */}
          <div className="absolute w-4 h-4 bg-nature-600 rounded-full ring-4 ring-white shadow-md z-10"></div>

          {/* Distance label */}
          <div className="absolute -bottom-10 text-center w-full">
            <span className="text-2xl font-bold text-nature-800">{localDistance}</span>
            <span className="text-sm text-stone-500 ml-1 font-medium">km</span>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full max-w-sm pt-4">
          <input
            type="range"
            min="1"
            max={maxDistance}
            value={localDistance}
            onChange={handleSliderChange}
            onMouseUp={handleSliderRelease}
            onTouchEnd={handleSliderRelease}
            className="w-full h-3 bg-stone-200 rounded-full appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(localDistance / maxDistance) * 100}%, #e5e7eb ${(localDistance / maxDistance) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between text-xs font-semibold text-stone-400 mt-3 px-1">
            <span>1 km</span>
            <span>{maxDistance} km</span>
          </div>
        </div>

        {/* Quick preset buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {[5, 10, 25, 50].map((preset) => (
            <button
              key={preset}
              onClick={() => onDistanceChange(preset)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${localDistance === preset
                  ? 'bg-nature-600 text-white shadow-md transform scale-105'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100 hover:text-nature-700'
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

