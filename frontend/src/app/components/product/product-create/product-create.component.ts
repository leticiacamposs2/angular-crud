import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: 'Produto Teste',
    price: 125.80
  };

  constructor(
    private router: Router,
    private productService: ProductService
    ) { }

  createProduct() {
    this.productService.create(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto Criado');
        this.router.navigate(['/products']);
      });
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
