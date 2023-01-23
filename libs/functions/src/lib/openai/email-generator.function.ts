import { Configuration, OpenAIApi } from 'openai';
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


const generateEmail = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { subject, recipient, sender, date, purpose, additionalInfo, cc, bcc ,tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Please generate an email with the following information and format the output as an HTML string with proper styling:\n
                    Subject: ${subject}\n
                    Recipient: ${recipient}\n
                    Sender: ${sender}\n
                    Date: ${date}\n
                    Purpose: ${purpose}\n
                    Additional Information: ${additionalInfo}
                    Cc: ${cc}\n
                    Bcc: ${bcc}
        
        `
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

exports.generateEmail= functions.https.onRequest(generateEmail);