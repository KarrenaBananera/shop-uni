import { Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products-page-component/products-page-component';
import { ProductDetailsPage } from './pages/product-details/product-details-page/product-details-page';

export const routes: Routes = [
    {path: '', component: ProductsPageComponent},
    { path: 'products/:id', component: ProductDetailsPage },
    { path: '**', redirectTo: '' },
];
