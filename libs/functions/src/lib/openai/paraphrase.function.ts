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


const paraphraseText = (req: any, res: Response) => {
    cors(req,res, async() => {
        // const { text, tone, usecase, variants, creativityLevel, language  } = req.body;
        const { text,  language  } = req.body;
        if(!text) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=`Please paraphrase the following text:\n\n${text}\n\n
                The paraphrased version should accurately convey the same meaning as the original, but should not simply copy the wording or structure.\n\n
                Make sure to properly cite the original text and include all of the key points and supporting details.\n
                The text should be written in standard language ${language}\n
                Consider the intended audience and purpose of the text when paraphrasing, and tailor the language and style accordingly.`
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

exports.paraphraseText  = functions.https.onRequest(paraphraseText);