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
const generateCallToAction = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { businessIdea, author, edition, publisher, publicationDate, citationStyle,tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a call to action in the language of [insert language],
                        with a tone that is [insert tone (e.g. persuasive, urgent, friendly)],
                        for the use case of [insert use case (e.g. promoting a product, encouraging sign-ups)],
                        in [insert number] variants, with a creativity level of [insert level (e.g. high, medium, low)].
                        The call to action should be written in a clear and compelling manner, 
                        using persuasive language and persuasive techniques to encourage the reader to take action.`
        
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

exports.generateCallToAction = functions.https.onRequest(generateCallToAction);