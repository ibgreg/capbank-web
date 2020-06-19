import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Transacao } from '../models/transacao.model';
import { TransacaoService } from '../service/transacao.service';

@Component({
  selector: 'app-deposito-transacao',
  templateUrl: './deposito-transacao.component.html',
  styleUrls: ['./deposito-transacao.component.css']
})
export class DepositoTransacaoComponent implements OnInit {

  transacao: Transacao = new Transacao();

  constructor(private router: Router, private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.transacao.operacao = 2;
  }

  depositar(form: NgForm): void {
    console.log(form);

    if (form.valid) {
      this.transacaoService.insertDeposito(this.transacao)
        .subscribe( data => {
          alert("Depósito realizado com sucesso!");
          console.log(data);
        });

        form.reset();
    }

  };

}