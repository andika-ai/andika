import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
