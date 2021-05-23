import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  intelloDetailShow : boolean = false;
  hmpsDetailShow:boolean = false;
  eyDetailShow:boolean = false;

  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
  
  detailOnClick(id:String) {
    if(id=="hmps_detail"){
      this.hmpsDetailShow = !this.hmpsDetailShow;
    }
    else if(id=="Intello_Detail"){
     this.intelloDetailShow = !this.intelloDetailShow;
    }
    else if(id=="EY_Detail"){
      this.eyDetailShow = !this.eyDetailShow;
    }
  }
 
  constructor() { 
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

}
