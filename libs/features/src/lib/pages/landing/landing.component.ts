import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  heroTitle = 'A better, 10x faster way to write.';
  heroSubTitle = 'Andika is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!';
  constructor() { }

  ngOnInit() {
  }

}
