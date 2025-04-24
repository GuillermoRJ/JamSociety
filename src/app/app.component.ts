import { Component } from '@angular/core';
import { Item } from '../Item';
import { GuitarsService } from './guitars.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ShoppingCartComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JamSociety';

  myGuitarList: Item[] = [];

  //inyect service
  constructor(private guitarService: GuitarsService) {}

  ngOnInit() {
    this.loadGuitars();
  }

  loadGuitars() {
    this.myGuitarList = this.guitarService.getGuitars();
  }
}
