import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
  
})
export class ProductDetailComponent implements OnInit {
    product: any;

  constructor(private prodcutService: ProductService){
  }

  ngOnInit(): void {
    if (this.product == null) {
      this.product = {};
    }
    this.getProductDetails()
  }

  getProductDetails():void {
    this.prodcutService.getProductDetails()
      .subscribe(product => this.product = product);
  }

}
