import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';



@Component({
  selector: 'andika-element-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  hide = false;
  form: FormGroup;
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
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }

  constructor(private fb: FormBuilder) { 
    this.control = new FormControl()
    this.form = this.initializeForm();
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
}