import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrgOpenAISubscription } from '@andika/model';
import { AuthService, DarkModeService } from '@andika/libs/utilities';
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
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { OrgTokenManagementService } from 'libs/services/src/lib/org-token-management/org-token-management.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  @Output() isDarkMode = new EventEmitter<boolean>();
  toggleText = 'Toggle Dark Mode'
  isDarkModeEnabled = false;
  showOptions = false;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor(private _router: Router, private _authService: AuthService, private org: OrgTokenManagementService, private darkModeService: DarkModeService) { }

  ngOnInit() {
  }

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
  
    toggleDarkMode(): void {
      const darkModeEnabled = this.darkModeService.getIsDarkModeEnabled();
      this.darkModeService.toggleDarkMode(!darkModeEnabled);
      if(darkModeEnabled){
        this.toggleText = 'Toggle Dark Mode';
      } else {
        this.toggleText = 'Toggle Light Mode';
      }
      
    }
  
  

}
