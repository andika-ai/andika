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
        const { businessIdea, citationStyle,tone, usecase, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Generate a call to action in the language of ${language},
                        with a tone that is ${tone},
                        for the use case of ${usecase},
                        in ${variants} variants, with a creativity level of ${creativityLevel}.
                        The call to action should be written in a clear and compelling manner,${citationStyle} 
                        using persuasive language and persuasive techniques to encourage the reader to take action${businessIdea}.`
        
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

exports.generateCallToAction = functions.https.onRequest(generateCallToAction);