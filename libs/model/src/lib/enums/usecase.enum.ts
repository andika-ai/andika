/**
 * This will create an enum called UseCase with four values: YoutubeIdea, YoutubeDescription, YoutubeChannelDescription, and TestimonialAndReview. The values of the enum are set to the id field in the data, so each item in the useCaseData array will have a corresponding value in the UseCase enum.

Note that in the fourth item, the reviewTile field has been corrected to be a valid identifier. Alternatively, you could also enclose the field name in quotes, like this:
 */

export enum UseCase {
    YoutubeIdea = 1,
    YoutubeDescription = 2,
    YoutubeChannelDescription = 3,
    TestimonialAndReview = 4,
    TagLineAndHeadline = 5,
    StoryPlots = 6,
    SongLyrics = 7,
    SmsAndNotifications = 8,
    EmailSubjectLine = 9,
    JobDescription = 10,
    BlogIdeaAndOutline= 11,
    CoverLetter = 12,
    ProfileBio=13,
    ReplyToReviewsAndMessages = 14,
    GrammarCorrection = 15,
    BusinessIdea = 16,
    BusinessIdeaPitch = 17,
    Citation = 18,
    CopywritingFrameworkAIDA = 19,
    GoogleSearchAd = 20,
    InterviewQuestions = 21,
    KeywordsExtractor = 22,
    LandingPage = 23, 
    ParaphraseText = 24,
    PostAndCaptionIdea = 25,
    ProductDescriptionWithBulletPoints = 26,
    ProductDescription = 27,
    SeoMetaTitle = 28,
    GenerateCallToAction = 29,
    GenerateBrandName = 30,
    GenerateQuestionAnswer = 31,
    SocialMediaAd = 32,
    GenerateLandingPageCopy = 33,
    GenerateFacebookAd = 34,
    GenerateInstagramCaption = 35,
    GeneratePodcastIdea = 36,
    GeneratePodcastTitle = 37,
    GeneratePresentation = 38,
    GeneratePressRelease = 39,
    GenerateVideoScript = 40,
    GenerateWebsiteCopy = 41,
    GenerateNewsletterIdea = 42,
    GenerateNewsletterTitle = 43,
    GenerateSalesCopy = 44,
    GenerateCourseTitle = 45,
    GenerateCourseSubtitle = 46,
    GenerateCourseDescription = 47,
    GenerateCourseLectureTitles = 48,
    GenerateCourseQuizQuestions = 49,
    GenerateCourseExercises = 50,
    GenerateCourseArticles = 51,
    SummarizeText = 52,
    AdCopy = 53,
    EmailBody = 54,
    EmailToneAdjustment = 55,
    SocialMediaPost = 56,
    SocialMediaAdGenerator = 57,
    GoogleSearchAdsGenerator = 58,
    Email = 59
}
