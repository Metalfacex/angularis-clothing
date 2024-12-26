import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../interfaces/product-interface';
import {NgForOf, SlicePipe} from '@angular/common';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';

@Component({
  selector: 'app-single-product',
  imports: [
    NgForOf,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    SlicePipe
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
  readonly panelOpenState = signal(false);
  product?: IProduct;
  products: IProduct[] = [];

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.product = this.productService.getPorductById(id);
      this.products = this.productService.getAllProducts();
    })
  }

  addToCart():void{
    alert("Added to cart!")
  }

  goToProduct(id:number){
    this.router.navigate(['single-product',id]);
  }
}
