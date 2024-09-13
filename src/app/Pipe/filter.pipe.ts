import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchItem: string) {
    if (searchItem.trim() === '') {
      return products;
    }

    return products.filter((product) => {
      return product.name.toLowerCase().includes(searchItem.toLowerCase());
    });
  }
}
