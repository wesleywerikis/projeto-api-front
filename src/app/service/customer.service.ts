import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // · URL da API
  private url:string = 'http://localhost:8080';


  // · Construtor
  constructor(private http:HttpClient) { }

  select():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

}
