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


const generateYTubeVideoDescription  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { targetKeyWords, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        `Generate a YouTube video description for a video titled [insert video title], in the language of [insert language], with a tone that is [insert tone (e.g. informative, engaging, exciting)].
        The use case is to [insert use case (e.g. provide information about the video, increase engagement and viewership)].
        The video description should be written in [insert number] variants, with a creativity level of [insert level (e.g. high, medium, low)].
        Make sure to include a brief summary of the video content, highlighting the key points and main takeaways.
        Also, include relevant keywords and hashtags to optimize the video for search engines.
        Use persuasive language to encourage viewers to watch the video and to subscribe to your channel.
        Lastly, include a call-to-action, such as asking viewers to leave a comment or to check out a related video or website.`
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

exports.generateYTubeVideoDescription  = functions.https.onRequest(generateYTubeVideoDescription);