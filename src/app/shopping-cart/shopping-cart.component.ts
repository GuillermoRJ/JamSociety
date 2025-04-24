import { Component, Input } from '@angular/core';
import { Item } from '../../Item';
import { GuitarsService } from '../guitars.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  @Input() guitarList: Item[] = [];

  cartItem: number[] = [];

  constructor(private guitarsService: GuitarsService) {}

  totalPrice: number = 0;

  ngOnInit() {
    this.loadGuitarCart();

  }

  loadGuitarCart() {
    this.cartItem = this.guitarsService.getCart();
  }

  addtoCart(id:number){
    this.guitarsService.addToCart(id);
    this.loadGuitarCart();
  }

  removeFromCart(id:number){
    this.guitarsService.removeFromCart(id);
    this.loadGuitarCart();
  }

  checkCart(id_guitar:number){
    return this.cartItem.includes(id_guitar);
  }

}
