import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from 'src/app/shared/models/Cidade.model';
import { Estado } from 'src/app/shared/models/Estado.model';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/';

  constructor(private http: HttpClient) {}

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.apiUrl}estados`);
  }

  getCidadesByEstado(uf: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${this.apiUrl}estados/${uf}/municipios`);
  }
}
