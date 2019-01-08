import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import rootRouter from './rootRouter';

export const app = express();

app.use(bodyParser.json());
app.use(cors());
app.disable('etag');

app.use(rootRouter);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use((req, res, next) => {
  res.status(404);
  res.json({ error: '404: Stránka nenalezena :(' });
});
