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
    document.addEventListener('DOMContentLoaded', () => {
      "use strict";
    
      /**
       * Preloader
       */
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          this.load = false;
          preloader.remove();
        });
      }
    });
  }

}
