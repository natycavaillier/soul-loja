import { Component, OnInit } from '@angular/core';
import { FormaDePagamento, Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servico: Servico = {
    imagem: '../../../assets/img/imagemServico1.jpg',
    nomeDoServico: 'Suporte ao Cliente',
    descricao: 'Uma descrição super interessante',
    preco: 100,
    desconto: 0.2, //0 a 1
    formaDePagamento: FormaDePagamento.AVISTA
} 

precoDesconto(){
  return this.servico.preco - (this.servico.preco * this.servico.desconto);
}

  constructor() { }

  ngOnInit(): void {
  }

}
