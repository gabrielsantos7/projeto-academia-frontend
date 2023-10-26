import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Avaliacao from '../shared/models/Avaliacao.model';

@Injectable({
  providedIn: 'root',
})
export class AvaliacaoService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080';
  }

  // Método para buscar todas as avaliações
  getAvaliacoes(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${this.apiUrl}/avaliacoes`);
  }

  // Método para buscar uma avaliação por ID
  getAvaliacaoById(id: number): Observable<Avaliacao> {
    return this.http.get<Avaliacao>(`${this.apiUrl}/avaliacoes/${id}`);
  }

  // Método para buscar todas as avaliações de um aluno por ID de aluno
  getAvaliacoesByAluno(idAluno: number): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(
      `${this.apiUrl}/avaliacoes/aluno/${idAluno}`
    );
  }

  // Método para criar uma nova avaliação
  postAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(`${this.apiUrl}/avaliacoes`, avaliacao);
  }

  // Método para atualizar uma avaliação existente
  updateAvaliacao(avaliacaoAtualizada: Avaliacao): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/avaliacoes/${avaliacaoAtualizada.id}`,
      avaliacaoAtualizada
    );
  }

  // Método para excluir uma avaliação por ID
  deleteAvaliacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/avaliacoes/${id}`);
  }
}
