import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from '@andika/config';
import { app } from '@andika/config';
import * as functions from 'firebase-functions';
import * as corsModule from 'cors';

const cors  = corsModule({origin: true})
const configuration = new Configuration({
    apiKey: "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",
});

const openAI = new OpenAIApi(configuration);


const generateBlogSection = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { text, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
        // TODO: Based on subscription the number of words is determined.
        const number_of_words = 100;
        const prompt =`Please write a blog section for the given topic in ${text}.
                        The blog should be in ${language} language.
                        The tone of the blog section should be ${tone}.
                        This blog section will be used for ${usecase}.
                        Please provide ${variants} variations of the blog section to choose from.
                        The blog section should be at ${number_of_words} and should include information on the topic, any relevant statistics or data, personal anecdotes, and examples.
                        It should also include a call-to-action that is relevant to the use case.
                        In terms of creativity, please aim for a level of ${creativityLevel} to ensure that the blog section is unique and stands out.
                        Additionally, please provide a brief summary of the topic and indicate the target audience of the text, so that the blog section can be tailored accordingly.
                        Return the blog idea in HTML format, with the following styles applied:\n
                            - Headings: Use h1 for main headings with a font-family of 'Montserrat', sans-serif, font-size of 36px, font-weight of bold, text-transform of uppercase, and letter-spacing of 2px. Use h2 for subheadings with a font-family of 'Open Sans', sans-serif, font-size of 24px, font-weight of bold, and text-transform of capitalize.
                            - Paragraphs: Style the paragraphs with a font-family of 'Open Sans', sans-serif, font-size of 16px, line-height of 1.5, and margin of 20px 0.
                            - Text styling: Style the bold text with font-weight of bold and color of #333. Style the italic text with font-style of italic and color of #333. Style the underlined text with text-decoration of underline and color of #333.
                        `
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            });
            res.status(200).send({
                status: 'success',
                message: 'results from chat gpt',
                data: completion.data
            })
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    })

};

exports.generateBlogSection = functions.https.onRequest(generateBlogSection);