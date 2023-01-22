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


const keywordsExtractor = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { text, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Extract relevant keywords from the text of [insert text], in the language of [insert language], with a focus on [insert use case (e.g. SEO optimization, text analysis)].
                        The keywords should be relevant to the tone and context of the text, which is [insert tone (e.g. formal, casual, technical)].
                        Generate [insert number] variants of keywords, with a creativity level of [insert level (e.g. high, medium, low)].
                        Make sure to extract keywords that are specific and relevant to the text, and that can be used to effectively summarize or categorize the content.
                        Also, extract long-tail keywords that are more specific and less common, but still relevant to the text.
                        You can use tools like keyword research tools or algorithms to extract the keywords.`
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

exports.keywordsExtractor= functions.https.onRequest(keywordsExtractor);