import { Component, OnInit } from '@angular/core';
import { Confiancemod } from '../models/confiancemod';
import { ConfianceService } from '../service/confiance.service';

@Component({
  selector: 'app-confiance',
  templateUrl: './confiance.component.html',
  styleUrls: ['./confiance.component.css']
})
export class ConfianceComponent implements OnInit {
  confiance: Confiancemod [] = [];
  constructor(private confianceService:ConfianceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.confianceService.getAll().subscribe((data: any) => this.confiance = data);
  }
}
