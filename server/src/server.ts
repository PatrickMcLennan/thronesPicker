import { default as express } from 'express';
import compression from 'compression';
import { json } from 'body-parser';
import { connect } from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { mongoConfig } from './utils';
import { postLogin, postMakePicks } from './controllers';
dotenv.config();

const PORT: string | number = process.env.PORT || 4000;
const app: express.Application = express();

app.use(compression());
app.use(cors());
app.use(json());

app.post('/login', postLogin);
app.post('/makePicks', postMakePicks);

app.listen(
  PORT,
  (): void => {
    connect(
      process.env.MONGO,
      mongoConfig
    )
      .then((): void => console.log(`Mongo is connected`))
      .catch((err: string) => console.error(`Mongo is NOT running - ${err}`));

    console.log(`The server is running on Port ${PORT}`);
  }
);
