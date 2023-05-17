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
const generateCitation = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { title, author, edition, publisher, publicationDate, citationStyle  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt = `Please generate a citation for the following source and format the output as an HTML string with proper styling based on the ${citationStyle} citation style:
                        Title: ${title}
                        Author: ${author}
                        Edition: ${edition}
                        Publisher: ${publisher}
                        Publication Date: ${publicationDate}
                        Citation Style: ${citationStyle}`
        
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

exports.generateCitation = functions.https.onRequest(generateCitation);