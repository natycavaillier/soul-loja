import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input('dadoProduto') produto!: Produto; //Torna a propriedade uma propriedade de entrada do componente
  @Output() onCarrinho = new EventEmitter<Produto>();

  
  precoDesconto(){
    return this.produto.preco - (this.produto.preco * this.produto.desconto);
  }

  constructor() {}

  onComprar(){
    alert("Produto adicionado no carrinho!");
    this.onCarrinho.emit(this.produto);
  }

  ngOnInit(): void {
  }

}
