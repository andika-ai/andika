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


const generateCoverLetter = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { jobSkills, jobRole, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a personalized and detailed cover letter for a job role of [insert job role]${jobRole}, highlighting your specific skills, qualifications, and achievements that match the requirements of the position.
                        The language should be [insert language]${language}, with a tone that is [insert tone (e.g. professional, enthusiastic, confident)]]${tone}.
                        The use case is to apply for [insert use case (e.g. a job opening, an internship)]${usecase}.
                        The cover letter should be written in [insert number]${variants} variants, with a creativity level of [insert level (e.g. high, medium, low)]]${creativityLevel}.
                        Make sure to tailor the letter to the specific job you are applying for, and to highlight your relevant skills and experience.
                        Show enthusiasm for the company and position, and express why you would be a great fit for the role [insert job skills]${jobSkills}.
                        Also, include your specific achievements that are relevant to the role you are applying to, this could be in form of numbers, statistics or real-life examples.
                        Lastly, end the letter with a call-to-action, encouraging the hiring manager to contact you for an interview.`
        
        
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

exports.generateCoverLetter = functions.https.onRequest(generateCoverLetter);