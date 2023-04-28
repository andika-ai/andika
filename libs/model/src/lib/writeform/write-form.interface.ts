
export interface YoutubeIdeaInterface {
    keywords: string[];
}

export interface YoutubeDescriptionInterface {
    videoTitle: string;
}

export interface YoutubeChannelDescriptionInterface {
    channelDescription: string;
}

export interface TestimonialAndReviewInterface {
    productOrServiceName: string;
    reviewTitle: string;
}

export interface TaglineHeadlineInterface {
    keyPoints: string[];
}

export interface CoverLetterInterface {
    jobRole: string;
    skills: string[];
}

export interface JobDescriptionInterface {
    jobRole: string;
}

export interface ProfileBioInterface {
    description: string;
}

export interface StoryPlotInterface {
    storyIdea: string;
}

export interface SongIdeaInterface {
    songIdea: string;
}

export interface EmailInterface {
    description: string;
}

export interface SmsAndNotificationsInterface {
    context: string;
}

export interface ReplyToReviewsOrEmailInterface {
    message: string;
}

export interface BlogIdeaInterface {
    blogIdea: string;
}

export interface GrammarCorrectionInterface {
    text: string;
}

export interface WriteFormInterface {
    language?: string;
    tone?: string;
    usecase?: string;
    creativityLevel?: string;
    numberOfVariants?: number;
    youtubeIdea?: YoutubeIdeaInterface;
    youtubeDescription?: YoutubeDescriptionInterface;
    youtubeChannelDescription?: YoutubeChannelDescriptionInterface;
    testimonialAndReview?: TestimonialAndReviewInterface;
    taglineHeadline?: TaglineHeadlineInterface;
    coverLetter?: CoverLetterInterface;
    jobDescription?: JobDescriptionInterface;
    profileBio?: ProfileBioInterface;
    storyPlot?: StoryPlotInterface;
    songIdea?: SongIdeaInterface;
    email?: EmailInterface;
    smsAndNotifications?: SmsAndNotificationsInterface;
    replyToReviewsOrEmail?: ReplyToReviewsOrEmailInterface;
    blogIdea?: BlogIdeaInterface;
    grammarCorrection?: GrammarCorrectionInterface;
}
