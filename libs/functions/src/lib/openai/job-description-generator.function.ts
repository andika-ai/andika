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


const generateJobDescription = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { jobRole, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a job description for a role of ${jobRole}, in the language of${language}, with a tone that is ${tone}.
                        The use case is to ${usecase}.
                        The job description should be written in ${variants} variants, with a creativity level of ${creativityLevel}.
                        Make sure to include a detailed and clear overview of the role, including the responsibilities, qualifications, and requirements for the position.
                        Also, include information about the company culture and benefits to give an idea about the working environment to the potential candidates.
                        Use appropriate keywords to optimize the job description for search engines and include a clear call-to-action to apply for the role.`
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

exports.generateJobDescription = functions.https.onRequest(generateJobDescription);