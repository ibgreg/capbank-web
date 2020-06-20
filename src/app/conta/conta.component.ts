import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Conta } from '../models/conta.model';
import { ContaService } from '../service/conta.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  conta: Conta = new Conta();

  constructor(private router: Router, private contaService: ContaService) { }

  ngOnInit() {
  }

  obterSaldoConta(this,conta) : Conta {
    return this.contaService.obterSaldoConta(this.numConta)
      .subscribe(data => {
        console.log(data)
        this.conta = data;
      }, error => console.log(error))
  };

}
