
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const keyCert : Buffer = fs.readFileSync(path.join(__dirname, '../../secret/key.pem'));

import {AuthController} from './AuthController';
import {AuthService} from './AuthService';

const auth =  AuthController(new AuthService(jwt.sign,keyCert));

export default auth