import { useQuery } from "@tanstack/vue-query";
import { computed, toValue, type MaybeRef } from "vue";
import type { Forecast } from "../types/Forecast";

interface UseForecastOptions<T> {
  lat: MaybeRef<number>;
  lon: MaybeRef<number>;
  select?: (data: Forecast) => T;
}

export function useForecast<T>({ lat, lon, select }: UseForecastOptions<T>) {
  return useQuery<Forecast, Error, T>({
    queryKey: ["forecast", lat, lon],
    queryFn: async () => {
      const params = new URLSearchParams({
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        lat: toValue(lat).toString(),
        lon: toValue(lon).toString(),
        units: "metric",
      });
      const url = computed(() => `https://api.openweathermap.org/data/2.5/forecast?${params}`);
      const response = await fetch(toValue(url));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    select,
  });
}
