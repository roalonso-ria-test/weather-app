export type TransformedForecastData = {
  nextHours: {
    hour: string;
    temperature: number;
    humidity: number;
    weatherIcon: string;
  }[];
  nextDays: {
    displayDate: string;
    minTemperature: number;
    maxTemperature: number;
    weatherDescription: string;
    weatherIcon: string;
  }[];
};
