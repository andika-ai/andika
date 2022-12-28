import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';



const app = express();

app.use(cors({ origin: true }));

export {app, Request, Response}