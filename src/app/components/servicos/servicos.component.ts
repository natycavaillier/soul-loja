import { Component, OnInit } from '@angular/core';
import { categoriaDoServico, Servico } from 'src/app/models/servico';
import { ServicosService } from 'src/app/shared/services/servicos/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  
  constructor(private servicosService: ServicosService) { }

  servicos: Servico[] = [];
  carrinho: Servico[] = [];

  avisoServicoNoCarrinho = '*Serviço no carrinho';
  // alertAdicaoNoCarrinho = 'Serviço adicionado no carrinho!'

  addCarrinho(servico: Servico) {
    if(this.carrinho.includes(servico)){
      this.avisoServicoNoCarrinho = "*Serviço no carrinho. Máximo de unidades por serviço: 1"
      //this.alertAdicaoNoCarrinho = 'Serviço já estava no carrinho!'
    }else{
      this.carrinho.push(servico);
    }
    
  }

  servicoNoCarrinho(servico: Servico): boolean {
    return this.carrinho.includes(servico);
  }

  ngOnInit(): void {
    this.servicos = this.servicosService.getServicos();
  }

}
