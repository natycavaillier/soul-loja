import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbv'
})
export class AbbvPipe implements PipeTransform {

  transform(nome: string) {
    const nomes = nome.split(" ");
    if (nomes.length == 1) {
      return nome;
    } else {
      const primeiroNome = nomes[0];
      const segundoNome = nomes[1];

      return `${primeiroNome} ${segundoNome[0]}.`
    }

  }

}

/*
'José Almir' | abbv PRODUZ 'José A.'
*/