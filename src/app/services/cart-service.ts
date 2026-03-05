import { Injectable, signal } from '@angular/core';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly STORAGE_KEY = 'cart-data';

  private productsMap = new Map<number, { product: Product; quantity: number }>();

  productsCount = signal(0);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return;

    try {
      const parsed = JSON.parse(data);
      
      if (Array.isArray(parsed)) {
        this.productsMap = new Map(
          parsed.map(item => [item.product.id, { product: item.product, quantity: item.quantity }])
        );
        this.updateCount();
      }
    } catch (e) {
    }
  }

  private saveToStorage(){
    const data = Array.from(this.productsMap.values());
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  private updateCount() {
    let total = 0;
    for (const item of this.productsMap.values()) {
      total += item.quantity;
    }
    this.productsCount.set(total);
    this.saveToStorage(); 
  }

  addProduct(product: Product) {
    const id = product.id;
    const existing = this.productsMap.get(id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.productsMap.set(id, { product, quantity: 1 });
    }
    this.updateCount();
  }

  addProducts(product: Product, count: number) {
    const id = product.id;
    const existing = this.productsMap.get(id);
    if (existing) {
      existing.quantity += count;
    } else {
      this.productsMap.set(id, { product, quantity: count });
    }
    this.updateCount();
  }

  removeProduct(product: Product) {
    const id = product.id;
    const existing = this.productsMap.get(id);
    if (existing) {
      existing.quantity -= 1;
      if (existing.quantity <= 0) {
        this.productsMap.delete(id);
      }
      this.updateCount();
    }
  }

  clearProduct(product: Product) {
    this.productsMap.delete(product.id);
    this.updateCount();
  }

  get items(): Array<{ product: Product; quantity: number }> {
    return Array.from(this.productsMap.values());
  }
}