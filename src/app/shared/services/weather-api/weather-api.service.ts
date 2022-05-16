import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  }
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  apiKey = 'a4d7de9d5d1508ce590a76714ef67196'; //Chave pessoal de acesso
  //Endpoint do opne weather
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br';

  getWeatherData(coords: GeolocationCoordinates): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.baseUrl, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude,
        appid: this.apiKey
      },
    });
  }
}
