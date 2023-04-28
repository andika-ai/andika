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


const summarizeText = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { text, tone, variants, creativityLevel, language  } = req.body;
        if(!text) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Please summarize the given text in ${language}, with a tone that is ${tone} and by identifying the main ideas and key points.\n
                        Generate ${variants} variants of the summarized text\n
                        The creativity level should be ${creativityLevel}\n
                        The summary should be concise and convey the overall message of the text.\n
                        In addition, please include any important details or information that is relevant to the topic.\n
                        Also, please indicate the text length reduction rate you used while summarizing the text.\n
                        Finally, please provide a title that accurately represents the content of the summarized text.`
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

exports.summarizeText = functions.https.onRequest(summarizeText);