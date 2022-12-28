import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from '@andika/config';
import { app } from '@andika/config';
import * as functions from 'firebase-functions';



const configuration = new Configuration({
    apiKey: "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",
});

const openAI = new OpenAIApi(configuration);

const summarizeText = async (req: any, res: Response) => {
    const { text } = req.body;

    console.log(text);
    try {
        const completion = await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: `${text}\n\nTl;dr`,
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        });
        res.status(200).send({
            status: 'success',
            message: 'results from chat gpt',
            data: completion.data.choices[0].text
        })
    } catch (error: any) {
        res.status(500).json(error.message)
    }
};

exports.summarizeText = functions.https.onRequest(summarizeText);