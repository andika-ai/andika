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


const generateBusinessIdea = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { text, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!text) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt =`Please generate [number] unique business ideas in [language] that align with the interests, skills and tone specified.\n
                        The idea should be suitable for [specific use case, e.g. a startup, a small business, a side hustle, etc.].
                        The tone of the business idea should be [specific tone, e.g. innovative, sustainable, impactful, etc.] .\n
                        The idea should be based on your interests [specific interests] and skills [specific skills].
                        Please provide [number] variations of the business idea, each with a different angle or emphasis.
                        In terms of creativity, please aim for a level of [number, e.g. 3 out of 5] to ensure that the ideas are unique and have potential for success.
                        Additionally, please include a brief explanation for each idea, describing how it aligns with the interests and skills specified, and its potential for profitability.
                        Finally, please indicate the target market and target audience for each idea, so that it can be tailored accordingly and it should be easy to implement and manage.`
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

exports.generateBusinessIdea= functions.https.onRequest(generateBusinessIdea);