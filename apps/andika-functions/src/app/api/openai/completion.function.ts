import { Configuration, OpenAIApi } from 'openai';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import * as cors from 'cors';

const app = express();

const configuration = new Configuration({
  apiKey: process.env['OPENAI_API_KEY'],
});

const openAI = new OpenAIApi(configuration);


// exports and the name of the function the http function will be initialized
const corsHandler = cors({ origin: true });

export const completion = functions.https.onRequest(async (req: Request, res: Response) => {
  corsHandler(req, res, async () => {
    const text = req.body.text;

    if (!text) {
      res.status(400).send('Missing text field in request body');
      return;
    }

    try {
      const openAIresponse = await openAI.createCompletion({
        model: 'text-davinci-002',
        prompt: text,
      });
      res.send(openAIresponse.data.choices[0].text);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error completing text');
    }
  });
});
/**
 * functions.https.onRequest('completion', {body: {text: 'This is a test'}}, {send: console.log})
 */