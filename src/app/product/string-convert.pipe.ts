import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string): unknown {
    
    let arr:string[]=value.split('-')
    
    return arr[0] + " " + arr[1] ;
   
  }

}
