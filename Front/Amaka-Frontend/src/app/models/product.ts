export interface Product {
    Id: string;
    img: string;
    name: string;
    size: string;
    price: number;
  }

  export interface ShoppingProduct extends Product {
    quantity: number;
  }