import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slogan: string = 'A melhor loja de todas!';
  endereco: string = 'Rua X, São Paulo';
  callToAction: string = 'Mostrar destaques';
  oculto: boolean = true;
  classesBtn: string = "btn btn-primary";

  destaques: string[] = ["Produtos de informática com 30% OFF", "Produtos de limpeza com 20% a partir de R$300,00", "Vale-presentes de R$100 da PlayStore", "Gift Cards de Valorant"];
  
  //Padrão para indicar que a variavel nao tem um valor comum, é um observable
  relojim$?: Observable<Date>;
  
  constructor() { }
  
  ngOnInit(): void {
    this.relojim$ = interval(1000).pipe(
      map((num) => new Date())
    );
  }
  
  onToggle(){
    this.oculto = !this.oculto;

    if(this.oculto){
      this.classesBtn = "btn btn-primary";
      this.callToAction = "Mostrar destaques";
    }else{
      this.classesBtn = "btn btn-danger";
      this.callToAction = "Ocultar destaques";
    }
  }
}
function num(num: any): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

