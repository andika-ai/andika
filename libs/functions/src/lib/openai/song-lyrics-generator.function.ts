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


const generateSongLyric = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { songIdea, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        // `Please paraphrase the following text:\n\n${text}\n\n
                `Generate song lyrics based on the following idea: [insert song idea], in the language of [insert language], with a tone that is [insert tone (e.g. romantic, upbeat, nostalgic)]. The use case is to [insert use case (e.g. entertain, express emotions, tell a story)]. Generate [insert number] variants of the song lyrics, with a creativity level of [insert level (e.g. high, medium, low)]. Make sure to include a clear and compelling narrative, with well-crafted verses, chorus, and a memorable hook. Also, pay attention to the rhyme scheme and meter, ensuring that the lyrics flow smoothly and are easy to sing along. Use descriptive language and imagery to bring the song idea to life and to create an emotional connection with the audience. Lastly, make sure that the lyrics align with the chosen tone and evoke the desired emotions.`
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

exports.generateSongLyric  = functions.https.onRequest(generateSongLyric);