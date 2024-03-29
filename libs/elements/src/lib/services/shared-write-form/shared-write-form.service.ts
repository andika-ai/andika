import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UseCase} from "@andika/model";

@Injectable({
  providedIn: 'root'
})
/**
 * TODO: Add documentation
 * Deterimine form usecase
 */
export class SharedWriteFormService {

  constructor() { }


  getFormValues(form: FormGroup) {
    const formValues = form?.value;
    const usecase = form?.get('usecase')?.value;
    const payload = {
      language: formValues.language,
      tone: formValues.tone,
      usecase: formValues.usecase,

    };

    switch (usecase) {
      case UseCase.YoutubeIdea:
        return {
          ...payload,
          channelName: formValues.youtubeIdea.channelName,
          channelTheme: formValues.youtubeIdea.channelTheme,
          previousVideoTopics: formValues.youtubeIdea.previousVideoTopics,
        }

      case UseCase.YoutubeVideoDescription:
        return {
          ...payload,
          videoDescription: formValues.youtubeVideoDescription.videoDescription,
        }

      case  UseCase.GenerateYoutubeVideoScript:
        return {
          ...payload,
          videoDescription:  formValues.youtubeVideoScript.videoDescription,
        }
      case UseCase.YoutubeChannelDescription:
        return {
          ...payload,
          channelDescription: formValues.youtubeChannelDescription.channelDescription,
          usecase: UseCase.YoutubeChannelDescription
        }
      case UseCase.TestimonialAndReview:
        return {
          ...payload,
          productOrServiceName: formValues.testimonialAndReview.productOrServiceName,
          reviewTitle: formValues.testimonialAndReview.reviewTitle,
          usecase: UseCase.TestimonialAndReview

        }
      case UseCase.TagLineAndHeadline:
        return {
          ...payload,
          keyPoints: formValues.taglineHeadline.keyPoints,
          usecase: UseCase.TagLineAndHeadline
        }
      case UseCase.CoverLetter:
        return {
          ...payload,
          jobRole: formValues.coverLetter.jobRole,
          skills: formValues.coverLetter.skills,
          usecase: UseCase.CoverLetter
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
          usecase: UseCase.JobDescription
        }

      case UseCase.StoryPlots:
        return {
          ...payload,
          storyIdea: formValues.storyPlot.storyIdea,
          usecase: UseCase.StoryPlots
        }

      case UseCase.SongLyrics:
        return {
          ...payload,
          songIdea: formValues.songIdea.songIdea,
          usecase: UseCase.SongLyrics
        }

      case UseCase.Email:
        return {
          ...payload,
          email_content: formValues.email.description,
        }
      case UseCase.SmsAndNotifications:
        return {
          ...payload,
          context: formValues.smsAndNotifications.context,
          usecase: UseCase.Email
        }

      case UseCase.ReplyToReviewsAndMessages:
        return {
          ...payload,
          message: formValues.replyToReviewsOrEmail.message,
          usecase: UseCase.ReplyToReviewsAndMessages
        }

      case UseCase.BlogIdeaAndOutline:
        return {
          ...payload,
          keyword: formValues.blogIdea.blogIdea,
          usecase: UseCase.BlogIdeaAndOutline
        }

      case UseCase.GrammarCorrection:
        return {
          ...payload,
          text: formValues.grammarCorrection.text,
          usecase:  UseCase.GrammarCorrection
        }
      case UseCase.SummarizeText:
        return {
          ...payload,
          text:  formValues.summarizeText.text
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

