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


const generateCopywritingFrameworkAIDA = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { description, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a copywriting framework using AIDA (Attention, Interest, Desire, Action) for a product or brand, described as [insert product or brand description].
                        The language should be [insert language], with a tone that is [insert tone (e.g. persuasive, informative, conversational)].
                        The use case is [insert use case (e.g. promoting a new product launch, increasing brand awareness)].
                        The framework should be written in [insert number] variants, with a creativity level of [insert level (e.g. high, medium, low)].
                        Make sure to grab the attention of the audience, create interest in the product or brand, build desire for the product or brand and finally create a sense of urgency to take action.`
        
        
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

exports.generateCopywritingFrameworkAIDA= functions.https.onRequest(generateCopywritingFrameworkAIDA);