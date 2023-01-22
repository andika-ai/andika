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


const generateGoogleSearchAd = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { subject, recipient, sender, date, purpose, additionalInfo, cc, bcc ,tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a Google search ad for a product named [insert product name], described as [insert product description].
                        The language should be [insert language], with a tone that is [insert tone (e.g. persuasive, informative, exciting)].
                        The use case is to promote [insert use case (e.g. a new product launch, a sale, a limited-time offer)].
                        The ad should be written in [insert number] variants, with a creativity level of [insert level (e.g. high, medium, low)].
                        Make sure to include the product name and a compelling headline that grabs the attention of the audience.
                        Use persuasive language, images and videos to grab the audience's attention and create a sense of urgency.
                        Use appropriate keywords to make the ad rank higher in search results.
                        Also, include a clear call-to-action, trackable link and structured snippet to encourage conversions.
                        Also, include ad extension like sitelink, call, location and review extension to make the ad more informative and user-friendly.`
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

exports.generateGoogleSearchAd = functions.https.onRequest(generateGoogleSearchAd);