/**
 * @jest-environment node
 */
// import { gcpFunctionTests } from './gcp-function-tests';
import { app } from '@andika/config';
import { Configuration, OpenAIApi } from 'openai';

import * as request from 'supertest'
import assert from "assert";


const configuration = new Configuration({
    apiKey: "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",
});

const openAI = new OpenAIApi(configuration);

describe('generateYTubeVideoDescription', () => {
  test('should return a valid video description', async () => {
    const req = {
      body: {
        videoDescription: 'Sample video description',
        tone: 'neutral',
        usecase: 'entertain',
        variants: 1,
        creativityLevel: 'high',
        language: 'english',
      }
    };

    // get the function using the name it was registered with
    const helloHttp = getFunction('generateYTubeVideoDescription');

    // a Request stub with a simple JSON payload

    // a Response stub that captures the sent response
    let result;
    const res = {
      send: (x: any) => {
        result = x;
      },
    };

    // invoke the function
    helloHttp(req, res);

    // assert the response matches the expected value
    assert.equal(result, "Hello, World!");

      // const response = await request(app)
      // .post('/generateYTubeVideoDescription')
      // .send(mockRequest.body);

    // expect(response.status).toBe(200);
    // expect(response.body.status).toBe('success');
    // expect(response.body.data).toBeDefined();
  });
});
