import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://hcvback.herokuapp.com/confiance"

@Injectable({
  providedIn: 'root'
})
export class ConfianceService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
}
