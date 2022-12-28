import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  constructor() {}
  ngOnInit() {}


  toggleNavbar(){
    this.showMenu = !this.showMenu;
}


}
