import { AuthService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'andika-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  toggleText = 'Toggle Dark Mode';
  showOptions: boolean | undefined;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  heroTitle = 'A better, 10x faster way to write.';
  aboutTxt = 'Andika is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!';

  text = [
    'Interview Questions',
    'testimonials & reviews',
    'email',
    'blogs',
    'profile bio',
    'Facebook ads',
    'SEO titles',
    'product descriptions',
    'story plots','instagram posts',
    'YouTube descriptions','taglines & headlines'];
  randomText: string = this.text[0];
  hidden=false;
  constructor(
    private _router: Router,
    private _authService: AuthService,

  ) { }

  ngOnInit() {
    this.randomizeText();
   
  }

  randomizeText(){
    setInterval(() => {
      const text = this.text[Math.floor(Math.random() * this.text.length)];
      this.randomText = text;
    }, 1000);
  }


  
  /**
   * Check if the user is logged in
   * @returns boolean 
   */
  loggedIn() {
    console.log(this._authService.isLoggedIn)
    this.hidden = this._authService.isLoggedIn;
    return this.hidden;
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

}
