import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoriaDoServico, Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

//@Input('alertAdicaoNoCarrinho') alertAdicaoNoCarrinho!: string;
@Input('dadoServico') servico!: Servico;
@Output('onCarrinho') onCarrinho = new EventEmitter<Servico>();

precoDesconto(){
  return this.servico.preco - (this.servico.preco * this.servico.desconto);
}

onComprar(){
  this.onCarrinho.emit(this.servico);
  alert('Carrinho atualizado!');
}
  constructor() { }

  ngOnInit(): void {
  }

}
