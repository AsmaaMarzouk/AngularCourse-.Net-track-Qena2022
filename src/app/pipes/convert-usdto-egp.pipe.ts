import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUSDtoEGP'
})
export class ConvertUSDtoEGPPipe implements PipeTransform {

  transform(value: number,currentRate:number = 18) :number {
    // return value*18;
    return value*currentRate;
  }

}
