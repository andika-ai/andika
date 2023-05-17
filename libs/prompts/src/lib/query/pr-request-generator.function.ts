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


const generatePullRequestTemplate = (req: any, res: Response) => {
    cors(req,res, async() => {
        const { description, relatedIssue, typeOfChange, testsRun, firmwareVersion, hardware, toolchain,sdk, language } = req.body;
        if(!req.body) {
            res.status(400).json({status: 'error', message: 'text is missing in request'});
            return;
        }

        const prompt = 
        `
        Generate a pull request template given the following format\n
        
        Please include a summary of the changes and the related issue in ${language} langugae. Please also include relevant motivation and context. List any dependencies that are required for this change.

        # Description 
        ${description}

        Fixes #${relatedIssue}

        ## Type of change

        Please delete options that are not relevant.

        - [ ] Bug fix (non-breaking change which fixes an issue)
        - [ ] New feature (non-breaking change which adds functionality)
        - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
        - [ ] This change requires a documentation update

        # How Has This Been Tested?

        Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration.

        - [ ] ${testsRun}

        **Test Configuration**:
        * Firmware version: ${firmwareVersion}
        * Hardware: ${hardware}
        * Toolchain: ${toolchain}
        * SDK: ${sdk}

        # Checklist:

        - [ ] My code follows the style guidelines of this project
        - [ ] I have performed a self-review of my code
        - [ ] I have commented my code, particularly in hard-to-understand areas
        - [ ] I have made corresponding changes to the documentation
        - [ ] My changes generate no new warnings
        - [ ] I have added tests that prove my fix is effective or that my feature works
        - [ ] New and existing unit tests pass locally with my changes
        - [ ] Any dependent changes have been merged and published in downstream modules`;
        
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

exports.generatorPullRequestTemplate = functions.https.onRequest(generatePullRequestTemplate);