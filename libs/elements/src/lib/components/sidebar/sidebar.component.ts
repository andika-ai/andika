import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  Collapse,
  Dropdown,
  Ripple,
  initTE,
  Sidenav,
} from "tw-elements";



@Component({
  selector: 'andika-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
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
