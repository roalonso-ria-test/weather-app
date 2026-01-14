import { useForecast } from "@/api/composables/useForecast";
import type { TransformedForecastData } from "@/types/TransformedForecastData";
import { computed, toValue, type MaybeRef } from "vue";

const citiesCoordinates = {
  rio: { lat: -22.9068, lon: -43.1729 },
  beijing: { lat: 39.9, lon: 116.4 },
  "los-angeles": { lat: 34.05, lon: -118.25 },
} as const;

export const useCityForecastData = (city: MaybeRef<"rio" | "beijing" | "los-angeles">) => {
  const lat = computed(() => citiesCoordinates[toValue(city)].lat);
  const lon = computed(() => citiesCoordinates[toValue(city)].lon);
  return useForecast<TransformedForecastData>({
    lat,
    lon,
    select: (data) => {
      const nextHours = data.list.slice(0, 8).map((item) => ({
        hour: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temperature: item.main.temp,
        humidity: item.main.humidity,
        weatherIcon: item.weather.icon,
      }));

      const dataByDate: Record<string, typeof data.list> = {};
      data.list.forEach((item) => {
        const today = new Date().toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          weekday: "short",
        });
        const date = new Date(item.dt * 1000).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          weekday: "short",
        });

        if (date === today) {
          return;
        }

        if (!dataByDate[date]) {
          dataByDate[date] = [];
        }
        dataByDate[date].push(item);
      });

      const nextDays = Object.entries(dataByDate).map(([displayDate, data]) => {
        return {
          displayDate,
          minTemperature: Math.min(...data.map((item) => item.main.temp_min)),
          maxTemperature: Math.max(...data.map((item) => item.main.temp_max)),
          weatherDescription: data[0]!.weather.description,
          weatherIcon: data[0]!.weather.icon,
        };
      });

      return { nextHours, nextDays };
    },
  });
};
