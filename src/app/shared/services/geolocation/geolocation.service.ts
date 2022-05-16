import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor() { }

  // Cold Observable: Emite uma informação
  getPosition(): Observable<GeolocationCoordinates> {
    return new Observable((emissor) => {
      const geolocation: Geolocation = navigator.geolocation;

      if (geolocation) { //Verifica se o browser suporta geolocalização
        //Só da a informação uma vez
        geolocation.getCurrentPosition((pos) => {
          emissor.next(pos.coords); //Emite as coodenadas
          emissor.complete(); //Finaliza as emissões
        },
          (erro) => emissor.error(erro) //Usuário nega localização/localização indisponível
        );
      } else {
        //Navegador não suporta localização
        emissor.error(new Error('Navegador não suporta geolocalização')); //Navegador não suporta localização
      }
    });
  }
  // Hot Observable: Emite várias informações
  getPositionRealTime(): Observable<GeolocationCoordinates> {
    return new Observable((emissor) => {
      const geolocation = navigator.geolocation;
      let watchId!: number;

      if(geolocation){ //Verifica se o browser suporta geolocalização
        watchId = geolocation.watchPosition( //Guarda o id do watch
          (pos) => emissor.next(pos.coords), //Caso dê bom o geolocation
          (erro) => emissor.error(erro) //Caso o usuario negue
        );
      }else{
        emissor.error(new Error('Navegador não suportado')); //Caso o browser não suporte
      }

      return() => { //O Subscription chama essa função quando cancela o Observable
        geolocation.clearWatch(watchId); //Encerra a fonte de dados
      };
    });
  }
}
