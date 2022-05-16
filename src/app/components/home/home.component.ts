import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { WeatherApiService, WeatherData } from 'src/app/shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private geolocationService: GeolocationService,
    private weatherApiService: WeatherApiService
  ) { }

  //Observable que guarda a informação de clima, começa undefined
  weather$?: Observable<WeatherData>;
  error = false; //Mostrar no template caso o usuario negue a localização

  ngOnInit(): void {
    //Com o Cold Observable não precisa dar unsubscribe pois ele é finito
    this.geolocationService.getPosition().subscribe({
      next: (coords) => {
        //Cria um observable novo de clima com base nas coordenadas do serviço
        this.weather$ = this.weatherApiService.getWeatherData(coords); //Lazy
        },
      error: (erro) => {
        //console.error(erro);
        this.error = true;
      }
    });
  }
}
