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
  categories = [
    'Youtube Idea',
    'Youtube Description',
    'Youtube Channel Description',
    'Testimonial and Review',
    'Tagline and Headline',
    'Story Plots',
    'Song Lyrics',
    'SMS and Notifications',
    'Email Subject Line',
    'Job Description',
    'Blog Idea and Outline',
    'Cover Letter',
    'Profile Bio',
    'Reply to Reviews and Messages',
    'Grammar Correction',
    'Business Idea',
    'Business Idea Pitch',
    'Citation',
    'Copywriting Framework AIDA',
    'Google Search Ad',
    'Interview Questions',
    'Keywords Extractor',
    'Landing Page',
    'Paraphrase Text',
    'Post and Caption Idea',
    'Product Description with Bullet Points',
    'Product Description',
    'SEO Meta Title',
    'Generate Call to Action',
    'Generate Brand Name',
    'Generate Question Answer',
    'Social Media Ad',
    'Generate Landing Page Copy',
    'Generate Facebook Ad',
    'Generate Instagram Caption',
    'Generate Podcast Idea',
    'GeneratePresentation',
    'GeneratePressRelease',
    'GenerateVideoScript',
    'GenerateWebsiteCopy',
    'GenerateNewsletterIdea',
    'GenerateNewsletterTitle',
    'GenerateSalesCopy',
    'GenerateCourseTitle',
    'GenerateCourseSubtitle',
    'GenerateCourseDescription',
    'GenerateCourseLectureTitles',
    'GenerateCourseQuizQuestions',
    'GenerateCourseExercises',
    'GenerateCourseArticles',
    'SummarizeText',
    'AdCopy',
    'EmailBody',
    'EmailToneAdjustment',
    'SocialMediaPost',
    'SocialMediaAdGenerator',
    'GoogleSearchAdsGenerator'
  ]
  
  randomText: string = this.text[0];
  filterCategory = '';
  toggleDarkMode = false;
  showWritingToolsOnToNav = false;
  isUsecaseDropdownOpen = false;
  hidden = false;
  /**Usecase data to handle search fucntionality */
  dataUseCase: any[]
  @Input() useCaseData: any[] // default all data loaded
  @Input() usecases: any[];
  @Output() usecaseDataEvent: EventEmitter<any[]> = new EventEmitter<any[]>();

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

  isEditorLink(){
    return this._router.url === '/editor';
    
  }

  isDashboardLink(){
    return this._router.url === '/dashboard';
    
  }


  openMenu(){
    this.isMenuHidden= !this.isMenuHidden;
  }


  

  toggleUsecaseDropdown() {
    this.isUsecaseDropdownOpen = !this.isUsecaseDropdownOpen;
    this.usecases = this.useCaseData;
  }

  onDocumentClick(event: MouseEvent) {
    const dropdownButton = document.getElementById('dropdown-button');
    if (dropdownButton && !dropdownButton.contains(event.target as Node)) {
      this.isUsecaseDropdownOpen = false;
    }
  }


  /*Search functionality*/
  filterUsecases() {
    // load data 
    this.usecases = this.useCaseData;
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
      return filteredData;
    }
  }

  onClickUsecaseCategory(title: string){
      // search by use case title
      const filteredData = this.usecases.filter((usecase) =>
      usecase.title
        .toLowerCase()
        .includes(title.toLowerCase())
    );
    this.usecaseDataEvent.emit(filteredData);
    return filteredData;
  }

  
}
