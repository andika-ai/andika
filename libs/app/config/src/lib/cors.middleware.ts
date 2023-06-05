import * as functions from 'firebase-functions';

export const corsMiddleWare = (handler: functions.HttpsFunction) => {
    return (req: functions.Request, res: functions.Response) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST');
        if (req.method === 'OPTIONS') {
            res.set('Access-Control-Allow-Headers', '*');
            res.status(200).send('');
        } else {
            handler(req, res);
        }
    };
};