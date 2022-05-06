import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(base: number, expoente = 2): number {
    const potencia = Math.pow(base, expoente);
    return potencia;
  }

}
