import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  mobile: any;
  email: any;
  badge: any;
  constructor() {

  }

  ngOnInit(): void {
    this.mapMarker = awesom.faMapMarker;
    this.email = awesom.faMailBulk;
    this.mobile = awesom.faMobile;
    this.badge = awesom.faGraduationCap;
  }

}
