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


const generateReplyReview  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { product, message, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Please provide a detailed review of the ${product} in ${language} with the following message ${message}.\n
                        The review should be in a ${tone} tone\n
                        generate the review in ${variants} variants\n
                        This is for ${usecase} usecase\n
                        The review have creativity level of ${creativityLevel}\n
                        Include information about the design, functionality, ease of use,\n
                        and overall satisfaction with the product or service. If applicable,\n
                        also mention any additional features or benefits that you have discovered while using it.\n
                        Additionally, please compare this product or service to similar ones on the market and indicate how it compares in terms of value for money.\n
                        Finally, please provide a rating on a scale of 1-5, with 5 being the best.`
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

exports.generateReplyReview  = functions.https.onRequest(generateReplyReview);