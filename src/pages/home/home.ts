import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
weather:any;
city: string;
value: string;
humidity: string;
wspeed: string;
main: string;
description: string;
wind: string;
Temperature: number;
date: number;


constructor(public navCtrl: NavController, private weatherP: WeatherProvider) {

}

getWheather(value:string) {
  this.weatherP.getWeather(this.city).subscribe(results => {
  this.weather = results;


    this.main = this.weather.weather[0].main;
    this.description = this.weather.weather[0].description;
    this.humidity=this.weather.main.humidity;
    this.Temperature = this.weather.main.temp-273.15;

    this.wind = this.weather.wind.speed;
  
    this.date = this.weather.dt;
    console.log("response", results);


  });
}
}






