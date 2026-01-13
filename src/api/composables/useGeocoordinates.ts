export function useGeocoordinates(q: string) {
  const params = new URLSearchParams({
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    q,
    limit: "1",
  });
  const url = `http://api.openweathermap.org/geo/1.0/direct?${params}`;
}
