import { Configuration, OpenAIApi } from 'openai';
import * as express from 'express';
import * as functions from 'firebase-functions';

const app = express();

const configuration = new Configuration({
  apiKey: process.env['OPENAI_API_KEY'],
});

const openAI = new OpenAIApi(configuration);

export default openAI;