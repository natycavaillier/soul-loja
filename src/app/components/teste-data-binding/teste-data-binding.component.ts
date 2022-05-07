import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-binding',
  templateUrl: './teste-data-binding.component.html',
  styleUrls: ['./teste-data-binding.component.css']
})
export class TesteDataBindingComponent implements OnInit, OnDestroy {

  nome: string = 'José';
  imagem: string = 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4'
  height: number = 30;
  link: string = 'https://soulcodeacademy.org/';
  labelLink: string = 'Acesse a SoulCode!';
  hoje: Date = new Date();
  porcentagem: number = 0.4;
  numero: number = 45.4;
  valor: number = 0.42342343;
  mensagem: string = 'Olá tudo bem?';
  agora: Date = new Date();
  idInterval?: any;

  array: number[] = [10, 20, 30];
  arrayProductArray: number[] = [1, 2, 3, 4];

  addArray(){
    this.array.push(1)
  }
  
  constructor() { }
  
  

  //ngInit roda enquanto o componente estiver pronto
  ngOnInit(): void {
    //Vai executar essa função a cada 1000 milissegundos
    this.idInterval = setInterval(() => {
      this.agora = new Date();
    }, 1000);
  }
  
  //ngOnDestroy roda quando o componente não vai mais ser usado
  ngOnDestroy(): void {
    clearInterval(this.idInterval);
  }

  onAumentarAltura(){
    this.height += 25;
  }

  onDiminuirAltura(){
    this.height -= 25;
  }

  onLimpar(){
    this.labelLink = '';
  }
  
}
