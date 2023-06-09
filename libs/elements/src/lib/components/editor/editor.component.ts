import { Component, OnInit, ViewChild , Input, OnChanges, SimpleChanges, HostListener, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';


import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemePalette } from '@angular/material/core';

import {
  faSave

} from '@fortawesome/free-solid-svg-icons';
import { FormService } from '@andika/libs/shared';
import { Draft, getUseCaseFromString } from '@andika/model';
import { SaveDocumentModalComponent } from '../modals/save-document-modal/save-document-modal.component';

@Component({
  selector: 'andika-element-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  animations: [
    trigger('dotsAnimation', [
      state('start', style({
        transform: 'scale(1)'
      })),
      state('end', style({
        transform: 'scale(1.5)'
      })),
      transition('start <=> end', animate('300ms ease-in'))
    ])
  ]
})
export class EditorComponent implements OnInit, AfterViewInit,OnChanges{
  /**save icon behaviour */
  id: string | null;
  isSaveIconVisible  = false;
  typingTimer: any;
  readonly typingTimeout: number = 1500; // Adjust timeout duration as needed

  //end
  color: ThemePalette = 'warn';
  @Input() loading = false;
  @Input() promptResponseData: any = null;
  hide = false;
  @Input() form: FormGroup
  // form 
  @Input() control: FormControl;
  ////////////////////////////////
  @ViewChild('editor') editor: QuillEditorComponent | undefined;
  content = '<p>Rich Text Editor Example </p>';
  format = 'html';

  blured = false
  focused = false

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
        ['link'],
        ['source'],
      ],
      handlers: {
        source: () => {
          this.formatChange();
        },
      },
    },
  };

  QuillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: ['white'] }],
      ['link'],
      ['clean'],
    ],
  }

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _formService: FormService,
    private _dialog: MatDialog
    ) { 
    this.control = new FormControl()
    this.form = this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = this.promptResponseData;
    this.form.get('editor')?.patchValue(data)
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        throw new Error('ID parameter is missing');
      }
      this.id = decodeURIComponent(id);
  
      // from Usecase enum, get the usecase
      const usecase = getUseCaseFromString(this.id);
      if (!usecase) {
        throw new Error('Invalid use case');
      }
  
      this._formService.setFormType(usecase);

  });
}
    // this.initializeForm()
    // let icons = Quill.import('ui/icons');
    // icons['source'] = '[source]';
    
  

  ngAfterViewInit() {
    // if (this.editor) {
    //   this.editor.quillEditor.options = {
    //     scrollingContainer: '.content-container'
    //     // other options...
    //   };
    // }
  }
  

  initializeForm(){
    return this.fb.group({
      editor: [this.content, []]
      
    })
  }

  formatChange() {
    this.format = this.format === 'html' ? 'text' : 'html';

    if (this.format === 'text' && this.editor) {
      const htmlText = this.form.get('editor')?.value;
      this.editor.quillEditor.setText(htmlText);
    } else if (this.format === 'html' && this.editor) {
      const htmlText = this.form.get('editor')?.value;
      this.editor.quillEditor.setText('');
      this.editor.quillEditor.pasteHTML(0, htmlText);
    }
  }
  created(event: any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    clearTimeout(this.typingTimer);
    this.isSaveIconVisible = false;
    this.typingTimer = setTimeout(() => {
      this.isSaveIconVisible = true;
    }, this.typingTimeout);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.isSaveIconVisible = true;
    }, this.typingTimeout);
  }


  patchValue(){}

  // // Fetch data
  // this.dataService.fetchData().subscribe((data) => {
  //   this.content = data;
  //   this.isLoading = false;
  // });


  saveDocument(){
    const payload ={
      use_case: this.id,
      title:'',
      content:  this.form.get('editor')?.value
    }

    this._dialog.open(SaveDocumentModalComponent, {
      width: '400px',
      data: payload as Draft
    });
  }
  
}