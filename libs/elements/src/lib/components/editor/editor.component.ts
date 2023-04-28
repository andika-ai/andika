import { Component, OnInit, ViewChild , Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';


import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemePalette } from '@angular/material/core';

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
export class EditorComponent implements OnInit, OnChanges{
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

  constructor(private fb: FormBuilder) { 
    this.control = new FormControl()
    this.form = this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = this.promptResponseData;
    this.form.get('editor')?.patchValue(data)
  }

  ngOnInit() {
    console.log(
     'e'
    )
    // this.initializeForm()
    // let icons = Quill.import('ui/icons');
    // icons['source'] = '[source]';
    
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
    console.log('editor-change', event)
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
    this.focused = false
    this.blured = true
  }


  patchValue(){}

  // // Fetch data
  // this.dataService.fetchData().subscribe((data) => {
  //   this.content = data;
  //   this.isLoading = false;
  // });


  
}