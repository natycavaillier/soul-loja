import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(percentual: number, total: number): number {
    let resultado = (percentual / 100) * total;
    return resultado;
  }

}


/*
Criar um pipe(percentage) que recebe um percentual (number de 0 a 100), recebe um parâmetro total(number) e aplica o percentual ao número.
Exemplo: 
5 | percentage: 50 PRODUZ 2.5
*/
