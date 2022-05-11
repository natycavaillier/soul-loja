import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators, FormBuilder } from '@angular/forms';

function onlySoulcode(control: AbstractControl): ValidationErrors | null {
  if(Validators.email(control) === null && Validators.required(control) === null){
    if(!control.value.includes("@soulcodeacademy.org")){
      return { onlysoulcode: true };
    }
  }

  return null;
}

@Component({
  selector: 'app-feedback-usuario',
  templateUrl: './feedback-usuario.component.html',
  styleUrls: ['./feedback-usuario.component.css']
})
export class FeedbackUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  feedbackForm = this.fb.group({
    //Esse array é uma forma de configurar cada input. Está vazio entre aspas porque é o valor inicial do input
    //E no array dentro do array são validações pro formulário
    nome: ['', [Validators.required, Validators.minLength(5)]], 
    email: ['', [Validators.required, Validators.email, onlySoulcode]],
    comentario: [''],
    nota: ['']
  });

  get nome(){
    return this.feedbackForm.get('nome');
  }
  get email(){
    return this.feedbackForm.get('email');
  }
  get comentario(){
    return this.feedbackForm.get('comentario');
  }
  get nota(){
    return this.feedbackForm.get('nota');
  }

  onSubmit(){
    alert(`Bem-vindo(a)!`);
    console.log(this.feedbackForm.value);
  }

  ngOnInit(): void {
  }

}
