import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherDto } from '../models/weather.dto';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { ForecastService } from '../../services/forecast.services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  weather: WeatherDto;

  constructor(
    private authorizeService: AuthorizeService,
    private forecastService: ForecastService) {

  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();

    this.isAuthenticated.subscribe(result => {
      if (result) { 
        this.forecastService.getFiveDayForecast().subscribe((data: WeatherDto) => {
          this.weather = data;
        });
      }
    });
  }
}
