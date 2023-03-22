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


const generateYTubeVideoDescription  = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { videoTitle, tone, variants, creativityLevel, language  } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }
    
        const prompt=
        `Please generate a YouTube video description based on the following description <em>${videoTitle}</em>, in the language of <em>${language}</em>, with a tone that is <em>${tone}</em>.
        The video description should be written in <em>${variants}</em> variants, with a creativity level of <em>${creativityLevel}</em>.
        Make sure to include a brief summary of the video content, highlighting the key points and main takeaways.
        Also, include relevant keywords and hashtags to optimize the video for search engines.
        Use persuasive language to encourage viewers to watch the video and to subscribe to your channel.
        Lastly, include a call-to-action, such as asking viewers to leave a comment or to check out a related video or website.
        
        Please return your response in HTML code with the text font size should be 15 megapixels. You can use the following CSS style for the text:
        
        <p style="font-size: 15px;">Your generated YouTube video description</p>
        
        If the number of variants is greater than one, please add bullet points on each variant to make it easy to read. You can use the following HTML code to add bullet points:
        
        <ul>
            <li>Your first variant description</li>
            <li>Your second variant description</li>
            <li>Your third variant description</li>
            <!-- Add more bullet points for additional variants as needed -->
        </ul>
        
        Thank you!`
        try {
            const completion = await openAI.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
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

exports.generateYTubeVideoDescription  = functions.https.onRequest(generateYTubeVideoDescription);