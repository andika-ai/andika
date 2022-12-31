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
    Email = 9,
    JobDescription = 10,
    BlogIdeaAndOutline= 11,
    CoverLetter = 12,
    ProfileBio=13,
    ReplyToReviewsAndMassages = 14
}
