import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {AdminCartsService} from '../../services/admin-carts.service';
import {AdminCarts} from '../../interfaces/admin-carts';
import { Product } from '../../../products/interfaces/product';
import {ProductsService} from '../../../products/services/products.service'
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  adminCarts!: AdminCarts[];
  viewCart: Product[]= [];
  constructor(private service: AdminCartsService, private productService: ProductsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCarts();
    console.log(this.adminCarts);
  }

  async getAllCarts(){
    this.adminCarts= this.service.adminCarts;
  }

  deleteCart(id: number){
    this.service.deleteCart(id);
    this.getAllCarts();
    setTimeout(()=>{document. location. reload()},2000);
    

  }

  view(index: number){
    for (let i= 0; i< this.adminCarts[index].products.length; i++)
    this.viewCart.push(this.productService.getProductById(this.adminCarts[index].products[i].productId)!);

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });
  }
}
