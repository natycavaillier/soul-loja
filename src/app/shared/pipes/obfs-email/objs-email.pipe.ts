import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objsEmail'
})
export class ObjsEmailPipe implements PipeTransform {

  transform(email: string): string{
    let emailSplitted = email.split('@');
    let usuario = emailSplitted[0];
    let empresaEmail = emailSplitted[1];
    let emailCensurado = `${usuario[0]}***@${empresaEmail}`;

    return emailCensurado;
  }

}

/*
'jose.almir@gmail.com' | obfsEmail PRODUZ j***@gmail.com
*/
