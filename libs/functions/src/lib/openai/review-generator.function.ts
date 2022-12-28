// import { Configuration, OpenAIApi } from 'openai';
// import { Request, Response } from '@andika/config';
// import { app } from '@andika/config';
// import * as functions from 'firebase-functions';



// const configuration = new Configuration({
//     apiKey: "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",
// });

// const openAI = new OpenAIApi(configuration);

// const grammerCorrection = async (req: any, res: Response) => {
//     const { text } = req.body;

//     console.log(text);
//     try {
//       const { businessName, reviewTitle, text, tone, numVariants, creativity, language } = req.body;
  
//       const reviews = [];
//       for (let i = 0; i < numVariants; i++) {
//         const review = await openAI.createCompletion({
//           model: 'text-davinci-002',
//           prompt: `${businessName} ${reviewTitle} ${text}`,
//           max_tokens: 2048,
//           top_p: 1,
//           frequency_penalty: 0,
//           presence_penalty: 0,
//           // tone: tone,
//           stop: '\n',
//           n: 1,
//           // max_tries: 1,
//           best_of: 1,
//           stream: false,
//           temperature: [0.5, 0.9, 0.2][i % 3],
//         });
//         reviews.push(text);
//         // const completion = await openAI.createCompletion({
//         //     model: "text-davinci-003",
//         //     prompt: `Correct this to standard English:\n\n${text}`,
//         //     temperature: 0,
//         //     max_tokens: 60,
//         //     top_p: 1.0,
//         //     frequency_penalty: 0.0,
//         //     presence_penalty: 0.0,
//         // });
//         // res.status(200).send({
//         //     status: 'success',
//         //     message: 'results from chat gpt',
//         //     data: completion.data.choices[0].text
//         // })
//       }
//     } catch (error: any) {
//         res.status(500).json(error.message)
//     }
// };

// exports.grammerCorrection  = functions.https.onRequest(grammerCorrection);