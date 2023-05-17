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
        const { channelDescription, tone, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
            `Please generate a YouTube channel description for a channel with a purpose <em>${channelDescription}</em>, in the language of <em>${language}</em>, with a tone that is <em>${tone}</em>.
            Generate <em>${variants}</em> variants of the channel description, with a creativity level of <em>${creativityLevel}</em>.
            Make sure to include a detailed and clear overview of the channel, including the type of content, target audience, and unique selling points.
            Also, include a call-to-action, encouraging viewers to subscribe to the channel. Use appropriate keywords to optimize the channel description for search engines and make sure to align the tone with the channel's purpose and target audience.
            
            Please format your response as an HTML string with the following HTML tags:
            
            <h2>Your Channel Name</h2>
            <p>A detailed and clear overview of the channel, including the type of content, target audience, and unique selling points.</p>
            <ul>
                <li>Content type 1</li>
                <li>Content type 2</li>
                <li>Content type 3</li>
                <!-- Add more bullet points for additional content types as needed -->
            </ul>
            <p>Include a call-to-action, encouraging viewers to subscribe to the channel.</p>
            <p>Use appropriate keywords to optimize the channel description for search engines.</p>
            
            If the number of variants is greater than one, please provide a separate HTML string for each variant, following the same formatting guidelines outlined above.
            
            Please note that your response must be in the form of an HTML string, as instructed above.
            
            Thank you!
            `
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

exports.generateYTubeChannelDescription  = functions.https.onRequest(generateYTubeChannelDescription );