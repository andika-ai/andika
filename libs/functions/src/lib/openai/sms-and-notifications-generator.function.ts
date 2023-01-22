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


const generateSmsAndNotification = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { context, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate SMS and push notifications based on the following context: [insert context], in the language of [insert language], with a tone that is [insert tone (e.g. friendly, urgent, personalized)]. The use case is to [insert use case (e.g. increase engagement, promote a new feature, remind of an upcoming event)]. Generate [insert number] variants of the SMS and notifications, with a creativity level of [insert level (e.g. high, medium, low)]. Make sure to include a clear and concise message that is relevant to the user and the current context. Also, pay attention to the timing and frequency of the SMS and notifications, ensuring that they are not too frequent or disruptive. Use persuasive language and images to grab the user's attention and create a sense of urgency. Additionally, make sure to consider the character limit of SMS and to provide a clear call-to-action to encourage the user to take action. Lastly, make sure that the SMS and notifications align with the user's preferences and opt-in status.`
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

exports.generateSmsAndNotification  = functions.https.onRequest(generateSmsAndNotification);