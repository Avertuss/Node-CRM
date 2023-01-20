import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import AuthController, {VerifyRouter} from './authorization';

dotenv.config();
const app: Express = express();



const port = process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(AuthController);
app.all('/',VerifyRouter);

app.get('/client', (req : Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})