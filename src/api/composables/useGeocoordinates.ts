import { useQuery } from "@tanstack/vue-query";
import { toValue, type MaybeRef } from "vue";

export function useGeocoordinates(q: MaybeRef<string>) {
  return useQuery({
    queryKey: ["geocoordinates", q],
    queryFn: async () => {
      const params = new URLSearchParams({
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        q: toValue(q),
        limit: "1",
      });
      const url = `http://api.openweathermap.org/geo/1.0/direct?${params}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
