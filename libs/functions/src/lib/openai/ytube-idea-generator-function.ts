// import express from 'express';
// import openai from 'openai';

// const app = express();

// app.post('/generate-ideas', async (req, res) => {
//   try {
//     const { text, tone, numVariants, creativity, language } = req.body;
//     openai.apiKey = process.env.OPENAI_API_KEY;

//     const ideas = [];
//     for (let i = 0; i < numVariants; i++) {
//       const idea = await openai.completion.create({
//         model: 'text-davinci-002',
//         prompt: text,
//         temperature: creativity,
//         max_tokens: 2048,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         tone: tone,
//         stop: '\n',
//         n: 1,
//         max_tries: 1,
//         presence_penalty: 0,
//         frequency_penalty: 0,
//         best_of: 1,
//         stream: false,
//         stop: '\n',
//         temperature: [0.5, 0.9, 0.2][i % 3],
//         top_p: 1,
//         frequency_cap: 0,
//         presence_bias: 0,
//         best_of: 1,
//         max_tokens: 2048,
//         n: 1,
//         stream: false
//       });
//       ideas.push(idea.text);
//     }

//     res.send({ ideas });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });