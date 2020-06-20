import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Conta } from '../models/conta.model';
import { Observable } from 'rxjs';

@Injectable()
export class ContaService {

    constructor(private http:HttpClient) {}

    private contaApiUrl = 'http://localhost:8080/contas/';

    public obterSaldoConta(conta: Conta) : Observable<any> {
        return this.http.get(`${this.contaApiUrl}/${conta.numConta}`);
    } 
}