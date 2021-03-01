import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category.model';
import { CategoryService } from 'app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  public categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory()
  }

  public listCategory(){
    this.categoryService.getProducts()
   .then((cat: Category[]) => {
     this.categories = cat
   })
  }

 public delete(category_id: number){
  this.categoryService.delete(category_id)
 }
}
