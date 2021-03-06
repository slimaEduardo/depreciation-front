import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'app/models/category.model';
import { Company } from 'app/models/company.model';
import { Product } from 'app/models/product.model';
import { CategoryService } from 'app/services/category.service';
import { CompanyService } from 'app/services/company.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'table-cmp',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService, CategoryService, CompanyService]
})
export class ProductsComponent implements OnInit {

  public formulary: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    initialPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9.0-9]*')]),
    purchasedDate: new FormControl('', Validators.required),
    categoryId: new FormControl(''),
    companyId: new FormControl(''),
  })

  @Output() public updateList: EventEmitter<any> = new EventEmitter<any>()
  public products: Product[] = []
  public product: Product
  public categories: Category[] = []
  public companies: Company[] = []
  public product_id: number;
  public show: boolean = true;

  constructor( private productService: ProductService, 
    private categoryService: CategoryService,
    private companyService: CompanyService ) { }

  ngOnInit(): void {
  this.initializeLists()
  }

  public initializeLists(){
   this.listProducts(),
    this.categoryService.getCategories()
    .then((cat: Category[]) => {
      this.categories = cat
      
    }),
    this.companyService.getCompanies()
    .then((com: Company[]) => {
      this.companies = com
      
    })
  }

  public listProducts(){
    this.productService.getProducts()
    .then((prod: Product[]) => {
      this.products = prod
      
    })
  }

  public addProd(){
    
  this.productService.insert(this.formulary.value)
 .then((prod: Product) => {
   this.att()
 })
    
  }

  referenceId(productId: number){
    this.product_id = productId 
  }

  public listProd(product_id: number){
    this.productService.findById(product_id).subscribe(response => {
      this.product = response
      this.formulary = new FormGroup({
        id: new FormControl(product_id),
        name: new FormControl(response.name, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        description: new FormControl(response.description, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        initialPrice: new FormControl(response.initialPrice, [Validators.required, Validators.minLength(1), Validators.maxLength(2),Validators.pattern('[0-9.0-9]*')]),
      })
     
     },
     error => {
       console.log(error)
     })
  }

  public edit(category_id: number){
    let aux: Product
    aux = this.formulary.value
    this.productService.update(category_id,aux)
    this.updateList.emit(this.att())
  }

  public delete(product_id: number){
    this.productService.delete(product_id)
    this.att()
  }

  public att() {
    this.listProducts() // para atualizar o dados do array
      this.show = false // tirar tabela do DOM
        setTimeout(() => {
          this.show = true // retorna com tabela para o DOM e os dados atualizados do
          this.listProducts()
          this.formulary.reset()
        }, 50);
    }

    public resetFormulary(){
      this.formulary.reset()
    }
}
