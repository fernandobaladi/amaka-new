import { Injectable } from '@angular/core';
import { Product, ShoppingProduct } from 'src/app/models/product';
import { ProductsService } from '../products/products.service';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from '../sideBar/side-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartProducts: ShoppingProduct[] = [];
  shoppingCartProducts$ = new BehaviorSubject<ShoppingProduct[]>(null);


  constructor(private productService: ProductsService, private sideBarSV: SidebarService) { }

  addProduct(porductId, quantity) {

    //... => spread operator => toma todos los valores del objeto
    let aux = { ...this.productService.getProduct(porductId), quantity }
    this.shoppingCartProducts.push(aux);
    this.shoppingCartProducts$.next(this.shoppingCartProducts);
    this.sideBarSV.toggleShoppingCartStatus();
  }

  getProduct() {
    return

  }

  deleteProduct() {

  }

}
