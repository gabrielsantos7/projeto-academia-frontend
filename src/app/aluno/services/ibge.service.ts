import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/';

  constructor(private http: HttpClient) {}

  getEstados() {
    return this.http.get(`${this.apiUrl}/estados`);
  }

  getCidadesByEstado(estadoId: number) {
    return this.http.get(`${this.apiUrl}/estados/${estadoId}/municipios`);
  }
}
