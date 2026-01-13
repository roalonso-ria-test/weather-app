export type Forecast = {
  list: {
    /** Time of data forecasted, unix, UTC */
    dt: number;
    main: {
      /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
      temp: number;
      feels_like: number;
      /** Minimum temperature at the moment of calculation */
      temp_min: number;
      /** Maximum temperature at the moment of calculation */
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      /** Humidity, % */
      humidity: number;
      temp_kf: number;
    };
    weather: {
      /** Weather condition id */
      id: number;
      /** Group of weather parameters (Rain, Snow, Extreme etc.) */
      main: string;
      /** Weather condition within the group */
      description: string;
      /** Weather icon id */
      icon: string;
    };
  }[];
};
