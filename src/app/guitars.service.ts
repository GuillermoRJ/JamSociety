import { Injectable } from '@angular/core';
import guitarsData from './guitars.json';
import { Item } from '../Item';
@Injectable({
  providedIn: 'root'
})
export class GuitarsService {
  guitars : Item[] = guitarsData;
  private searchResults = this.guitars;

  constructor() {}

  getGuitars(){
    return this.guitars
  }

  getCart():number[] {
    const cartItem = localStorage.getItem('cartItem') ? localStorage.getItem('cartItem') : '';
    return cartItem ? JSON.parse(cartItem): [];
  }

  addToCart(id:number){
    const cartItem= this.getCart();
    cartItem.push(id);
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }
  removeFromCart(id:number){
    const cartItem= this.getCart();
    const updateGuitars= cartItem.filter(id_guitar => id_guitar!==id);
    localStorage.setItem('cartItem', JSON.stringify(updateGuitars));
  }
}
