import { ProductModel } from './../../products/models/ProductModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<ProductModel>, field: string, reverse: boolean = true): any {
    if (arr === undefined)
      return;
    const m = reverse ? -1 : 1
    return arr.sort((a: ProductModel, b: ProductModel): number => {
      const x = a[field];
      const y = b[field];
      return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m;
    });
  }
}
