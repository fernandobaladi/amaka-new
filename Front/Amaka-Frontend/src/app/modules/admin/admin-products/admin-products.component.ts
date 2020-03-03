import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {

  // optionSort = '';
  search: string;
  public productsForm: FormGroup;
  modalStatus = new BehaviorSubject(false);
  loading = false;

  
  constructor(private fb: FormBuilder) { }

  products: Product [] = [
    {
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
  }
  ]

  createProductsForm() {
      this.productsForm = this.fb.group({
        name: ['', Validators.required],
        size: ['', Validators.required],
        price: ['', Validators.required],
      });
    }
    
  ngOnInit() {

    this.createProductsForm();

  }

    openModal(product?){
      // if (product) {
      //   this.productsForm.controls.name.setValue(product.data.name);
      //   this.productsForm.controls.size.setValue(product.data.size);
      //   this.productsForm.controls.price.setValue(product.data.price);
      // } else {
      //   this.productsForm.reset();

      // }
      this.modalStatus.next(!this.modalStatus.value);

    }

    changeModalStatus(val) {
      this.modalStatus.next(val)
    }
  
    toggleModalStatus() {
      this.modalStatus.next(!this.modalStatus.value);
      this.createProductsForm();
    }

    saveChanges(){
      this.loading = true;
    this.modalStatus.next(false);
    }

}
