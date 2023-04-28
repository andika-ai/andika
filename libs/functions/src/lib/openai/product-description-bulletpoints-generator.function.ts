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


const generateProductDescriptionWithBulletPoints= (req: any, res: Response) => {
    cors(req,res, async() => {
        const { productName, features, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a product description for ${productName} with ${tone} tone. The product is designed for ${usecase} and comes in ${variants}. The description should be written at a ${creativityLevel} level and in ${language}. Please list the features of the product using bullet points. Here's an example:

        Feature 1: ${features}
        Feature 2: ${features}
        Feature 3: ${features}
        Please provide at least three features to include in the description.`
        
        
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

exports.generateProductDescriptionWithBulletPoints = functions.https.onRequest(generateProductDescriptionWithBulletPoints);