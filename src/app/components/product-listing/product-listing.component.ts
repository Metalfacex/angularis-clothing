import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../interfaces/product-interface';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-listing',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  readonly panelOpenState = signal(false);

  products: IProduct[] =[];

  slicer:number = 6;

  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.getAllProducts();
  }

  addSlice():void {
    this.slicer += 4;
  }

  goToProduct(id:number){
    this.router.navigate(['single-product',id]);
  }
}
