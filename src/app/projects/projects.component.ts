import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  active1 : string='active';
  active2 : string='bla';
  active3 : string='bla';
  active4 : string='bla';
  active5 : string='bla';
  show1:string='u-tab-active';
  show2:string='bla';
  show3:string='bla';
  show4:string='bla';
  show5:string='bla';

  constructor() { }

  ngOnInit(): void {

  }
  activate1(){
    if(this.active1 == 'bla'){
      this.active1 = 'active';
      this.active2 = 'bla';
      this.active3 = 'bla';
      this.active4 = 'bla';
      this.active5 = 'bla';
      this.show1 = 'u-tab-active';
      this.show2 = 'bla';
      this.show3 = 'bla';
      this.show4 = 'bla';
      this.show5 = 'bla';
    }
  }
  activate2(){
    if(this.active2 == 'bla'){
      this.active1 = 'bla';
      this.active2 = 'active';
      this.active3 = 'bla';
      this.active4= 'bla';
      this.active5= 'bla';
      this.show1 = 'bla';
      this.show2 = 'u-tab-active';
      this.show3 = 'bla';
      this.show4 = 'bla';
      this.show5 = 'bla';
    }
  }
  activate3(){
    if(this.active3 == 'bla'){
      this.active1 = 'bla';
      this.active2 = 'bla';
      this.active3 = 'active';
      this.active4= 'bla';
      this.active5= 'bla';
      this.show1 = 'bla';
      this.show2 = 'bla';
      this.show3 = 'u-tab-active';
      this.show4 = 'bla';
      this.show5 = 'bla';
    }
  }
  activate4(){
    if(this.active4 == 'bla'){
      this.active1 = 'bla';
      this.active2 = 'bla';
      this.active3 = 'bla';
      this.active4= 'active';
      this.active5= 'bla';
      this.show1 = 'bla';
      this.show2 = 'bla';
      this.show3 = 'bla';
      this.show4 = 'u-tab-active';
      this.show5 = 'bla';
    }
  }
  activate5(){
    if(this.active5 == 'bla'){
      this.active1 = 'bla';
      this.active2 = 'bla';
      this.active3 = 'bla';
      this.active4= 'bla';
      this.active5= 'active';
      this.show1 = 'bla';
      this.show2 = 'bla';
      this.show3 = 'bla';
      this.show4 = 'bla';
      this.show5 = 'u-tab-active';
    }
  }

}
