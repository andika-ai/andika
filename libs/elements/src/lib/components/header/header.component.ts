import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  faArrowRight

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.stickyHeaderOnScroll();

    window.addEventListener('load', this.navbarlinksActive);
    document.addEventListener('scroll', this.navbarlinksActive);  
  }


  /** Sticky header on scroll
  */
  stickyHeaderOnScroll() {
    const selectHeader = document.querySelector('#header') as HTMLElement;
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }
  }


    /**
   * Navbar links active state on scroll
   */

    navbarlinksActive() {
      const navbarlinks = document.querySelectorAll('#navbar .scrollto');
      navbarlinks.forEach((navbarlink:any) => {
  
        if (!navbarlink.hash) return;
  
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        let position = window.scrollY;
        if (navbarlink.hash != '#header') position += 200;
  
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
        
      })
  }

  // scrollto(el) {
  //   const selectHeader = document.querySelector('#header');
  //   let offset = 0;

  //   if (selectHeader?.classList.contains('sticked')) {
  //     offset = document.querySelector('#header.sticked')?.offsetHeight;
  //   } else if (selectHeader?.hasAttribute('data-scrollto-offset')) {
  //     offset = selectHeader?.offsetHeight - parseInt(selectHeader?.getAttribute('data-scrollto-offset'));
  //   }
  //   window.scrollTo({
  //     top: document.querySelector(el).offsetTop - offset,
  //     behavior: 'smooth'
  //   });
  // }
  
}
