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
  heroTitleSubTxt  = 'Write 10X faster';
  heroTitleSubTxt2 = 'than ever before with AI.';
  heroSubTitle = 'Andika is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!';

  text = [
    'Engage with captivating content',
    'Craft persuasive emails effortlessly.',
    'Boost your brand with impactful ad copy.',
    'Attract customers with captivating descriptions.',
    'Prepare accurate legal documents with ease.',
    'Tell powerful stories and raise awareness.',
    'Improve writing skills with tailored exercises',
    'Create precise technical documentation effortlessly',
    'Unleash your creativity with writing prompts.',
    'Stay informed, engage your audience.',
    'Blog and Article Writing',
    'Academic Writing Support',
    'Business Proposal and Report Writing',
    'Social Media Content Creation',
    'Language Translation and Localization',
    'CV and Resume Writing',
    'News and Content Summarization',
    'Creative Writing Prompts',
    'Content Marketing',
    'Email Communication',
    'Copywriting and Advertisements',
    'E-commerce Product Descriptions',
    'Legal Document Drafting',
    'Social Impact Initiatives',
    'Language Learning and Education',
    'Technical Writing',
    'Fiction and Creative Writing',
    'Generate a Profile Bio',
    'Generate Facebook Ads',
    'Generate SEO Titles',
    'Generate Story Plots',
    'Generate Song Lyrics',
    'Generate Instagram Posts',
    'Generate YouTube Descriptions',
    'Generate Captivating Taglines',
    'Generate Captivating Headlines'];

  randomText: string;
  randomAnimation: string;
  faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit() {
    this.randomizeText();

 
  }

  randomizeText() {
    let previousText = '';
    setInterval(() => {
      let text = '';
      do {
        text = this.text[Math.floor(Math.random() * this.text.length)];
      } while (text === previousText);
      previousText = text;
      this.randomText = text;
    }, 1000);
  }






  
  
  

  
}


