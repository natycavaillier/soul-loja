import { Component, OnInit } from '@angular/core';
import { categoriaDoServico, Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: Servico[] = [
    {
      imagem: 'https://img.freepik.com/fotos-gratis/angulo-alto-de-mulher-cortando-cabelo_23-2148817198.jpg?t=st=1651768778~exp=1651769378~hmac=bdb9b2ec108184e92f58ca91798986dd30ba7eb9314abcd323523736e462035c&w=740',
      nomeDoServico: 'Corte de cabelo',
      descricao: 'Repicados, desfiados, retos, desconectados.',
      preco: 100,
      emPromocao: true,
      desconto: 0.2, //0 a 1
      categoria: categoriaDoServico.CORTE
    },
    {
      imagem: 'https://img.freepik.com/fotos-gratis/mulher-depilando-as-pernas-com-cera_186202-8498.jpg?t=st=1651768765~exp=1651769365~hmac=aff679e8e236024320fc2f212bb93c573fd9fd8f49fc3f5de4b97a16725c16bb&w=740',
      nomeDoServico: 'Depilação',
      descricao: 'Sobrancelha, buço, meia perna, perna inteira, axilas',
      preco: 100,
      emPromocao: true,
      desconto: 0.2, //0 a 1
      categoria: categoriaDoServico.DEPILACAO
    },
    {
      imagem: 'https://img.freepik.com/fotos-gratis/mulher-bonita-com-as-maos-na-vista-de-cima_23-2148766607.jpg?t=st=1651768858~exp=1651769458~hmac=da50516d1cc9d6fcdfa9f4e0c0643173cda302cdedccd65f2108ddc6a95f4a29&w=740',
      nomeDoServico: 'Manicure',
      descricao: 'Manicure tradicional, porcelana, gel, fibras de vidro',
      preco: 100,
      emPromocao: true,
      desconto: 0.2, //0 a 1
      categoria: categoriaDoServico.MANICURE
  }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
