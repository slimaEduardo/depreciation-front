import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "app/config/api.config";
import { Category } from "app/models/category.model";

@Injectable()
export class CategoryService {

    
  constructor(public http: HttpClient) {
  }

  public findById(product_id : number){
    return this.http.get<Category>(`${API_CONFIG.baseUrl}/categories/${product_id}`);
  }

  
  public getProducts(): Promise<Category[]>{
      return this.http.get(`${API_CONFIG.baseUrl}/categories`)
      .toPromise()
      .then((response: any) => {  
        return response
          
      })
  }
}