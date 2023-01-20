import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Authorization from './authorization';

dotenv.config();
const app: Express = express();



const port = process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(Authorization);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})