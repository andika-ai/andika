export interface WriteFormInterface {
    language: string;
    tone: string;
    usecase: string;
    creativityLevel: string;
    numberOfVariants: number;
    youtubeIdea: {
        keywords: string[];
    };
    youtubeDescription: {
        videoTitle: string;
    };
    youtubeChannelDescription: {
        channelDescription: string;
    };
    testimonialAndReview: {
        productOrServiceName: string;
        reviewTitle: string;
    };
    taglineHeadline: {
        keyPoints: string[];
    };
    coverLetter: {
        jobRole: string;
        skills: string[];
    };
    jobDescription: {
        jobRole: string;
    };
    profileBio: {
        description: string;
    };
    storyPlot: {
        storyIdea: string;
    };
    songIdea: {
        songIdea: string;
    };
    email: {
        description: string;
    };
    smsAndNotifications: {
        context: string;
    };
    replyToReviewsOrEmail: {
        message: string;
    };
    blogIdea: {
        blogIdea: string;
    };
    grammarCorrection: {
        text: string;
    };
}
