import { Component } from '@angular/core';
import { ProductImageComponent } from "../../../shared/components/product-image-component/product-image-component";
import { ProductListComponent } from "../../products/product-list-component/product-list-component";
import { orderListComponent } from "../products-list-component/products-list-component";

@Component({
  selector: 'app-order-page-component',
  imports: [orderListComponent],
  templateUrl: './order-page-component.html',
  styleUrl: './order-page-component.css',
})
export class OrderPageComponent {

}
