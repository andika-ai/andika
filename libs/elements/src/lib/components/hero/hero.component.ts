import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroTitleSubTxt  = 'A better, 10x faster';
  heroTitleSubTxt2 = 'way to write.';
  heroSubTitle = 'Andika is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!';

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
  constructor() { }

  ngOnInit() {
    this.randomizeText();
  }

  randomizeText(){
    setInterval(() => {
      const text = this.text[Math.floor(Math.random() * this.text.length)];
      this.randomText = text;
    }, 1000);
  }
}
