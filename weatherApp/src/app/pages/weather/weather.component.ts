import { WeatherData } from 'src/app/shared/interfaces/weather.interface';
import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input() public weather!:WeatherData;
  public BASE_URL = "http://openweathermap.org/img/wn";

  

}
