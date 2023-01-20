
import jwt from 'jsonwebtoken';
import fs from 'fs';

var cert : Buffer = fs.readFileSync('C:\\Work\\core\\secret\\key.pem');

import {AuthController} from './AuthController';
import {AuthService} from './AuthService';

import VerifyRouter from './VerifyRouter';

/*
module.exports.controller = controller;
module.exports.service = service;
module.exports = controller(new service(jwt,cert));
*/
export {VerifyRouter}
export default AuthController(new AuthService(jwt.sign,cert));