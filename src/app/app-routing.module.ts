import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaqueTransacaoComponent } from './saque-transacao/saque-transacao.component';


const routes: Routes = [
  { path: 'transacao/saque', component: SaqueTransacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
