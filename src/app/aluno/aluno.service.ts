import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Aluno from '../shared/models/Aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    //this.apiUrl = 'https://backend-academia-production.up.railway.app/';
    // this.apiUrl = 'http://localhost:8080'
    this.apiUrl = 'http://localhost:3000';
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/alunos`);
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/alunos/${id}`);
  }

  create(aluno: Aluno): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/alunos`, JSON.stringify(aluno), this.httpOptions)
      .pipe(res => res, error => error);
  }

  // create(camiseta:Camiseta):  Observable<any> {

  //   return this.httpClient.post(this.apiURL + 'camisetas/', JSON.stringify(camiseta), this.httpOptions)

  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  updateAluno(alunoAtualizado: Aluno): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/alunos`, alunoAtualizado);
  }

  deleteAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/alunos/${id}`);
  }

  // errorHandler(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }
}
