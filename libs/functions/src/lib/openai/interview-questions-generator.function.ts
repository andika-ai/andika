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


const generateInterviewQuestions = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { productName, productDescription, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a set of interview questions for an interviewee with the bio of [insert Interviewee bio], for an interview context of [insert Interview context (e.g. job interview, research interview)].
                        The language should be [insert language], with a tone that is [insert tone (e.g. professional, friendly, curious)].
                        The use case is to [insert use case (e.g. assess the candidate's qualifications, gather information for research)].
                        The questions should be written in [insert number] variants, with a creativity level of [insert level (e.g. high, medium, low)].
                        Make sure to include a mix of open-ended and closed-ended questions, and to tailor the questions to the specific interviewee and context.
                        Also, include behavioral based questions to understand the interviewee's past experience and how they handle different situations.
                        Lastly, include a few creative and unique questions to understand the interviewee's thinking process and personality.`
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

exports.generateInterviewQuestions  = functions.https.onRequest(generateInterviewQuestions);