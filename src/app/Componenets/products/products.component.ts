import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  showForm:string = "none";


  title = "Store Chama";
  searchItem : string =""
  products: Product[] = [];
  colomn = ''
  columnRev = ''


  constructor(private productData: ProductsService) {}

  ngOnInit() {
    this.products = this.productData.getProducts()
  }

  newProduct: Product = {
    id: this.products.length + 1,
    name: "",
    price: 0,
    category: "",
    stock: 0,
  }

  selectedProuct: Product = {
    id: this.products.length + 1,
    name: "",
    price: 0,
    category: "",
    stock: 0,
  }
  addProduct(){
    this.newProduct.id = this.products[this.products.length - 1].id + 1
    this.productData.addProduct(this.newProduct)
    console.log(this.products)   
    this.newProduct = {
    id: 0,
    name: "",
    price: 0,
    category: "",
    stock: 0,

    }
  }

sortedby(colomn : string){
  console.log(4444444);
  
  return this.colomn = colomn
}

sortedbyReverse(type : string , colomn : string){
if (type == 'asc') {
  
}else{
  
}
  
  return this.colomn = colomn
}

reverseSort(colomn : string){
  console.log(555555);
  
  return this.columnRev = colomn
}

delete(product:Product){
  this.products.splice(this.products.indexOf(product),1)
  // this.products.map(product => {
  //   product.id = 0
  // })
  // for (let i = 0; i < this.products.length; i++) {
  //   this.products[i].id = i + 1;
  // }
}

up_name:string="";
up_price:number=0;
up_category:string="";
up_stock:number=0;

edit(product:Product){
  this.showForm = "block";
  this.up_name= product.name;
  this.up_price = product.price;
  this.up_category = product.category;
  this.up_stock= product.stock;
  this.selectedProuct = { ...product };
}

update() {
  console.log(44444)
  console.log(this.selectedProuct)
  if (this.selectedProuct) {
    console.log(666666);

    let index = this.products.findIndex(product => product.id === this.selectedProuct.id);
  
    this.selectedProuct.name = this.up_name
    this.selectedProuct.price = this.up_price
    this.selectedProuct.category = this.up_category
    this.selectedProuct.stock = this.up_stock
    

    if(index !== -1) {
      this.products[index] = this.selectedProuct;
    }
    

  }
  this.close()
}

close() {
  this.showForm = "none";

}

}
