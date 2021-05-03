import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WeatherDto } from "../app/models/weather.dto";

@Injectable({
    providedIn: 'root'
})
export class ForecastService {
    constructor(private http: HttpClient) {
    }

    controller = 'WeatherForecast';
    api = 'https://www.metaweather.com'; 

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
      };

    getFiveDayForecast() {
        return this.http.get<WeatherDto>(`${ this.controller }/GetFiveDayForcast`, this.httpOptions);
    }

    getWeatherImg(state) {
        return `${ this.api }/static/img/weather/png/64/${ state }.png`;
    }
}