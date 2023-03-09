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


const generateYTubeChannelDescription  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { channelDescription, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate a YouTube channel description for a channel with a purpose ${channelDescription}, in the language of ${language}, with a tone that is ${tone}.
                Generate ${variants} variants of the channel description, with a creativity level of ${creativityLevel}.
                The use case is to [insert use case ${usecase}.
                Make sure to include a detailed and clear overview of the channel, including the type of content, target audience, and unique selling points.
                Also, include a call-to-action, encouraging viewers to subscribe to the channel. Use appropriate keywords to optimize the channel description for search engines and make sure to align the tone with the channel's purpose and target audience.`
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

exports.generateYTubeChannelDescription  = functions.https.onRequest(generateYTubeChannelDescription );