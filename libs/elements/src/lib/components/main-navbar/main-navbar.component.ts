import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToLogin() {
      this._router.navigate(['/login']);
  }

  navigateToRegister() {
    this._router.navigate(['/register']);
  }

}
