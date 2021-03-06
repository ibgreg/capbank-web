import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  sacar(form: NgForm): void {
    console.log(form);

    if (form.valid) {
      this.transacaoService.insertSaque(this.transacao)
        .subscribe( data => {
          alert("Saque realizado com sucesso!");
          console.log(data);
        });
      
        form.resetForm();
    }

  };

}
