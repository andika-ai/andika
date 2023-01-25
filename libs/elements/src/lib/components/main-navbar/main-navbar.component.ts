import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  showMenu = false;
  constructor() { }

  ngOnInit() {
    const trigger = document.querySelector('a.relative');
    const dropdown = document.querySelector('.absolute');

    trigger?.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown?.classList.toggle('hidden');
    });
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;



  }

}
