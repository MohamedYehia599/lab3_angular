import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_models/product';

@Pipe({
  name: 'arraySplice',
  pure:false
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: Product[], s:string): Product[] {
    let prods:Product[]=[];
    value.forEach(element => {
      if(element.name.includes(s)){
        prods.push(element);
      }
    });
    return prods;
  }

}
