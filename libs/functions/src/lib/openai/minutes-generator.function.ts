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


/**
Example:
"Please generate a comprehensive and accurate summary of the "Sacco Business Strategy" meeting held on January 23, 2023 at 2:00 PM in English with a Formal tone. Please include the following variants in the summary: Action Items, Attendees, Agenda, Decisions, Discussion Points. Set the creativity level to Medium and make sure the summary is grammatically correct, coherent, and coherent with the tone of the meeting."

Note: The above prompt is an example and depending on the requirements of the application that is using it, you may need to add or remove some of the variables accordingly.

Language: (e.g. English, Swahili)
Tone: (e.g. Formal, Informal)
Usecase: (e.g. Board Meeting, Staff Meeting)
Variants: (e.g. Action Items, Attendees, Agenda, Decisions, Discussion Points)
Creativity Level: (e.g. Low, Medium, High)
Date and Time of the meeting
Meeting Title

*/
const generateMinutes = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { description, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `"Please generate a comprehensive and accurate summary of the (Meeting Title) meeting held on (Date and Time of the meeting) in (Language) with a (Tone) tone. Please include the following variants in the summary: (Variants). Set the creativity level to (Creativity Level) and make sure the summary is grammatically correct, coherent, and coherent with the tone of the meeting."`
        
        
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

exports.generateMinutes = functions.https.onRequest(generateMinutes);