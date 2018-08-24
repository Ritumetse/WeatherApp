import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  url ='http://api.openweathermap.org/data/2.5/weather?q=' ;
  appid='&&appid=34cdeb8b3aee6d668ef4c7b76aa083d1';
  
  constructor(public http: HttpClient) {
    
  }

  getWeather(city:string) { 
    return this.http.get(this.url+city+',za'+this.appid)
           
  }
}







