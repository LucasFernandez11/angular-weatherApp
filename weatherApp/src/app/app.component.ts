import { WeatherData } from './shared/interfaces/weather.interface';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { WeatherService } from './pages/weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather$!:Observable<WeatherData>

 constructor(private readonly weatherSvc: WeatherService){  }

  public onSearch(city:string):void{
    this.weather$ = this.weatherSvc.getWeatherByName(city)

  }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
