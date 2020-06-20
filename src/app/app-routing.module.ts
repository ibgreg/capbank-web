import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaComponent } from './conta/conta.component';
import { SaqueTransacaoComponent } from './saque-transacao/saque-transacao.component';
import { DepositoTransacaoComponent } from './deposito-transacao/deposito-transacao.component';


const routes: Routes = [
  { path: 'saldo', component: ContaComponent },
  { path: 'transacao/saque', component: SaqueTransacaoComponent },
  { path: 'transacao/deposito', component: DepositoTransacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
