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


const generateYTubeIdea  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { targetKeyWords, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
                `Generate a YouTube video idea based on the keywords of ${targetKeyWords}, in the language of ${language}, with a tone that is ${tone}. The use case is to ${usecase}. Generate ${variants} variants of video ideas, with a creativity level of ${creativityLevel}. Make sure to come up with ideas that are relevant to the keywords and that will appeal to the target audience. Also, consider the current trends and popular topics in the industry related to the keywords. Additionally, make sure to include a clear and compelling hook in the video title and a well-defined structure for the video content. Lastly, think about how the video will drive engagement and generate conversions (if applicable)`
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

exports.generateYTubeIdea  = functions.https.onRequest(generateYTubeIdea);