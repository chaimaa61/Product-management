import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(products : Product[] , columnRev : string): Product[] {
    if (columnRev == 'name') {
      return products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if( columnRev == "id"){
      return products.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if( columnRev == "price"){
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if( columnRev == "category"){
      return products.sort((a, b) => {
        if (a.category > b.category) {
          return -1;
        } else if (a.category < b.category) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if( columnRev == "stock"){
      return products.sort((a, b) => {
        if (a.stock > b.stock) {
          return -1;
        } else if (a.stock < b.stock) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return products
  }
  }


