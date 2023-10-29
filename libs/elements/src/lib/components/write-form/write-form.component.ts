import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UseCase } from '@andika/model';
import { IUseCase } from './usecase.interface';
import { SharedWriteFormService } from '../../services/shared-write-form/shared-write-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snackbar/snack-bar.service';
// import { OpenaiService, PromptService } from '@andika/services';

import { FormService } from '@andika/libs/shared';
import { PromptService } from '@andika/services';

export interface ChatCompletionResponse {
  status_code: number;
  data: {
    result: {
      role: string;
      content: string;
    };
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens_used: number;
  };
}



@Component({
  selector: 'andika-write-form',
  templateUrl: './write-form.component.html',
  styleUrls: ['./write-form.component.scss']
})
export class WriteFormComponent implements OnInit {
  useCase = UseCase;
  currentFormType: any; // determines which form is currently in use
  emptyFieldsDetected = false;

  @Output() isLoading = new EventEmitter<boolean>(false);
  @Output() promptResponse = new EventEmitter<any>();

  languages = [
    { id: 1, name: 'English', code: 'en' },
    { id: 2, name: 'Swahili', code: 'sw' },
    { id: 3, name: 'Spanish', code: 'es' },
    { id: 4, name: 'French', code: 'fr' },
    { id: 5, name: 'German', code: 'de' },
    { id: 6, name: 'Italian', code: 'it' },
    { id: 7, name: 'Portuguese', code: 'pt' },
    { id: 8, name: 'Dutch', code: 'nl' },
    { id: 9, name: 'Russian', code: 'ru' },
    { id: 10, name: 'Chinese (Simplified and Traditional)', code: 'zh' },
    { id: 11, name: 'Japanese', code: 'ja' },
    { id: 12, name: 'Korean', code: 'ko' },
    { id: 13, name: 'Arabic', code: 'ar' },
    { id: 14, name: 'Hindi', code: 'hi' },
    { id: 15, name: 'Bengali', code: 'bn' },
    { id: 16, name: 'Turkish', code: 'tr' },
    { id: 17, name: 'Polish', code: 'pl' },
    { id: 18, name: 'Swedish', code: 'sv' },
    { id: 19, name: 'Norwegian', code: 'no' },
    { id: 20, name: 'Danish', code: 'da' },
    { id: 21, name: 'Finnish', code: 'fi' },
    { id: 22, name: 'Greek', code: 'el' },
    { id: 23, name: 'Hebrew', code: 'he' },
    { id: 24, name: 'Indonesian', code: 'id' },
    { id: 25, name: 'Malay', code: 'ms' },
    { id: 26, name: 'Thai', code: 'th' },
    { id: 27, name: 'Vietnamese', code: 'vi' }
];


  tones = [
    {id: 1, name: 'friendly'},
    {id: 2, name: 'professional'},
    {id: 3, name: 'playful'},
    {id: 4, name: 'serious'},
    {id: 5, name: 'sarcastic'},
  ]

  isTyping = false;
  selectedUseCase: any;
  form!: FormGroup;
 
  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute,
    private _promptService: PromptService,
    private _snackBarService: SnackBarService,
    private _fb: FormBuilder,
    private _sharedForm: SharedWriteFormService,
    private _snackBar: MatSnackBar,) {
  }

  
  ngOnInit() {
    this.determineUsecase();
    
    this.form = new FormGroup({
      language: new FormControl(this.languages[0].name),
      tone: new FormControl(this.tones[1].name),
      usecase: new FormControl(this.currentFormType),
      youtubeIdea: this._fb.group({
        channelName: [],
        channelTheme: [],
        previousVideoTopics:[],
      }),
      youtubeVideoDescription: this._fb.group({
        videoDescription: []
      }),
      youtubeVideoScript: this._fb.group({
        videoDescription: []
      }),
      youtubeChannelDescription: this._fb.group({
        channelDescription: []
      }),
      testimonialAndReview: this._fb.group({
        productOrServiceName: [],
        reviewTitle: []
      }),
      taglineHeadline: this._fb.group({
        keyPoints: []
      }),
      coverLetter: this._fb.group({
        jobRole: [],
        skills: []
      }),
      jobDescription: this._fb.group({
        jobRole: []
      }),
      profileBio: this._fb.group({
        description: []
      }),
      storyPlot: this._fb.group({
        storyIdea: []
      }),
      songIdea: this._fb.group({
        songIdea: []
      }),
      email: this._fb.group({
        description: []
      }),
      smsAndNotifications: this._fb.group({
        context: []
      }),
      replyToReviewsOrEmail:  this._fb.group({
        message: []
      }),
      blogIdea:  this._fb.group({
        blogIdea: []
      }),
      grammarCorrection:  this._fb.group({
        text: []
      }),
      summarizeText:  this._fb.group({
        text: []
      })
    });

  }


  /**
   * A service is triggered using this function to return a response we 
   * get the data and then we move it to the quill editor the form can have different states
   * draft etc 
   * on submit emit value to the quill editor. 
   */
  onSubmit(){
    // to decide which form to use
    const payload = this._sharedForm.getFormValues(this.form)
    const hasAllValues = this._sharedForm.checkAllKeysHaveValues(payload);
    this.isLoading.emit(true);
    // If empty values dont submitt show a prompt 
    // alert(hasAllValues)
    if(!hasAllValues){
      this.emptyFieldsDetected=true;
      this.alertNoInput();
      this.isLoading.emit(false);
      this.isTyping = false;
    } else {
    // To enable the typing effect when waiting for data from server.
    // this.isLoading.emit(true);

    /**
     * next: The next parameter is a function that handles the next emitted value from the Observable. Whenever a new value is emitted by the Observable, this function is called, and the emitted value is passed as an argument to this function. You can perform any desired logic or operations with the emitted value inside this function.

      error: The error parameter is a function that handles any error that occurs during the execution of the Observable. If an error occurs, this function is called, and the error object is passed as an argument. You can use this function to handle and manage errors, such as displaying error messages or performing error-specific actions.

      complete: The complete parameter is a function that handles the completion of the Observable. When the Observable completes its emission of values, this function is called. It signifies that the Observable has finished its execution. You can use this function to perform any cleanup tasks or final actions after the Observable completes.
     */
    this.isTyping = true;
    console.log(payload)
    this._promptService.postPrompt(payload).subscribe({
      
      next: (res: any) => {
        // Handle next value
        
        if(res){
          this.isTyping = false;
          this.isLoading.emit(false);
          const content = res.data.result.content;
          this.promptResponse.emit(content)
        }
      
      },
      error: (msg: any) => {
        // Handle error
        this.isTyping = false;
        console.log('---------------------')
        console.log(msg)
        this._snackBarService.openSnackBar(
          '',` ${msg.error.data.error}`,
          'Okey', 'center', 'top', ['red-snackbar']);
      },
      complete: () => {
        // Handle completion
      }
    });
    }



  
 
  
    
    



    
  }

  alertNoInput(){
    this._snackBarService.openSnackBar(
      'Invalid input!',' No Input provided',
      'Okey', 'center', 'top', ['snackbar-error']);
  }


  // sets the current usecase in use
  setFormType(formType: string) {
    this.currentFormType = formType;
  }

  // determine usecase case on load
  determineUsecase(){
    this.formService.formType$.subscribe((formType: UseCase) => {
      console.log(formType)
      // Use the formType to determine which form to render
      this.setFormType(formType) // this is an ID
      // pactch the current usecase in use
      this.form.controls['usecase']?.patchValue(formType)


      console.log(formType)

    });

  }


}