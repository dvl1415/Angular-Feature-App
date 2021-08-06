import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts(){
    let products : Product[];

    products = [
      new Product(1, "Laptop", 2000),
      new Product(2, "iPad", 1800),
      new Product(3, "Hard Disk", 100),
    ]

    return products;
  }
}
