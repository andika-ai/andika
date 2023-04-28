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


const generateTestimonialAndReview = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { productName, reviewTitle, tone, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate a testimonial or review  for ${productName} with a review title of ${reviewTitle}, in the language of ${language}, with a tone that is ${tone}.
                Generate ${variants} variants of the testimonial or review, with a creativity level of ${creativityLevel}.
                Make sure to include specific details and examples about the product or service being reviewed.
                Also, highlight the key benefits and features of the product or service that you found useful.
                Use persuasive language to encourage others to try the product or service. Lastly, include your overall rating and recommendation for the product or service.`
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
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

exports.generateTestimonialAndReview  = functions.https.onRequest(generateTestimonialAndReview);