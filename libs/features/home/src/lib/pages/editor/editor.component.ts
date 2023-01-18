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
  faArrowLeft

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-page-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  constructor() { }

  ngOnInit() {
  }

}
