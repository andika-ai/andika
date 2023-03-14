import {Endpoint, UseCase} from '@andika/model';

const baseUrl = 'http://127.0.0.1:4401/andika-16cf6/us-central1/';
export const ENDPOINTS = [
    
    { usecase: UseCase.YoutubeIdea, endpoint: `${baseUrl}generateYTubeIdea` },
    {
        usecase: UseCase.YoutubeDescription,
        endpoint: `${baseUrl}generateYTubeVideoDescription`,
    },
    {
        usecase: UseCase.YoutubeChannelDescription,
        endpoint: `${baseUrl}generateYTubeChannelDescription`,
    },
    {
        usecase: UseCase.TestimonialAndReview,
        endpoint: `${baseUrl}generateTestimonialAndReview`,
    },
    {
        usecase: UseCase.TagLineAndHeadline,
        endpoint: `${baseUrl}generateTagLineHeadline`,
    },
    { usecase: UseCase.StoryPlots, endpoint: `${baseUrl}generateStory` },
    { usecase: UseCase.SongLyrics, endpoint: `${baseUrl}generateSongLyric` },
    {
        usecase: UseCase.SmsAndNotifications,
        endpoint: `${baseUrl}generateSmsAndNotification`,
    },
    { usecase: UseCase.Email, endpoint: `${baseUrl}generateEmail` },
    {
        usecase: UseCase.JobDescription,
        endpoint: `${baseUrl}generateJobDescription`,
    },
    {
        usecase: UseCase.BlogIdeaAndOutline,
        endpoint: `${baseUrl}generateBlogIdeaAndOutline`,
    },
    { usecase: UseCase.CoverLetter, endpoint: `${baseUrl}generateCoverLetter` },
    { usecase: UseCase.ProfileBio, endpoint: `${baseUrl}generateProfileBio` },
    // {
    //     usecase: UseCase.ReplyToReviewsAndMessages,
    //     endpoint: `${baseUrl}generateReplyReview`,
    // },
    // { usecase: UseCase.GrammarCorrection, endpoint: `${baseUrl}correctGrammar` },
    // {
    //     usecase: UseCase.GenerateBusinessIdea,
    //     endpoint: `${baseUrl}generateBusinessIdea`,
    // },
    // {
    //     usecase: UseCase.GenerateBusinessIdeaPitch,
    //     endpoint: `${baseUrl}generateBusinessIdeaPitch`,
    // },
    // { usecase: UseCase.GenerateCitation, endpoint: `${baseUrl}generateCitation` },
    // {
    //     usecase: UseCase.GenerateCopywritingFrameworkAIDA,
    //     endpoint: `${baseUrl}generateCopywritingFrameworkAIDA`,
    // },
    // {
    //     usecase: UseCase.GenerateJobDescription,
    //     endpoint: `${baseUrl}generateJobDescription`,
    // },
    // {
    //     usecase: UseCase.GenerateKeywordsExtractor,
    //     endpoint: `${baseUrl}keywordsExtractor`,
    // },
    // {
    //     usecase: UseCase.GenerateLandingPage,
    //     endpoint: `${baseUrl}generateLandingPage`,
    // },
    // { usecase: UseCase.ParaphraseText, endpoint: `${baseUrl}paraphraseText` },
    // {
    //     usecase: UseCase.GeneratePostAndCaptionIdea,
    //     endpoint: `${baseUrl}generatePostAndCaptionIdea`,
    // },
    // {
    //     usecase: UseCase.GenerateProductDescriptionWithBulletPoints,
    //     endpoint: `${baseUrl}generateProductDescriptionWithBulletPoints`,
    // },
    // {
    //     usecase: UseCase.GenerateProductDescription,
    //     endpoint: `${baseUrl}generateProductDescription`,
    // },
    // {
    //     usecase: UseCase.GenerateSeoMetaTitle,
    //     endpoint: `${baseUrl}generateSeoMetaTitle`,
    // },
    // {
    //     usecase: UseCase.GenerateSocialMediaAd,
    //     endpoint: `${baseUrl}generateSocialMediaAd`,
    // },
    // {
    //     usecase: UseCase.GenerateCoverLetter,
    //     endpoint: `${baseUrl}generateCoverLetter`,
    // },
    // {
    //     usecase: UseCase.GenerateProfileBio,
    //     endpoint: `${baseUrl}generateProfileBio`,
    // },
    // {
    //     usecase: UseCase.GenerateReplyReview,
    //     endpoint: `${baseUrl}generateReplyReview`,
    // },
    // {
    //     usecase: UseCase.GenerateCallToAction,
    //     endpoint: `${baseUrl}generateCallToAction`,
    // },
    // {
    //     usecase: UseCase.GenerateBrandName,
    //     endpoint: `${baseUrl}generateBrandName`,
    // },
    // {
    //     usecase: UseCase.GenerateQuestionAnswer,
    //     endpoint: `${baseUrl}generateQuestionAnswer`,
    // },
    // { usecase: UseCase.GenerateFAQs, endpoint: `${baseUrl}generateFAQs` },
    // {
    //     usecase: UseCase.GenerateInstagramCaption,
    //     endpoint: `${baseUrl}generateInstagramCaption`,
    // },
    // { usecase: UseCase.GenerateResume, endpoint: `${baseUrl}generateResume` },
    // {
    //     usecase: UseCase.GenerateResumeCoverLetter,
    //     endpoint: `${baseUrl}generateResumeCoverLetter`,
    // },
    // {
    //     usecase: UseCase.GenerateScholarshipEssay,
    //     endpoint: `${baseUrl}generateScholarshipEssay`,
    // },
    // { usecase: UseCase.GenerateSpeech, endpoint: `${baseUrl}generateSpeech` },
    // {
    //     usecase: UseCase.GenerateTermsAndConditions,
    //     endpoint: `${baseUrl}generateTermsAndConditions`,
    // },
    // {
    //     usecase: UseCase.GenerateVideoScript,
    //     endpoint: `${baseUrl}generateVideoScript`,
    // },
    // {
    //     usecase: UseCase.GenerateWebsiteCopy,
    //     endpoint: `${baseUrl}generateWebsiteCopy`,
    // },
    // {
    //     usecase: UseCase.GenerateShortStory,
    //     endpoint: `${baseUrl}generateShortStory`,
    // },
    // {
    //     usecase: UseCase.GeneratePodcastTitle,
    //     endpoint: `${baseUrl}generatePodcastTitle`,
    // },
    // {
    //     usecase: UseCase.GenerateNewsletter,
    //     endpoint: `${baseUrl}generateNewsletter`,
    // },
    // {
    //     usecase: UseCase.GenerateFacebookPost,
    //     endpoint: `${baseUrl}generateFacebookPost`,
    // },
    // {
    //     usecase: UseCase.GenerateLinkedInPost,
    //     endpoint: `${baseUrl}generateLinkedInPost`,
    // },
    // {
    //     usecase: UseCase.GenerateTikTokCaption,
    //     endpoint: `${baseUrl}generateTikTokCaption`,
    // },
    // {
    //     usecase: UseCase.GeneratePressRelease,
    //     endpoint: `${baseUrl}generatePressRelease`,
    // },
    // {
    //     usecase: UseCase.GenerateCaseStudy,
    //     endpoint: `${baseUrl}generateCaseStudy`,
    // },
    // {
    //     usecase: UseCase.GenerateWhitePaper,
    //     endpoint: `${baseUrl}generateWhitePaper`,
    // },
    // {
    //     usecase: UseCase.GenerateProductLaunch,
    //     endpoint: `${baseUrl}generateProductLaunch`,
    // },
    // {
    //     usecase: UseCase.GenerateProductNaming,
    //     endpoint: `${baseUrl}generateProductNaming`,
    // },
    // {
    //     usecase: UseCase.GenerateYouTubeTitle,
    //     endpoint: `${baseUrl}generateYouTubeTitle`,
    // },
    // {
    //     usecase: UseCase.GenerateTwitterPost,
    //     endpoint: `${baseUrl}generateTwitterPost`,
    // },
    // {
    //     usecase: UseCase.GenerateMediumArticle,
    //     endpoint: `${baseUrl}generateMediumArticle`,
    // },
    // {
    //     usecase: UseCase.GenerateGuestPost,
    //     endpoint: `${baseUrl}generateGuestPost`,
    // },
    // {
    //     usecase: UseCase.GenerateProductComparison,
    //     endpoint: `${baseUrl}generateProductComparison`,
    // },
    // {
    //     usecase: UseCase.GenerateGoogleAds,
    //     endpoint: `${baseUrl}generateGoogleAds`,
    // },
    // {
    //     usecase: UseCase.GenerateMarketingPlan,
    //     endpoint: `${baseUrl}generateMarketingPlan`,
    // },
    // {
    //     usecase: UseCase.GenerateContentMarketingStrategy,
    //     endpoint: `${baseUrl}generateContentMarketingStrategy`,
    // },
    // {
    //     usecase: UseCase.GenerateInstagramHashtags,
    //     endpoint: `${baseUrl}generateInstagramHashtags`,
    // },
    // {
    //     usecase: UseCase.GenerateInstagramProfile,
    //     endpoint: `${baseUrl}generateInstagramProfile`,
    // },
    // {
    //     usecase: UseCase.GenerateCompanyDescription,
    //     endpoint: `${baseUrl}generateCompanyDescription`,
    // },
    // {
    //     usecase: UseCase.GenerateYouTubeChannelName,
    //     endpoint: `${baseUrl}generateYouTubeChannelName`,
    // },
    // {
    //     usecase: UseCase.GenerateCaptionForArt,
    //     endpoint: `${baseUrl}generateCaptionForArt`,
    // },
    // {
    //     usecase: UseCase.GenerateProductDescriptionWithTemplate,
    //     endpoint: `${baseUrl}generateProductDescriptionWithTemplate`,
    // },
    // {
    //     usecase: UseCase.GenerateRestaurantDescription,
    //     endpoint: `${baseUrl}generateRestaurantDescription`,
    // },
    // {
    //     usecase: UseCase.GenerateMeetingAgenda,
    //     endpoint: `${baseUrl}generateMeetingAgenda`,
    // },
    // {
    //     usecase: UseCase.GenerateProductNaming,
    //     endpoint: `${baseUrl}generateProductNaming`,
    // },
    // {
    //     usecase: UseCase.GenerateSalesEmail,
    //     endpoint: `${baseUrl}generateSalesEmail`,
    // },
    // {
    //     usecase: UseCase.GenerateSlogan,
    //     endpoint: `${baseUrl}generateSlogan`,
    // },
    // {
    //     usecase: UseCase.GenerateSpeech,
    //     endpoint: `${baseUrl}generateSpeech`,
    // },
    // {
    //     usecase: UseCase.GenerateNewsletter,
    //     endpoint: `${baseUrl}generateNewsletter`,
    // },
    // {
    //     usecase: UseCase.GeneratePodcastDescription,
    //     endpoint: `${baseUrl}generatePodcastDescription`,
    // },
    // {
    //     usecase: UseCase.GeneratePodcastTitle,
    //     endpoint: `${baseUrl}generatePodcastTitle`,
    // },
    // {
    //     usecase: UseCase.GeneratePressRelease,
    //     endpoint: `${baseUrl}generatePressRelease`,
    // },
    // {
    //     usecase: UseCase.GenerateVideoScript,
    //     endpoint: `${baseUrl}generateVideoScript`,
    // },
    // {
    //     usecase: UseCase.GenerateWebsiteCopy,
    //     endpoint: `${baseUrl}generateWebsiteCopy`,
    // },
    // {
    //     usecase: UseCase.GenerateWelcomeEmail,
    //     endpoint: `${baseUrl}generateWelcomeEmail`,
    // },
    // {
    //     usecase: UseCase.GenerateWritingPrompts,
    //     endpoint: `${baseUrl}generateWritingPrompts`,
    // },
    // {
    //     usecase: UseCase.GeneratePodcastOutline,
    //     endpoint: `${baseUrl}generatePodcastOutline`,
    // },
    // {
    //     usecase: UseCase.GenerateQuizQuestions,
    //     endpoint: `${baseUrl}generateQuizQuestions`,
    // },
    // {
    //     usecase: UseCase.GenerateEssayOutline,
    //     endpoint: `${baseUrl}generateEssayOutline`,
    // },
    // {
    //     usecase: UseCase.GenerateCourseDescription,
    //     endpoint: `${baseUrl}generateCourseDescription`,
    // },
    // {
    //     usecase: UseCase.GenerateCaseStudy,
    //     endpoint: `${baseUrl}generateCaseStudy`,
    // },
    // {
    //     usecase: UseCase.GenerateCatchyHeadline,
    //     endpoint: `${baseUrl}generateCatchyHeadline`,
    // },
    // {
    //     usecase: UseCase.GenerateEulogy,
    //     endpoint: `${baseUrl}generateEulogy`,
    // },
    // {
    //     usecase: UseCase.GenerateJingle,
    //     endpoint: `${baseUrl}generateJingle`,
    // },
    // {
    //     usecase: UseCase.GenerateMemes,
    //     endpoint: `${baseUrl}generateMemes`,
    // },
    // {
    //     usecase: UseCase.GenerateMotivationalQuotes,
    //     endpoint: `${baseUrl}generateMotivationalQuotes`,
    // },
    // {
    //     usecase: UseCase.GenerateNewspaperHeadline,
    //     endpoint: `${baseUrl}generateNewspaperHeadline`,
    // },
    // {
    //     usecase: UseCase.GeneratePoem,
    //     endpoint: `${baseUrl}generatePoem`,
    // },
    // {
    //     usecase: UseCase.GeneratePoliticalCampaignSlogan,
    //     endpoint: `${baseUrl}generatePoliticalCampaignSlogan`,
    // },
    // {
    //     usecase: UseCase.GeneratePresentation,
    //     endpoint: `${baseUrl}generatePresentation`,
    // },
    // {
    //     usecase: UseCase.GenerateProductComparison,
    //     endpoint: `${baseUrl}generateProductComparison`,
    // },
    // {
    //     usecase: UseCase.GenerateProductDemoScript,
    //     endpoint: `${baseUrl}generateProductDemoScript`,
    // },
    // {
    //     usecase: UseCase.GenerateProductExplanation,
    //     endpoint: `${baseUrl}generateProductExplanation`,
    // },
    // {
    //     usecase: UseCase.GenerateProductReview,
    //     endpoint: `${baseUrl}generateProductReview`,
    // },
];
