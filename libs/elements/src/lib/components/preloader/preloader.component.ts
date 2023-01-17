import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andika-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  load = true;
  constructor() { }

  ngOnInit() {
    this.preloader();
  } 


  /**
   * Preloader
   */
  preloader() {
    const preloader = document.querySelector('#preloader') as HTMLElement;
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }

}


