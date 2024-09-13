import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    
    {id: 1, name: "Bureau 1",price: 200, category: "Bureau", stock: 15},
    {id: 2, name: "Bureau 2",price: 220, category: "Bureau", stock: 0},
    {id: 3, name: "Bureau 3",price: 210, category: "Bureau", stock: 10},
    {id: 4, name: "Table 1",price: 100, category: "Table", stock: 9},
    {id: 5, name: "Table 5",price: 120, category: "Table", stock: 10},
    {id: 6, name: "Table 6",price: 300, category: "Table", stock: 5},
    {id: 7, name: "Chair 7",price: 100, category: "Chair", stock: 20},
    {id: 8, name: "Chair 8",price: 20, category: "Chair", stock: 13},
    {id: 9, name: "Chair 9",price: 230, category: "Chair", stock: 0},
  ]
  constructor() { }
  
  getProducts() {
    return this.products
  }

  addProduct(product:Product): void{
    this.products.push(product);
  }

}
