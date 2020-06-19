import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaqueTransacaoComponent } from './saque-transacao/saque-transacao.component';
import { TransacaoService } from './service/transacao.service';

@NgModule({
  declarations: [
    AppComponent,
    SaqueTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
