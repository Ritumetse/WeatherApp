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
  humidity:number;
  main:string;
  date:number;
  Temp:number;
  city:string;
  windspeed:number;
  wind:number;
  description:number;
  id:number;
  icon:string;
  location:string
  temp_max:number;
  temp_min:number;


constructor(public navCtrl: NavController, private weatherP: WeatherProvider) {

}
getWeather(cvalue:any){
  this.weatherP.getWeather(this.city).subscribe(results=>{
   this.weather=results;
   this.main=this.weather.weather[0].main;
   this.humidity=this.weather.main.humidity;
   this.Temp=this.weather.main.temp-273.15;
   this.date=this.weather.dt;
   this.wind=this.weather.wind.speed;
   this.description=this.weather.weather[0].description;
   this.id=this.weather.weather[0].id;
   this.location=this.weather.weather[0].city
   this.temp_max=this.weather.main.temp_max-273.15;
   this.temp_min=this.weather.main.temp_min-273.15;
   console.log("response",results)
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  }
 }






