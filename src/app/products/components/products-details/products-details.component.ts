import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import {Product} from '../../interfaces/product'
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  data!:Product;
  loading:boolean = false
  constructor(private route:ActivatedRoute , private service:ProductsService) { 
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.loading = true
    this.data= this.service.getProductById(this.id)!;
    this.loading = false
  }
}
