import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from '@andika/config';
import { app } from '@andika/config';
import * as functions from 'firebase-functions';


const configuration = new Configuration({
    apiKey: "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",
});

const openAI = new OpenAIApi(configuration);

const taglineGenerator = async (req: Request, res: Response) => {
    // Extract the parameters from the request body
    const { description, tone, numVariants, creativity, language } = req.body;

    try {
        const completion = await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate ${numVariants} ${tone} headlines for the following description: ${description}, ${language}`,
            temperature: creativity,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            //   stop: 100 // Only generate 100 tokens in the response to optimize performance
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

exports.tagLineGenerator = functions.https.onRequest(taglineGenerator);