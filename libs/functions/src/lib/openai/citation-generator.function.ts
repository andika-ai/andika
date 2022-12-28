// import axios from 'axios';

// const app = express();
// const easybibKey = 'YOUR_API_KEY';

// app.post('/generate-citation', async (req: Request, res: Response) => {
//   const { title, author, publisher, publicationDate, url } = req.body;
  
//   try {
//     const response = await axios.post(
//       'https://api.easybib.com/citation/mla/website',
//       {
//         title,
//         author,
//         publisher,
//         publicationDate,
//         url
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Token ${easybibKey}`
//         }
//       }
//     );
//     const citation = response.data.citation;
//     res.send({ citation });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Error generating citation' });
//   }
// });

// app.listen(3000, () => console.log('API listening on port 3000'));