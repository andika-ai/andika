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
        if(!text) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt =`Please write a blog section for the given topic in [language].\n
                        The tone of the blog section should be [specific tone, e.g. informative, persuasive, etc.].\n
                        This blog section will be used for [specific use case, e.g. marketing, educating, etc.].\n
                        Please provide [number] variations of the blog section to choose from.\n
                        The blog section should be at least [number of words] and should include information on the topic, any relevant statistics or data, personal anecdotes, and examples.\n
                        It should also include a call-to-action that is relevant to the use case.\n
                        In terms of creativity, please aim for a level of [number, e.g. 3 out of 5] to ensure that the blog section is unique and stands out.\n
                        Additionally, please provide a brief summary of the topic and indicate the target audience of the text, so that the blog section can be tailored accordingly.`
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                // n: number of variations
            });
            res.status(200).send({
                status: 'success',
                message: 'results from chat gpt',
                data: completion.data.choices[0].text
            })
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    })

};

exports.generateBlogSection = functions.https.onRequest(generateBlogSection);