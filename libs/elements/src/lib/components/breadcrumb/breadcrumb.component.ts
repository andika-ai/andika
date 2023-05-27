import { BreadcrumbService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';

import {
  faHome

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  faHome = faHome;
  breadcrumbs$ = this._breadcrumbService.breadcrumb$;

  constructor(private _breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
  }

}
