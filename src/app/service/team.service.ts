import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://hcvback.herokuapp.com/teams"

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
}
