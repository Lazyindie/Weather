import { Component, Input } from '@angular/core';
import { ForecastDto } from '../models/forecast.dto'
import { ForecastService } from '../../services/forecast.services';

@Component({
  selector: 'weather-tile',
  templateUrl: './weather-tile.component.html',
})
export class WeatherTileComponent {
  @Input() forecast: ForecastDto;
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor (
    readonly forecastService: ForecastService
  ) {

  }

  isToday() {
    return new Date(this.forecast.applicableDate).getDay() === new Date().getDay();
  }

  getDate() {
    var date = new Date(this.forecast.applicableDate);
    return date.toLocaleString().split(',')[0];
  }

  getDay() {
    var day = new Date(this.forecast.applicableDate).getDay();
    return this.days[day];
  }

  getIcon() {
    return this.forecastService.getWeatherImg(this.forecast.weatherStateAbbr);
  }
}
