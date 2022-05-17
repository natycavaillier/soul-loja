import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/models/repository';
import { GithubService } from 'src/app/shared/services/github/github.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  username: string = '';
  loading = false;
  resultado?: Owner;

  constructor(private githubService: GithubService) { }

  onBuscar(){
    this.loading = true;
    this.githubService.getUser(this.username).subscribe({
      next: (dadosUsuario) => {
        this.resultado = dadosUsuario;
        this.loading = false;
        this.username = '';
      },
      error: (erro) => {
        this.loading = false;
        alert('Usuário não encontrado.');
      }
    });

  }

  ngOnInit(): void {
  }

}
