import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productArray'
})
export class ProductArrayPipe implements PipeTransform {

  transform(numeros: number[]): number {
    let resultadoAnterior = 1;
    let multiplicacao = 0;
    let resultadoAtual = 0;

    for(let numero of numeros){
      multiplicacao = numero * resultadoAnterior;
      resultadoAnterior = multiplicacao;
      resultadoAtual = resultadoAnterior;
    }
    return resultadoAtual;
  }

}
