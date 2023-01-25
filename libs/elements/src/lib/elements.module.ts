import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { TopEditorToolbarComponent } from './components/top-editor-toolbar/top-editor-toolbar.component';
import { SelectUsecaseComponent } from './components/select-usecase/select-usecase.component';
import { AlertComponent } from './components/snackbar/alert/alert.component';
import { GrammerCorrectionComponent } from './components/forms/grammer-correction/grammer-correction.component';
import { ReplyToReviewsOrEmailComponent } from './components/forms/reply-to-reviews-or-email/reply-to-reviews-or-email.component';
import { ProfileBioComponent } from './components/forms/profile-bio/profile-bio.component';
import { CoverLetterComponent } from './components/forms/cover-letter/cover-letter.component';
import { BlogIdeaComponent } from './components/forms/blog-idea/blog-idea.component';
import { JobDescriptionComponent } from './components/forms/job-description/job-description.component';
import { EmailComponent } from './components/forms/email/email.component';
import { SmsAndNotificationsComponent } from './components/forms/sms-and-notifications/sms-and-notifications.component';
import { SongIdeaComponent } from './components/forms/song-idea/song-idea.component';
import { StoryPlotsComponent } from './components/forms/story-plots/story-plots.component';
import { TaglineHeadlineComponent } from './components/forms/tagline-headline/tagline-headline.component';
import { TestimonialAndReviewComponent } from './components/forms/testimonial-and-review/testimonial-and-review.component';
import { YoutubeChannelDescriptionComponent } from './components/forms/youtube-channel-description/youtube-channel-description.component';
import { YoutubeVideoDescriptionComponent } from './components/forms/youtube-video-description/youtube-video-description.component';
import { YoutubeIdeaComponent } from './components/forms/youtube-idea/youtube-idea.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WriteFormComponent } from './components/write-form/write-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';

import { QuillModule } from 'ngx-quill'
import { EditorComponent } from './components/editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from '@andika/libs/material'
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesOpenAiModule } from '@andika/services/openai';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [CommonModule,  NgxMatSelectSearchModule, FontAwesomeModule, MaterialModule, QuillModule, ReactiveFormsModule,  FormsModule, ServicesOpenAiModule],// do we need quill module here and the rest i think they should be in shared modules?
  declarations: [
    PreloaderComponent,
    HeroComponent,
    TopNavbarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent,
    ToolbarComponent,
    SidebarComponent,
    AppFooterComponent,
    DocumentsComponent,
    NavbarComponent,
    YoutubeIdeaComponent,
    YoutubeVideoDescriptionComponent,
    YoutubeChannelDescriptionComponent,
    TestimonialAndReviewComponent,
    TaglineHeadlineComponent,
    StoryPlotsComponent,
    SongIdeaComponent,
    SmsAndNotificationsComponent,
    EmailComponent,
    JobDescriptionComponent,
    BlogIdeaComponent,
    CoverLetterComponent,
    ProfileBioComponent,
    ReplyToReviewsOrEmailComponent,
    GrammerCorrectionComponent,
    AlertComponent,
    SelectUsecaseComponent,
    TopEditorToolbarComponent,
    MainNavbarComponent
  ],
  exports: [
    PreloaderComponent,
    HeroComponent,
    HeaderComponent,
    TopNavbarComponent,
    FooterComponent,
    NavbarComponent,
    EditorComponent,
    WriteFormComponent,
    ToolbarComponent,
    SidebarComponent,
    AppFooterComponent,
    DocumentsComponent,
    NavbarComponent,
    YoutubeIdeaComponent,
    YoutubeVideoDescriptionComponent,
    YoutubeChannelDescriptionComponent,
    TestimonialAndReviewComponent,
    TaglineHeadlineComponent,
    StoryPlotsComponent,
    SongIdeaComponent,
    SmsAndNotificationsComponent,
    EmailComponent,
    JobDescriptionComponent,
    BlogIdeaComponent,
    CoverLetterComponent,
    ProfileBioComponent,
    ReplyToReviewsOrEmailComponent,
    GrammerCorrectionComponent,
    AlertComponent,
    SelectUsecaseComponent,
    TopEditorToolbarComponent,
    MainNavbarComponent
  ]
})
export class ElementsModule {}
