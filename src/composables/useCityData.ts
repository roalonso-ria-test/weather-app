import { useForecast } from "@/api/composables/useForecast";
import { computed, toValue, type MaybeRef } from "vue";

const citiesCoordinates = {
  rio: { lat: -22.9068, lon: -43.1729 },
  beijing: { lat: 39.9, lon: 116.4 },
  "los-angeles": { lat: 34.05, lon: -118.25 },
} as const;

export const useCityForecastData = (city: MaybeRef<"rio" | "beijing" | "los-angeles">) => {
  const lat = computed(() => citiesCoordinates[toValue(city)].lat);
  const lon = computed(() => citiesCoordinates[toValue(city)].lon);
  return useForecast({
    lat,
    lon,
    select: (data) => {
      return data;
    },
  });
};
