export type TransformedForecastData = {
  nextHours: {
    hour: string;
    temperature: number;
    weatherDescription: string;
    weatherIcon: string;
  }[];
  nextDays: {
    date: string;
    minTemperature: number;
    maxTemperature: number;
    weatherDescription: string;
    weatherIcon: string;
  }[];
};
