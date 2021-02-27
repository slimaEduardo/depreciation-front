import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "app/config/api.config";
import { Company } from "app/models/company.model";

@Injectable()
export class CompanyService {

    
  constructor(public http: HttpClient) {
  }

  public findById(product_id : number){
    return this.http.get<Company>(`${API_CONFIG.baseUrl}/companies/${product_id}`);
  }

  
  public getProducts(): Promise<Company[]>{
      return this.http.get(`${API_CONFIG.baseUrl}/companies`)
      .toPromise()
      .then((response: any) => {  
        return response
          
      })
  }
}