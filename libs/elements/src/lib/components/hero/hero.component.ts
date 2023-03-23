import { Component, OnInit } from '@angular/core';
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
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroTitleSubTxt  = 'Write 10X better and faster';
  heroTitleSubTxt2 = 'than ever before with AI.';
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
  faArrowRight = faArrowRight;
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
