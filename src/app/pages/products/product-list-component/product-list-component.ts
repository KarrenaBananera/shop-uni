import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../services/product-service';
import { CardComponent } from '../../../shared/components/card-component/card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, CardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products! : Signal<Product[]>
  productService = inject(ProductService)
 
  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
