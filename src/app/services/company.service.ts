import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "app/config/api.config";
import { Company } from "app/models/company.model";

@Injectable()
export class CompanyService {

    
  constructor(public http: HttpClient) {
  }

  public findById(company_id : number){
    return this.http.get<Company>(`${API_CONFIG.baseUrl}/companies/${company_id}`);
  }

  
  public getCompanies(): Promise<Company[]>{
      return this.http.get(`${API_CONFIG.baseUrl}/companies`)
      .toPromise()
      .then((response: any) => {  
        return response
          
      })
  }

  public insert(obj: Company){
    return this.http.post(`${API_CONFIG.baseUrl}/companies`,obj,
    {
      observe: 'response',
      responseType: 'text'
    });
  }

  public delete(company_id : number){
    return this.http.delete(`${API_CONFIG.baseUrl}/companies/${company_id}`)
    .subscribe(response => {
      
    })
  }

  public update(company_id: string, obj: Company){
    return this.http.put(`${API_CONFIG.baseUrl}/companies/${company_id}`, obj)
    .subscribe(response => {
     }, error => {console.log(error)})
  }
}