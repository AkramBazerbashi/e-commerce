import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Product} from '../../interfaces/product'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, AfterViewChecked {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts :any[] = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewChecked(){
    this.getCategories();

  }

  getProducts(){
    this.loading= true;
    this.products= this.service.getAllProducts();
    this.loading= false;

  }

  getCategories(){
    this.loading= true;
    this.categories= this.service.getAllCategories();
    this.loading= false;
  }

  filterCategory(event: any){
    this.loading= true;
    if (event.target.value == "all"){
      this.getProducts();
      this.loading= false;
    }
    else{
      this.products= this.service.getProductsByCategory(event.target.value);
      this.loading= false;
    }

  }

  addToCart(event:any){
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }
}
