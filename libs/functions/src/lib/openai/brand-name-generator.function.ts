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


const generateBrandName = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { description, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt =`Please generate [number] brand names in [language] that align with the tone and message of [brand description].\n
                        The brand names should be suitable for [specific use case, e.g. a new product line, a rebranding, etc.].\n
                        In terms of tone, the brand name should be [specific tone, e.g. modern, playful, professional, etc.].\n
                        Please make sure that the brand name is unique and not already in use by another company. Additionally, please provide a brief explanation for each brand name, describing how it aligns with the [brand description].\n
                        In terms of creativity, please aim for a level of [number, e.g. 3 out of 5] to ensure that the brand names are unique and memorable.\n
                        Please make sure that the brand name should be easy to pronounce and spell and it should be easy to remember and easy to be registered as a domain name.`
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

exports.generateBrandName = functions.https.onRequest(generateBrandName);