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


const generateSeoMetaTitle = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { targetKeyWords, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate an SEO meta title based on the target keywords of [insert target keywords], in the language of [insert language], with a tone that is [insert tone (e.g. informative, compelling, memorable)]. The use case is to [insert use case (e.g. optimize for search engines, grab attention, increase click-through rate)]. Generate [insert number] variants of the meta title, with a creativity level of [insert level (e.g. high, medium, low)]. Make sure to include the target keywords in the title and to make it compelling and informative. Also, pay attention to the character limit, as the title should be no more than 60-70 characters. Use persuasive language to create a sense of urgency and inspire users to click on the link. Lastly, ensure that the meta title aligns with the content of the page and accurately reflects the subject of the page.`
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

exports.generateSeoMetaTitle  = functions.https.onRequest(generateSeoMetaTitle);