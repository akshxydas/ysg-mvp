export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Place {
  id: number;
  name: string;
  type: string;
  description: string;
  latitude: number;
  longitude: number;
  best_time: string;
  rating?: number;
  image_url?: string;
  address?: string;
}

export interface PlaceWithDistance extends Place {
  distance: number;
}

// Haversine formula to calculate distance between two points on Earth
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

// Calculate distances for all places from user's location
export function calculateDistances(
  userLat: number,
  userLon: number,
  places: Place[]
): PlaceWithDistance[] {
  return places.map((place) => ({
    ...place,
    distance: calculateDistance(
      userLat,
      userLon,
      place.latitude,
      place.longitude
    ),
  }));
}

// Sort places by distance
export function sortPlacesByDistance(places: PlaceWithDistance[]): PlaceWithDistance[] {
  return places.sort((a, b) => a.distance - b.distance);
}

// Filter places by type
export function filterPlacesByType(places: PlaceWithDistance[], type: string): PlaceWithDistance[] {
  if (!type || type === 'all') return places;
  return places.filter((place) => place.type.toLowerCase() === type.toLowerCase());
}

// Search places by keyword
export function searchPlaces(places: PlaceWithDistance[], keyword: string): PlaceWithDistance[] {
  if (!keyword.trim()) return places;
  const searchTerm = keyword.toLowerCase();
  return places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm) ||
      place.description.toLowerCase().includes(searchTerm) ||
      place.type.toLowerCase().includes(searchTerm)
  );
}

// Get unique place types
export function getPlaceTypes(places: Place[]): string[] {
  const types = places.map((place) => place.type);
  return Array.from(new Set(types));
}

// Filter places by distance threshold
export function filterPlacesByDistance(places: PlaceWithDistance[], maxDistance: number): PlaceWithDistance[] {
  return places.filter((place) => place.distance <= maxDistance);
}