import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from "../cart-service.service";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  public count: number = 0;

  public products = {
    counter: 0,
    value: 125,
    totalValue: 0,
    description: "Fall Limited Edition Sneakers",
  }

  constructor(public cart: CartServiceService) {
  }

  public adder(upOrDown: string) {
    if (upOrDown == "-" && this.count > 0) {
      this.count--;
    } else if (upOrDown == "+") {
      this.count++;
    }
  }


  public calculateCart(count: number) {
    this.products.counter += count;
    this.products.totalValue = this.products.value * count;
    this.cart.addProduct(this.products)
  }

  ngOnInit(): void {
  }

}

