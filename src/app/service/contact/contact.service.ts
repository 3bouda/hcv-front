
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contactmod } from 'src/app/models/contact';

const URL = "https://hcvback.herokuapp.com/contact"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  send(contact:Contactmod){
    let formData:FormData = new FormData();
    formData.append("email",contact.email!);
    formData.append("fullname",contact.fullname!);
    formData.append("object",contact.object!);
    formData.append("subject",contact.subject!);

    return this.http.post(`${URL}`,formData);
  }
}
