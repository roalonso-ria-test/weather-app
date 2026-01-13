export type Forecast = {
  weather: {
    /** Weather condition id */
    id: number;
    /** Group of weather parameters (Rain, Snow, Extreme etc.) */
    main: string;
    /** Weather condition within the group */
    description: string;
    /** Weather icon id */
    icon: string;
  }[];
  main: {
    /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
    temp: number;
    feels_like: number;
    pressure: number;
    /** Humidity, % */
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
  };
  /** Time of data calculation, unix, UTC */
  dt: number;
};
