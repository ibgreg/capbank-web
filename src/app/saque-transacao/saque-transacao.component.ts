import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transacao } from '../models/transacao.model';
import { TransacaoService } from '../service/transacao.service';

@Component({
  selector: 'app-saque-transacao',
  templateUrl: './saque-transacao.component.html',
  styleUrls: ['./saque-transacao.component.css']
})
export class SaqueTransacaoComponent implements OnInit {

  transacao: Transacao = new Transacao();

  constructor(private router: Router, private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.transacao.operacao = 1;
  }

  sacar(): void {
    this.transacaoService.insertSaque(this.transacao)
      .subscribe( data => {
        alert("Saque realizado com sucesso!");
        console.log(data);
      });
  };

}
