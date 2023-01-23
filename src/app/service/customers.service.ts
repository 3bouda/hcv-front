import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "https://hcvback.herokuapp.com/customers"
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
}
