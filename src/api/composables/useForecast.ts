export function useForecast(lat: number, lon: number) {
  const params = new URLSearchParams({
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    lat: lat.toString(),
    lon: lon.toString(),
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
}
