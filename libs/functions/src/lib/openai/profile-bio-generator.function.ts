
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


const generateProfileBio = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { about, tone, usecase, variants, creativityLevel, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt =
        `
        Generate a professional bio for a person named [Name]\n,
        who is [Age] years old, works as a [Occupation], \n
        holds a [Degree] from [University], and has [X] years of experience in the field.\n
        Include information about their achievements, interests, and a quote or personal motto.\n
        Additionally, mention a specific accomplishment or \n
        project they have worked on that they are proud of and a fun fact about themselves.\n
        generate a profile bio from the following text:\n\n
        Hi, my name is [YOUR NAME] and I am a [YOUR OCCUPATION].
        ${about}

        I am writing this bio in a ${tone} tone, suitable for a ${usecase}.
        I would like to write about [TOPIC FOR "ABOUT ME" SECTION] and share my experiences and perspectives.
        I would like to generate ${variants} variations with a ${creativityLevel} level of creativity in ${language}.`
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

exports.generateProfileBio = functions.https.onRequest(generateProfileBio);






