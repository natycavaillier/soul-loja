import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-binding',
  templateUrl: './teste-data-binding.component.html',
  styleUrls: ['./teste-data-binding.component.css']
})
export class TesteDataBindingComponent implements OnInit {

  nome: string = 'José';
  imagem: string = 'https://i.picsum.photos/id/953/400/400.jpg?hmac=sCGl1xt9pdRyzGnhO5N_HVo_bObR1VVbUitw72cZ7K4'
  height: number = 30;
  link: string = 'https://soulcodeacademy.org/';
  labelLink: string = 'Acesse a SoulCode!';

  constructor() { }

  onAumentarAltura(){
    this.height += 25;
  }

  onDiminuirAltura(){
    this.height -= 25;
  }

  onLimpar(){
    this.labelLink = '';
  }

  ngOnInit(): void {
  }

}
