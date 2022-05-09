import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produto[] = [
    {
    imagem: 'https://m.media-amazon.com/images/I/518Iz2nOCcL._AC_SY355_.jpg',
    nomeDoProduto: 'Mi Band 6',
    descricao: 'Tudo fica mais fácil com a band 6. Desde olhar as horas, monitorar dados da sua saúde, receber notificações inteligentes e até mesmo fazer traduções em tempo real, controle tudo por voz usando a alexa. Conta também com monitorador de frequência cardíaca, de sono e com sistema de rastreamento menstrual, que envia notificações antes do ciclo.',
    preco: 285,
    emPromocao: true,
    desconto: 0.05,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/614pr1yMlyL._AC_SY355_.jpg',
    nomeDoProduto: 'Mesa Gamer',
    descricao: 'Mesa Escrivaninha Gamer com 2 Nichos Tecno Mobili - Preto/Verde',
    preco: 417,
    emPromocao: false,
    desconto: 0.0, //10%
    categoria: CategoriaProduto.MOVEIS
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/611abWmAIGL._AC_SY355_.jpg',
    nomeDoProduto: 'Super Pano Multiuso',
    descricao: 'O Super Pano de Chão é perfeito para limpeza leve ou pesada de superfícies diversas. Contém um pano de chão azul.',
    preco: 29.6,
    emPromocao: true,
    desconto: 0.03, //10%
    categoria: CategoriaProduto.LIMPEZA
  }];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  constructor() { }
}
