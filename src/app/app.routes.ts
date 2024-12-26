import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SustainabilityComponent} from './components/sustainability/sustainability.component';
import {ErrorComponent} from './components/error/error.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ProductListingComponent} from './components/product-listing/product-listing.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'product-listing', component: ProductListingComponent},
  {path: 'single-product/:id', component: SingleProductComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sustainability', component: SustainabilityComponent},
  {path: '**', component: ErrorComponent}
];
