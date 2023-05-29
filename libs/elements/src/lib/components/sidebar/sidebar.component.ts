import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Collapse,
  Dropdown,
  Ripple,
  initTE,
  Sidenav,
} from "tw-elements";

import {
  faTeletype,
  faTimes,
  faExpand,
  faQuestionCircle,
  faLightbulb,
  faPen,
  faPenNib,
  faClockRotateLeft,
  faArchive,
  faDatabase,
  faFolder,
  faSignOut,
  faUser,
  faGauge,
  faHome,
  faPencilAlt

} from '@fortawesome/free-solid-svg-icons';
import { TourService } from '@andika/libs/utilities';


@Component({
  selector: 'andika-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  faArchive = faArchive;
  faDatabase = faDatabase;
  faFolder =  faFolder;
  faSignOut = faSignOut;
  faUser =  faUser;
  faGauge = faGauge;
  faPencilAlt = faPencilAlt;
  @ViewChild('sidenav', { static: true }) sidenav: ElementRef;
  constructor(private _router: Router, private elementRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('#slim-toggler')
      .addEventListener('click', () => {
        const instance = Sidenav.getInstance(this.sidenav.nativeElement);
        instance.toggle();
      });

  }

  goToSettings(){
    this._router.navigate(['admin/settings'])
  }

  

}
