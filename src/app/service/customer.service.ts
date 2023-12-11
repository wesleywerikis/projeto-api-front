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

  // · Method to register customer
  register(obj:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.url, obj);
  }

  // · Method to edit customer
  edit(obj:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.url, obj);
  }


}
