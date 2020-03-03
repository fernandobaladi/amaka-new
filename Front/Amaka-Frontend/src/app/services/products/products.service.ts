import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  products: Product[] = [{
    Id: '123ab',
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'quesote',
    size: 'grande',
    price: 12,
  },
  {
    Id: '456cd',
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'quesito',
    size: 'peque',
    price: 1233,
  },
  {
    Id: '789ef',
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'queso',
    size: 'mediano',
    price: 1243,
  },
  {
    Id: '101gh',
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'quesosote',
    size: 'gigante',
    price: 1253,
  },
  {
    Id: '102ij',
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'mini quesi',
    size: 'chiquitin',
    price: 1423,
  }];

  constructor() { }


  getProducts() {
    return this.products;
  }

  getProduct(id) {
    return this.products.find(product => product.Id === id);
  }

  getProductName(id) {
    let productSelected = this.products.find(product => product.Id === id);
    return productSelected.name;
  }
}
