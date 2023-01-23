import { Component, OnInit } from '@angular/core';
import { Teammod } from '../models/teammod';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: Teammod [] = [];
  isReadMore = "more...";

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.teamService.getAll().subscribe((data: any) => this.team = data);
  }
  showText(index:number) {
    var dots = document.getElementById("ddd-"+index);
    var butt = document.getElementById("button-"+index);
    console.log(butt!.textContent?.length==9)
    if( butt!.textContent?.length===9 ||butt!.textContent?.length===7 ){
      dots!.style.height="auto";
      dots!.style.overflow="visible";
      butt!.textContent="less";
      console.log(butt!.textContent?.length)
    }else{
    dots!.style.height="150px";
    dots!.style.overflow="hidden";
    butt!.textContent="more...";
    console.log(butt!.textContent?.length)
    }

 }
}
