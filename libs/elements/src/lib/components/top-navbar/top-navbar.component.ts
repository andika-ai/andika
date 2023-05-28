import { AuthService } from '@andika/libs/utilities';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  faArrowRight,
  faSearch,
  faHome,
  faFolder
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  isMenuHidden=true;
  toggleText = 'Toggle Dark Mode';
  showOptions: boolean | undefined;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faSearch = faSearch;
  faHome = faHome;
  faFolder = faFolder;
  heroTitle = 'A better, 10x faster way to write.';
  aboutTxt =
    'Andika is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!';

  text = [
    'Interview Questions',
    'testimonials & reviews',
    'email',
    'blogs',
    'profile bio',
    'Facebook ads',
    'SEO titles',
    'product descriptions',
    'story plots',
    'instagram posts',
    'YouTube descriptions',
    'taglines & headlines',
  ];
  randomText: string = this.text[0];
  hidden = false;
  /**Usecase data to handle search fucntionality */
  dataUseCase: any[]
  @Input() useCaseData: any[] // default all data loaded
  @Input() usecases: any[];
  @Output() usecaseDataEvent: EventEmitter<any[]> = new EventEmitter<any[]>();
  filterCategory = '';
  toggleDarkMode = false;
  showWritingToolsOnToNav = false;
  constructor(private _router: Router, private _authService: AuthService,) {}

  ngOnInit() {
    this.isHomeRoute();
    this.randomizeText();
   
  }

  randomizeText() {
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
    // console.log(this._authService.isLoggedIn);
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

  isHomeRoute(): boolean {
    const home  = this._router.url === '/';
    const pricing = this._router.url === '/pricing';
    const terms = this._router.url === '/terms-of-service';
    const privacy = this._router.url === '/privacy-notice';
    return home || pricing || terms || privacy;
  }

  showDashboardLink(){
    return this._router.url === '/editor';
    
  }


  openMenu(){
    this.isMenuHidden= !this.isMenuHidden;
  }



  /*Search functionality*/
  filterUsecases() {
    if (this.filterCategory.trim() === '') {
      this.usecaseDataEvent.emit(this.useCaseData);
      return this.usecases;
    } else {
      const filteredData = this.usecases.filter((usecase) =>
        usecase.category
          .toLowerCase()
          .includes(this.filterCategory.toLowerCase())
      );
      this.usecaseDataEvent.emit(filteredData);
      console.log(filteredData)
      console.log(filteredData)
      return filteredData;
    }
  }

  
}
