import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService, DarkModeService } from '@andika/libs/utilities';


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

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  toggleText = 'Toggle Dark Mode';
  showOptions: boolean | undefined;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor(private elementRef: ElementRef,
              private _router: Router,
              private _authService: AuthService,
              private darkModeService: DarkModeService) { }

  ngOnInit() { }

  /**
   * Detects click event
   */
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showOptions = false;
    }
  }


  /**
   * Check if the user is logged in
   * @returns boolean 
   */
  loggedIn() {
    console.log(this._authService.isLoggedIn)
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
  navigateToAccount() {
    this._router.navigate(['/account']);
  }
  navigateToHistory() {
    this._router.navigate(['/history']);
  }

  navigateToAudio() {
    this._router.navigate(['/audio']);
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
