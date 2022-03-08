import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from "../cart-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [],
})
export class CartComponent implements OnInit {
  public openCart: boolean = false;
  public products = {
    counter: 0,
    value: 0,
    totalValue: 0,
    description: "",
  }
  public empty: boolean = true;

  constructor(public cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.eventCart.subscribe((item) => {
      console.log('> cart comp', item);
      // checando se o carrinho está vazio
      this.empty = item.counter == 0;
      this.products = item;
    }, (err) => {
      console.log('err', err)
    }, () => {
      console.log('COMPLETED')
    });
  }

  // Abre a aba do carrinho
  public openOrClose() {
    this.openCart = !this.openCart;
  }
  // Reduz o contador de itens quando a lixeira é clicada
  public excluir() {
    if (this.products.counter > 0) {
      this.products.counter--;
      this.products.totalValue = this.products.counter * this.products.value;
    }
    if (this.products.counter == 0) {
      this.empty = true;
    }
  }

}
