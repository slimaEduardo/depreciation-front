import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'app/models/category.model';
import { CategoryService } from 'app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  public formulary: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    depretiationRate: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(5),Validators.pattern('[0-9.0-9]*')]),
    lifeCycle: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2),Validators.pattern('[0-9.0-9]*')])
    })

  public categories: Category[] = []
  public category: Category
  public category_id: number
  show: boolean = true
  @Output() public updateList: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategories()
  }

  public listCategories(){
    this.categoryService.getCategories()
   .then((cat: Category[]) => {
     this.categories = cat
   })
  }

  public listCat(category_id: number){
    this.categoryService.findById(category_id).subscribe(response => {
      this.category = response
      this.formulary = new FormGroup({
        id: new FormControl(category_id),
        name: new FormControl(response.name, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        depretiationRate: new FormControl(response.depretiationRate, [Validators.required, Validators.minLength(1), Validators.maxLength(5),Validators.pattern('[0-9.0-9]*')]),
        lifeCycle: new FormControl(response.lifeCycle, [Validators.required, Validators.minLength(1), Validators.maxLength(2),Validators.pattern('[0-9.0-9]*')])
      })
     
     },
     error => {
       console.log(error)
     })
  }

public insert(){
  this.categoryService.insert(this.formulary.value)
        .subscribe(response => {
          this.att()
        },
        error => {
          console.log(error)
        })
}

public edit(category_id: number){
  let aux: Category
  aux = this.formulary.value
  this.categoryService.update(category_id,aux)
  this.updateList.emit(this.att())
}

referenceId(categoryId: number){
  this.category_id = categoryId 
}

 public delete(category_id: number){
  this.categoryService.delete(category_id)
        this.att()
 }

 public att() {
  this.listCategories() // para atualizar o dados do array
    this.show = false // tirar tabela do DOM
      setTimeout(() => {
        this.show = true // retorna com tabela para o DOM e os dados atualizados do
        this.listCategories()
        this.formulary.reset()
      }, 50);
  }

  public resetFormulary(){
    this.formulary.reset()
  }
}
