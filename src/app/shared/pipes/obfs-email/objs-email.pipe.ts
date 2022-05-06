import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objsEmail'
})
export class ObjsEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
