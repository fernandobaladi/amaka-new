import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  status= new BehaviorSubject (false)

  constructor() { }

  changeStatus(val){
    this.status.next(val)
  }
  
  toggleShoppingCartStatus(){
    this.status.next(!this.status.value);
  }

  getAddProduct(productId, quantity){
    
    return quantity;
  }
}
