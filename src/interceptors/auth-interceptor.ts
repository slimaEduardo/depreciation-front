import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'app/config/api.config';
import { StorageService } from 'app/services/storage.service';



@Injectable()
export class Interceptor implements HttpInterceptor {


    constructor(public storage: StorageService) {
    }

 intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
 
   
    
    let localUser = this.storage.getLocalUser();

    let N = API_CONFIG.baseUrl.length;
    let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;
    
    if (localUser && requestToAPI) {
        const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
        return next.handle(authReq);
    }
    else {
        return next.handle(req);
    }
       


    // console.log(request);//
 // return next.handle(request);
 }
}