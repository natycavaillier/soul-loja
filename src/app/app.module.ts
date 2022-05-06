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
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe } from './shared/pipes/ellipsis/ellipsis.pipe';
import { AbbvPipe } from './shared/pipes/abbv/abbv.pipe';
import { PowPipe } from './shared/pipes/pow/pow.pipe';
import { SumPipe } from './shared/pipes/sum/sum.pipe';
import { ProductArrayPipe } from './shared/pipes/product-array/product-array.pipe';
import { ObjsEmailPipe } from './shared/pipes/obfs-email/objs-email.pipe';
import { PercentagePipe } from './shared/pipes/percentage/percentage.pipe';
import { CensorPipe } from './shared/pipes/censor/censor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProdutosComponent,
    ProdutoComponent,
    ServicosComponent,
    ServicoComponent,
    TesteDataBindingComponent,
    EllipsisPipe,
    AbbvPipe,
    PowPipe,
    SumPipe,
    ProductArrayPipe,
    ObjsEmailPipe,
    PercentagePipe,
    CensorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
