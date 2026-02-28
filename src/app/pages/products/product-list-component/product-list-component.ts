import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../services/product-service';
import { CardComponent } from '../../../shared/components/card-component/card-component';
import { ProductFilterService } from '../../../services/product-filter-service';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, CardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products! : Signal<Product[]>
  productService = inject(ProductService);
  filterService = inject(ProductFilterService);

  ngOnInit(): void {
    this.products = this.productService.products;
  }


     filteredProducts = computed(() => {
    const allProducts = this.products();
    const { ratingFilter, minPrice, maxPrice } = this.filterService.filter;
    const { sortBy } = this.filterService.sort;

    let filtered = allProducts.filter(product => {
      if (ratingFilter() === '5plus' && product.rating < 5) return false;
      if (ratingFilter() === '4plus' && product.rating < 4) return false;
      if (ratingFilter() === '3plus' && product.rating < 3) return false;
      if (minPrice() !== null && product.price < minPrice()!) return false;
      if (maxPrice() !== null && product.price > maxPrice()!) return false;
      return true;
    });

    const sort = sortBy();
    switch (sort) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
    }
    return filtered;
  });

}
