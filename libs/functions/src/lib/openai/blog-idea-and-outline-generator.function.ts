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


const generateBlogIdeaAndOutline  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { keyword, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
        const prompt =`Generate a blog idea and outline based on the primary keyword of ${keyword},
        in the language of ${language}, with a ${tone} that is 
        [insert tone ${tone}. The use case is to ${usecase}.
        Generate ${variants} variants of the blog idea and outline,
        with a creativity level of ${creativityLevel}. 
        Make sure to include a clear and compelling topic, with well-defined subtopics that support the main idea.
        Also, pay attention to the structure, ensuring that the blog post has an introduction, body, and conclusion.
        Use descriptive language and imagery to bring the blog idea to life and to create an emotional connection with the audience. 
        ensure that the blog aligns with the primary keyword and the chosen tone, and that it evokes the desired emotions in the audience.
        Return the blog idea in HTML format.
        `
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 50,
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

exports.generateBlogIdeaAndOutline = functions.https.onRequest(generateBlogIdeaAndOutline);