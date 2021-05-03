export class ForecastDto {
    id: number;
    weatherStateName: string;
    weatherStateAbbr: string;
    windDirection: number;
    windDirectionCompass: string;
    created: string;
    applicableDate: string;
    minTemp: number;
    maxTemp: number;
    temp: number;
    windSpeed: number;
    humidity: number;
    visibility: number;
    predictability: number;
}