import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Transacao } from '../models/transacao.model';

@Injectable()
export class TransacaoService {

    constructor(private http:HttpClient) {}

    private transacaoApiUrl = 'http://localhost:8080/transacoes';

    public insertSaque(transacao) {
        return this.http.post<Transacao>(`${this.transacaoApiUrl}/saque`, transacao);
    }

    public insertDeposito(transacao) {
        return this.http.post<Transacao>(`${this.transacaoApiUrl}/deposito`, transacao);
    }
}