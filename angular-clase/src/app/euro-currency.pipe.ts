import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency'
})
export class EuroCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
