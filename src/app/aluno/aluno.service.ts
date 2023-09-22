import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Aluno from '../shared/models/Aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://backend-academia-production.up.railway.app/';
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/alunos`);
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/alunos/${id}`);
  }

  postAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.apiUrl}/alunos`, aluno);
  }

  updateAluno(alunoAtualizado: Aluno): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/alunos/${alunoAtualizado.id}`,
      alunoAtualizado
    );
  }

  deleteAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/alunos/${id}`);
  }
}
