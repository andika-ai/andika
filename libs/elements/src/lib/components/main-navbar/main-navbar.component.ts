import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService, DarkModeService, ScreenService } from '@andika/libs/utilities';
import { BreakpointState } from '@angular/cdk/layout';

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
import { SubSink } from 'subsink';

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
  isBelowSm: boolean;
  isBelowMd: boolean;
  isOverMd: boolean;
  screenType = 'desktop';
private _sbS = new SubSink();
  constructor(private elementRef: ElementRef,
              private _router: Router,
              private _authService: AuthService,
              private screenService: ScreenService,
              private darkModeService: DarkModeService) { }

      ngOnInit(): void {
        this.checkIsBelowSm();
        this.checkIsBelowMd();
        this.checkIsOverMd();
      }


      checkIsBelowSm() {
        this._sbS.sink = this.screenService.isBelowSm().subscribe((isBelowSm: BreakpointState) => {
          this.isBelowSm = isBelowSm.matches;
          if (this.isBelowSm) {
            this.screenType = 'mobile';
            this.isOverMd = false;
            this.isBelowMd = false;
          } else {
            this.isBelowSm = false;
          }
        });
      }
    
      checkIsBelowMd() {
        this._sbS.sink = this.screenService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
          this.isBelowMd = isBelowMd.matches;
          if (this.isBelowMd) {
            this.screenType = 'tablet';
            this.isBelowSm = false;
          } else {
            this.isBelowMd = false;
          }
        });
      }
    
      checkIsOverMd() {
        this._sbS.sink = this.screenService.isOverMd().subscribe((isOverMd: BreakpointState) => {
          this.isOverMd = isOverMd.matches;
          if (this.isOverMd) {
            this.screenType = 'desktop';
            this.isBelowSm = false;
            this.isBelowMd = false;
          } else {
            this.isOverMd = false;
          }
        });
      }
    
    // # unsubscribe to avoid memory leaks
      ngOnDestroy = () => this._sbS.unsubscribe();
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
