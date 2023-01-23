import { Component, OnInit } from '@angular/core';
import { Customermod } from '../models/customermod';
import { CustomersService } from '../service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customermod [] = [];
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.customerService.getAll().subscribe((data: any) => this.customers = data);
  }
}
