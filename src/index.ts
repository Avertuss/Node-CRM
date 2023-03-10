import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Authorization from './authorization';
import VerifyRoute from './verifyrouter';
import {roleController} from './unit';

import {Controller} from './custom';

dotenv.config();
const app: Express = express();



const port = process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(Authorization);
app.use(VerifyRoute);



app.use(roleController);

app.use(Controller);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})