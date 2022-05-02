import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ServicoComponent } from './components/servico/servico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProdutosComponent,
    ProdutoComponent,
    ServicosComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
