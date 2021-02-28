import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'table-cmp',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  public products: Product[] = []

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getProducts()
   .then((prod: Product[]) => {
     this.products = prod
   })
  }

}
