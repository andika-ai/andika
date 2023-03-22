import { OrgOpenAISubscription } from '@andika/model';
import { OrgTokenManagementService } from './../../../../../services/src/lib/org-token-management/org-token-management.service';
import { AuthService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {
  faTeletype,
  faTimes,
  faExpand,
  faQuestionCircle,
  faLightbulb,
  faPen,
  faPenNib,
  faClockRotateLeft,
  faUser,
  faBackwardStep,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  showOptions = false;
  faArrowLeft = faArrowLeft;
  constructor(private _router: Router, private _authService: AuthService, private org: OrgTokenManagementService) { }

  ngOnInit() { }


  /**
   * Check if the user is logged in
   * @returns boolean 
   */
  loggedIn() {
    return this._authService.isLoggedIn;
  }

  /**
   * Navigate to the login page
   */
  navigateToLogin() {
    this._router.navigate(['/login']);
  }

  navigateToRegister() {
    this._router.navigate(['/register']);
  }

  /**
   * Toggle User menu
   */
  toggleMenu() {
    this.showOptions = !this.showOptions;
  }

  /**
   * Sign out user
   */
  signOut() {
    this._authService.signOut();
  }




}
