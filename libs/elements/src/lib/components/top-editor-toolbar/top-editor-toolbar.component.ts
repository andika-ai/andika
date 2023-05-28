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
  faArrowLeft,
  faList,
  faSave,
  faFile
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-top-editor-toolbar',
  templateUrl: './top-editor-toolbar.component.html',
  styleUrls: ['./top-editor-toolbar.component.css']
})
export class TopEditorToolbarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faList = faList;
  faSave =  faSave;
  faFile = faFile;
  showOptions=false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showOptions = !this.showOptions;
  }


}
