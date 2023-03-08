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
 * It is also possible to specify different citation styles such as MLA, Chicago, Harvard, IEEE, etc. by replacing APA with the desired citation style in the prompt.

Note that the above prompt is an example, it is possible to modify it according to the source you want to cite, and the citation style you want to use.
 * @param req 
 * @param res 
 */
const generateBusinessIdeaPitch = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { businessIdea, author, tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Please generate a ${businessIdea} business idea pitches in ${language} that align with the tone and message of ${author}.
                        The pitch should be suitable for ${usecase}.
                        The tone of the pitch should be [specific tone, e.g. persuasive, confident, enthusiastic, etc.]${tone}. The pitch should clearly and concisely explain the business idea and its potential for success, highlighting its unique features and benefits.
                        Please provide ${variants} variations of the pitch, each with a different angle or emphasis on the business idea.
                        In terms of creativity, please aim for a level of ${creativityLevel} to ensure that the pitches are unique and engaging.
                        Additionally, please include any relevant statistics or data that support the viability of the business idea, and a clear call-to-action for the audience.
                        Finally, please indicate the target audience for the pitch, so that it can be tailored accordingly, and it should be easy to understand by the general public and not just by the industry experts.`
        
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

exports.generateBusinessIdeaPitch = functions.https.onRequest(generateBusinessIdeaPitch);