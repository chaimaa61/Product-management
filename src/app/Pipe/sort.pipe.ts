import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[], colomn: string) {
    if (colomn == 'name') {
      return products.sort((a, b) => {
        console.log('a.name > b.name', a.name , b.name);
        
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }else if( colomn == "id"){
      return products.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        } else {
          return 0;
        }
      });
    }else if( colomn == "price"){
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }else if( colomn == "category"){
      return products.sort((a, b) => {
        if (a.category > b.category) {
          return 1;
        } else if (a.category < b.category) {
          return -1;
        } else {
          return 0;
        }
      });
    }else if( colomn == "stock"){
      return products.sort((a, b) => {
        if (a.stock > b.stock) {
          return 1;
        } else if (a.stock < b.stock) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return products
  }
}
