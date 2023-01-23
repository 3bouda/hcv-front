import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../service/contact/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contactForm!:FormGroup;

  constructor(private fb:FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      fullname:"",
      email:"",
      object:"",
      subject:""
    });
  }
  send(){
    this.contactService.send(this.contactForm.value).subscribe();
  }
}
