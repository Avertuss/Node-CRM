import express, { Express } from 'express';
import dotenv from 'dotenv';
import Authorization from './authorization';
import VerifyRoute from './verifyrouter';
import {roleController} from './unit/role';


dotenv.config();
const app: Express = express();



const port = process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(Authorization);
app.use(VerifyRoute);



app.use(roleController);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})