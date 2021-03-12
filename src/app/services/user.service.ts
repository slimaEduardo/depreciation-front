import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "app/config/api.config";
import { User } from "app/models/user.model";
import { StorageService } from "./storage.service";

@Injectable()
export class UserService{

    
    constructor(public http: HttpClient, public storage: StorageService) {
    }
  
    public findById(_id : number){
      
      return this.http.get<User>(`${API_CONFIG.baseUrl}/users/${_id}`);
    }
  
    
    public getUsers(): Promise<User[]>{
      
        return this.http.get(`${API_CONFIG.baseUrl}/users`)
        .toPromise()
        .then((response: any) => {  
          return response
            
        })
    }
  
    public insert(obj:User){
     
      return this.http.post(`${API_CONFIG.baseUrl}/users`,obj,
      {
        observe: 'response',
        responseType: 'text'
      });
    }
  
   public update(_id: number, obj: User) {
    console.log(obj)
      return this.http.put(`${API_CONFIG.baseUrl}/users/${_id}`, obj)
      .subscribe(response => {
       }, error => {console.log(error)})
    }
  
    public delete(_id : number){
      return this.http.delete(`${API_CONFIG.baseUrl}/users/${_id}`)
      .subscribe(response => {
        
      })
    }
}