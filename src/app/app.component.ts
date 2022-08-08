import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'crudAngular';
  productArray: Product[] = [
    { id: 1, name: 'shmpoo', price: 1000 },
    { id: 2, name: 'locion', price: 2000 },
    { id: 3, name: 'crema', price: 2500 },
  ];
  //------clase tipo producto para llenarlo
  selectedProduct: Product = new Product();

  addOrEdit() {
    if (
      this.selectedProduct.id == 0 && this.selectedProduct.name ? true : false
    ) {
      this.selectedProduct.id = this.productArray.length + 1;

      const oneuno = this.productArray.find(
        (e) => e.id == this.selectedProduct.id
      );

      if (oneuno?.name) {
        let nuevo = this.selectedProduct.id;
        let oneuno2 = true;
        do {
          nuevo = nuevo + 1;
          let existe = this.productArray.find((e) => e.id == nuevo);
          if (existe) {
            oneuno2 = true;
          } else {
            oneuno2 = false;
          }
        } while (oneuno2);
        this.selectedProduct.id = nuevo;
      }

      this.productArray.push(this.selectedProduct);
    }

    this.selectedProduct = new Product();
  }

  openForEdit(product: Product) {
    this.selectedProduct = product;
  }

  delete() {
    if (confirm("it'll be delete, are you sure this action?!")) {
      alert('!deleted!');
      this.productArray = this.productArray.filter(
        (e) => e.id !== this.selectedProduct.id
      );
    }
    this.selectedProduct = new Product();
  }
  cancelSelection() {
    this.selectedProduct = new Product();
  }
}
