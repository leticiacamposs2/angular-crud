import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(
    private router: Router,
    private productService: ProductService
    ) { }

  createProduct() {
    this.productService.showMessage('Produto Criado');
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}
