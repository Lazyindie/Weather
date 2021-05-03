import { ForecastDto } from './forecast.dto'

export interface WeatherDto {
    consolidatedWeather: ForecastDto[];
    lattLong: string;
    locationType: string;
    time: string;
    sunrise: string;
    sunset: string;
    timezone: string;
    timezoneName: string;
    title: string;
    woeId: number;
}