import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";



import { API_CONFIG } from "app/config/api.config";
import { LocalUser } from "app/models/local_user";

import { UserLogin } from "app/models/userLogin.model";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService{

    public token: string
    public localUser: LocalUser
    public aux1: boolean
    public aux2: boolean

    jwtHelperService: JwtHelperService  = new JwtHelperService ()

    constructor(public http: HttpClient, public storage: StorageService, private router: Router) {
    }

    loginUser(user: UserLogin){
       
        return this.http.post(`${API_CONFIG.baseUrl}/login`, user
        ,{
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
    this.token = authorizationValue.substring(7);
       this.localUser  = {
            token: this.token,
            email: this.jwtHelperService.decodeToken(this.token).sub
                   
        };
               
        this.storage.setLocalUser(this.localUser);
        if(this.localUser.token !== undefined && this.localUser.token !==null){
            this.router.navigate([''])
        }
    }

    logout() {
        this.storage.setLocalUser(null);
    }

    public authenticated(): boolean{
        this.aux1 = this.token === undefined
        this.aux2 = localStorage.getItem('token') !== 'null'
        console.log('Aux1: ', this.aux1)
        console.log('Aux2: ', this.aux2)
        if(this.token === undefined && localStorage.getItem('token') !== 'null'){
            this.token = localStorage.getItem('token')
        }
        if(this.token === undefined){
            this.router.navigate(['/login'])
        }
        console.log('token2: ',this.token)
         return this.token != undefined
    }
} 