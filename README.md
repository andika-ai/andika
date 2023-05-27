# Andika

However, after turning the workspace to Nx, run the build command against all apps and libraries: yarn nx run-many --target=build --all Notice it will take much less time the 2nd run.
Full stack  project for andika

## Prerquisites 
- [Node.js version 16.16](nodejs.org)
- [Java JDK version 11 or higher. Requirement to use firebase emulator](https://www.oracle.com/java/technologies/downloads/)
- [NX](nx.dev)
- [Yarn](https://yarnpkg.com/)
- [Firebase Tools](https://www.npmjs.com/package/firebase-tools)
- [Angular Cli](angular.io)
- [NVM (optional to wasily install node.js)](https://github.com/coreybutler/nvm-windows/releases)

## Installation 

1. npm i -g yarn 
2. npm install -g firebase-tools
3. yarn install 
4. npm i -g @angular/cli
5. npm i -g nx
6. firebase use andika-16cf6
7. firebase setup:emulators:database   
8. firebase setup:emulators:ui   

## Development server

Run `nx s` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

To run the emulator run:

**Windows**
Run `yarn emu:start`

**Linux**
Run `yarn emulator:start`

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


# TODO FEATURES
- intercomm feature
- business idea pitch
- business ideas
- call to action
- copy writing framework aida
- copy writing framework pas
- coverletter [x]
- facebook,twitter,linkedin ads
- googlesearch ads
- email [x]
- interview questions
- job description [x]
- keyword generator
- landing page website copies
- post caption ideas
- product description bullets
- profile bio [x]
- question answer
- reply to review and messages
- sms notifications
- song lyrics
- story plot
- custom use case
# Running  Functions Locally steps 

clone 
npm i 

npm run build-func

npm run func-serve

npm run shell


npm install --no-package-lock lodash 

This will install the lodash package in the root-level node_modules directory, rather than creating a new node_modules directory inside the my-lib library.

Keep in mind that using the --no-package-lock flag may cause issues with package versions and dependencies, as it prevents the package-lock.json file from being updated with the correct versions of installed packages. It is generally recommended to use the package-lock.json file to ensure consistent and reproducible dependencies across different environments

CTRL+ C - stop emulators


# ChatGPTPrompt generator example

```
write me a detailed chatgpt prompt that generates business idea  based on a language, inerest, skills, tone, usecase, variants, creativityLevel, language
```

# Here are some possible prompt tones that could be used to prompt ChatGPT:

Formal: This tone is used for professional or academic writing and is characterized by formal language, proper grammar, and a neutral tone. It is appropriate for business reports, legal documents, and scholarly articles.

Informal: This tone is used for casual or everyday writing and is characterized by informal language, colloquial expressions, and a more relaxed tone. It is appropriate for emails, text messages, and social media posts.

Sarcastic: This tone is used to express irony or mock something, usually in a humorous way. It can be identified by the use of irony and verbal irony. It can be used to make a point in a witty way or to mock a situation or person.

Persuasive: This tone is used to convince or persuade the reader to take a specific action or believe a certain idea. It can be identified by the use of persuasive language and logical arguments. It is appropriate for speeches, advertisements, and sales pitches.

Inspirational: This tone is used to motivate or inspire the reader. It can be identified by the use of uplifting language and positive messages. It can be used in motivational speeches, self-help books, and motivational quotes.

Descriptive: This tone is used to describe something in detail, usually in a neutral and objective manner. It can be identified by the use of descriptive language and a focus on sensory details. It is appropriate for descriptive essays, travel writing, and product descriptions.

Narrative: This tone is used to tell a story and can be identified by the use of storytelling techniques and a chronological order of events. It is appropriate for novels, short stories, and memoirs.

Humorous: This tone is used to make the reader laugh and can be identified by the use of jokes, puns, and comedic language. It can be used in comedy scripts, stand-up comedy routines, and comedic essays.

Pessimistic: This tone is used to express negativity or doubt about something, it can be identified by the use of negative language and a lack of optimism. It can be used in critiques, reviews, and pessimistic quotes.

Optimistic: This tone is used to express positivity or hope about something, it can be identified by the use of positive language and a sense of optimism. It can be used in positive affirmations, optimistic quotes, and positive thinking.

Confident: This tone is characterized by a sense of certainty and conviction in the ideas or statements being made. It can be identified by the use of strong and assertive language. It's appropriate for leadership speeches, political speeches, and assertive statements.

Thoughtful: This tone is characterized by a reflective and contemplative attitude towards the topic at hand. It can be identified by the use of introspective language and a focus on deeper meaning. It's appropriate for reflective essays, journal entries, and contemplative quotes.

Exciting: This tone is characterized by a sense of energy and enthusiasm towards the topic at hand. It can be identified by the use of lively and energetic language and a focus on action. It's appropriate for adventure stories, travel blogs, and exciting quotes.

Professional: This tone is characterized by a sense of expertise and authority on the topic at hand. It can be identified by the use of technical language, specific terminology, and a focus on accuracy. It's appropriate for technical manuals, professional reports, and expert statements.

Casual: This tone is characterized by a relaxed and informal approach to the topic at hand. It can be identified by the use of informal language, colloquial expressions, and a focus on personal anecdotes or experiences. It's appropriate for casual conversations, casual blog posts, and personal stories.

Enthusiastic: This tone is characterized by a strong show of excitement, interest and energy towards the topic at hand. It can be identified by the use of energetic and positive language and a focus on the benefits or potential of the topic. It's appropriate for product reviews, sales pitches and motivational speeches.

Detailed: This tone is characterized by a focus on providing extensive and thorough information about the topic at hand. It can be identified by the use of specific examples, statistics and technical details. It's appropriate for scientific papers, research reports, and technical manuals.

Serious: This tone is characterized by a formal, solemn and serious approach to the topic at hand. It can be identified by the use of formal language, a lack of humor, and a focus on the gravity of the topic. It's appropriate for legal documents, speeches, and serious news articles.

Thought-provoking: This tone is characterized by an attempt to stimulate intellectual curiosity and challenge the reader's perspective on the topic. It can be identified by the use of rhetorical questions, complex ideas, and a focus on the broader implications of the topic. It's appropriate for philosophical essays, debates, and thought-provoking quotes.

Emotional: This tone is characterized by an attempt to elicit an emotional response from the reader. It can be identified by the use of descriptive language, vivid imagery, and a focus on personal experiences or feelings. It's appropriate for poetry, personal essays, and emotional quotes.

Romantic: This tone is characterized by an attempt to express feelings of love, affection, and tenderness. It can be identified by the use of descriptive language, imagery and a focus on the emotional connection between people. It's appropriate for love letters, romantic poetry and romantic quotes.

Poetic: This tone is characterized by an attempt to express ideas, emotions or experiences in an imaginative and creative way. It can be identified by the use of figurative language, imagery and a focus on rhythm, rhyme, and sound. It's appropriate for poetry, song lyrics and artistic quotes.

Philosophical: This tone is characterized by an attempt to explore the nature of reality, knowledge, values, reason, mind, and language. It can be identified by the use of complex ideas, abstract concepts and a focus on the underlying meaning of things. It's appropriate for philosophical essays, debates and philosophical quotes.

Informative: This tone is characterized by an attempt to provide information about a topic in a neutral, objective and informative way. It can be identified by the use of factual information, statistics and references. It's appropriate for news articles, educational materials and informative quotes.

Expository: This tone is characterized by an attempt to explain or clarify a topic in a logical and organized way. It can be identified by the use of definitions, examples, and evidence. It's appropriate for instructional manuals, how-to guides and explanatory quotes.

Explanatory: This tone is characterized by an attempt to provide a detailed and comprehensive explanation of a topic. It can be identified by the use of technical language, examples and evidence. It's appropriate for scientific papers, research reports and technical manuals.

Persuasive: This tone is characterized by an attempt to influence the opinions or actions of the reader. It can be identified by the use of logical arguments, evidence

```
This is a comprehensive list of various possible prompt tones that could be used to prompt ChatGPT. However, there may be more tones that can be used depending on your specific use case or application, these are just examples and not an exhaustive list.

Please note that you can also combine or mix different tones together to create a more nuanced and complex prompt. Also, it's important to note that the tone you choose will depend on the context and purpose of your text generation task. 
```

# Future features

Personalization: One way to implement personalization could be to use machine learning algorithms to analyze the user's writing style and preferences. For example, the AI assistant could learn the user's preferred writing tone (formal or casual), sentence structure, and choice of words. Once the AI assistant has learned the user's writing style, it could provide more personalized suggestions and corrections.

Emotion detection and language generation: This feature could be implemented using natural language processing (NLP) techniques to analyze the emotional tone of a piece of text. Once the tone has been determined, the AI assistant could suggest words and phrases that match the desired tone. For example, if the text is determined to be sad, the AI assistant could suggest words and phrases that are more upbeat to improve the overall tone.

Multi-language support: This feature could be implemented using machine translation algorithms to translate text from one language to another in real-time. For example, the AI assistant could translate a piece of text from English to Spanish or vice versa.

Sentiment analysis: This feature could be implemented using NLP techniques to analyze the overall sentiment of a piece of text. The AI assistant could then provide feedback on how to improve the sentiment of the text, such as suggesting words or phrases that are more positive.

Integration with other tools: This feature could be implemented by integrating the AI assistant with other productivity tools such as calendars, task managers, and project management software. This would allow the AI assistant to provide context-aware suggestions and corrections.

Content generation: This feature could be implemented using GPT based models to generate original content based on specific topics or prompts.

Collaborative Writing: This feature could be implemented by allowing multiple users to work on a document together in real-time, with the AI assistant providing suggestions and corrections for each user.

Audio-based dictation and transcription: This feature could be implemented using automatic speech recognition (ASR) and natural language understanding (NLU) technologies to transcribe spoken words into written text and vice versa.

Summarization: This feature could be implemented by using NLP algorithms to extract key points from a piece of text and condense them into a shorter summary.

Real-time feedback and error correction: This feature could be implemented by using NLP algorithms to identify grammar, spelling, and style errors as the user writes and providing feedback in real-time.



# Business
It's possible that an AI writing assistant could be a viable business in the Kenyan market, but it would depend on a number of factors such as the target market, the quality of the application, and the pricing model.

Kenya is a developing country with a growing economy and a relatively high penetration of technology, especially mobile phones and internet. There is a large pool of talented people in Kenya, who can benefit from AI-based tools like writing assistant. Additionally, Kenya has a large pool of young people who are proficient in English and are in need of tools that can improve their writing skills.

However, there are a few things to consider:

The Kenyan market for AI writing assistant might be relatively small compared to other countries, so it's important to target the right market segments and price the product accordingly.
It's also important to consider the competition in the Kenyan market and differentiate your product from others on the market.
There may be cultural and linguistic barriers to adoption of an AI writing assistant in Kenya, so it's important to consider local market factors when developing the product.
It would be a good idea to conduct market research and speak with industry experts to get a better understanding of the viability of an AI writing assistant in the Kenyan market, and to validate your business model.



# Icon Attributions (https://www.flaticon.com/)
TODO: provide attributions for the assets in use to:
<a href="https://www.flaticon.com/free-icons/cover-letter" title="cover letter icons">Cover letter icons created by Flat Icons - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/grammar" title="grammar icons">Grammar icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/interview" title="interview icons">Interview icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/job-description" title="job description icons">Job description icons created by surang - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Smashicons - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/meeting" title="meeting icons">Meeting icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Blog icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/briefing" title="briefing icons">Briefing icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/call-to-action" title="call to action icons">Call to action icons created by Flat Icons - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/portal" title="portal icons">Portal icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/send-mail" title="send mail icons">Send mail icons created by Md Tanvirul Haque - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Pixel perfect - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/speak" title="speak icons">Speak icons created by Mayor Icons - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/personalization" title="personalization icons">Personalization icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/seo-and-web" title="seo and web icons">Seo and web icons created by paonkz - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/typing" title="typing icons">Typing icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/data-analysis" title="data analysis icons">Data analysis icons created by orvipixel - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/landing-page" title="landing page icons">Landing page icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/description" title="description icons">Description icons created by phatplus - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/content-copy" title="content copy icons">Content copy icons created by juicy_fish - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/letter" title="letter icons">Letter icons created by srip - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/newsletter" title="newsletter icons">Newsletter icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/copywriting" title="copywriting icons">Copywriting icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/caption" title="caption icons">Caption icons created by Eucalyp - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by Freepik - Flaticon</a>
# Target
Based on my research, the following professionals in Kenya could potentially benefit from an AI writing tool:

Content creators: Including bloggers, journalists, and copywriters who need to produce high-quality content quickly and efficiently.

Marketing professionals: Including social media managers, email marketers, and content marketers who need to create engaging marketing materials on a regular basis.

Software developers: Including web developers, mobile developers, and software engineers who need to generate code documentation, bug reports, and release notes.

Business owners: Including entrepreneurs and small business owners who need to create professional business documents such as reports, proposals, and contracts.

Legal professionals: Including lawyers, paralegals, and legal secretaries who need to generate legal documents and contracts.

Educators: Including teachers, lecturers, and trainers who need to create educational materials and assessments.

# Features 

Here's a general list of categories that can be added in the navigation bar for an AI writing tool:

Home: A landing page that provides an overview of the tool and its features.

Use Cases: A section detailing various use cases for the tool, such as business proposals, financial reports, and bug reports.

Features: A section highlighting the key features of the tool, such as custom templates, real-time updates, and collaborative editing.

Pricing: A section detailing the pricing plans available for the tool, including free and paid options.

Integration: A section outlining the integration options for the tool, such as integration with other software or services.

Support: A section with resources for getting help with the tool, including a knowledge base, forums, and contact information.

About: A section with information about the company or organization behind the tool, including mission, values, and team.

Note: This list is a general guide and the specific categories added to the navigation bar will depend on the needs and requirements of the tool.


[]

# Deployed hos 

[https://andika-16cf6.web.app](https://andika-16cf6.web.app)

# test 

add test 



# [Commitzen](https://medium.com/@linzhao/commitizen-setup-2021-a88d9cd7c46e)

For conventional commits 


#SEMVER

This example of SemVer tells you that this is the fourth major release. It has 7 minor versions with new features. It is also the sixth patch in this minor version (six versions of bug fixes). Keep in mind, that SemVer starts at 0.1.0. Not at 0.0.1, as you might assume. The reason is that there were no bug fixes yet as would the number 0.0.1 suggest. We have to start with a set of features.

The Three Phases of SemVer:

Initial Development
Major version zero (0.y.z.) is for initial product development.
The public API is not stable and anything may change during this phase.
Keeping major version at zero lets everyone know that the software is not production-ready yet.
Pre-release
A lot of tests and code changes are done during this product version. A pre-release version is for testing that everything is ok and ready to release.
This version is still not production-ready.
Add a hyphen and identifier at the end of the version number. For example, a pre-release for version 1.0.0 could be 1.0.0-alpha.1. When you need another build, it becomes 1.0.0-alpha.2, and so on.
Production
When the public API is stable and the product is ready, you can release the major software version (1.y.z).
Version numbers in this phase are equal to releases.
Why You Might Want the Semantic Versioning
Versioning the software ensures you that every team member or user can keep track of what has been changed and when.
SemVer helps to explain what type of changes were made. It also informs users about possible software updates.
SemVer lets you know which version of a product is no longer backwards compatible.
Problems the Semantic Versioning Solves
Demotivated team
Meaningless work
Unsuccessful product
Unnecessary functions
Increased cost
Bad product-market fit
Unhappy client
Toxic team culture
How to Implement the Semantic Versioning
To use SemVer efficiently, follow these steps:

Look through the commits since the last release and decide if this will be a major, a minor or a patch release. Add a new appropriate version number.
Tag your releases. You can use, for example, GitHub.
Track all of the changes in a Changelog (a file with a list of changes) so the users know what is the difference between the product versions.
Common Pitfalls of the Semantic Versioning
Weak version management neglects users.
Users judge product value based on the version number.
The stakeholder asks for a specific version number based on marketing choices or client’s preferences.
Too many major versions are being released in a short time period. It discourages the users from adopting new versions. If you are required to make breaking changes, you need to thoroughly think through the impact of those changes. Plan the changes ahead with deprecation notices.

# Github Actions

[https://nx.dev/recipes/ci/monorepo-ci-github-actions](https://nx.dev/recipes/ci/monorepo-ci-github-actions)

# SEMANTIC RELEASE Docs
https://svdoscience.com/2020-10-31/versioning-with-semantic-release


# Generate Library 

```shell
nx g @nrwl/workspace:library pages --import-path=@andika/pages  --dry-run 
```



this.openSnackBar('Information', 'Additional details', 'OK', 'center', 'top', 'info-snackbar');



Analogous Palette:

bg-yellow-500 (#F59E0B)
bg-yellow-400 (#FBBF24)
bg-yellow-300 (#FCD34D)
Complementary Palette:

bg-yellow-500 (#F59E0B)
bg-purple-500 (#9333EA)
bg-purple-400 (#A855F7)
Monochromatic Palette:

bg-yellow-500 (#F59E0B)
bg-yellow-400 (#FBBF24)
bg-yellow-300 (#FCD34D)
Triadic Palette:

bg-yellow-500 (#F59E0B)
bg-blue-500 (#3B82F6)
bg-red-500 (#EF4444)
Tetradic Palette:

bg-yellow-500 (#F59E0B)
bg-blue-500 (#3B82F6)
bg-purple-500 (#9333EA)
bg-red-500 (#EF4444)

To use the suggested color palette in your AI writing tool theme, you can apply the colors to various components and typography elements. Here are some suggestions:

Background Color:

Set the background color of the main content area or editor to bg-yellow-500 (#F59E0B) to maintain consistency with the primary color.
Text Color:

Use a contrasting text color for readability. For example, you can use text-gray-900 (#111827) for dark text on the yellow background.
Button Styling:

Apply the bg-yellow-500 (#F59E0B) as the background color for buttons to create a cohesive look.
Use a contrasting text color, such as text-white (#FFFFFF), for button labels.
Accent Color:

Choose one of the complementary or analogous colors from the palette to use as an accent color for interactive elements, such as links or highlighted text.
For example, you can use bg-purple-500 (#9333EA) as an accent color for links.
Typography:

Adjust the text colors for headings and body text to ensure readability on the yellow background.
Consider using text-gray-900 (#111827) for headings and text-gray-700 (#4B5563) for regular body text.
Error/Success Messages:

Utilize a different color, such as bg-red-500 (#EF4444) for error messages or bg-green-500 (#10B981) for success messages, to convey feedback or alerts to the user.
Remember to maintain a consistent visual hierarchy and ensure that the color choices enhance the user experience by providing clear differentiation between different elements. These suggestions provide a starting point, and you can further customize the color palette based on your specific design preferences and requirements.






Regenerate response