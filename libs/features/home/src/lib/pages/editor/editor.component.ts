import { Component, OnInit} from '@angular/core';
import {
  faArrowLeft

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-page-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  loading = false;
  showOptions = false;
  promptResponseData: any;

  faArrowLeft = faArrowLeft;
  constructor() { }

  ngOnInit() {
  }

  isLoading(event: boolean){
    this.loading = event;
  }

  promptResponse(event: any) {
    this.promptResponseData = event;
  }


  toggleMenu() {
    this.showOptions = !this.showOptions;
  }

}
