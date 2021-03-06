import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { Product } from "../models/product.model";
import { map, retry } from 'rxjs/operators';

@Injectable()
export class ProductService {

    
  constructor(public http: HttpClient) {
  }

  public findById(product_id : number){
    return this.http.get<Product>(`${API_CONFIG.baseUrl}/products/${product_id}`);
  }

  public findByCategory(category_id : number, page : number = 0, linesPerPage : number = 24) {
    return this.http.get(`${API_CONFIG.baseUrl}/Products/?categories=${category_id}&page=${page}&¨linesPerPage=${linesPerPage}`);
  }

  public getProducts(): Promise<Product[]>{
      return this.http.get(`${API_CONFIG.baseUrl}/products`)
      .toPromise()
      .then((response: any) => {  
        return response
          
      })
  }

  public insert(obj: Product): Promise<Product>{
    
    return this.http.post(`${API_CONFIG.baseUrl}/products/`,obj)
    .toPromise()
    .then((response: any) => {
      return response
    });
  }

  public update(product_id: number, obj: Product) {
    return this.http.put(`${API_CONFIG.baseUrl}/products/${product_id}`, obj)
    .subscribe(response => {
     }, error => {console.log(error)})
  }

  public delete(product_id : number){
    return this.http.delete(`${API_CONFIG.baseUrl}/products/${product_id}`)
    .subscribe(response => {
      
    })
  }
}