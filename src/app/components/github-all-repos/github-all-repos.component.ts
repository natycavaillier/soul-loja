import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { GithubService } from 'src/app/shared/services/github/github.service';

@Component({
  selector: 'app-github-all-repos',
  templateUrl: './github-all-repos.component.html',
  styleUrls: ['./github-all-repos.component.css']
})
export class GithubAllReposComponent implements OnInit {

  termo: string = '';
  resultados: Repository[] = [];
  loading = false;

  constructor(private githubService: GithubService) {}

  onBuscar(){
    this.loading = true;
    this.githubService.getRepositories(this.termo).subscribe({
      next: (repositorios) => {
        this.resultados = repositorios;
        this.loading = false;
        this.termo = '';
      },
      error: () => {
        this.loading = false;
        this.resultados = [];
        alert("Nenhum repositório encontrado");
      }
    });
  }

  ngOnInit(): void {
  }

}
