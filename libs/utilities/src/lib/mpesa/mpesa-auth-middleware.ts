// import http from 'http';

// let consumer_key: string, consumer_secret: string, url: string, auth: string;
// export function getDarajaAccessToken(req: any, res: any, next: any) {
//     consumer_key = process.env['YOUR_APP_CONSUMER_KEY'] as string,
//     consumer_secret = process.env['YOUR_APP_CONSUMER_SECRET'] as string,
//     url = process.env['DARAJA_ACCESS_TOKEN_URL'] as string,
//     auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret, 'utf-8').toString("base64");

//     http.get(
//         url,
//         {
//             headers: {
//                 "Authorization": auth
//             }
//         },
//         function (response) {
//             let body = '';

//             response.on('data', function (chunk) {
//                 body += chunk;
//             });

//             response.on('end', function () {
//                 // TODO: Use the body object to extract OAuth access token
//                 req.access_token = JSON.parse(body).access_token
//                 next();
//             });
//         }
//     ).on('error', function (error) {
//         console.log(error);
//     });
// }
