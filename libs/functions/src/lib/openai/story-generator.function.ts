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


const generateStory = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { storyIdea, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
                `Generate a story based on the following idea: ${storyIdea}, in the language of ${language}, with a tone that is ${tone}.
                The use case is to ${usecase}. Generate ${variants} variants of the story, with a creativity level of ${creativityLevel}.
                Make sure to include a clear and compelling plot, with well-developed characters and a satisfying resolution.
                Also, pay attention to the pacing, ensuring that the story maintains a balance of tension and release.
                Use descriptive language to create vivid imagery and bring the story to life.
                Lastly, ensure that the story aligns with the chosen tone and evokes the desired emotions in the audience.`
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

exports.generateStory  = functions.https.onRequest(generateStory);