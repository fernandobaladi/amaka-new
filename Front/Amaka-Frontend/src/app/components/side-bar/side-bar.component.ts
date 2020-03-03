import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sideBar/side-bar.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { ShoppingProduct } from 'src/app/models/product';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  status = false
  products: ShoppingProduct[];

  constructor(private sideBarSV: SidebarService, private shoppingCartSV:ShoppingCartService) {

    this.sideBarSV.status.subscribe(e => {
      this.status=e;
    })

    //$ => indica que es un observable 
    this.shoppingCartSV.shoppingCartProducts$.subscribe( products => {
      this.products = products;
      console.log(products);
      
    })
   }

  ngOnInit() {
  }

  toggleSideBar(){
    this.sideBarSV.toggleShoppingCartStatus();
  }

}
