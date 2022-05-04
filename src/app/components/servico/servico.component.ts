import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  imagem: string = '../../../assets/img/imagemServico1.jpg';
  nomeDoServico: string = 'Suporte ao Cliente';
  descricao: string = 'Uma descrição super interessante';

  constructor() { }

  ngOnInit(): void {
  }

}
