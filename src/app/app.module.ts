import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaqueTransacaoComponent } from './saque-transacao/saque-transacao.component';
import { DepositoTransacaoComponent } from './deposito-transacao/deposito-transacao.component';

import { ContaService } from './service/conta.service';
import { TransacaoService } from './service/transacao.service';
import { ContaComponent } from './conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    SaqueTransacaoComponent,
    DepositoTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContaService,
    TransacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
