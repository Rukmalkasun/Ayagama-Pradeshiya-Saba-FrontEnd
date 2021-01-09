import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { ApiService } from './api.service';


import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from "rxjs/internal/operators";





@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

	tokenizedReq: any;
	//message: any;
	//error:any;
  constructor(private apiService:ApiService, private injector: Injector,) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  	//let apiService = this.injector.get(ApiService)
  	request = request.clone({
  		setHeaders: {
  			Authorization: 'Bearer ' + localStorage.getItem('token')
  		} 
  	}) 
		return next.handle(request)
		
		//return next.handle(request);

		


  	}
}


