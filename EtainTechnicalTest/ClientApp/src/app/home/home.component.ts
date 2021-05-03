import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherDto } from '../models/weather.dto';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { ForecastService } from '../../services/forecast.services'
import * as PullToRefresh from 'pulltorefreshjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  weather: WeatherDto;
  ptrInit:any;

  constructor(
    private authorizeService: AuthorizeService,
    private forecastService: ForecastService) {

  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.updateForecast();

    this.ptrInit = PullToRefresh.init({
      mainElement: 'body',
      onRefresh: () => this.updateForecast()
    });
  }

  getLastUpdated() {
    let time = new Date(this.weather.time);
    return `${ time.getHours() }:${ time.getMinutes() }:${ time.getSeconds() }`;
  }

  updateForecast() {
    this.isAuthenticated.subscribe(result => {
      if (result) { 
        this.forecastService.getFiveDayForecast().subscribe((data: WeatherDto) => {
          this.weather = data;
        });
      }
    });
  }

  componentWillUnmount()
  {
      PullToRefresh.destroyAll();
  }
}
