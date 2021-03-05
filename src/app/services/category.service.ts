import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "app/config/api.config";
import { Category } from "app/models/category.model";

@Injectable()
export class CategoryService {
  

    
  constructor(public http: HttpClient) {
  }

  public findById(category_id : number){
    return this.http.get<Category>(`${API_CONFIG.baseUrl}/categories/${category_id}`);
  }

  
  public getProducts(): Promise<Category[]>{
      return this.http.get(`${API_CONFIG.baseUrl}/categories`)
      .toPromise()
      .then((response: any) => {  
        return response
          
      })
  }

  public insert(obj: Category){
   
    return this.http.post(`${API_CONFIG.baseUrl}/categories`,obj,
    {
      observe: 'response',
      responseType: 'text'
    });
  }

  update(category_id: number, obj: Category) {
    return this.http.put(`${API_CONFIG.baseUrl}/categories/${category_id}`, obj)
    .subscribe(response => {
     }, error => {console.log(error)})
  }

  public delete(category_id : number){
    return this.http.delete(`${API_CONFIG.baseUrl}/categories/${category_id}`)
    .subscribe(response => {
      console.log(response)
    })
  }
}