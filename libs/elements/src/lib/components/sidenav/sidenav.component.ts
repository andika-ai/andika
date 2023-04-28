import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class SideNavComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
