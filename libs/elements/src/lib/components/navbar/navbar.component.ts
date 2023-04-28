import { Component, Input, OnInit } from '@angular/core';
import {
  faTeletype,
  faTimes,
  faExpand,
  faQuestionCircle,
  faLightbulb,
  faPen,
  faPenNib,
  faClockRotateLeft,
  faUser

} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'andika-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faTeletype = faTeletype;
  faTimes = faTimes;
  faPen = faPenNib;
  faClockRotateLeft = faClockRotateLeft;

  faExpand= faExpand;
  faQuestionCircle = faQuestionCircle;
  faLightbulb = faLightbulb;
  faUser = faUser;
  activeButton  = 0;
  showMenu = false;
  constructor() {}
  ngOnInit() {}


  toggleNavbar(){
    this.showMenu = !this.showMenu;
}


}
