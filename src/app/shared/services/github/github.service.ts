import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository, Owner, AllRepositories } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //https://api.github.com/users/{nome}/repos //endpoints
  constructor(private http: HttpClient) {}

  getUserRepositories(nome: string): Observable<Repository[]>{
    return this.http.get<Repository[]>(`https://api.github.com/users/${nome}/repos`);
  }

  getUser(nome: string): Observable<Owner>{
    return this.http.get<Owner>(`https://api.github.com/users/${nome}`);
  }

  getRepositories(termoRepositorio: string): Observable<Repository[]>{
    return this.http.get<Repository[]>(`https://api.github.com/search/repositories?q=${termoRepositorio}`);
  }
}
