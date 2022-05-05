import { Component, Input, OnInit } from '@angular/core';
import { categoriaDoServico, Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  @Input('dadoServico') servico!: Servico;

precoDesconto(){
  return this.servico.preco - (this.servico.preco * this.servico.desconto);
}

onComprar(){
  alert("Produto adicionado no carrinho!");
}
  constructor() { }

  ngOnInit(): void {
  }

}
