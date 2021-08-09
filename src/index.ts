import express, { Application, Request, Response } from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import connectToDB from './database';
import apiV1 from './route/route';

dotenv.config();

const PORT = 5000;
const app: Application = express();
app.use(
  cors({
    origin: ['http://localhost:5000','http://127.0.0.1:5500'],
  })
);
app.use(urlencoded({ extended: false }));
app.use(json());

apiV1(app);

app.use((req: Request, res: Response) => {
  res.status(404).send('NOT FOUND');
});

connectToDB().then((connected: boolean) => {
  if (connected) {
    app.listen(PORT, () => {
      console.log('running on ' + PORT);
    });
  } else {
    console.log('Error mongo db');
  }
});