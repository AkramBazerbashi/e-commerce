import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';
import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {environment} from '../../../environments/environment'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { 
    
  }


  products: Product[] = [
    {id: 1,
      title: "a",
      image: "assets\\a.jpg",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      category: "1",
      price: "100",
    },
    {id: 2,
      title: "b",
      image: "assets\\b.jpg",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      category: "2",
      price: "200",
    },
    {id: 3,
      title: "c",
      image: "assets\\c.jpg",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      category: "3",
      price: "300",
    },
  ];

  getAllProducts(){
    return this.products;
  }

  getAllCategories(){
    let categories :string[] =[];
    for (let i=0; i< this.products.length; i++){
      categories.push(this.products[i].category);
    }
    return categories;
  }

  getProductsByCategory(keyword: string){
    let products :Product[] =[];
    for (let i=0; i< this.products.length; i++){
      if (this.products[i].category == keyword)
      products.push(this.products[i]);
    }
    return products;
  }

  getProductById(id: number){
    for(let i= 0; i< this.products.length; i++)
      if (this.products[i].id == id)
        return this.products[i];
    return null;
  }


}
