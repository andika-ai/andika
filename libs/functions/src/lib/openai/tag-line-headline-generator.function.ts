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


const generateTagLineHeadline = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { keyPoints, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate a tagline and headline based on the following key points ${keyPoints}, in the language of ${language}, with a tone that is ${tone}.
                The use case is to ${usecase}. Generate ${variants} variants of the tagline and headline, with a creativity level of ${creativityLevel}.
                Make sure to include key words and phrases that accurately reflect the brand or product being promoted.
                Also, make sure that the tagline and headline are concise and easily understandable by the target audience. Use persuasive language to create a sense of urgency and inspire the audience to take action.
                Lastly, ensure that the tagline and headline are unique and memorable in order to make a lasting impression.`
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
                data: completion.data
            })
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    })

};

exports.generateTagLineHeadline  = functions.https.onRequest(generateTagLineHeadline);