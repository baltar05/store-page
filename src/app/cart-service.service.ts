import {EventEmitter, Injectable} from '@angular/core';

export interface Product {
  counter: number;
  value: number;
  totalValue: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public products: any = {
    counter: 0,
    value: 0,
    totalValue: 0,
    description: "",
  }

  public eventCart = new EventEmitter<Product>();

  getShoes () {
    // return count;
  }
  constructor() {
    console.log('>>> cart service')
  }

  public addProduct(prod: Product) {
    this.products = prod
    this.eventCart.emit(this.products)
  }
}
