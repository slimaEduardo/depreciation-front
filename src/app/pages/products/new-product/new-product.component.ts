import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product: Product


  public formulary: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    price: new FormControl('', [Validators.required, Validators.pattern('[0-9,0-9]*')]),
    purchaseDate: new FormControl('', Validators.required)
  })

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  public addProd(){
    console.log(this.formulary)
    this.productService.insert(this.formulary.value)
    .subscribe(response => {
      console.log("ok!");
    },
    error => {
      console.log('erro!')
    })
  }

}
