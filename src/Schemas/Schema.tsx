export type TodaysWeather = {
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: number;
    visibility: number;
    wind_speed: number;
    status: string;
    rain_status: number;
    Icon:string;
  };
  
  export type WeeklyWeather = {
    id: number;
    temp: number;
    status: string;
    day: number;
    icon:string;
  };
  
  export type Coordinates = {
    lon: number;
    lat: number;
    district: string;
    country?: string;
  };
  