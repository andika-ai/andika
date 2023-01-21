import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UseCase } from '../../components/write-form/usecase.enum';
// interface MyObject {
//   key1: string;
//   key2: string;
//   key3: string;
//   // other keys and their types
// }
@Injectable({
  providedIn: 'root'
})
export class SharedWriteFormService {

  constructor() { }


  getFormValues(form: FormGroup) {
    const formValues = form?.value;
    const usecase = form?.get('usecase')?.value;
    const payload = {
      language: formValues.language,
      tone: formValues.tone,
      usecase: formValues.usecase,
      creativityLevel: formValues.creativityLevel,
      numberOfVariants: formValues.numberOfVariants,
    };

    switch (Number(usecase)) {
      case UseCase.YoutubeIdea:
        return {
          ...payload,
          youtubeIdea: formValues.youtubeIdea.keywords
        }
      case UseCase.YoutubeDescription:
        return {
          ...payload,
          videoTitle: formValues.youtubeDescription.videoTitle
        }
      case UseCase.YoutubeChannelDescription:
        return {
          ...payload,
          channelDescription: formValues.youtubeChannelDescription.channelDescription
        }
      case UseCase.TestimonialAndReview:
        return {
          ...payload,
          productOrServiceName: formValues.testimonialAndReview.productOrServiceName,
          reviewTitle: formValues.testimonialAndReview.reviewTitle

        }
      case UseCase.TagLineAndHeadline:
        return {
          ...payload,
          keyPoints: formValues.taglineHeadline.keyPoints,
        }
      case UseCase.CoverLetter:
        return {
          ...payload,
          jobRole: formValues.coverLetter.jobRole,
          skills: formValues.coverLetter.skills
        }
      case UseCase.JobDescription:
        return {
          ...payload,
          jobRole: formValues.jobDescription.jobRole,
        }

      case UseCase.ProfileBio:
        return {
          ...payload,
          description: formValues.profileBio.description,
        }

      case UseCase.StoryPlots:
        return {
          ...payload,
          storyIdea: formValues.storyPlot.storyIdea,
        }

      case UseCase.SongLyrics:
        return {
          ...payload,
          songIdea: formValues.songIdea.songIdea,
        }

      case UseCase.Email:
        return {
          ...payload,
          description: formValues.email.description,
        }
      case UseCase.SmsAndNotifications:
        return {
          ...payload,
          context: formValues.smsAndNotifications.context,
        }

      case UseCase.ReplyToReviewsAndMassages:
        return {
          ...payload,
          message: formValues.replyToReviewsOrEmail.message,
        }

      case UseCase.BlogIdeaAndOutline:
        return {
          ...payload,
          blogIdea: formValues.blogIdea.blogIdea,
        }

      case UseCase.GrammarCorrection:
        return {
          ...payload,
          text: formValues.grammarCorrection.text,
        }
      default:
        return '';
    }
  }

  checkAllKeysHaveValues(obj: any) {
    for (const key in obj) {
      if (!obj[key]) {
        return false;
      }
    }
    return true;
  }
}

