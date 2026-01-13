import { useQuery } from "@tanstack/vue-query";
import { toValue, type MaybeRef } from "vue";

export function useForecast(lat: MaybeRef<number>, lon: MaybeRef<number>) {
  return useQuery({
    queryKey: ["forecast", lat, lon],
    queryFn: async () => {
      const params = new URLSearchParams({
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        lat: toValue(lat).toString(),
        lon: toValue(lon).toString(),
      });
      const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
