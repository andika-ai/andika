import { YoutubeIdeaComponent } from './../forms/youtube-idea/youtube-idea.component';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// import * as __ from 'lodash';

import { UseCase } from './usecase.enum';
import { IUseCase } from './usecase.interface';
import { OpenAIService } from '@andika/services/openai';
import { SharedWriteFormService } from '../../services/shared-write-form/shared-write-form.service';


@Component({
  selector: 'andika-write-form',
  templateUrl: './write-form.component.html',
  styleUrls: ['./write-form.component.scss']
})
export class WriteFormComponent implements OnInit {
  @Output() isLoading = new EventEmitter<boolean>();
  @Output() promptResponse = new EventEmitter<any>();
  creativityLevels = [
    {id: 1 , name: 'low'},
    {id: 2 , name: 'medium'},
    {id: 3 , name: 'high'}
  ]

  languages = [
    {id: 1, name: 'English', code: 'en'},
    {id: 2, name: 'Swahili', code: 'sw'}
  ]

  tones = [
    {id: 1, name: 'friendly'},
    {id: 2, name: 'professional'},
    {id: 3, name: 'playful'},
    {id: 4, name: 'serious'},
    {id: 5, name: 'sarcastic'},
  ]

  useCaseData = [
    {
        id: UseCase.YoutubeIdea,
        name: 'Youtube Idea',
        info: 'Generate video ideas based on keywords & topics',
        keywords: 'random keywords',
    },
    {
        id: UseCase.YoutubeDescription,
        info: 'Write short description for your YouTube video',
        name: 'Youtube Description',
        title: 'random title',
    },
    {
        id: UseCase.YoutubeChannelDescription,
        name: 'Youtube Channel Description',
        info: 'Write short description for your YouTube channel',
        purpose: 'random channel purpose',
    },
    {
        id: UseCase.TestimonialAndReview,
        info: 'Write short tagline for your product or brand',
        name: 'Testimonial & Review',
        reviewTile: 'random review title',
    },
    {
        id: UseCase.TagLineAndHeadline,
        name: 'Tag Line & Headline',
        info: 'Write short tagline for your product or brand',
        description: 'description for tagline',
    },
    {
        id: UseCase.StoryPlots,
        name: 'Story Plots',
        info: 'Generate creative plot outline based on story ideas',
        idea: 'description for idea',
    },
    {
        id: UseCase.SongLyrics,
        name: 'Song Lyrics',
        info: 'Generate short lyrics based on a song idea',
        idea: 'description for idea',
    },
    {
        id: UseCase.SmsAndNotifications,
        name: 'SMS and Notifications',
        info: 'Write engaging micro-copies for SMS or app notifications',
        context: 'context for SMS or app notifications',
    },
    {
        id: UseCase.Email,
        name: 'Email',
        info: 'Turn a few key points into a ready to send email',
        keyPoints: 'random key points',
    },
    {
        id: UseCase.JobDescription,
        name: 'Job Description',
        info: 'Write a job description based on the role',
        jobRole: 'Software Engineer'
    },
    {
      id: UseCase.BlogIdeaAndOutline,
      name: 'Blog Idea and Outline',
      info: 'Generate ideas and content structure for articles',
      jobRole: 'Software Engineer'
    },
    {
      id: UseCase.CoverLetter,
      name: 'Cover Letter',
      info: 'Write cover letters based on job role & skills',
      jobRole: 'Software Engineer',
      jobSkills: 'add job skills here'
    },
    {
      id: UseCase.ProfileBio,
      name: 'Profile Bio',
      info: 'Write introduction & about me bios for your profile',
      about: 'Software Engineer based in nairobi kenya',
    },
    {
      id: UseCase.ReplyToReviewsAndMassages,
      name: 'Reply to Reviews & Messages',
      info: 'Write responses for messages, reviews, emails & more',
      message: '>>> paste information here and let the bot reply',
    },
    {
      id: UseCase.GrammarCorrection,
      name: 'Grammar correction',
      info: 'Write your text in correct grammar',
      message: '>>> paste information here and let the bot correct the grammar',
    }
];

  selectedUseCase: any;
  form!: FormGroup;
  constructor(private _fb: FormBuilder, private _openAIService: OpenAIService,  private _sharedForm: SharedWriteFormService) {
    this.selectedUseCase = this.useCaseData[0];
  }

  
  ngOnInit() {
    this.form = new FormGroup({
      language: new FormControl(this.languages[0].name),
      tone: new FormControl(this.tones[1].name),
      usecase: new FormControl(this.useCaseData[0].id),
      creativityLevel: new FormControl(this.creativityLevels[1].name),
      numberOfVariants: new FormControl(1),
      youtubeIdea: this._fb.group({
        keywords: []
      }),
      youtubeDescription: this._fb.group({
        videoTitle: []
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
    });
    /**
     * TODO: Refactor this in the future on select item 
     */
    this.form.valueChanges.subscribe((data: any) => {
      this.getSelectedUseCase(data.usecase)

    
    })

  }

  selectUsecase(){
    const usecase = this.selectedUseCase;

  }


  onClickUseCase(val: IUseCase){
    this.selectedUseCase = val;
    alert('hello')

  }

  getInfo(){
    return this.form.get('usecase')?.value
  }
  
  /**
   * TODO: Refactor this in the future on select item 
   */
  getSelectedUseCase(id: string){
    const result = this.useCaseData.filter(useCase => useCase.id === Number(id));
    this.selectedUseCase = result[0]
  }

  /**
   * A service is triggered using this function to return a response we 
   * get the data and then we move it to the quill editor the form can have different states
   * draft etc 
   * on submit emit value to the quill editor. 
   */
  onSubmit(){
    const payload = this._sharedForm.getFormValues(this.form)
    
    alert(JSON.stringify(payload))
    // To enable the typing effect when waiting for data from server.
    // this.isLoading.emit(true);
    // Make a request to Open AI API  depending on the selected use case.
    // this._openAIService.postCorrectGrammer(JSON.stringify({"text": 'me love you'})).subscribe(response=>{
    //   this.promptResponse.emit(response)
    //   this.isLoading.emit(false);
    // })
  }


}


